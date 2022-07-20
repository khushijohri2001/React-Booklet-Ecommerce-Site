import { Favorite, ShoppingCart } from "@material-ui/icons";
import { Link } from "react-router-dom";
import productDetails from "../data/productDetails";
import { WishlistBtn } from "./Buttons";

const BestSeller = () => {
  return (
    <>
      <div className="category-container">
        <div>
          <p className="category-heading">Best Seller</p>
        </div>
        <div className="grid-container center-items">
          {productDetails.map((products) => {
            const {
              id,
              image,
              name,
              price,
              type,
              originalPrice,
              savedPrice
            } = products;

            if (type === "Best Seller") {
              return (
                <Link to="/all-products">
                  <div className="card-container" key={id}>
                    <div className="save-badge">Save Rs.{savedPrice}</div>
                    <img src={image} alt={name} className="product-img" />
                    <p className="product-name">{name}</p>
                    <div className="flex-row">
                      <p className="product-price">
                        ₹{price}
                        <span className="strike-price">₹{originalPrice}</span>
                        <span className="product-discount"> (50%)</span>
                      </p>
                    </div>
                  </div>
                </Link>
              );
            }
          })}
        </div>
      </div>
    </>
  );
};

export default BestSeller;
