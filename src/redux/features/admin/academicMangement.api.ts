import { baseApi } from "../../api/baseApi";

const academicMangmentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    academicSemester: builder.query({
      query: () => ({
        url: "academic-semesters",
        method: "GET",
      }),
    }),
    addAcademicSemester: builder.mutation({
      query: (data) => ({
        url: "academic-semesters/create-academic-semester",
        method: "POST",
        body: data,
      }),
    }),
  }),
});
export const { useAcademicSemesterQuery ,useAddAcademicSemesterMutation} = academicMangmentApi;
