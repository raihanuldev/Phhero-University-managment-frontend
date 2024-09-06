import { Button, Table, TableColumnsType } from "antd";
import { DataType } from "../../../types/TableType";
import { useAllSemesterRegistedQuery } from "../../../redux/features/admin/couresMangment";
import { TRegistedSemester } from "../../../types/couresMangment";
import moment from "moment";

const RegistedSemester = () => {
  const { data: registedSemester } = useAllSemesterRegistedQuery(undefined);
  console.log(registedSemester?.data);

  const tableData = registedSemester?.data?.map(
    ({ _id, status, academicSemester, startDate, endDate }) => ({
      _id,
      status,
      name:`${academicSemester.name} ${academicSemester.year}`,
      startDate: moment(new Date(startDate)).format('MMMM'),
      endDate: moment(new Date(endDate)).format('MMMM'),
    })
  );
  //   console.log(tableData);
  const columns: TableColumnsType<TRegistedSemester> | undefined = [
    {
      title: "Semester Name",
      dataIndex: "name",
    },
    {
      title: "Status",
      dataIndex: "status",
    },
    {
      title: "Start Date",
      dataIndex: "startDate",
    },
    {
      title: "End Date",
      dataIndex: "endDate",
    },
    {
      title: "Action",
      key: "action",
      render: () => {
        return <Button>Update</Button>;
      },
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

export default RegistedSemester;
