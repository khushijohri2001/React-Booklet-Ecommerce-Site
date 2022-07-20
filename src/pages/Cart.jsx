import { ArrowBack } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useCart } from "../components/cart-context";
import "../css/Cart.css";

const Cart = ({ funcNav }) => {
  const { cart, wishlistDispatch, dispatch } = useCart();

  const [total, setTotal] = useState();
  const [totalItemQty, setTotalItemQty] = useState();
  const [discountPrice, setDiscountPrice] = useState();
  const [totalMRP, setTotalMRP] = useState();

  const discountPercent = (savedPrice, MRP) => {
    const discount = ((savedPrice / MRP) * 100).toFixed(0);
    return discount;
  };

  useEffect(() => {
    setTotalItemQty(cart.reduce((acc, curr) => (acc += curr.qty), 0));
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
    setDiscountPrice(
      cart.reduce(
        (acc, curr) =>
          acc +
          Number(curr.savedPrice(curr.originalPrice, curr.price)) * curr.qty,
        0
      )
    );

    setTotalMRP(
      cart.reduce((acc, curr) => acc + Number(curr.originalPrice) * curr.qty, 0)
    );
  }, [cart]);

  return (
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
        <p className="cart-heading">My Cart</p>
        <p className="total-items">
          you have <span className="total-items-count"> {totalItemQty} </span>
          items in your cart
        </p>

        <div className="main-content">
          {cart.length !== 0 ? (
            <div className="address-container">
              <div className="address-details">
                <h5>
                  Deliver to:{" "}
                  <span className="bolder">Khushi Johri, 302029</span>
                </h5>
                <p>A-16-A, Shivpuri, Vinayak Path, Sanganer</p>
              </div>
              <button className="change-address-btn ">Change</button>
            </div>
          ) : (
            ""
          )}

          {/* product card   */}
          {totalItemQty === 0 ? (
            <div className="empty-cart">
              {" "}
              <p>Cart is Empty !!</p>
            </div>
          ) : (
            <div className="cart-details-container">
              <div className="cart-items">
                <div className="cart-items-container">
                  <ListGroup>
                    {cart.map((cartItem) => {
                      const {
                        id,
                        name,
                        price,
                        image,
                        originalPrice,
                        category,
                        rating,
                        qty
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

                              <div className="qty-container">
                                <button
                                  className="qty-btn decrease-btn"
                                  onClick={() =>
                                    dispatch({
                                      type: "DECREMENT",
                                      payload: id
                                    })
                                  }
                                >
                                  -
                                </button>
                                <input
                                  className="qty-value"
                                  placeholder={qty}
                                />
                                <button
                                  className="qty-btn increase-btn"
                                  onClick={() =>
                                    dispatch({
                                      type: "INCREMENT",
                                      payload: id
                                    })
                                  }
                                >
                                  +
                                </button>
                              </div>

                              <div className="price">
                                {price}
                                <span className="strike-price">
                                  {" "}
                                  {originalPrice}
                                </span>
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
                                    dispatch({
                                      type: "REMOVE_FROM_CART",
                                      payload: cartItem
                                    })
                                  }
                                >
                                  Remove from Cart
                                </button>
                              </div>

                              <button
                                className="move-to-wishlist"
                                onClick={() => {
                                  wishlistDispatch({
                                    type: "ADD_TO_WISHLIST",
                                    id: { id },
                                    payload: cartItem
                                  });

                                  dispatch({
                                    type: "REMOVE_FROM_CART",
                                    id: { id },
                                    payload: cartItem
                                  });
                                }}
                              >
                                Move to Wishlist
                              </button>
                            </div>
                          </div>
                        </>
                      );
                    })}
                  </ListGroup>
                </div>
              </div>

              {/* product billing  */}

              <div className="product-billing">
                {/* product details  */}

                <div className="price-detail-card-container">
                  <p className="price-detail-heading">Price Detail</p>
                  <hr color="grey" size="1" />

                  <div className="price-detail-content-container">
                    <div className="price-detail-content">
                      <p className="left-detail">
                        Price ({totalItemQty} Items):
                      </p>
                      <p className="right-detail">
                        Rs. <span className="strike-price"> {totalMRP}</span>
                        {total}
                      </p>
                    </div>

                    <div className="price-detail-content">
                      <p className="left-detail">Discount:</p>
                      <p className="right-detail discount-price">
                        - Rs. {discountPrice}{" "}
                      </p>
                    </div>

                    <div className="price-detail-content">
                      <p className="left-detail">Delivery Charges:</p>
                      <p className="right-detail">Rs. 70.00</p>
                    </div>
                  </div>

                  <hr color="grey" size="1" />

                  <div className="price-detail-content total-amount-container">
                    <p className="left-detail total-amount">Total Amount:</p>
                    <p className="right-detail total-amount">
                      Rs. {total + 70}
                    </p>
                  </div>

                  <hr color="grey" size="1" />

                  <p className="discount-price">
                    You will save Rs {discountPrice} on this order
                  </p>

                  <hr color="grey" size="1" />

                  <div className="center-aligned">
                    <a href="">
                      <button className="primary-btn button-design">
                        Place Order
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Cart;
