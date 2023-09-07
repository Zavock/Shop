import React, { createContext, useState } from 'react';

const ShopContext = createContext();

const ShopProvider = ({children}) => {
  const [count, setCount] = useState(0);
  return (
    <ShopContext.Provider value={{
      count,
      setCount
    }}>
      {children}
    </ShopContext.Provider>
  );
}

export {ShopProvider, ShopContext};
