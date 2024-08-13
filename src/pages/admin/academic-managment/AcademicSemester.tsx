import React from 'react';
import { useAcademicSemesterQuery } from '../../../redux/features/auth/academicSemester/academicSemesterApi';

const AcademicSemester = () => {

    const {data} = useAcademicSemesterQuery(undefined)
    console.log(data);
    return (
        <div>
            this is academic semster 
        </div>
    );
};

export default AcademicSemester;