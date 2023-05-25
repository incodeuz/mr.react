import React, { useEffect } from "react";
import "./App.css";
import MainLayout from "./layout";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Login from "./components/Login";
import NewPosts from "./components/NewPosts";
import NewMovies from "./components/NewMovies";
import News from "./components/News";
import Settings from "./components/Settings";
import Dashboard from "./components/Dashboard";
import Lesson from "./components/Lesson";
import MainSection from "./components/MainSection";

function App() {
  const token = JSON.parse(localStorage.getItem("token"));
  const [user, setUser] = React.useState(token || null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      return navigate("/login");
    }
  }, [token]);

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<MainLayout />}>
          <Route path="/new-posts" element={<NewPosts />} />
          <Route path="/new-movies" element={<NewMovies />} />
          <Route path="/news" element={<News />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/lesson" element={<Lesson />} />
          <Route path="/" element={<MainSection />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
