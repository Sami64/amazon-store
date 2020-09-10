import React, { useState } from "react";
import CurrencyFormat from "react-currency-format";

import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";

import "./Subtotal.css";

const Subtotal = () => {
  const [{ basket }, dispatch] = useStateValue();
  //const [subtotal, setSubtotal] = useState(0);

  //basket.forEach(item => setSubtotal(item))

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
};

export default Subtotal;
