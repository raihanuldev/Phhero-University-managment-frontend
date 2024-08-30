import { Button, Pagination, Space, Table, TableColumnsType, TableProps } from "antd";
import { DataType } from "../../../types/TableType";
import { useState } from "react";
import { TQueryParam } from "../../../types/globalType";
import { useGetAllStudentsQuery } from "../../../redux/features/admin/userManagmentApi";

const StudentData = () => {
  // setLocalState queryInfo
  const [params, setParams] = useState<TQueryParam[] | undefined>();
  const [page, setPages] = useState(1);

  const { data: studentData, isFetching } = useGetAllStudentsQuery([
    { name: "page", value: page },
    { name: "limit", value: 3 },
    { name: "sort", value: "id" },
  ]);
  const metaData = studentData?.meta;
  //   console.log(studentData);
  const tableData = studentData?.data?.map(({ _id, id, fullName }) => ({
    _id,
    fullName,
    id,
  }));
  //   console.log(tableData);
  const columns: TableColumnsType<DataType> = [
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
  const onChange: TableProps<DataType>["onChange"] = (
    _pagination,
    filters,
    _sorter,
    extra
  ) => {
    // Filter programmticale code for name
    if (extra.action === "filter") {
      const queryParams: TQueryParam[] = [];
      filters.name?.forEach((item) => {
        queryParams.push({ name: "name", value: item });
      });
      filters.year?.forEach((item) => {
        queryParams.push({ name: "year", value: item });
      });
      setParams(queryParams);
    }
  };
  return (
    <>
      <Table
        pagination={false}
        loading={isFetching}
        columns={columns}
        dataSource={tableData}
        onChange={onChange}
        showSorterTooltip={{ target: "sorter-icon" }}
      />
      <Pagination onChange={(value)=>setPages(value)} total={metaData?.total} pageSize={metaData?.limit}/>
    </>
  );
};

export default StudentData;
