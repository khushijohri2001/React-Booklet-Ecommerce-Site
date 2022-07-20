import { Star } from "@material-ui/icons";
import { NavLink } from "react-bootstrap";
import {
  AddToCartBtn,
  OutOfStock,
  RemoveFromCartBtn,
  RemoveFromWishlistBtn,
  WishlistBtn
} from "../components/Buttons";
import { useCart } from "../components/cart-context";
import FilterAsideNav from "../components/FilterAsideNav";
import productDetails from "../data/productDetails";

const AllProducts = (props) => {
  const {
    cart,
    dispatch,
    productState: {
      sort,
      priceRange,
      byStock,
      byNotebook,
      byBookmark,
      byRating,
      searchQuery
    },
    wishlistState: { wishlist },
    wishlistDispatch
  } = useCart();

  const transformProducts = () => {
    let sortedProducts = productDetails.map((products) => {
      return products;
    });

    if (priceRange > 0) {
      sortedProducts = sortedProducts.filter(
        (products) => products.price <= priceRange
      );

      if (byRating) {
        sortedProducts = sortedProducts.filter(
          (products) => products.rating <= byRating
        );
      }
      if (searchQuery) {
        sortedProducts = sortedProducts.filter((products) =>
          products.name.toLowerCase().includes(searchQuery)
        );
      }

      if (sort) {
        sortedProducts = sortedProducts.sort((a, b) =>
          sort === "lowToHigh" ? a.price - b.price : b.price - a.price
        );
      }

      if (!byStock) {
        sortedProducts = sortedProducts.filter(
          (product) => product.availablity === "In Stock"
        );
      }

      if (
        (byNotebook === false && byBookmark === false) ||
        (byNotebook === true && byBookmark === true)
      ) {
        return sortedProducts;
      }
      if (byNotebook) {
        sortedProducts = sortedProducts.filter(
          (products) => "Notebook" === products.category
        );
      }

      if (byBookmark) {
        sortedProducts = sortedProducts.filter(
          (products) => "Bookmark" === products.category
        );
      }
    }

    return sortedProducts;
  };

  return (
    <div className="product-listing-container">
      {props.funcNav(true)}
      <div>
        <FilterAsideNav />
      </div>

      <div className="category-container ">
        <div className="grid-container center-items">
          {transformProducts().map((products) => {
            const {
              id,
              availablity,
              image,
              name,
              price,
              originalPrice,
              rating
            } = products;

            return (
              <>
                <div
                  key={id}
                  className={
                    availablity === "In Stock"
                      ? "card-container"
                      : "card-container overlay"
                  }
                >
                  <img src={image} alt={name} className="product-img" />
                  <p className="product-name">{name}</p>
                  <div className="product-rating">
                    {rating} <Star className="star" />
                  </div>
                  <div className="flex-row">
                    <p className="product-price">
                      ₹{price}
                      <span className="strike-price">₹{originalPrice}</span>
                      <span className="product-discount"> (50%)</span>
                    </p>

                    {wishlist.some((wishlistItem) => wishlistItem.id === id) ? (
                      <RemoveFromWishlistBtn
                        onClick={() =>
                          wishlistDispatch({
                            type: "REMOVE_FROM_WISHLIST",
                            id: { id },
                            payload: products
                          })
                        }
                      />
                    ) : (
                      <WishlistBtn
                        className={
                          availablity === "In Stock"
                            ? "wishlist-btn button-design-circle"
                            : "disabled wishlist-btn button-design-circle"
                        }
                        onClick={() =>
                          wishlistDispatch({
                            type: "ADD_TO_WISHLIST",
                            id: { id },
                            payload: products
                          })
                        }
                      />
                    )}
                  </div>

                  {availablity === "In Stock" ? (
                    cart.some((cartItem) => cartItem.id === id) ? (
                      <RemoveFromCartBtn
                        onClick={() =>
                          dispatch({
                            type: "REMOVE_FROM_CART",
                            id: { id },
                            payload: products
                          })
                        }
                      />
                    ) : (
                      <AddToCartBtn
                        onClick={() =>
                          dispatch({
                            type: "ADD_TO_CART",
                            id: { id },
                            payload: products
                          })
                        }
                      />
                    )
                  ) : (
                    <OutOfStock />
                  )}
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
