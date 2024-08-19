import { Table, TableColumnsType, TableProps } from "antd";
import { useAcademicSemesterQuery } from "../../../redux/features/admin/academicMangement.api";
import { DataType } from "../../../types/TableType";

const AcademicSemester = () => {
  const { data: semesterData } = useAcademicSemesterQuery([{name: "name",value:"Fall"}]);
  //   console.log(semesterData);

  const tableData = semesterData?.data?.map(
    ({ _id, name, year, startMonth, endMonth }) => ({
      _id,
      name,
      year,
      startMonth,
      endMonth,
    })
  );
  console.log(tableData);
  const columns: TableColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "name",
      showSorterTooltip: { target: "full-header" },
      filters: [
        {
          text: "Joe",
          value: "Joe",
        },
        {
          text: "Jim",
          value: "Jim",
        },
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
    console.log(filters);
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
