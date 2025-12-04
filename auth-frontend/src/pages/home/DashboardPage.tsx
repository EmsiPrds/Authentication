import { useAuthStore } from "@/stores/auth/useAuthStore";

const DashboardPage = () => {
  const { logout } = useAuthStore();

  return (
    <div className="bg-black h-screen w-full overflow-y-scroll no-scrollbar p-1 px-2 md:px-4">
      <div className="w-full flex items-center gap-2 my-2 mb-3">
        <h1 className="text-white text-lg font-bold">Dashboard</h1>
        <button
          onClick={logout}
          className="ml-auto bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-lg text-sm transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default DashboardPage;
