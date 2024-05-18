import ReactDOM from "react-dom";
import React, { useContext } from "react";
import { Cartctx } from "../store/Cartcontext";

const Modal = ({ isOpen, onClose }) => {
  const carts = useContext(Cartctx);
  const { items, total, addItem, removeItem } = carts;
  console.log(items);
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-80"></div>
      <div className="relative z-10 bg-zinc-400  rounded-lg items-center">
        {/* <div className="bg-zinc-700  ">
          <header className="text-xl text-slate-300 font-bold mb-4">
            Cart
          </header>
        </div> */}

        <div className="p-8">
          {items?.length > 0 && (
            <ul>
              {items.map((item) => (
                <li className="flex">
                  <div className="flex items-center">
                    <p className="mx-2">{item.name}</p>
                    {/* <p className="mx-2">{item.description}</p> */}
                    <p className="mx-2">{item.quantity}</p>
                    <button
                      onClick={() => {
                        removeItem(item.id);
                      }}
                      className="mx-2 p-2 w-8 bg-slate-900 border-2 rounded-xl text-white"
                    >
                      -
                    </button>
                    <button
                      onClick={() => {
                        addItem(item.id);
                      }}
                      className="mx-2 p-2 w-8 bg-slate-900 border-2 rounded-xl text-white"
                    >
                      +
                    </button>
                  </div>

                  {/* <button>Buy Three</button> */}
                  <div></div>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="flex px-4 py-2 items-center ">
          <p className="text-xl mx-3">Total Amount</p>
          <p className="mx-3">{`$` + total}</p>
        </div>
        <div className="p-2">
          <button
            className="mx-3 mt-4 px-4 py-2 bg-blue-500 text-white border-2 rounded-xl hover:bg-blue-600"
            onClick={onClose}
          >
            Close
          </button>
          <button className="mx-3 mt-4 px-4 py-2  text-white border-2 rounded-xl hover:bg-blue-600">
            Order
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
