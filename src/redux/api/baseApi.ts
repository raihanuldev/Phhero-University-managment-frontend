/* eslint-disable @typescript-eslint/no-explicit-any */
import { BaseQueryApi, BaseQueryFn, createApi, DefinitionType, FetchArgs, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { logout, setUser } from "../features/auth/AuthSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:5000/api/v1",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;

    if (token) {
      headers.set("authorization", `${token}`);
    }
  },
});

// Customise query

const baseQueryWithRefreshToken: BaseQueryFn<FetchArgs,BaseQueryApi,DefinitionType> = async (args, api, extraOPtions):Promise<any> => {
  let result = await baseQuery(args, api, extraOPtions);
  // console.log(result);

  // Generate New AccessToken
  if (result.error?.status === 401) {
    // Sending Refrresh TOken
    console.log("sending refresh TOken");
    const res = await fetch("http://localhost:5000/api/v1/auth/refresh-token", {
      method: "POST",
      credentials: "include",
    });
    const data = await res.json();
    if (data?.data?.accessToken) {
      const user = (api.geState() as RootState).auth.user;

      api.dispatch(
        setUser({
          user,
          token: data.data.accessToken,
        })
      );
    }else{
      api.dispatch(logout());
    }
    result = await baseQuery(args, api, extraOPtions);
  }
  return result;
};

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithRefreshToken,
  endpoints: () => ({}),
});
