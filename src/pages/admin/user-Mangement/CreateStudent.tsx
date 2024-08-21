import { Button, Col, Divider, Row } from "antd";
import PHForm from "../../../componets/form/PHForm";
import PHInput from "../../../componets/form/PHInput";
import { FieldValues, SubmitHandler } from "react-hook-form";

const studentDammyData = {
  password: "student123",
  student: {
    name: {
      firstName: "I am ",
      middleName: "Student",
      lastName: "Number 1",
    },
    gender: "male",
    dateOfBirth: "1990-01-01",
    bloogGroup: "A+",

    email: "student2@gmail.com",
    contactNo: "1235678",
    emergencyContactNo: "987-654-3210",

    presentAddress: "123 Main St, Cityville",
    permanentAddress: "456 Oak St, Townsville",
    // gurdian info
    guardian: {
      fatherName: "James Doe",
      fatherOccupation: "Engineer",
      fatherContactNo: "111-222-3333",
      motherName: "Mary Doe",
      motherOccupation: "Teacher",
      motherContactNo: "444-555-6666",
    },
    // local info
    localGuardian: {
      name: "Alice Johnson",
      occupation: "Doctor",
      contactNo: "777-888-9999",
      address: "789 Pine St, Villageton",
    },
    // academic
    admissionSemester: "65b0104110b74fcbd7a25d92",
    academicDepartment: "65b00fb010b74fcbd7a25d8e",
  },
};

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
              <PHInput type="text" name="name.fristName" label="Frist Name" />
            </Col>
            <Col span={24} md={12} lg={8}>
              <PHInput type="text" name="name.middleName" label="Middle Name" />
            </Col>
            <Col span={24} md={12} lg={8}>
              <PHInput type="text" name="name.lastName" label="Last Name" />
            </Col>
            <Col span={24} md={12} lg={8}>
              <PHInput type="text" name="gender" label="gender" />
            </Col>
            <Col span={24} md={12} lg={8}>
              <PHInput type="text" name="dateOfBirth" label="Date Of Brith" />
            </Col>
            <Col span={24} md={12} lg={8}>
              <PHInput type="text" name="bloogGroup" label="Blood Gruop" />
            </Col>
            {/* Contat info */}
            <Divider>Contact Info</Divider>
            <Col span={24} md={12} lg={8}>
              <PHInput type="text" name="student.email" label="Email" />
            </Col>
            <Col span={24} md={12} lg={8}>
              <PHInput type="text" name="student.contactNo" label="Contact No" />
            </Col>
            <Col span={24} md={12} lg={8}>
              <PHInput type="text" name="student.emergencyContactNo" label="Emergency ContactNo" />
            </Col>
            <Col span={24} md={12} lg={8}>
              <PHInput type="text" name="student.presentAddress" label="Present Address ContactNo" />
            </Col>
            <Col span={24} md={12} lg={8}>
              <PHInput type="text" name="student.permanentAddress" label="Permanent Address" />
            </Col>
          </Row>
          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Row>
  );
};

export default CreateStudent;
