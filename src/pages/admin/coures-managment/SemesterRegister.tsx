import { Button, Col, Flex } from "antd";
import PHForm from "../../../componets/form/PHForm";
import PHSelect from "../../../componets/form/PHSelect";
import { useAcademicSemesterQuery } from "../../../redux/features/admin/academicMangement.api";
import { toast } from "sonner";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { StatusOptions } from "../../../utilities/FormInfo";
import PHInput from "../../../componets/form/PHInput";
import PHDatePicker from "../../../componets/form/PHDatePicker";

const SemesterRegister =  () => {
    const {data:academicSemester} = useAcademicSemesterQuery([{name:"sort",value:"year"}])
    // console.log(academicSemester);

    const semesterOptions = academicSemester?.data?.map((item)=> ({
        value: item._id,
        label: `${item.name} ${item.year}`
    }))
  const onSubmit:SubmitHandler<FieldValues> =async (data) => {
    const toastId = toast.loading("Createing......")
    const semesterData = {
        ...data
    };
    console.log(semesterData);
    // try {
    //  const res = await addAcademicSemester(semesterData) as TResponse;
    //  if(res.error){
    //   toast.error(res.error.data.message,{id: toastId})
    //  } else{
    //   toast.success("Semster Created Succefully",{id: toastId})
    //  }
    //  console.log(res);
    // } catch (err) {
    //   toast.error("Something Went Wrong",{id: toastId})
    //   console.log(err);
    // }
  };
  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <PHForm
          onSubmit={onSubmit}
        >
          <PHSelect label="AcademicSemester" name="academicSemester" options={semesterOptions} />
          <PHSelect label="status" name="status" options={StatusOptions} />
          <PHDatePicker name="startDate" label="startDate" />
          <PHDatePicker name="endtDate" label="end Date" />
          <PHInput label="Min Credit" type="number" name="minCredit"/>
          <PHInput label="Mix Credit" type="number" name="maxCredit"/>
          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Flex>
  );
};

export default SemesterRegister;
