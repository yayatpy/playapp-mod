import links from "../utils/links";
import { useDashboardContext } from "../pages/DashboardLayout";
import { NavLink } from "react-router-dom";

const NavLinks = ({ isBigSidebar }) => {
  const { toggleSidebar, peg } = useDashboardContext();
  const { role } = peg;
  return (
    <div className="nav-links">
      {links.map((item) => {
        const { text, icon, path } = item;
        if (path === "admin" && role !== "admin") return;
        return (
          <NavLink
            to={path}
            key={text}
            className="nav-link"
            onClick={isBigSidebar ? null : toggleSidebar}
            end
          >
            <span className="icon">{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};

export default NavLinks;
