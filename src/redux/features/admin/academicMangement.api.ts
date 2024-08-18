import { TSemester } from "../../../types/aacademicMangment.type";
import { TResponseRedux } from "../../../types/globalType";
import { baseApi } from "../../api/baseApi";

const academicMangmentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    academicSemester: builder.query({
      query: () => ({
        url: "academic-semesters",
        method: "GET",
      }),
      transformResponse: (response: TResponseRedux<TSemester[]>) => {
        console.log("inside redux: ", response);
        return {
          data: response.data,
          meta: response.meta,
        };
      },
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
export const { useAcademicSemesterQuery, useAddAcademicSemesterMutation } =
  academicMangmentApi;
