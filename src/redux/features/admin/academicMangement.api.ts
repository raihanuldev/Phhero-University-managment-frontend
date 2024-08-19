import { TSemester } from "../../../types/aacademicMangment.type";
import { TResponseRedux } from "../../../types/globalType";
import { baseApi } from "../../api/baseApi";

const academicMangmentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    academicSemester: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        params.append(args[0].name,args[0].value)
        
        return {
          url: "academic-semesters",
          method: "GET",
          params: params
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
