import PHForm from "../../../componets/form/PHForm";
import PHInput from "../../../componets/form/PHInput";
import { Button, Col, Row } from "antd";
import PHSelect from "../../../componets/form/PHSelect";

const CreateADepartment = () => {
  const handleSubmit = async (data) => {
    console.log(data);
  };
  return (
    <Row justify="center">
      <Col span={8}>
        <PHForm onSubmit={handleSubmit}>
          <PHInput name="name" type="text" label="Name Of Department" />
          <PHSelect label="Select Academic Faculties" name="academicFaculty" options={[{value:"adhkadha",label:"Test"}]}/>
          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Row>
  );
};

export default CreateADepartment;
