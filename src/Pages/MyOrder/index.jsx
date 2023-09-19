import React, {useContext} from 'react';
import Layout from '../../Components/Layout';
import { Link } from 'react-router-dom';
import OrderCard from '../../Components/OrderCard';
import {ShopContext} from '../../Context';

const MyOrder = () => {
  const {order} = useContext(ShopContext);
  const pathSplitted = window.location.pathname.split('/');
  const orderId = pathSplitted[pathSplitted.length - 1];

  return (
    <Layout>
      <div className='flex items-center relative w-96 justify-center mt-3'>
        <Link to='/my-orders'>
          <button className='absolute left-0 bottom-0'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
        </Link>
        <h1 className='text-lg font-semibold'>My Order</h1>
      </div>
      
      <div className='flex flex-col px-3 gap-5 flex-1 w-[25rem] mt-4'>
        {
          orderId === 'last' ?
          (
            order?.slice(-1)[0].products.map((product) => (
              <OrderCard key={product.id} {...product} />
            ))
          )
          :
          (
            order?.[orderId]?.products.map((product) => (
              <OrderCard key={product.id} {...product} />
            ))
          )
        }
      </div>
    </Layout>
  );
}

export default MyOrder;
