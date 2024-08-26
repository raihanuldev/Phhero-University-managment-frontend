export interface TStudent {
    _id: string
    id: string
    user: TUser
    name: TName
    gender: string
    dateOfBirth: string
    email: string
    contactNo: string
    emergencyContactNo: string
    bloogGroup: string
    presentAddress: string
    permanentAddress: string
    guardian: TGuardian
    localGuardian: TLocalGuardian
    profileImg: string
    admissionSemester: TAdmissionSemester
    isDeleted: boolean
    academicDepartment: TAcademicDepartment
    academicFaculty: TAcademicFaculty
    fullName: string
  }
  
  export interface TUser {
    _id: string
    id: string
    email: string
    needsPasswordChange: boolean
    role: string
    status: string
    isDeleted: boolean
    createdAt: string
    updatedAt: string
    __v: number
  }
  
  export interface TName {
    firstName: string
    middleName: string
    lastName: string
    _id: string
  }
  
  export interface TGuardian {
    fatherName: string
    fatherOccupation: string
    fatherContactNo: string
    motherName: string
    motherOccupation: string
    motherContactNo: string
    _id: string
  }
  
  export interface TLocalGuardian {
    name: string
    occupation: string
    contactNo: string
    address: string
    _id: string
  }
  
  export interface TAdmissionSemester {
    _id: string
    name: string
    year: string
    code: string
    startMonth: string
    endMonth: string
    createdAt: string
    updatedAt: string
    __v: number
  }
  
  export interface TAcademicDepartment {
    _id: string
    name: string
    academicFaculty: string
    createdAt: string
    updatedAt: string
    __v: number
  }
  
  export interface TAcademicFaculty {
    _id: string
    name: string
    createdAt: string
    updatedAt: string
    __v: number
  }
  