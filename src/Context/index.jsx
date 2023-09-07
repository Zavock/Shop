import React, { createContext, useState } from 'react';

const ShopContext = createContext();

const ShopProvider = ({children}) => {

  const [count, setCount] = useState(0);
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);
  const [productToShow, setProductToShow] = useState({});

  return (
    <ShopContext.Provider value={{
      count,
      setCount,
      openProductDetail,
      closeProductDetail,
      isProductDetailOpen,
      setProductToShow,
      productToShow
    }}>
      {children}
    </ShopContext.Provider>
  );
}

export {ShopProvider, ShopContext};
