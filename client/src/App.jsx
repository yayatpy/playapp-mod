import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  HomeLayout,
  Landing,
  Login,
  DashboardLayout,
  Error,
  AllRincian,
  Stats,
  Profile,
  Admin,
  Password,
  UploadPage,
  UploadXlPage,
} from "./pages";

import { action as loginAction } from "./pages/Login";
import { loader as dashboardLoader } from "./pages/DashboardLayout";
import { loader as tukinLoader } from "./pages/AllRincian";
import { action as profileAction } from "./pages/Profile";
import { action as passwordAction } from "./pages/Password";
import { loader as adminLoader } from "./pages/Admin";

export const checkDefaultTheme = () => {
  const isDarkTheme = localStorage.getItem("darkTheme") === "true";
  document.body.classList.toggle("dark-theme", isDarkTheme);
  return isDarkTheme;
};

checkDefaultTheme();

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Landing /> },
      {
        path: "login",
        element: <Login />,
        action: loginAction,
      },
      {
        path: "dashboard",
        element: <DashboardLayout />,
        loader: dashboardLoader,
        children: [
          {
            index: true,
            element: <AllRincian />,
            loader: tukinLoader,
          },
          {
            path: "stats",
            element: <Stats />,
          },
          {
            path: "profile",
            element: <Profile />,
            action: profileAction,
          },
          {
            path: "password",
            element: <Password />,
            action: passwordAction,
          },
          {
            path: "admin",
            element: <Admin />,
            loader: adminLoader,
          },
          {
            path: "upload",
            element: <UploadPage />,
          },
          {
            path: "upload-xl",
            element: <UploadXlPage />,
          },
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
