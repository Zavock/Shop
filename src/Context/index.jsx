import { createContext, useState, useEffect } from 'react';

const ShopContext = createContext();

// eslint-disable-next-line react/prop-types
const ShopProvider = ({ children }) => {
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

  //State of orders
  const [order, setOrder] = useState([]);

  //State of products
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  //Get products by title
  const [searchByTitle, setSearchByTitle] = useState('');

  const [openSideBar, setOpenSideBar] = useState(false);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then((data) => {
        setProducts(data)
      })
  }, []);

  const filteredProductsByTitle = (products, searchByTitle) => {
    return products?.filter(product => product.title.toLowerCase().includes(searchByTitle.toLowerCase()))
  }

  useEffect(() => {
    if (searchByTitle.length > 0) {
      setFilteredProducts(filteredProductsByTitle(products, searchByTitle));
    } else {
      setFilteredProducts(products);
    }
  }, [products, searchByTitle]);

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
      shopCart,
      order,
      setOrder,
      products,
      setProducts,
      searchByTitle,
      setSearchByTitle,
      filteredProducts,
      openSideBar,
      setOpenSideBar
    }}>
      {children}
    </ShopContext.Provider>
  );
}

export { ShopProvider, ShopContext };
