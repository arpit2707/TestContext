import React, { useContext } from "react";
import { Productctx } from "../../store/Productcontext";
import { Cartctx } from "../../store/Cartcontext";

const Products = () => {
  const prods = useContext(Productctx);
  const carts = useContext(Cartctx);

  const { products, addproducts } = prods;
  const { addChocs, addTwoChocs, addThreeChocs, items } = carts;
  return (
    <div className="">
      <div className="justify-center mx-8">
        <h1 className="font-bold text-3xl underline  ">PRODUCTS</h1>
      </div>
      <div>
        <ul className="flex">
          <li className="mx-2 my-3 px-2  font-bold">Name</li>
          <li className="mx-2 my-3 px-2  font-bold">Description</li>
          <li className="mx-2 my-3 px-2 font-bold">Price</li>
        </ul>
      </div>
      {products?.length > 0 && (
        <ul className="bg-slate-400 m-2 p-3 ">
          {products.map((item) => (
            <li className="flex  ">
              <div className="flex">
                <p className="mx-2 my-3 p-2">{item.name}</p>
                <p className="mx-2 my-3 p-2">{item.description}</p>
                <p className="mx-2 my-3 p-2">{`$` + item.price}</p>
              </div>
              <div>
                <button
                  className="mx-2 my-3 p-2 bg-slate-900 text-white border-2 rounded-xl"
                  onClick={() => {
                    addChocs(item.id);
                  }}
                >
                  Buy One
                </button>
                <button
                  className="mx-2 my-3 p-2  bg-slate-900 text-white border-2 rounded-xl "
                  onClick={() => {
                    addTwoChocs(item.id);
                  }}
                >
                  Buy Two
                </button>
                <button
                  className="mx-2 my-3 p-2  bg-slate-900 text-white border-2 rounded-xl "
                  onClick={() => {
                    addThreeChocs(item.id);
                  }}
                >
                  Buy Three
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default React.memo(Products);
