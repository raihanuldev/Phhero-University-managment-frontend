import { Table, TableColumnsType, TableProps } from "antd";
import { useAcademicSemesterQuery } from "../../../redux/features/admin/academicMangement.api";
import { DataType } from "../../../types/TableType";

const AcademicSemester = () => {
  const { data: semesterData } = useAcademicSemesterQuery(undefined);
  //   console.log(semesterData);

  const tableData = semesterData?.data.map(
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

  return (
    <Table
      columns={columns}
      dataSource={tableData}
      showSorterTooltip={{ target: "sorter-icon" }}
    />
  );
};

export default AcademicSemester;
