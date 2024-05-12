import React, { Fragment, useContext, useState } from "react";
import { Productctx } from "../store/Productcontext";

const SellerForm = (props) => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState(0);
  const produc = useContext(Productctx);
  const { addproducts, products } = produc;
  return (
    <Fragment>
      <form
        className=" bg-orange-300 text-black flex m-1"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="grid  m-4">
          <label className="m-2">Candy Name</label>
          <input
            className="m-2"
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="grid m-4">
          <label className="m-2">Description</label>
          <input
            type="text"
            className="m-2"
            onChange={(e) => {
              setDesc(e.target.value);
            }}
          />
        </div>
        <div className="grid m-4">
          <label className="m-2">Price</label>
          <input
            type="text"
            className="m-2"
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </div>
        <button
          className="bg-gray-700 m-3 text-white p-2"
          onClick={() => {
            debugger;
            addproducts({
              id: products.length + 1,
              name: name,
              description: desc,
              price: price,
            });
          }}
        >
          Add
        </button>
      </form>
    </Fragment>
  );
};
export default SellerForm;
