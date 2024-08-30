import { useParams } from "react-router-dom";

const StudentDetails = () => {
    const {studentId} = useParams()
    return (
        <div>
            this is student Details of {studentId}
        </div>
    );
};

export default StudentDetails;