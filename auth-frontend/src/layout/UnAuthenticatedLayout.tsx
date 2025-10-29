import { useAuthStore } from "@/stores/auth/useAuthStore";
import { Navigate, Outlet } from "react-router-dom";

const UnAuthenticatedLayout = () => {
  const { authUser } = useAuthStore();
  if (authUser) {
    return <Navigate to="/home/dashboard" replace />;
  }
  return (
    <div className="h-screen w-screen overflow-hidden">
      <div className="relative h-full w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default UnAuthenticatedLayout;
