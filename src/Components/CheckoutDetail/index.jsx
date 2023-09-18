import React, {useContext} from 'react';
import {ShopContext} from '../../Context';
import OrderCard from '../OrderCard';
import { sumTotalPrice } from '../../Utils';
import { Link } from 'react-router-dom';

const CheckoutDetail = () => {
  const {isCheckoutDetailOpen, closeCheckoutDetail, setShopCart, shopCart, setOrder, order, setCount, count} = useContext(ShopContext);
  const handleChandeDelete = (id, quantity) => {
    const filteredProducts = shopCart.filter(product => product.id != id)
    const filterQuantity = shopCart.filter(product => product.quantity > 1)
    setShopCart(filteredProducts)
    if (filterQuantity) {
      setCount(count - quantity)
    }else {
      setCount(count - 1)
    }
  }

  const handleCheckout = () => {
    const orderToAdd = {
      date: new Date().toLocaleDateString(),
      products: shopCart,
      totalProducts: shopCart.length,
      totalPrice: Math.trunc(sumTotalPrice(shopCart))
    }

    setOrder([...order, orderToAdd])
    setShopCart([])
    setCount(0)
    closeCheckoutDetail()
  }

  return (
    <div className={`${isCheckoutDetailOpen ? 'flex' : 'hidden'} flex-col top-0 shadow-2xl overflow-auto fixed right-0 border bg-white rounded-lg w-full min-h-screen z-10`}>
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>My Order</h2>
        <button onClick={() => closeCheckoutDetail()} className='transition duration-300 hover:scale-125 hover:text-red-600'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className='flex flex-col px-3 gap-5 flex-1'>
        {
          shopCart.length > 0 ?
          (
            shopCart.map((product) => (
              <OrderCard key={product.id} {...product} handleChandeDelete={handleChandeDelete}/>
            ))
          )
          :
          (
            <p className='font-semibold text-lg text-center'>There isn't products</p>
          )
        }
      </div>
      <div className='px-3 mb-5 mt-2 items-center'>
        <p className='flex justify-between mb-2'>
          <span className='font-light text-xl'>Total:</span>
          <span className='font-semibold text-2xl'>${Math.trunc(sumTotalPrice(shopCart))}</span>
        </p>
        <Link to='/my-orders/last'>
          <button onClick={() => handleCheckout()} className='bg-black text-white py-3 w-full rounded-lg transition duration-300 hover:bg-white hover:text-black hover:border hover:border-black'>
            Checkout
          </button>
        </Link>
        
      </div>
    </div>
  );
}

export default CheckoutDetail;