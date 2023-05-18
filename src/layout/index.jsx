import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import MainSection from "../components/MainSection";

const MainLayout = ({ kinolar }) => {
  console.log(kinolar);

  return (
    <>
      <header>
        <nav>
          <Navbar />
        </nav>
      </header>

      <main className="main">
        <div className="container">
          <section className="main-section">
            <Sidebar />
            <MainSection />
          </section>
        </div>
      </main>
    </>
  );
};

export default MainLayout;
