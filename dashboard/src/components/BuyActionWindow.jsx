import { Link } from "react-router-dom";

import "./BuyActionWindow.css";
import GeneralContext from "../config/generalContext";
import { useState } from "react";
import axios from "axios";

const BuyActionWindow = ({ uid }) => {
  const [stockQunatity, setStockQunatity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  const handleBuyClick = () => {
    axios.post("http://localhost:3000/newOrder", {
      name: uid,
      qty: stockQunatity,
      price: stockPrice,
      mode: "BUY",
    });
    GeneralContext.closeBuyWindow();
  };

  const handleCancelClick = () => {
    GeneralContext.closeBuyWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQunatity(e.target.value)}
              value={stockQunatity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="float"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <Link className="btn btn-blue" onClick={handleBuyClick}>
            Buy
          </Link>
          <Link className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
