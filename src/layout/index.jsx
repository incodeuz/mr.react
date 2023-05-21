import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import MainSection from "../components/MainSection";
import { Route, Routes } from "react-router-dom";
import NewPosts from "../components/NewPosts";
import NewMovies from "../components/NewMovies";
import News from "../components/News";
import Settings from "../components/Settings";
import Dashboard from "../components/Dashboard";
import Login from "../components/Login";

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
            <div className="main-wrapper text-light">
              <Routes>
                <Route path="/" element={<MainSection />} />
                <Route path="/new-posts" element={<NewPosts />} />
                <Route path="/new-movies" element={<NewMovies />} />
                <Route path="/news" element={<News />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
              </Routes>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default MainLayout;
