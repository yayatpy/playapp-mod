import Wrapper from "../assets/wrappers/Navbar";
import { FaAlignLeft } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { Logo } from "../components";
import { useDashboardContext } from "../pages/DashboardLayout";
import LogoutContainer from "./LogoutContainer";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const { toggleSidebar } = useDashboardContext();
  return (
    <Wrapper>
      <div className="nav-center">
        <button type="button" className="toggle-btn" onClick={toggleSidebar}>
          <RxHamburgerMenu />
        </button>
        <div>
          <Logo />
          <h4 className="logo-text">dashboard</h4>
        </div>
        <div className="btn-container">
          <ThemeToggle />
          <LogoutContainer />
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
