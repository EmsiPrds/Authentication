import { Menu } from "lucide-react";
import { useState } from "react";

const DashboardPage = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="h-screen w-full overflow-y-scroll no-scrollbar p-1 px-2 md:px-4">
      <div className="w-full flex items-center gap-2 my-2 mb-3">
        <Menu
          className="md:hidden text-white text-2xl cursor-pointer"
          onClick={() => setOpen(true)}
        />
        <h1 className="text-white text-lg font-bold">Dashboard Overview</h1>
      </div>

      {/* Example sidebar toggle (optional) */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setOpen(false)}
        >
          <div
            className="absolute left-0 top-0 h-full w-64 bg-gray-800 text-white p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(false)}
              className="text-sm text-gray-400 hover:text-white mb-4"
            >
              Close
            </button>
            <p>Sidebar content here...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardPage;
