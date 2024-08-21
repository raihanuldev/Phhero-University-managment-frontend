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

// const studentDammyData = {
//   password: "student123",
//   student: {
//     name: {
//       firstName: "I am ",
//       middleName: "Student",
//       lastName: "Number 1",
//     },
//     gender: "male",
//     dateOfBirth: "1990-01-01",
//     bloogGroup: "A+",

//     email: "student2@gmail.com",
//     contactNo: "1235678",
//     emergencyContactNo: "987-654-3210",

//     presentAddress: "123 Main St, Cityville",
//     permanentAddress: "456 Oak St, Townsville",
//     // gurdian info
//     guardian: {
//       fatherName: "James Doe",
//       fatherOccupation: "Engineer",
//       fatherContactNo: "111-222-3333",
//       motherName: "Mary Doe",
//       motherOccupation: "Teacher",
//       motherContactNo: "444-555-6666",
//     },
//     // local info
//     localGuardian: {
//       name: "Alice Johnson",
//       occupation: "Doctor",
//       contactNo: "777-888-9999",
//       address: "789 Pine St, Villageton",
//     },
//     // academic
//     admissionSemester: "65b0104110b74fcbd7a25d92",
//     academicDepartment: "65b00fb010b74fcbd7a25d8e",
//   },
// };

const CreateStudent = () => {
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
              <PHInput
                type="text"
                name="student.dateOfBirth"
                label="Date Of Brith"
              />
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
              <PHInput
                type="text"
                name="student.admissionSemester"
                label="Admission Semester"
              />
            </Col>
            <Col span={24} md={12} lg={8}>
              <PHInput
                type="text"
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
