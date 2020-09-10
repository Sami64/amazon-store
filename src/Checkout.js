import React from "react";

import "./Checkout.css";

import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";

import FlipMove from "react-flip-move";

import { useStateValue } from "./StateProvider";

const Checkout = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  console.log(user);

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          alt=""
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423592668_.jpg"
        />
        <div>
          <h3>Hello {!user ? "Guest" : user?.email}</h3>
          <h2 className="checkout__title"> Your shopping Basket</h2>
          <FlipMove>
            {basket?.map((item) => (
              <div key={item.id}>
                <CheckoutProduct
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              </div>
            ))}
          </FlipMove>
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
