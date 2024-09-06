import { Button, Dropdown, MenuProps, Table, TableColumnsType } from "antd";
import { useAllSemesterRegistedQuery } from "../../../redux/features/admin/couresMangment";
import { TRegistedSemester } from "../../../types/couresMangment";
import moment from "moment";

export type tableData = Pick<
  TRegistedSemester,
  "startDate" | "endDate" | "endDate" | "status"
>;

const items = [
  {
    label: "Upcoming",
    key: "UPCOMING",
  },
  {
    label: "Ongoing",
    key: "ONGOING",
  },
  {
    label: "ENDED",
    key: "ENDED",
  },
];

const RegistedSemester = () => {
  const { data: registedSemester } = useAllSemesterRegistedQuery(undefined);
  console.log(registedSemester?.data);

  const tableData = registedSemester?.data?.map(
    ({ _id, status, academicSemester, startDate, endDate }) => ({
      _id,
      status,
      name: `${academicSemester.name} ${academicSemester.year}`,
      startDate: moment(new Date(startDate)).format("MMMM"),
      endDate: moment(new Date(endDate)).format("MMMM"),
    })
  );

  const handleUpdate = (data)=>{
    console.log(data);
  }
  const MenuProps = {
    items,
    onClick: handleUpdate
  }

  //   console.log(tableData);
  const columns: TableColumnsType<tableData> = [
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
        return (
          <Dropdown menu={MenuProps}>
            <Button>Update</Button>
          </Dropdown>
        );
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
