import { TQueryParam } from "./../../../types/globalType";
import { TResponseRedux } from "../../../types/globalType";
import { baseApi } from "../../api/baseApi";
import { TRegistedSemester } from "../../../types/couresMangment";

const academicMangmentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    AllSemesterRegisted: builder.query({
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
      providesTags:['semester'],
      transformResponse: (response: TResponseRedux<TRegistedSemester[]>) => {
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
    updateSemesterRegister: builder.mutation({
      query: (args) => ({
        url: `/semester-registrations/${args.id}`,
        method: "PATCH",
        body: args.data,
      }),
      invalidatesTags: ['semester']
    }),
  }),
});

export const {useAllSemesterRegistedQuery,useAddSemesterRegisterMutation,useUpdateSemesterRegisterMutation} = academicMangmentApi;
