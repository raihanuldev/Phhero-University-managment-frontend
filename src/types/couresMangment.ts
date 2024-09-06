export interface TRegistedSemester {
  _id: string;
  academicSemester: AcademicSemester;
  status: string;
  endDate: string;
  startDate: string;
  minCredit: number;
  maxCredit: number;
  createdAt: string;
  updatedAt: string;
}
export interface AcademicSemester {
  _id: string;
  name: string;
  year: string;
  code: string;
  startMonth: string;
  endMonth: string;
  createdAt: string;
  updatedAt: string;
  _v: number;
}
