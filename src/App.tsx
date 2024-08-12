import MainLayout from "./componets/layout/MainLayout";
import ProtectedRoute from "./componets/layout/ProtectedRoute";

function App() {
  return (
    <ProtectedRoute>
      <MainLayout />
    </ProtectedRoute>
  );
}

export default App;
