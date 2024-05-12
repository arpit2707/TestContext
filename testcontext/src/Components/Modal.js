import ReactDOM from "react-dom";
import React, { useContext } from "react";
import { Cartctx } from "../store/Cartcontext";

const Modal = ({ isOpen, onClose }) => {
  const carts = useContext(Cartctx);
  const { items } = carts;
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-80"></div>
      <div className="relative z-10 bg-white p-8 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Modal Title</h2>
        <p className="text-gray-700">Modal Content</p>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={onClose}
        >
          Close Modal
        </button>
        <div>
          {items?.length > 0 &&
            items.map((item) => (
              <div>
                <p>{item.name}</p>
                <p>{item.description}</p>
                <p>{item.price}</p>
                <button>-</button>
                <button>+</button>
                {/* <button>Buy Three</button> */}
              </div>
            ))}
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
