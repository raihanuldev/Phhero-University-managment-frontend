import { Button, Pagination, Space, Table, TableColumnsType } from "antd";
import { useState } from "react";
import { useGetAllStudentsQuery } from "../../../redux/features/admin/userManagmentApi";
import { TStudent } from "../../../types/userManagment.type";

export type TTableData = Pick<
  TStudent,
  'fullName' | 'id' | 'email' | 'contactNo'
>;

const StudentData = () => {
  const [page, setPages] = useState(1);

  const { data: studentData, isFetching } = useGetAllStudentsQuery([
    { name: "page", value: page },
    { name: "limit", value: 3 },
    { name: "sort", value: "id" },
  ]);
  const metaData = studentData?.meta;
  const tableData = studentData?.data?.map(
    ({ _id, fullName, id, email, contactNo }) => ({
      key: _id,
      fullName,
      id,
      email,
      contactNo,
    })
  );
  const columns: TableColumnsType<TTableData> = [
    {
      title: "Name",
      key: "name",
      dataIndex: "fullName",
    },
    {
      title: "Roll No.",
      dataIndex: "id",
    },
    {
      title: 'Email',
      key: 'email',
      dataIndex: 'email',
    },
    {
      title: 'Contact No.',
      key: 'contactNo',
      dataIndex: 'contactNo',
    },
    {
      title: "Action",
      key: "action",
      render: () => {
        return (
          <Space>
            <Button>Details</Button>
            <Button>Block</Button>
            <Button>Update</Button>
          </Space>
        );
      },
      width: "1%",
    },
  ];
  
  return (
    <>
      <Table
        pagination={false}
        loading={isFetching}
        columns={columns}
        dataSource={tableData}
        showSorterTooltip={{ target: "sorter-icon" }}
      />
      <Pagination onChange={(value)=>setPages(value)} total={metaData?.total} pageSize={metaData?.limit}/>
    </>
  );
};

export default StudentData;
