import { Outlet, useOutletContext } from "react-router-dom";

const Admin = () => {
  const { peg } = useOutletContext();
  const { role } = peg;
  return role === "admin" ? <Outlet /> : <h4>menu ini hanya untuk admin</h4>;
};

export default Admin;
