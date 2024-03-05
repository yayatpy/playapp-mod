import { toast } from "react-toastify";
import { redirect } from "react-router-dom";
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
  return <h4>admin page</h4>;
};

export default Admin;
