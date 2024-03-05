import { FaUserCircle, FaCaretDown } from "react-icons/fa";
import Wrapper from "../assets/wrappers/LogoutContainer";
import { useState } from "react";
import { useDashboardContext } from "../pages/DashboardLayout";
import { Link } from "react-router-dom";

const LogoutContainer = () => {
  const [showLogout, setShowLogout] = useState();
  const { peg, logoutUser } = useDashboardContext();

  return (
    <Wrapper>
      <button
        type="button"
        className="btn logout-btn"
        onClick={() => setShowLogout(!showLogout)}
      >
        {peg.avatar ? (
          <img src={peg.avatar} alt="avatar" className="img" />
        ) : (
          <FaUserCircle />
        )}
        {peg.nama
          ? peg.nama.length > 15
            ? `${peg.nama.substr(0, 15)}...`
            : peg.nama
          : ""}
        <FaCaretDown />
      </button>
      <div className={showLogout ? "dropdown show-dropdown" : "dropdown"}>
        <Link to="/dashboard/password">
          <button
            type="button"
            className="dropdown-btn"
            onClick={() => setShowLogout(!showLogout)}
          >
            ganti password
          </button>
        </Link>
        <div className="separator" />
        <button type="button" className="dropdown-btn" onClick={logoutUser}>
          logout
        </button>
      </div>
    </Wrapper>
  );
};

export default LogoutContainer;
