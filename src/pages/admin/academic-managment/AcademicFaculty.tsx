import { Button, Table, TableColumnsType, TableProps } from "antd";
import React from "react";
import { useAcademicFacultysQuery } from "../../../redux/features/admin/academicMangement.api";

// types
interface DataType {
  key: React.Key;
  name: string;
  createdAt: string;
}

const AcademicFaculty = () => {
  const { data: datas, isFetching } = useAcademicFacultysQuery(undefined);

  const handleUpdate = (data) => {
    console.log(data);
  };

  const facultyData: DataType[] =
    datas?.data?.map(
      (faculty: { _id: string; name: string; createdAt: string }) => ({
        key: faculty._id,
        name: faculty.name,
        createdAt: faculty.createdAt,
      })
    ) || [];
  const columns: TableColumnsType<DataType> = [
    {
      title: "Name OF Academic Faculty",
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
        {
          text: "Submenu",
          value: "Submenu",
          children: [
            {
              text: "Green",
              value: "Green",
            },
            {
              text: "Black",
              value: "Black",
            },
          ],
        },
      ],
      onFilter: (value, record) => record.name.indexOf(value as string) === 0,
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ["descend"],
    },
    {
      title: "Created Date",
      dataIndex: "createdAt",
    },
    {
      title: "Action",
      render: (_, record) => (
        <Button type="primary" onClick={() => handleUpdate(record)}>
          Update Faculties
        </Button>
      ),
    },
  ];
  // onchange
  const onChange: TableProps<DataType>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  return (
    <Table
      loading={isFetching}
      columns={columns}
      dataSource={facultyData}
      onChange={onChange}
      showSorterTooltip={{ target: "sorter-icon" }}
    />
  );
};

export default AcademicFaculty;
