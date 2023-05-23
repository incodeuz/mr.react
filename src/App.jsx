import React from "react";
import "./App.css";
import MainLayout from "./layout";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Login from "./components/Login";

function App() {
  const isUser = localStorage.getItem("user");
  const [user, setUser] = React.useState(isUser || null);
  const navigate = useNavigate();

  if (user) {
      <Navigate to={"/"} />;
  }

  return (
    <>
      <Routes>
        {!user ? (
          navigate("/login")
        ) : (
          <Route path="/" element={<MainLayout />} />
        )}
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
