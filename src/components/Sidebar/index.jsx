import { sidebarData } from "../../utils/sidebar";
import LogoutIcon from "../../assets/icons/logout.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Modal } from "antd";

const Sidebar = ({ mini, setMini }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
      logOut();
    }, 2000);
  };
  const logOut = () => {
    localStorage.removeItem("token");
    return navigate("/login");
  };
  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <>
      <Modal
        title="Warning !"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <p>Are you sure to log out?</p>
      </Modal>
      <div
        className="sidebar"
        style={{ width: `${!mini ? "fit-content" : ""}` }}
      >
        <div className="sidebar-top">
          {sidebarData.map(({ title, Icon, to }, index) => (
            <NavLink
              to={to}
              key={index}
              style={{ width: `${!mini ? "fit-content" : ""}` }}
              className={`side-title d-flex gap-3 align-items-center decoration-none`}
            >
              <img src={Icon} alt="" />
              {mini && <p>{title}</p>}
            </NavLink>
          ))}
        </div>
        <div className="sidebar-bottom">
          <div
            className="side-title d-flex gap-3 align-items-center"
            onClick={showModal}
          >
            <img src={LogoutIcon} alt="" />
            {mini && <p>Log out</p>}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
