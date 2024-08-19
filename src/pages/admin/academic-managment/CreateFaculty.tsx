import { z } from "zod";
import PHForm from "../../../componets/form/PHForm";
import PHInput from "../../../componets/form/PHInput";
import { Button, Col, Flex } from "antd";
import { zodResolver } from "@hookform/resolvers/zod";

const CreateFaculty = () => {
  const handleSubmit = (data) => {
    console.log(data);
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
