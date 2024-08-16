import { Button } from "antd";
import PHForm from "../../../componets/form/PHForm";
import PHInput from "../../../componets/form/PHInput";

const CreateAcademicSemester = () => {
    const onSubmit = (data)=>{
        console.log(data);
    }
    return (
        <PHForm onSubmit={onSubmit}>
           <PHInput type="text" name="name"/>
           <Button htmlType="submit">Submit</Button>
        </PHForm>
    );
};

export default CreateAcademicSemester;