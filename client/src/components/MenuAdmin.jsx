import { Link, Outlet, redirect } from "react-router-dom";
import Wrapper from "../assets/wrappers/DashboardFormPage";

const MenuAdmin = () => {
  return (
    <Wrapper>
      <h4>admin menu</h4>
      <div className="form-center">
        <Link className="btn form-btn" to="/dashboard/admin/upload">
          upload data tukin
        </Link>
        <Link className="btn form-btn" to="../admin/reset-pass">
          reset password
        </Link>
        <Link className="btn form-btn" to="../admin/menu-lain">
          menu lain
        </Link>
      </div>
    </Wrapper>
  );
};

export default MenuAdmin;