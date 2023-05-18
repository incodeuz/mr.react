import "./App.css";
import MainLayout from "./layout";

function App() {
  const movies = [
    {
      title: "Forsaj 10",
      desc: "Eng yangi filmlardan",
      image: "https://s5.vcdn.biz/static/f/5970245441/image.jpg",
      views: "1.2m",
      duration: "2:32m",
    },
    {
      title: "Spider man",
      desc: "Yoshlikdagi eng super kinolarimdan",
      image: "https://cdn.wallpapersafari.com/99/66/yokJde.jpg",
      views: "1.6m",
      duration: "2:15m",
    },
    {
      title: "Masha i Medved",
      desc: "Multfilmni iti",
      image:
        "https://e1.pxfuel.com/desktop-wallpaper/167/197/desktop-wallpaper-s-masha-and-the-bear-masha-and-the-bear.jpg",
      views: "521k",
      duration: "1:54m",
    },
    {
      title: "Transformers",
      desc: "Chotki lekin boru, maslahat bermiman korishni",
      image:
        "https://www.pixelstalk.net/wp-content/uploads/2016/05/HD-Transformers-Wallpapers-Pictures.jpg",
      views: "2.1m",
      duration: "2:01m",
    },
  ];
  return (
    <>
      <MainLayout kinolar={movies} />
    </>
  );
}

export default App;
