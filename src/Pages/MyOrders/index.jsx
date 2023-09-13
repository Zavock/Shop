import React, {useContext} from 'react';
import Layout from '../../Components/Layout';
import { Link } from 'react-router-dom';
import OrdersCard from '../../Components/OrdersCard';
import {ShopContext} from '../../Context';

const MyOrders = () => {
  const {order} = useContext(ShopContext);
  return (
    <Layout>
      <div className='mb-2'>
        <h1>My Orders</h1> 
      </div>
      
      <div className='flex flex-col gap-3'>
        {
          order.map((orders, index) => (
            <Link key={index} to={`/my-orders/${index}`}>
              <OrdersCard {...orders} />
            </Link>
          ))
        }
      </div>
    </Layout>
  );
}

export default MyOrders;
