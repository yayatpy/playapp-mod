import { toast } from "react-toastify";
import { Outlet, redirect } from "react-router-dom";
import customFetch from "../utils/customFetch";

export const loader = async () => {
  try {
    const response = await customFetch.get("/users/admin");
    return response.data;
  } catch (error) {
    toast.error("menu khusus untuk admin");
    return redirect("/dashboard");
  }
};

const Admin = () => {
  return <Outlet />;
};

export default Admin;
