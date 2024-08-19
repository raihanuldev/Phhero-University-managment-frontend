import { Table, TableColumnsType, TableProps } from "antd";
import { useAcademicSemesterQuery } from "../../../redux/features/admin/academicMangement.api";
import { DataType } from "../../../types/TableType";
import { useState } from "react";

const AcademicSemester = () => {
    // setLocalState queryInfo 
    const [params,setParams] = useState([]);

  const { data: semesterData } = useAcademicSemesterQuery(params);

  const tableData = semesterData?.data?.map(
    ({ _id, name, year, startMonth, endMonth }) => ({
      _id,
      name,
      year,
      startMonth,
      endMonth,
    })
  );
//   console.log(tableData);
  const columns: TableColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "name",
      showSorterTooltip: { target: "full-header" },
      filters: [
        {
            value: "Fall",
            text: "Fall",
        },
        {
            value: "Autumn",
            text: "Autumn",
        },
        {
            value: "Summer",
            text: "Summer",
        }
      ],
    },
    {
      title: "Year",
      dataIndex: "year",
    },
    {
      title: "Start Month",
      dataIndex: "startMonth",
    },
    {
      title: "End Month",
      dataIndex: "endMonth",
    },
  ];
  const onChange: TableProps<DataType>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    console.log(filters,extra);
    if(extra.action === "filter"){
        const queryParams = [] as any;
        filters.name?.forEach((item)=>{
            queryParams.push({name:"name",value: item}) 
        })

        setParams(queryParams)
    }

  };
  return (
    <Table
      columns={columns}
      dataSource={tableData}
      onChange={onChange}
    
      showSorterTooltip={{ target: "sorter-icon" }}
    />
  );
};

export default AcademicSemester;
