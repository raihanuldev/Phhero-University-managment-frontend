import OfferedCoures from "../pages/student/OfferedCoures";
import StudentDashbord from "../pages/student/StudentDashbord";

export const studentPaths = [
    {
      name: 'Dashboard',
      path: 'dashboard',
      element: <StudentDashbord />,
    },
    {
      name: 'Offered Course',
      path: 'offered-course',
      element: <OfferedCoures />,
    },
  ];
  