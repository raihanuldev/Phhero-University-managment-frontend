export const bloodGroupOptions = [
  { value: "O+", label: "O+" },
  { value: "O-", label: "Awaomi Leauge" },
  { value: "A-", label: "A-" },
  { value: "A+", label: "A+" },
  { value: "B+", label: "B+" },
  { value: "AB+", label: "AB+" },
  { value: "AB-", label: "AB-" },
];

export const genderOptions = [
    {value:"male", label: "Male"},
    {value:"feMale", label: "FeMale"},
    {value:"feMale", label: "i will select later"},
]

export const OccupationOptions = [
    { value: "Teacher", label: "Teacher" },
    { value: "Doctor", label: "Doctor" },
    { value: "Engineer", label: "Engineer" },
    { value: "Nurse", label: "Nurse" },
    { value: "Lawyer", label: "Lawyer" },
    { value: "Architect", label: "Architect" },
    { value: "Artist", label: "Artist" },
    { value: "Chef", label: "Chef" },
    { value: "Dentist", label: "Dentist" },
    { value: "Designer", label: "Designer" },
    { value: "Electrician", label: "Electrician" },
    { value: "Farmer", label: "Farmer" },
    { value: "Firefighter", label: "Firefighter" },
    { value: "Journalist", label: "Journalist" },
    { value: "Mechanic", label: "Mechanic" },
    { value: "Musician", label: "Musician" },
    { value: "Pharmacist", label: "Pharmacist" },
    { value: "Pilot", label: "Pilot" },
    { value: "Police Officer", label: "Police Officer" },
    { value: "Scientist", label: "Scientist" },
    { value: "Software Developer", label: "Software Developer" },
    { value: "Veterinarian", label: "Veterinarian" },
    { value: "Writer", label: "Writer" }
];

export const monthOptions = [
    { value: "January", label: "January" },
    { value: "February", label: "February" },
    { value: "March", label: "March" },
    { value: "April", label: "April" },
    { value: "May", label: "May" },
    { value: "June", label: "June" },
    { value: "July", label: "July" },
    { value: "August", label: "August" },
    { value: "September", label: "September" },
    { value: "October", label: "October" },
    { value: "November", label: "November" },
    { value: "December", label: "December" },
  ];

  // Year options
const currentYear = new Date().getFullYear();
export const yearOptions = [0, 1, 2, 3, 4, 5].map((number) => ({
  value: String(currentYear + number),
  label: String(currentYear + number),
}));
// nameOPtons
export const nameOptions = [
    { value: "01", label: "Autumn" },
    { value: "02", label: "Summer" },
    { value: "03", label: "Fall" },
  ];