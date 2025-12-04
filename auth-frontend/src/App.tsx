import { Toaster } from "react-hot-toast";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AuthenticatedLayout from "@/layout/AuthenticatedLayout";
import UnAuthenticatedLayout from "@/layout/UnAuthenticatedLayout";

// import LandingPage from "./pages/general/Landingpage";
// import PageNotFound from "./pages/general/PageNotFound";

// import LoginPage from "./pages/auth/LoginPage";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import LandingPage from "./pages/general/LandingPage";
import DashboardPage from "./pages/home/DashboardPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <UnAuthenticatedLayout />,
      children: [
        {
          path: "/",
          element: <LandingPage />,
        },
        {
          path: "/auth/login",
          element: <LoginPage />,
        },
        {
          path: "/auth/register",
          element: <RegisterPage />,
        },
      ],
    },
    {
      path: "/home",
      element: <AuthenticatedLayout />,
      children: [
        {
          path: "/home/dashboard",
          element: <DashboardPage />,
        },
      ],
    },
    {
      path: "*",
      // element: <PageNotFound />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}

export default App;
