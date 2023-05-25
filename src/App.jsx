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

  const [movies, setMovies] = React.useState([
    {
      title: "Forsaj 10",
      desc: "Eng yangi filmlardan",
      image: "https://s5.vcdn.biz/static/f/5970245441/image.jpg",
      views: "1.2m",
      duration: "2:32m",
      price: "Free",
    },
    {
      title: "Spider man",
      desc: "Yoshlikdagi eng super kinolarimdan",
      image: "https://cdn.wallpapersafari.com/99/66/yokJde.jpg",
      views: "1.6m",
      duration: "2:15m",
      price: "$12",
    },
    {
      title: "Masha i Medved",
      desc: "Multfilmni iti",
      image:
        "https://e1.pxfuel.com/desktop-wallpaper/167/197/desktop-wallpaper-s-masha-and-the-bear-masha-and-the-bear.jpg",
      views: "521k",
      duration: "1:54m",
      price: "Free",
    },
    {
      title: "Transformers",
      desc: "Chotki lekin boru, maslahat bermiman korishni",
      image:
        "https://www.pixelstalk.net/wp-content/uploads/2016/05/HD-Transformers-Wallpapers-Pictures.jpg",
      views: "2.1m",
      duration: "2:01m",
      price: "Free",
    },
    {
      title: "Forsaj 10",
      desc: "Eng yangi filmlardan",
      image: "https://s5.vcdn.biz/static/f/5970245441/image.jpg",
      views: "1.2m",
      duration: "2:32m",
      price: "Free",
    },
    {
      title: "Spider man",
      desc: "Yoshlikdagi eng super kinolarimdan",
      image: "https://cdn.wallpapersafari.com/99/66/yokJde.jpg",
      views: "1.6m",
      duration: "2:15m",
      price: "$12",
    },
    {
      title: "Masha i Medved",
      desc: "Multfilmni iti",
      image:
        "https://e1.pxfuel.com/desktop-wallpaper/167/197/desktop-wallpaper-s-masha-and-the-bear-masha-and-the-bear.jpg",
      views: "521k",
      duration: "1:54m",
      price: "Free",
    },
    {
      title: "Transformers",
      desc: "Chotki lekin boru, maslahat bermiman korishni",
      image:
        "https://www.pixelstalk.net/wp-content/uploads/2016/05/HD-Transformers-Wallpapers-Pictures.jpg",
      views: "2.1m",
      duration: "2:01m",
      price: "Free",
    },
  ]);
  const [miniSidebar, setMiniSidebar] = React.useState(true);

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <MainLayout
              miniSidebar={miniSidebar}
              setMiniSidebar={setMiniSidebar}
            />
          }
        >
          <Route
            path="/"
            index
            element={
              <MainSection
                kinolar={movies}
                mini={miniSidebar}
                setMini={setMiniSidebar}
              />
            }
          />
          <Route path="/new-posts" element={<NewPosts />} />
          <Route path="/new-movies" element={<NewMovies />} />
          <Route path="/news" element={<News />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/dashboard" element={<Dashboard mini={miniSidebar} />} />
          <Route path="/lesson" element={<Lesson mini={miniSidebar} />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
