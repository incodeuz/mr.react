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

const MainLayout = () => {
  const movies = [
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
  ];
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
                <Route path="/" element={<MainSection kinolar={movies} />} />
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
