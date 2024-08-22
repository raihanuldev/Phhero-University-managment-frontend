import { Button, Col, Divider, Row } from "antd";
import PHForm from "../../../componets/form/PHForm";
import PHInput from "../../../componets/form/PHInput";
import { FieldValues, SubmitHandler } from "react-hook-form";
import PHSelect from "../../../componets/form/PHSelect";
import {
  bloodGroupOptions,
  genderOptions,
  OccupationOptions,
} from "../../../utilities/FormInfo";
import PHDatePicker from "../../../componets/form/PHDatePicker";
import { useAcademicSemesterQuery } from "../../../redux/features/admin/academicMangement.api";


const CreateStudent = () => {
  const { data: sData } = useAcademicSemesterQuery(undefined);
  const semesterData = sData?.data?.map((item) => ({
    value: item._id,
    label: `${item.name} ${item.year}`,
  }));
  const handleSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };
  return (
    <Row>
      <Col span={24}>
        <PHForm onSubmit={handleSubmit}>
          <Row gutter={4}>
            <Divider>Personal Info</Divider>
            <Col span={24} md={12} lg={8}>
              <PHInput
                type="text"
                name="student.name.fristName"
                label="Frist Name"
              />
            </Col>
            <Col span={24} md={12} lg={8}>
              <PHInput
                type="text"
                name="student.name.middleName"
                label="Middle Name"
              />
            </Col>
            <Col span={24} md={12} lg={8}>
              <PHInput
                type="text"
                name="student.name.lastName"
                label="Last Name"
              />
            </Col>
            <Col span={24} md={12} lg={8}>
              {/* <PHInput type="text" name="student.gender" label="gender" /> */}
              <PHSelect
                label="Gender"
                name="student.gender"
                options={genderOptions}
              />
            </Col>
            <Col span={24} md={12} lg={8}>
              <PHDatePicker name="student.dateOfBirth" label="Date Of Brith" />
            </Col>
            <Col span={24} md={12} lg={8}>
              {/* <PHInput type="text" name="bloogGroup" label="Blood Gruop" /> */}
              <PHSelect
                label="Blood Gruop"
                name="student.bloogGroup"
                options={bloodGroupOptions}
              />
            </Col>
            {/* Contat info */}
            <Divider>Contact Info</Divider>
            <Col span={24} md={12} lg={8}>
              <PHInput type="text" name="student.email" label="Email" />
            </Col>
            <Col span={24} md={12} lg={8}>
              <PHInput
                type="text"
                name="student.contactNo"
                label="Contact No"
              />
            </Col>
            <Col span={24} md={12} lg={8}>
              <PHInput
                type="text"
                name="student.emergencyContactNo"
                label="Emergency ContactNo"
              />
            </Col>
            <Col span={24} md={12} lg={8}>
              <PHInput
                type="text"
                name="student.presentAddress"
                label="Present Address ContactNo"
              />
            </Col>
            <Col span={24} md={12} lg={8}>
              <PHInput
                type="text"
                name="student.permanentAddress"
                label="Permanent Address"
              />
            </Col>
            {/* Gurdian info */}
            <Divider>Gurdian Info</Divider>
            <Col span={24} md={12} lg={8}>
              <PHInput
                type="text"
                name="student.guardian.fatherName"
                label="Father Name"
              />
            </Col>
            <Col span={24} md={12} lg={8}>
              {/* <PHInput
                type="text"
                name="student.guardain.fatherOccupation"
                label="Father Occupation"
              /> */}
              <PHSelect
                label="Father Occupation"
                name="student.guardain.fatherOccupation"
                options={OccupationOptions}
              />
            </Col>
            <Col span={24} md={12} lg={8}>
              <PHInput
                type="text"
                name="student.guardain.fatherContactNo"
                label="Fatcher ContactNo"
              />
            </Col>
            <Col span={24} md={12} lg={8}>
              <PHInput
                type="text"
                name="student.guardain.motherName"
                label="Mother Name"
              />
            </Col>
            <Col span={24} md={12} lg={8}>
              {/* <PHInput
                type="text"
                name="student.guardain.motherOccupation"
                label="Mother Occupation"
              /> */}
              <PHSelect
                label="Father Occupation"
                name="student.guardain.motherOccupation"
                options={OccupationOptions}
              />
            </Col>
            <Col span={24} md={12} lg={8}>
              <PHInput
                type="text"
                name="student.guardain.motherContactNo"
                label="motherContactNo"
              />
            </Col>

            {/* Local Gurdian info */}
            <Divider>Local Gurdian Info</Divider>
            <Col span={24} md={12} lg={8}>
              <PHInput
                type="text"
                name="student.localGuardian.name"
                label="Name"
              />
            </Col>
            <Col span={24} md={12} lg={8}>
              {/* <PHInput
                type="text"
                name="student.localGuardian.occupation"
                label="Occupation"
              /> */}
              <PHSelect
                label="Occupation"
                name="student.localGuardian.occupation"
                options={OccupationOptions}
              />
            </Col>
            <Col span={24} md={12} lg={8}>
              <PHInput
                type="text"
                name="student.localGuardian.contactNo"
                label="ContactNo"
              />
            </Col>
            <Col span={24} md={12} lg={8}>
              <PHInput
                type="text"
                name="student.localGuardian.address"
                label="Address"
              />
            </Col>
            {/* Academic Info */}
            <Divider>Academic Info</Divider>
            <Col span={24} md={12} lg={8}>
              <PHSelect
                options={semesterData}
                name="student.admissionSemester"
                label="Admission Semester"
              />
            </Col>
            <Col span={24} md={12} lg={8}>
              <PHSelect
                options={semesterData}
                name="student.academicDepartment"
                label="Academic Department "
              />
            </Col>
          </Row>
          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Row>
  );
};

export default CreateStudent;
