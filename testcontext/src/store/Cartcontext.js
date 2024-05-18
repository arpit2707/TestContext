import { createContext, useState, useContext, useEffect } from "react";
import { Productctx } from "./Productcontext";

export const Cartctx = createContext();

const Cartcontext = ({ children }) => {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  const prods = useContext(Productctx);
  const { products } = prods;

  useEffect(() => {
    console.log(items);
    let tot = +items.reduce((acc, it) => acc + it.quantity * it.price, 0);
    setTotal((prevState) => tot);
  }, [items]);

  const addChocs = (id) => {
    setItems((prevItems) => {
      const itemExists = prevItems.some((item) => item.id === id);
      if (itemExists) {
        return prevItems.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        const product = products.find((item) => item.id === id);
        return [
          ...prevItems,
          {
            id: id,
            name: product.name,
            description: product.description,
            quantity: 1,
            price: product.price,
          },
        ];
      }
    });
  };

  const addTwoChocs = (id) => {
    setItems((prevItems) => {
      const itemExists = prevItems.some((item) => item.id === id);
      if (itemExists) {
        return prevItems.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 2 } : item
        );
      } else {
        const product = products.find((item) => item.id === id);
        return [
          ...prevItems,
          {
            id: id,
            name: product.name,
            description: product.description,
            quantity: 2,
            price: product.price,
          },
        ];
      }
    });
  };

  const addThreeChocs = (id) => {
    setItems((prevItems) => {
      const itemExists = prevItems.some((item) => item.id === id);
      if (itemExists) {
        return prevItems.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 3 } : item
        );
      } else {
        const product = products.find((item) => item.id === id);
        return [
          ...prevItems,
          {
            id: id,
            name: product.name,
            description: product.description,
            quantity: 3,
            price: product.price,
          },
        ];
      }
    });
  };

  const addItem = (id) => {
    setItems((prevState) =>
      prevState.map((item) =>
        item.id == id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const removeItem = (id) => {
    let element = items.some((item) => item.id == id && item.quantity == 1);
    if (element) {
      setItems((prevState) => prevState.filter((item) => item.id != id));
    } else {
      setItems((prevState) =>
        prevState.map((item) =>
          item.id == id ? { ...item, quantity: item.quantity - 1 } : item
        )
      );
    }
  };
  return (
    <Cartctx.Provider
      value={{
        addChocs,
        addTwoChocs,
        addThreeChocs,
        items,
        total,
        addItem,
        removeItem,
      }}
    >
      {children}
    </Cartctx.Provider>
  );
};

export default Cartcontext;
