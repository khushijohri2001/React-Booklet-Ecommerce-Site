import AnnouncementBar from "./AnnouncementBar";
import HeaderCategories from "./HeaderCategories";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="header-container">
      <AnnouncementBar />
      <Navbar />
      <HeaderCategories />
    </div>
  );
};

export default Header;
