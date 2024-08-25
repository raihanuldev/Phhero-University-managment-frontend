import React from 'react';
import { useAcademicDepartmentQuery } from '../../../redux/features/admin/academicMangement.api';

const AcademicDepartment = () => {
    const {data:departments,isFetching} = useAcademicDepartmentQuery(undefined)

    return (
        <div>
          total  Academic Department {departments?.data.length}
        </div>
    );
};

export default AcademicDepartment;