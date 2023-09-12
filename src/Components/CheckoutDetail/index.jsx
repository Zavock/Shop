import React, {useContext} from 'react';
import {ShopContext} from '../../Context';
import OrderCard from '../OrderCard';
import { sumTotalPrice } from '../../Utils';

const CheckoutDetail = () => {
  const {isCheckoutDetailOpen, closeCheckoutDetail, shopCart} = useContext(ShopContext);

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
      <div className='flex gap-2 justify-between px-3 mt-3 items-center'>
        <span className='font-light text-xl'>Total:</span>
        <span className='font-semibold text-2xl'>${Math.trunc(sumTotalPrice(shopCart))}</span>
      </div>
    </aside>
  );
}

export default CheckoutDetail;