import { z } from "zod";
import PHForm from "../../../componets/form/PHForm";
import PHInput from "../../../componets/form/PHInput";
import { Button, Col, Flex } from "antd";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAddAcademicFacultyMutation } from "../../../redux/features/admin/academicMangement.api";
import { toast } from "sonner";

const CreateFaculty = () => {
  const [AddAcademicFaculty] = useAddAcademicFacultyMutation();
  const handleSubmit = async (data) => {
    const toastId = toast.loading("Createing Faculty.....");
    const res = await AddAcademicFaculty(data)
    // console.log(res);
    if(res.error){
        toast.error(res.error.data.message,{id: toastId})
        console.log(res.error);
    }
    if(res.data){
        toast.success(res.data.message,{id: toastId})
        console.log(res.data);
    }
  };
  const FacultySchema = z.object({
    name: z.string({ required_error: "Please give Faculty Name" }),
  });
  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <PHForm onSubmit={handleSubmit} resolver={zodResolver(FacultySchema)}>
          <PHInput name="name" type="text" label="Faculty Name" />
          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Flex>
  );
};

export default CreateFaculty;
