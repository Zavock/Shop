import React, {useContext} from 'react';
import {ShopContext} from '../../Context';
import OrderCard from '../OrderCard';

const CheckoutDetail = () => {

  const {isCheckoutDetailOpen, closeCheckoutDetail, shopCart, setShopCart} = useContext(ShopContext);
  const handleChandeDelete = (id) => {
    const filteredProducts = shopCart.filter(product => product.id != id)
    setShopCart(filteredProducts)
  }

  return (
    <aside className={`${isCheckoutDetailOpen ? 'flex' : 'hidden'} flex-col top-[68px] shadow-2xl overflow-auto fixed right-0 border bg-white border-black rounded-lg w-[360px] h-[calc(100vh-68px)] z-10`}>
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>My Order</h2>
        <button onClick={() => closeCheckoutDetail()}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className='flex flex-col px-3 gap-5'>
        {
          shopCart.map((product) => (
            <OrderCard key={product.id} {...product} />
          ))
        }
      </div>
      
    </aside>


  );
  
}

export default CheckoutDetail;