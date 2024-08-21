import { Button, Col, Flex } from "antd";
import PHForm from "../../../componets/form/PHForm";
import PHSelect from "../../../componets/form/PHSelect";
import { zodResolver } from "@hookform/resolvers/zod";
import { academicSemesterSchema } from "../../../schemas/academicMangement.schema";
import { useAddAcademicSemesterMutation } from "../../../redux/features/admin/academicMangement.api";
import { toast } from "sonner";
import { TResponse } from "../../../types/globalType";
import { monthOptions, nameOptions, yearOptions } from "../../../utilities/FormInfo";
import { FieldValues, SubmitHandler } from "react-hook-form";

const CreateAcademicSemester =  () => {

  const [addAcademicSemester] = useAddAcademicSemesterMutation()

  const onSubmit:SubmitHandler<FieldValues> =async (data) => {
    const toastId = toast.loading("Createing......")
    const name = nameOptions[Number(data?.name - 1)]?.label;
    const semesterData = {
      name,
      code: data.name,
      year: data.year,
      startMonth: data.startMonth, // Full month name
      endMonth: data.endMonth, // Full month name
    };
    try {
     const res = await addAcademicSemester(semesterData) as TResponse;
     if(res.error){
      toast.error(res.error.data.message,{id: toastId})
     } else{
      toast.success("Semster Created Succefully",{id: toastId})
     }
     console.log(res);
    } catch (err) {
      toast.error("Something Went Wrong",{id: toastId})
      console.log(err);
    }
  };
  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <PHForm
          onSubmit={onSubmit}
          resolver={zodResolver(academicSemesterSchema)}
        >
          {/* in PHFORM resolver will add and make sure you have schema */}
          <PHSelect label="Name" name="name" options={nameOptions} />
          <PHSelect label="Year" name="year" options={yearOptions} />
          <PHSelect
            label="Start Month"
            name="startMonth"
            options={monthOptions}
          />
          <PHSelect label="End Month" name="endMonth" options={monthOptions} />
          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Flex>
  );
};

export default CreateAcademicSemester;
