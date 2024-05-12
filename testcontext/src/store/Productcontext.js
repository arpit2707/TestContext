import React, { createContext, useState, useRef, useCallback } from "react";

export const Productctx = createContext();
const Productcontext = ({ children }) => {
  const [products, setProducts] = useState([]);
  const addproducts = useCallback((item) => {
    setProducts((prevState) => [...prevState, item]);
  });

  return (
    <Productctx.Provider value={{ addproducts, products }}>
      {children}
    </Productctx.Provider>
  );
};
export default React.memo(Productcontext);
