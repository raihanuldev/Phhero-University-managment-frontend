import { baseApi } from "../../api/baseApi";

const usersManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
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
    // Get all Students
    GetStudents: builder.query({
      query: () => {
        return {
          url: "/academic-departments",
          method: "GET",
        };
      },
    }),
  }),
});
export const {useAddStudentMutation,useGetStudentsQuery} = usersManagementApi;