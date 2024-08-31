import { Button, Col, Divider, Form, Input, Row } from "antd";
import PHForm from "../../../componets/form/PHForm";
import PHInput from "../../../componets/form/PHInput";
import PHSelect from "../../../componets/form/PHSelect";
import { bloodGroupOptions, genderOptions } from "../../../utilities/FormInfo";
import PHDatePicker from "../../../componets/form/PHDatePicker";
import { Controller, FieldValues, SubmitHandler } from "react-hook-form";
import { useAddAdminMutation } from "../../../redux/features/admin/userManagmentApi";
import { toast } from "sonner";

const CreateAdmin = () => {
  const [addAdmin] = useAddAdminMutation();
  const adminDammyData = {
    password: "admin123",
    admin: {
      designation: "Admin",
      name: {
        firstName: "Mr. Mezbaul",
        middleName: "Abedin",
        lastName: "Forhan",
      },
      gender: "male",
      email: "mezbaul2@programming-hero.com",
      contactNo: "12356789",
      emergencyContactNo: "12356789",
      bloogGroup: "O+",
      presentAddress: "123 Main St, Cityville",
      permanentAddress: "456 Oak St, Townsville",
    },
  };

  const handleSubmit: SubmitHandler<FieldValues> = async (data) => {
    const formData: FormData = new FormData();
    formData.append("data", JSON.stringify(data));
    formData.append("file", data.image);
    console.log(data);
    try {
      const res = await addAdmin(formData);
      console.log(res);
      if (res.error) {
        toast.error('Please try again !!');
      } else {
        toast.success('Admin added successfully!');
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Row>
      <Col span={24}>
        <PHForm onSubmit={handleSubmit} defaultValues={adminDammyData}>
          <Row gutter={4}>
            <Divider>Personal Info</Divider>
            <Col span={24} md={12} lg={8}>
              <PHInput
                type="text"
                name="admin.name.fristName"
                label="Frist Name"
              />
            </Col>
            <Col span={24} md={12} lg={8}>
              <PHInput
                type="text"
                name="admin.name.middleName"
                label="Middle Name"
              />
            </Col>
            <Col span={24} md={12} lg={8}>
              <PHInput
                type="text"
                name="admin.name.lastName"
                label="Last Name"
              />
            </Col>
            <Col span={24} md={12} lg={8}>
              {/* <PHInput type="text" name="admin.gender" label="gender" /> */}
              <PHSelect
                label="Gender"
                name="admin.gender"
                options={genderOptions}
              />
            </Col>
            <Col span={24} md={12} lg={8}>
              <PHDatePicker name="admin.dateOfBirth" label="Date Of Brith" />
            </Col>
            <Col span={24} md={12} lg={8}>
              {/* <PHInput type="text" name="bloogGroup" label="Blood Gruop" /> */}
              <PHSelect
                label="Blood Gruop"
                name="admin.bloogGroup"
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
              <PHInput type="text" name="admin.email" label="Email" />
            </Col>
            <Col span={24} md={12} lg={8}>
              <PHInput type="text" name="admin.contactNo" label="Contact No" />
            </Col>
            <Col span={24} md={12} lg={8}>
              <PHInput
                type="text"
                name="admin.emergencyContactNo"
                label="Emergency ContactNo"
              />
            </Col>
            <Col span={24} md={12} lg={8}>
              <PHInput
                type="text"
                name="admin.presentAddress"
                label="Present Address ContactNo"
              />
            </Col>
            <Col span={24} md={12} lg={8}>
              <PHInput
                type="text"
                name="admin.permanentAddress"
                label="Permanent Address"
              />
            </Col>
          </Row>
          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Row>
  );
};

export default CreateAdmin;
