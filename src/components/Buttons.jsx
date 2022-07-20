import {
  Favorite,
  FavoriteBorderOutlined,
  ShoppingCart
} from "@material-ui/icons";
const AddToCartBtn = (props) => {
  return (
    <>
      <button onClick={props.onClick} className="add-to-cart">
        <ShoppingCart className="shopping-cart-icon" />
        Add to cart
      </button>
    </>
  );
};

const RemoveFromCartBtn = (props) => {
  return (
    <>
      <button onClick={props.onClick} className="remove-from-cart">
        Remove from Cart
      </button>
    </>
  );
};

const WishlistBtn = (props) => {
  return (
    <>
      <button
        className={props.className || "wishlist-btn button-design-circle"}
        onClick={props.onClick}
      >
        <FavoriteBorderOutlined />
      </button>
    </>
  );
};
const RemoveFromWishlistBtn = (props) => {
  return (
    <>
      <button
        className={
          props.className || "remove_from_wishlist-btn button-design-circle"
        }
        onClick={props.onClick}
      >
        <Favorite />
      </button>
    </>
  );
};

const OutOfStock = () => {
  return (
    <>
      <p className="out-of-stock">Out of Stock</p>
    </>
  );
};

export {
  AddToCartBtn,
  RemoveFromCartBtn,
  WishlistBtn,
  RemoveFromWishlistBtn,
  OutOfStock
};
