import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { UserProvider } from "./context/user_context";
import { BiddingProvider } from "./context/bidding_context";
import { OrderProvider } from "./context/order_context";
import { CartProvider } from "./context/cart_context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserProvider>
      <BiddingProvider>
        <OrderProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </OrderProvider>
      </BiddingProvider>
    </UserProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
