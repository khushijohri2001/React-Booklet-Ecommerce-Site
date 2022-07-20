import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { CartProvider } from "./components/cart-context";
import { ProductProvider } from "./components/product-context";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Router>
      {/* <ProductProvider> */}
      <CartProvider>
        <App />
      </CartProvider>
      {/* </ProductProvider> */}
    </Router>
  </StrictMode>
);
