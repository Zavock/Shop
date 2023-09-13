import React, {useContext} from 'react';
import Layout from '../../Components/Layout';
import { Link } from 'react-router-dom';
import OrderCard from '../../Components/OrderCard';
import {ShopContext} from '../../Context';

const MyOrder = () => {
  const {order} = useContext(ShopContext);
  return (
    <Layout>
      <div className='flex items-center relative w-80 justify-center'>
        <Link to='/my-orders'>
          <button className='absolute left-0 bottom-0'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
        </Link>
        <h1>My Order</h1>
      </div>
      
      <div className='flex flex-col px-3 gap-5 flex-1 w-[31rem] mt-3'>
        {
          order?.slice(-1)[0].products.map((product) => (
            <OrderCard key={product.id} {...product} />
          ))
        }
      </div>
    </Layout>
  );
}

export default MyOrder;
