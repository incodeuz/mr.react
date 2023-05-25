import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const MainLayout = ({ miniSidebar, setMiniSidebar }) => {
  return (
    <>
      <header>
        <nav>
          <Navbar mini={miniSidebar} setMini={setMiniSidebar} />
        </nav>
      </header>

      <main className="main">
        <div className="container">
          <section className="main-section">
            <Sidebar mini={miniSidebar} setMini={setMiniSidebar} />
            <div className="main-wrapper text-light">
              <Outlet />
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default MainLayout;
