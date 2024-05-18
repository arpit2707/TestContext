import React, { useContext, useEffect } from "react";
import { Cartctx } from "../../store/Cartcontext";

const Cart = (props) => {
  const ctx = useContext(Cartctx);

  const totalItems = ctx.items.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    console.log("Items have changed. Total items:", totalItems);
  }, [totalItems]);
  return (
    <div className=" mx-2 my-2 border-2 border-slate-950 rounded-xl  ">
      <button
        className=" text-white h-7 bg-slate-950 mx-2 my-2 px-2 border-2 rounded-xl justify-center"
        onClick={props.onOpen}
      >
        Items
      </button>
      <p
        className="h-8 text-white text-center  text-xl mx-2 my-2 px-2 border-2 border-slate-950 rounded-xl"
        onClick={props.onOpen}
      >
        {totalItems}
      </p>
    </div>
  );
};

export default Cart;
