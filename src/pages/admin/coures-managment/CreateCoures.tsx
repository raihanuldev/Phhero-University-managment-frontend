import { Button, Col, Flex } from "antd";
import PHForm from "../../../componets/form/PHForm";
import PHSelect from "../../../componets/form/PHSelect";
import { toast } from "sonner";
import { FieldValues, SubmitHandler } from "react-hook-form";
import PHInput from "../../../componets/form/PHInput";

const CreateCoures = () => {
 
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Createing......");
    console.log(data);
    // try {
    //   const res = (await AddSemesterRegister(semesterData)) as TResponse<any>;
    //   if (res.error) {
    //     toast.error(res.error.data.message, { id: toastId });
    //   } else {
    //     toast.success("Semster Registed Succefully", { id: toastId });
    //   }
    //   console.log(res);
    // } catch (err) {
    //   toast.error("Something Went Wrong", { id: toastId });
    //   console.log(err);
    // }
  };
  return (
    <Flex justify="center" align="center">
      <Col span={8}>
        <PHForm onSubmit={onSubmit}>
          <PHInput label="Title" type="text" name="title" />
          <PHInput label="Prefix" type="text" name="prefix" />
          <PHInput label="Code" type="number" name="code" />
          <PHInput label="Credits" type="number" name="credits" />
          <PHSelect label="Is Deleted?" name="isDeleted" options={[{label:"True",value:true},{label:"False",value:false}]}/>
          <PHSelect mode="multiple" label="Pre RequisiteCourses" name="preRequisiteCourses" options={[{label:"ree",value:"dsds"},{label:"ree",value:"dsds"}]}/>
          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Flex>
  );
};

export default CreateCoures;


// body type
// {
//     "title": "Dom Manipulation",
//     "prefix": "JS",
//     "code": 108,
//     "credits": 3,
//     "isDeleted": false,
//     "preRequisiteCourses": [
//         {
//             "course": "65b5ff53d6ffdd9bfc058320",
//             "isDeleted": false
//         },
//          {
//             "course": "65b5ffc2d6ffdd9bfc058326",
//             "isDeleted": false
//         }
//     ]
// }