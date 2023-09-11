import React, { createContext, useState } from 'react';

const ShopContext = createContext();

const ShopProvider = ({children}) => {
  //State of cart
  const [count, setCount] = useState(0);
  const [shopCart, setShopCart] = useState([]);

  //State of product detail
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);

  //State of checkout detail
  const [isCheckoutDetailOpen, setIsCheckoutDetailOpen] = useState(false);
  const openCheckoutDetail = () => setIsCheckoutDetailOpen(true);
  const closeCheckoutDetail = () => setIsCheckoutDetailOpen(false);

  //State of product to show in section of product detail
  const [productToShow, setProductToShow] = useState({});

  return (
    <ShopContext.Provider value={{
      count,
      setCount,
      openProductDetail,
      closeProductDetail,
      isProductDetailOpen,
      openCheckoutDetail,
      closeCheckoutDetail,
      isCheckoutDetailOpen,
      setProductToShow,
      productToShow,
      setShopCart,
      shopCart
    }}>
      {children}
    </ShopContext.Provider>
  );
}

export {ShopProvider, ShopContext};
