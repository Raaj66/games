import React, { useState } from "react";
import "./GamesStyles.css";
import { useCart } from "react-use-cart";

const games = [
  {
    id: 1,
    name: "CR90 corvette",
    description: "CR90 corvette",
    price: 3500,
  },
  {
    id: 2,
    name: "Start Destroyer",
    description: "Imperial I-class Start Destroyer",
    price: 1500,
  },
  {
    id: 3,
    name: "Sentinal landing craft",
    description: "Sentinal landing craft",
    price: 2400,
  },
];

export default function Games() {
  const {
    items,
    isEmpty,
    totalItems,
    cartTotal,
    addItem,
    removeItem,
    updateItemQuantity,
    emptyCart,
  } = useCart();

  console.log("item", items);
  return (
    <div className="wrapper">
      <div>
        <p style={{ fontSize: 30, margin: 0, fontWeight: "bold" }}>
          Games Store
        </p>
      </div>

      {/* Render  */}
      <div>
        {games.map((item, index) => {
          return (
            <div className="games" key={index}>
              <div>
                <p>{item.name}</p>
                <p>{item.description}</p>
              </div>
              <div>
                <p>Price</p>
                <p>{item.price}</p>
              </div>
              <div>
                <button onClick={() => addItem(item)}>Add to Cart</button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="cart">
        {!isEmpty && (
          <p style={{ fontSize: 30, margin: 0, fontWeight: "bold" }}>
            Cart Items
          </p>
        )}
        {items.map((cart, index) => {
          return (
            <div key={index} className="cartItems">
              <div>
                <p>{cart.name}</p>
              </div>
              <div>
                <p>{cart?.quantity}</p>
              </div>
              <div>
                <p>{cart.price}</p>
              </div>
              <div>
                <button
                  onClick={() =>
                    updateItemQuantity(cart?.id, cart?.quantity - 1)
                  }
                >
                  -
                </button>
                <button
                  onClick={() =>
                    updateItemQuantity(cart?.id, cart?.quantity + 1)
                  }
                >
                  +
                </button>
                <button onClick={() => removeItem(cart?.id)}>
                  remove from cart
                </button>
              </div>
            </div>
          );
        })}
        {!isEmpty && <hr />}
        {!isEmpty && (
          <div className="cartItems">
            <div>
              <p>TOTAL</p>
            </div>
            <div>
              <p>{totalItems} spaceShips</p>
            </div>
            <div>
              <p>{cartTotal}</p>
            </div>
            <div>
              <button onClick={emptyCart}>Clear cart</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
