import ReactLogo from "../../assets/react.svg";
import LupaIcon from "../../assets/lupa.svg";
import UserIcon from "../../assets/icons/user.svg";

const Navbar = () => {
  return (
    <div className="container">
      <div className="navbar-wrapper">
        <div className="logo-box">
          <img src={ReactLogo} alt="react logo" />
          <p className="nav-title">Mr.React</p>
        </div>

        <div className="input-box box-input">
          <div className="input-box">
            <img src={LupaIcon} alt="lupa icon" />
            <input type="search" placeholder="Search" />
          </div>

          <div className="actions">
            <img width="100%" src={UserIcon} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
