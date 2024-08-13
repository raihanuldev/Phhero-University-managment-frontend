import { baseApi } from "../../../api/baseApi";

const academicSemester = baseApi.injectEndpoints({
    endpoints : (builder)=>({
        academicSemester: (builder.query({
            query: () => ({
                url: 'academic-semesters',
                method: "GET"
            }),
        })),
    }),
})
export const {useAcademicSemesterQuery} = academicSemester;