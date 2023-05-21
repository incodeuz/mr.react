import HomeIcon from "../assets/icons/home.svg";
import PlayIcon from "../assets/icons/videoplay.svg";
import DashboardIcon from "../assets/icons/category.svg";
import NewsIcon from "../assets/icons/globus.svg";
import PostIcon from "../assets/icons/post.svg";
import SettingsIcon from "../assets/icons/setting.svg";

export const sidebarData = [
  {
    Icon: HomeIcon,
    title: "Home",
    to: "/",
  },
  {
    Icon: PostIcon,
    to: "/new-posts",
    title: "New Posts",
  },
  {
    Icon: PlayIcon,
    to: "/new-movies",
    title: "New Movies",
  },
  {
    to: "/news",
    Icon: NewsIcon,
    title: "News",
  },
  {
    Icon: SettingsIcon,
    to: "/settings",
    title: "Settings",
  },
  {
    Icon: DashboardIcon,
    to: "/dashboard",
    title: "Dashboard",
  },
];
