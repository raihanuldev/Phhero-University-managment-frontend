import { Button, Col, Flex } from "antd";
import PHForm from "../../../componets/form/PHForm";
import PHSelect from "../../../componets/form/PHSelect";

const nameOptions = [
  { value: "01", label: "Autumn" },
  { value: "02", label: "Summer" },
  { value: "03", label: "Fall" }
];

const CreateAcademicSemester = () => {
  const onSubmit = (data) => {
    const name = nameOptions[Number(data.name-1)].label
    const semesterData = {
        name,code:data.name
    }
    console.log(semesterData);
  };
  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <PHForm onSubmit={onSubmit}>
          <PHSelect label="name" name="name" options={nameOptions} />
          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Flex>
  );
};

export default CreateAcademicSemester;
