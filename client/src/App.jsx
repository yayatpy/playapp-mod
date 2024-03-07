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
} from "./pages";
import { MenuAdmin, UploadFile } from "./components";

import { action as loginAction } from "./pages/Login";
import { loader as dashboardLoader } from "./pages/DashboardLayout";
import { loader as tukinLoader } from "./pages/AllRincian";
import { action as profileAction } from "./pages/Profile";
import { action as passwordAction } from "./pages/Password";
import { loader as adminLoader } from "./pages/Admin";
import { action as actionUpload } from "./components/UploadFile";

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
            children: [
              {
                index: "true",
                element: <MenuAdmin />,
              },
              {
                path: "upload",
                element: <UploadFile />,
                action: actionUpload,
              },
            ],
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
