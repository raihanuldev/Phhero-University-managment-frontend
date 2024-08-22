import PHForm from "../../../componets/form/PHForm";
import PHInput from "../../../componets/form/PHInput";
import { Button, Col, Row } from "antd";
import PHSelect from "../../../componets/form/PHSelect";
import { useAcademicFacultysQuery } from "../../../redux/features/admin/academicMangement.api";
import { FieldValues, SubmitHandler } from "react-hook-form";

const CreateADepartment = () => {
    const {data:faculties} = useAcademicFacultysQuery(undefined)

    const facultiesData = faculties?.data?.map((item: { _id: string; name: string; }) => ({
        value: item._id,
        label: `${item.name}`,
      }));

  const handleSubmit:SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
  };
  return (
    <Row justify="center">
      <Col span={8}>
        <PHForm onSubmit={handleSubmit}>
          <PHInput name="name" type="text" label="Name Of Department" />
          <PHSelect label="Select Academic Faculties" name="academicFaculty" options={facultiesData}/>
          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Row>
  );
};

export default CreateADepartment;
