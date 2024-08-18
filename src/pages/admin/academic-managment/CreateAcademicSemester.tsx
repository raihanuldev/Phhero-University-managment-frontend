import { Button, Col, Flex } from "antd";
import PHForm from "../../../componets/form/PHForm";
import PHInput from "../../../componets/form/PHInput";

const CreateAcademicSemester = () => {
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <PHForm onSubmit={onSubmit}>
          <PHInput type="text" name="name" label="name" />
          <PHInput type="text" name="name" label="year" />
          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Flex>
  );
};

export default CreateAcademicSemester;
