import { createContext, useState, useContext } from "react";
import { Productctx } from "./Productcontext";

export const Cartctx = createContext();
const Cartcontext = ({ children }) => {
  const [items, setItems] = useState([]);
  const prods = useContext(Productctx);
  const { products } = prods;

  const addChocs = (id) => {
    if (items.some((item) => item.id == id)) {
      items.map((it) => {
        if (it.id == id) {
          it.quantity += 1;
        }
      });
    } else {
      const ele = products.find((item) => item.id == id);
      setItems((prevState) => [...prevState, { name: ele.name, quantity: 1 }]);
    }
  };
  const addTwoChocs = (id) => {
    if (items.some((item) => item.id == id)) {
      items.map((it) => {
        if (it.id == id) {
          it.quantity += 2;
        }
      });
    } else {
      const ele = products.find((item) => item.id == id);
      setItems((prevState) => [...prevState, { name: ele.name, quantity: 1 }]);
    }
  };
  const addThreeChocs = (id) => {
    if (items.some((item) => item.id == id)) {
      items.map((it) => {
        if (it.id == id) {
          it.quantity += 3;
        }
      });
    } else {
      const ele = products.find((item) => item.id == id);
      setItems((prevState) => [...prevState, { name: ele.name, quantity: 1 }]);
    }
  };

  return (
    <Cartctx.Provider value={{ addChocs, addTwoChocs, addThreeChocs, items }}>
      {children}
    </Cartctx.Provider>
  );
};
export default Cartcontext;
