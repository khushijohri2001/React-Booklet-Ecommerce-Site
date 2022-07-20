import { ArrowBack } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useCart } from "../components/cart-context";

const Wishlist = ({ funcNav }) => {
  const {
    wishlistState: { wishlist },
    wishlistDispatch,
    dispatch
  } = useCart();

  const [total, setTotal] = useState();
  const [totalItemQty, setTotalItemQty] = useState();
  const [discountPrice, setDiscountPrice] = useState();
  const [totalMRP, setTotalMRP] = useState();

  const discountPercent = (savedPrice, MRP) => {
    const discount = ((savedPrice / MRP) * 100).toFixed(0);
    return discount;
  };

  useEffect(() => {
    setTotalItemQty(wishlist.reduce((acc, curr) => (acc += curr.qty), 0));
    setTotal(
      wishlist.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
    setDiscountPrice(
      wishlist.reduce(
        (acc, curr) =>
          acc +
          Number(curr.savedPrice(curr.originalPrice, curr.price)) * curr.qty,
        0
      )
    );

    setTotalMRP(
      wishlist.reduce(
        (acc, curr) => acc + Number(curr.originalPrice) * curr.qty,
        0
      )
    );
  }, [wishlist]);

  return (
    <>
      {funcNav(false)}
      {/* <div>{wishlist.map((products) => products.name)}</div>
       */}

      <div className="cart-container">
        {funcNav(false)}

        <header>
          <div className="back-to-shopping">
            <Link to="/">
              <ArrowBack />
            </Link>
            <p>Back to Shopping</p>
          </div>

          <div className="cart-icon">
            <p>{totalItemQty}</p>
          </div>
        </header>

        <section className="main-cart-section">
          <p className="cart-heading">My Wishlist</p>
          <p className="total-items">
            You have <span className="total-items-count"> {totalItemQty} </span>
            items in your Wishlist
          </p>

          <div className="wishlist-container product-listing-container">
            {wishlist.map((cartItem) => {
              const {
                id,
                name,
                price,
                image,
                originalPrice,
                category,
                rating
              } = cartItem;

              return (
                <>
                  <div className="cart-items-info" key={id}>
                    <div className="cart-child-1">
                      <img src={image} alt={name} />
                    </div>

                    <div className="cart-child-2">
                      <div className="title">
                        <p className="bolder">{name}</p>
                        <p className="smaller">{category}</p>
                        <p>
                          {rating}
                          <AiFillStar className="star" />
                        </p>
                      </div>

                      <div className="price">
                        {price}
                        <span className="strike-price"> {originalPrice}</span>
                        <span className="product-discount">
                          {discountPercent(
                            cartItem.savedPrice(
                              cartItem.originalPrice,
                              cartItem.price
                            ),
                            cartItem.originalPrice
                          )}
                          %
                        </span>
                      </div>

                      <div className="remove-item">
                        <button
                          onClick={() =>
                            wishlistDispatch({
                              type: "REMOVE_FROM_WISHLIST",
                              payload: cartItem
                            })
                          }
                        >
                          Remove from Wishlist
                        </button>
                      </div>

                      <button
                        className="move-to-wishlist"
                        onClick={() => {
                          wishlistDispatch({
                            type: "REMOVE_FROM_WISHLIST",
                            payload: cartItem
                          });

                          dispatch({
                            type: "ADD_TO_CART",
                            payload: cartItem
                          });
                        }}
                      >
                        Move to Cart
                      </button>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
};
export default Wishlist;
