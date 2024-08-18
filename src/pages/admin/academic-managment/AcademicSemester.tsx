import { useAcademicSemesterQuery } from "../../../redux/features/admin/academicMangement.api";

const AcademicSemester = () => {

    const {data} = useAcademicSemesterQuery(undefined)
    console.log(data);
    return (
        <div>
            this is academic semster 
        </div>
    );
};

export default AcademicSemester;