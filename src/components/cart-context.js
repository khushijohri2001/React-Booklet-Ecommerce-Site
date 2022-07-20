import { createContext, useContext } from "react";
import DefaultCartProvider from "./DefaultCartProvider";
import CartReducer from "../components/CartReducer";
import { useReducer } from "react";
import ProductReducer from "./ProductReducer";
import WishlistReducer from "./WishlistReducer";

const CartContext = createContext(<DefaultCartProvider />);

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, {
    cart: []
  });

  const [wishlistState, wishlistDispatch] = useReducer(WishlistReducer, {
    wishlist: []
  });

  const [productState, productDispatch] = useReducer(ProductReducer, {
    byStock: false,
    priceRange: 2000,
    byRating: 5,
    byNotebook: false,
    byBookmark: false,
    searchQuery: "",
    byPrice: 0
  });

  return (
    <CartContext.Provider
      value={{
        ...state,
        dispatch,
        productState,
        productDispatch,
        wishlistState,
        wishlistDispatch
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };
