import React, { Fragment, useContext, useState, useRef } from "react";
import { Productctx } from "../store/Productcontext";

const SellerForm = (props) => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState(0);
  const produc = useContext(Productctx);
  const nameRef = useRef("");
  const descRef = useRef("");
  const priceRef = useRef("");
  const { addproducts, products } = produc;
  return (
    <Fragment>
      <form
        className="  text-black flex m-1"
        onSubmit={(e) => {
          e.preventDefault();
          nameRef.current.value = "";
          descRef.current.value = "";
          priceRef.current.value = "";
        }}
      >
        <div className="grid  m-4">
          <label className="m-2">Candy Name</label>
          <input
            className="m-1 border-2 rounded-xl"
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
            ref={nameRef}
          />
        </div>
        <div className="grid m-4">
          <label className="m-2 ">Description</label>
          <input
            type="text"
            className="m-1 border-2 rounded-xl"
            onChange={(e) => {
              setDesc(e.target.value);
            }}
            ref={descRef}
          />
        </div>
        <div className="grid m-4">
          <label className="m-2">Price</label>
          <input
            type="text"
            className="m-1 border-2 rounded-xl"
            onChange={(e) => {
              setPrice(e.target.value);
            }}
            ref={priceRef}
          />
        </div>
        <div className="grid">
          <button
            className="bg-gray-700 mx-3 my-10 px-6  text-white justify-center border-2 rounded-xl"
            onClick={() => {
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
        </div>
      </form>
    </Fragment>
  );
};
export default SellerForm;
