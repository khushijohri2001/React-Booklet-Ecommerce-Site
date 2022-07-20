import { createContext, useContext, useReducer } from "react";
import DefaultProductProvider from "./DefaultProductProvider";

const ProductContext = createContext(<DefaultProductProvider />);

const ProductProvider = ({ children }) => {
  return <ProductContext.Provider>{children}</ProductContext.Provider>;
};

const useProduct = () => useContext(ProductContext);

export { ProductProvider, useProduct };
