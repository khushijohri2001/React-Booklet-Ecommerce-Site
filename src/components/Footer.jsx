import BookletLogo from "../images/Booklet-logos_transparent.png";
import {
  Instagram,
  Facebook,
  LinkedIn,
  Twitter,
  GitHub
} from "@material-ui/icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" flex-center">
      <div className="flex-col">
        <div className="footer-child">
          <div className="footer-sub-child">
            <Link to="/">
              <img src={BookletLogo} alt="Logo" />
            </Link>
          </div>
          <div className="footer-sub-child">
            <h2>Products</h2>
            <Link to="all-products">All Products</Link>
          </div>
          <div className="footer-sub-child">
            <h2>Information</h2>
            <Link to="/">Home</Link>
            <Link to="about-us">About Us</Link>
            <Link to="login">Login</Link>
          </div>
          <div className="footer-sub-child">
            <h2>Contact Us</h2>
            <a href="mailto: khushi.johri01@gmail.com">Email</a>
          </div>
        </div>
      </div>

      <hr color="yellow" size="1" />

      <div className="footer-child footer-bottom">
        <div className="social-links">
          <a href="https://www.instagram.com/girlifycoder">
            <Instagram />
          </a>
          <a href="https://www.facebook.com/khushi.johri01">
            <Facebook />
          </a>
          <a href="https://twitter.com/khushijohri01?s=08">
            <Twitter />
          </a>
          <a href="https://www.linkedin.com/in/khushi-johri-b74970202">
            <LinkedIn />
          </a>
          <a href="https://github.com/khushijohri2001">
            <GitHub />
          </a>
        </div>
        <p>Copyright &copy; 2022 Designed by Khushi Johri</p>
      </div>
    </footer>
  );
};

export default Footer;
