import logo from "./logo.svg";
import SellerForm from "./Components/SellerForm";
import { Fragment, useState } from "react";
import ReactDOM from "react-dom";
import Modal from "./Components/Modal";
import Cart from "./Components/Cart/Cart";
import Cartcontext from "./store/Cartcontext";
import Productcontext from "./store/Productcontext";
import Products from "./Components/Products/Products";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  console.log("RERENDER");
  return (
    <Productcontext>
      <Cartcontext>
        <Fragment>
          <Modal isOpen={isModalOpen} onClose={closeModal} />
          <div className="flex justify-between bg-slate-400  ">
            <SellerForm />
            <Cart
              onOpen={() => {
                openModal();
              }}
            />
          </div>
          <div>
            <Products />
          </div>
        </Fragment>
      </Cartcontext>
    </Productcontext>
  );
}

export default App;
