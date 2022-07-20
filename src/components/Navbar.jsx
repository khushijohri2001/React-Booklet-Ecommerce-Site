import { Badge } from "@material-ui/core";
import {
  FavoriteBorderOutlined,
  Search,
  ShoppingCart
} from "@material-ui/icons";
import { Link, NavLink } from "react-router-dom";
import BookletLogo from "../images/Booklet-logos_transparent.png";
import { useCart } from "./cart-context";

const Navbar = () => {
  const {
    cart,
    wishlistState: { wishlist },
    productDispatch
  } = useCart();
  console.log(wishlist.length);

  return (
    <div className="navbar-container">
      <div className="left">
        <Link to="/">
          {" "}
          <img src={BookletLogo} alt="Booklet Logo" />
        </Link>
      </div>

      <div className="center">
        {" "}
        <div className="search-bar">
          <input
            type="text"
            placeholder="What are you looking for?"
            onChange={(event) => {
              productDispatch({
                type: "FILTER_BY_SEARCH",
                payload: event.target.value
              });
            }}
          />
          <Search className="search-icon" />
        </div>
      </div>

      <div className="right">
        <div className="menu-item">
          <button className="signup-btn button-design">Sign Up</button>
        </div>

        <div className="menu-item">
          <Badge
            badgeContent={wishlist.length}
            color="secondary"
            className="wishlist-icon"
          >
            <NavLink to="/wishlist">
              {" "}
              <FavoriteBorderOutlined />
            </NavLink>
          </Badge>
        </div>

        <div className="menu-item">
          <NavLink to="/cart">
            <Badge
              badgeContent={cart.length}
              color="secondary"
              className="shopping-cart-icon"
            >
              <ShoppingCart />
            </Badge>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
