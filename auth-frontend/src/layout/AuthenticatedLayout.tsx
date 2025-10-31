import { useAuthStore } from "@/stores/auth/useAuthStore";
import { Navigate, Outlet } from "react-router-dom";

const AuthenticatedLayout = () => {
  const { authUser } = useAuthStore();

  if (!authUser) {
    return <Navigate to="/" replace />;
  }
  return (
    <div className="h-screen w-screen overflow-hidden flex justify-end bg-black">
      <div className="h-screen w-full ">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthenticatedLayout;
