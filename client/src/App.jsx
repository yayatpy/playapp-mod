import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

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
  HapusData,
} from "./pages";
import { MenuAdmin, TambahPeg, UploadFile } from "./components";

import { action as loginAction } from "./pages/Login";
import { loader as dashboardLoader } from "./pages/DashboardLayout";
import { loader as tukinLoader } from "./pages/AllRincian";
import { action as profileAction } from "./pages/Profile";
import { action as passwordAction } from "./pages/Password";
import { loader as adminLoader } from "./pages/Admin";
import { action as actionUpload } from "./components/UploadFile";
import { action as actionHapus } from "./components/HapusData";
import { action as actionTambahPeg } from "./components/TambahPeg";

export const checkDefaultTheme = () => {
  const isDarkTheme = localStorage.getItem("darkTheme") === "true";
  document.body.classList.toggle("dark-theme", isDarkTheme);
  return isDarkTheme;
};

checkDefaultTheme();

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

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
              {
                path: "hapus-data",
                element: <HapusData />,
                action: actionHapus,
              },
              {
                path: "tambah-peg",
                element: <TambahPeg />,
                action: actionTambahPeg,
              },
            ],
          },
        ],
      },
    ],
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />;
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
