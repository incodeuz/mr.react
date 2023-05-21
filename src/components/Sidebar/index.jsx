import { sidebarData } from "../../utils/sidebar";
import LogoutIcon from "../../assets/icons/logout.svg";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-top">
        {sidebarData.map(({ title, Icon, to }, index) => (
          <NavLink
            to={to}
            key={index}
            className="side-title d-flex gap-3 align-items-center decoration-none"
          >
            <img src={Icon} alt="" />
            <p>{title}</p>
          </NavLink>
        ))}
      </div>
      <div className="sidebar-bottom">
        <div className="side-title d-flex gap-3 align-items-center">
          <img src={LogoutIcon} alt="" />
          <p>Log out</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
