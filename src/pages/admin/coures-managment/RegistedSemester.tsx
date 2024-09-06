import { Button, Dropdown, Table, TableColumnsType } from "antd";
import {
  useAllSemesterRegistedQuery,
  useUpdateSemesterRegisterMutation,
} from "../../../redux/features/admin/couresMangment";
import { TRegistedSemester } from "../../../types/couresMangment";
import moment from "moment";
import { useState } from "react";

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
  const [semesterId, setSemesterId] = useState("");
  const { data: registedSemester } = useAllSemesterRegistedQuery(undefined);
  const [updateRegistedSemester] = useUpdateSemesterRegisterMutation();

  const tableData = registedSemester?.data?.map(
    ({ _id, status, academicSemester, startDate, endDate }) => ({
      _id,
      status,
      name: `${academicSemester.name} ${academicSemester.year}`,
      startDate: moment(new Date(startDate)).format("MMMM"),
      endDate: moment(new Date(endDate)).format("MMMM"),
    })
  );

  const handleUpdate = (data:any) => {
    const updateData = {
      id: semesterId,
      data: {
        status: data.key,
      },
    };
    updateRegistedSemester(updateData);
  };

  const MenuProps = {
    items,
    onClick: handleUpdate,
  };

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
      render: (item) => {
        // console.log(item);
        return (
          <Dropdown menu={MenuProps} trigger={["click"]}>
            <Button onClick={() => setSemesterId(item._id)}>Update</Button>
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
