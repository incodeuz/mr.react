import { sidebarData } from "../../utils/sidebar";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-top">
        {sidebarData.map(({ title }) => (
          <p className="side-title">{title}</p>
        ))}
      </div>
      <div className="sidebar-bottom">
        <p className="side-title">Log out</p>
      </div>
    </div>
  );
};

export default Sidebar;
