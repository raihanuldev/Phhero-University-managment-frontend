import { useAcademicDepartmentQuery } from "../../../redux/features/admin/academicMangement.api";
import { Button, Space, Table, TableColumnsType, TableProps } from "antd";
import { TQueryParam } from "../../../types/globalType";
import { DataType } from "../../../types/TableType";

const AcademicDepartment = () => {
  const { data: departments, isFetching } =
    useAcademicDepartmentQuery(undefined);
  console.log(departments?.data);
  //   console.log(studentData);
  const tableData = departments?.data?.map(({ _id,name,academicFaculty}) => ({
    
    _id,name,academicFacultyName:academicFaculty?.name
  }));
  console.log(tableData);
  //   console.log(tableData);
  const columns: TableColumnsType<DataType> = [
    {
      title: "Name",
      key: "name",
      dataIndex: "name",
    },
    {
      title: "Faculty Name",
      dataIndex: "academicFacultyName",
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
    <Table
      loading={isFetching}
      columns={columns}
      dataSource={tableData}
      onChange={onChange}
      showSorterTooltip={{ target: "sorter-icon" }}
    />
  );
};

export default AcademicDepartment;
