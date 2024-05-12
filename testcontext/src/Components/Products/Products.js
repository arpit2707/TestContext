import React, { useContext } from "react";
import { Productctx } from "../../store/Productcontext";
import { Cartctx } from "../../store/Cartcontext";

const Products = () => {
  const prods = useContext(Productctx);
  const carts = useContext(Cartctx);

  const { products, addproducts } = prods;
  const { addChocs, addTwoChocs, addThreeChocs, items } = carts;
  return (
    <div>
      {products?.length > 0 &&
        products.map((item) => (
          <div>
            <p>{item.name}</p>
            <p>{item.description}</p>
            <p>{item.price}</p>
            <button
              onClick={() => {
                addChocs(item.id);
              }}
            >
              Buy One
            </button>
            <button
              onClick={() => {
                addChocs(item.id);
              }}
            >
              Buy Two
            </button>
            <button
              onClick={() => {
                addChocs(item.id);
              }}
            >
              Buy Three
            </button>
          </div>
        ))}
    </div>
  );
};
export default React.memo(Products);
