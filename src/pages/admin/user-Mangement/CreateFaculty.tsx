import { Button, Col, Divider, Form, Input, Row } from "antd";
import PHForm from "../../../componets/form/PHForm";
import PHInput from "../../../componets/form/PHInput";
import PHSelect from "../../../componets/form/PHSelect";
import { bloodGroupOptions, genderOptions } from "../../../utilities/FormInfo";
import PHDatePicker from "../../../componets/form/PHDatePicker";
import { Controller, FieldValues, SubmitHandler } from "react-hook-form";
import {
  useAcademicDepartmentQuery,
  useAddAcademicFacultyMutation,
} from "../../../redux/features/admin/academicMangement.api";
import { TItem } from "../../../types/globalType";
import { toast } from "sonner";
import { useAddFacultyMutation } from "../../../redux/features/admin/userManagmentApi";

const CreateFaculty = () => {
  const [addFaculty] = useAddFacultyMutation();
  const { data: departmentData } = useAcademicDepartmentQuery(undefined);
  const facultyDammyData = {
    password: "faculty123",
    faculty: {
      designation: "Lecturer",
      name: {
        firstName: "Ikbal",
        middleName: "Hydar",
        lastName: "Rahman",
      },
      gender: "male",
      email: "faculty@gmail.com",
      contactNo: "123",
      emergencyContactNo: "123",
      bloogGroup: "A+",
      presentAddress: "123 Main St, Cityville",
      permanentAddress: "456 Oak St, Townsville",
      academicDepartment: "65b00fb010b74fcbd7a25d8e",
    },
  };
  const departmentsNames = departmentData?.data?.map((item: TItem) => ({
    value: item._id,
    label: `${item.name}`,
  }));
  const handleSubmit: SubmitHandler<FieldValues> = async (data) => {
    const formData = new FormData();
    formData.append("data", JSON.stringify(data));
    formData.append("file", data.image);
    console.log(data);
    try {
      const res = await addFaculty(formData);
      console.log(res);
      if (res.error) { 
        toast.error(`${res.error}`);
      } else {
        toast.success("Facul;ty added successfully!");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while adding the Faculty.");
    }
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
                name="faculty.name.fristName"
                label="Frist Name"
              />
            </Col>
            <Col span={24} md={12} lg={8}>
              <PHInput
                type="text"
                name="faculty.name.middleName"
                label="Middle Name"
              />
            </Col>
            <Col span={24} md={12} lg={8}>
              <PHInput type="text" name=".name.lastName" label="Last Name" />
            </Col>
            <Col span={24} md={12} lg={8}>
              {/* <PHInput type="text" name="faculty.gender" label="gender" /> */}
              <PHSelect
                label="Gender"
                name="faculty.gender"
                options={genderOptions}
              />
            </Col>
            <Col span={24} md={12} lg={8}>
              <PHDatePicker name="faculty.dateOfBirth" label="Date Of Brith" />
            </Col>
            <Col span={24} md={12} lg={8}>
              {/* <PHInput type="text" name="bloogGroup" label="Blood Gruop" /> */}
              <PHSelect
                label="Blood Gruop"
                name="faculty.bloogGroup"
                options={bloodGroupOptions}
              />
            </Col>
            <Col span={24} md={12} lg={8}>
              <Controller
                name="image"
                render={({ field: { onChange, value, ...filed } }) => {
                  return (
                    <Form.Item label="Picture">
                      <Input
                        type="file"
                        value={value?.fileName}
                        {...filed}
                        onChange={(e) => onChange(e.target.files?.[0])}
                      />
                      ;
                    </Form.Item>
                  );
                }}
              />
            </Col>
            {/* Contat info */}
            <Divider>Contact Info</Divider>
            <Col span={24} md={12} lg={8}>
              <PHInput type="text" name="faculty.email" label="Email" />
            </Col>
            <Col span={24} md={12} lg={8}>
              <PHInput
                type="text"
                name="faculty.contactNo"
                label="Contact No"
              />
            </Col>
            <Col span={24} md={12} lg={8}>
              <PHInput
                type="text"
                name="faculty.emergencyContactNo"
                label="Emergency ContactNo"
              />
            </Col>
            <Col span={24} md={12} lg={8}>
              <PHInput
                type="text"
                name="faculty.presentAddress"
                label="Present Address ContactNo"
              />
            </Col>
            <Col span={24} md={12} lg={8}>
              <PHInput
                type="text"
                name="faculty.permanentAddress"
                label="Permanent Address"
              />
            </Col>

            {/* Academic Info */}
            <Divider>Academic Info</Divider>

            <Col span={24} md={12} lg={8}>
              <PHSelect
                options={departmentsNames}
                name="faculty.academicDepartment"
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

export default CreateFaculty;
