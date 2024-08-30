import { Button, Col, Divider, Form, Input, Row } from "antd";
import PHForm from "../../../componets/form/PHForm";
import PHInput from "../../../componets/form/PHInput";
import { Controller, FieldValues, SubmitHandler } from "react-hook-form";
import PHSelect from "../../../componets/form/PHSelect";
import {
  bloodGroupOptions,
  genderOptions,
  OccupationOptions,
} from "../../../utilities/FormInfo";
import PHDatePicker from "../../../componets/form/PHDatePicker";
import {
  useAcademicDepartmentQuery,
  useAcademicSemesterQuery,
} from "../../../redux/features/admin/academicMangement.api";
import { useAddStudentMutation } from "../../../redux/features/admin/userManagmentApi";
import { toast } from "sonner";

// Maping Object Type
type TItem = {
  _id: string;
  name: string;
  year?: string;
};

const studentDaMMY = {
  password: "student123",
  student: {
    name: {
      firstName: "Raihan",
      middleName: "Student",
    },
    gender: "male",
    contactNo: "1235678",
    emergencyContactNo: "987-654-3210",
    bloogGroup: "A+",
    presentAddress: "123 Main St, Cityville",
    permanentAddress: "456 Oak St, Townsville",
    guardian: {
      fatherName: "James Doe",
      fatherOccupation: "Engineer",
      fatherContactNo: "111-222-3333",
      motherName: "Mary Doe",
      motherOccupation: "Teacher",
      motherContactNo: "444-555-6666",
    },
    localGuardian: {
      name: "Alice Johnson",
      occupation: "Doctor",
      contactNo: "777-888-9999",
      address: "789 Pine St, Villageton",
    },
  },
};

const CreateStudent = () => {
  const { data: sData, isFetching } = useAcademicSemesterQuery(undefined);
  const { data: departmentData } = useAcademicDepartmentQuery(undefined, {
    skip: isFetching,
  });
  const [addStudent, { data, error }] = useAddStudentMutation(undefined);
  console.log(data, error);
  // department Data
  const departmentsNames = departmentData?.data?.map((item: TItem) => ({
    value: item._id,
    label: `${item.name}`,
  }));
  // console.log(departmentData);
  // semester Data
  const semesterData = sData?.data?.map((item: TItem) => ({
    value: item._id,
    label: `${item.name} ${item.year}`,
  }));
  const handleSubmit: SubmitHandler<FieldValues> = async (data) => {
    if (!data.student.admissionSemester || !data.student.academicDepartment) {
      toast.error("Please fill in all required fields.");
      return;
    }

    const formData = new FormData();
    formData.append("data", JSON.stringify(data));
    formData.append("file",data.image)
    console.log(data);
    try {
      const res = await addStudent(formData);

      if (res.error) {
        toast.error(`${res.error.toString}`);
      } else {
        toast.success('Student added successfully!');
      }
    } catch (error) {
      console.error(error);
      toast.error('An error occurred while adding the student.');
    }
  };

  return (
    <Row>
      <Col span={24}>
        <PHForm onSubmit={handleSubmit} defaultValues={studentDaMMY}>
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
            <Col span={24} md={12} lg={8}>
              <Controller name="image" render={({ field: { onChange, value, ...filed } }) => {
                  return <Form.Item label="Picture">
                  <Input
                    type="file"
                    value={value?.fileName}
                    {...filed}
                    onChange={(e) => onChange(e.target.files?.[0])} />
                  ;
                </Form.Item>;
                }}/>
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
                options={departmentsNames}
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
