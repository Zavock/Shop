import React, { useContext } from 'react';
import {ShopContext} from '../../Context';


const Card = ({category, image, title, price, description, id}) => {
  const {count, setCount, openProductDetail, openCheckoutDetail, closeCheckoutDetail, closeProductDetail, setProductToShow, setShopCart, shopCart} = useContext(ShopContext);

  const showProduct = (details) => {
    openProductDetail()
    setProductToShow(details)
    closeCheckoutDetail()
  }

  const addProductToCart = (productData) => {
    const productExists = shopCart.some(product => product.id === productData.id); // dará true si el producto ya se encuentra en el carrito

		if (productExists) {
			// valida la existencia
			const productCart = shopCart.find(product => product.id === productData.id); // busca el producto
			productCart.quantity += 1; // aumenta la cantidad en 1
		} else {
			productData.quantity = 1;
      setShopCart([...shopCart, productData])
    }
    setCount(count + 1)
    openCheckoutDetail()
    closeProductDetail()
  }

  return (
    <div onClick={() => showProduct({category, image, title, price, description})} className='bg-white cursor-pointer w-56 h-60 rounded-lg border shadow-xl p-3'>
      <figure className='relative mb-2 w-full h-4/5'>
        <span className='absolute bottom-0 left-0 bg-white/75 rounded-lg text-black text-sm shadow-lg m-2 px-3 py-0.5'>{category}</span>
        <img className='w-full h-full object-cover rounded-lg ' src={image} alt={category}></img>
        <button className='absolute top-0 right-0 flex justify-center items-center transition duration-300 hover:scale-125 bg-white/90 shadow-lg font-semibold w-6 h-6 rounded-full m-2 p-1' onClick={(e) => {
          addProductToCart({category, image, title, price, description, id})
          e.stopPropagation()
          }}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </button>
      </figure>
      <p className='flex justify-between'>
        <span className='text-sm font-light truncate'>{title}</span>
        <span className='text-lg font-medium'>${price}</span>
      </p>
    </div>
  );
}

export default Card;
