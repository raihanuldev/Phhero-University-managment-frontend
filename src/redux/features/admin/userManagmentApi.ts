import { TQueryParam, TResponseRedux } from "../../../types/globalType";
import { TStudent } from "../../../types/userManagment.type";
import { baseApi } from "../../api/baseApi";

const usersManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({

    // Get Students
    getAllStudents: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }
        return {
          url: "students",
          method: "GET",
          params: params,
        };
      },
      transformResponse: (response: TResponseRedux<TStudent[]>) => {
        console.log("inside redux: ", response);
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),

    // Students
    addStudent: builder.mutation({
      query: (data) => {
        console.log("Inside Redux-api", data);
        return {
          url: "users/create-student",
          method: "POST",
          body: data,
        };
      },
    }),
    
  }),
});
export const {useAddStudentMutation,useGetAllStudentsQuery} = usersManagementApi;