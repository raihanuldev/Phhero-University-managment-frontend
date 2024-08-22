import { TQueryParam } from "./../../../types/globalType";
import { TSemester } from "../../../types/aacademicMangment.type";
import { TResponseRedux } from "../../../types/globalType";
import { baseApi } from "../../api/baseApi";

const academicMangmentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // TODO: I need to Refector this code from differnt file under academic-Mangment folder.
    // academic-Semester Managment
    academicSemester: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }
        return {
          url: "academic-semesters",
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
    addAcademicSemester: builder.mutation({
      query: (data) => ({
        url: "academic-semesters/create-academic-semester",
        method: "POST",
        body: data,
      }),
    }),
    //Academic Faculty-Mangemnet
    addAcademicFaculty: builder.mutation({
      query: (data) => {
        console.log("Inside Redux-api",data);
        return {
          url: "/academic-faculties/create-academic-faculty",
          method: "POST",
          body: data,
        };
      },
    }),
    academicFacultys: builder.query({
      query: () => {
        return {
          url: "academic-faculties",
          method: "GET",
        };
      },
    }),

  }),
});
export const { useAcademicSemesterQuery, useAddAcademicSemesterMutation, useAddAcademicFacultyMutation,useAcademicFacultysQuery } =
  academicMangmentApi;
