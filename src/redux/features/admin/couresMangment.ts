import { TQueryParam } from "./../../../types/globalType";
import { TSemester } from "../../../types/aacademicMangment.type";
import { TResponseRedux } from "../../../types/globalType";
import { baseApi } from "../../api/baseApi";

const academicMangmentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    SemesterRegisted: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }
        return {
          url: "semester-registrations",
          method: "GET",
          params: params,
        };
      },
      transformResponse: (response: TResponseRedux<TSemester[]>) => {
        console.log("inside redux: ", response);
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
    addSemesterRegister: builder.mutation({
      query: (data) => ({
        url: "semester-registrations/create-semester-registration",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {useSemesterRegistedQuery,useAddSemesterRegisterMutation} = academicMangmentApi;
