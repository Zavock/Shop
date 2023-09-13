import React, {useContext} from 'react';
import Layout from '../../Components/Layout';
import { Link } from 'react-router-dom';
import OrdersCard from '../../Components/OrdersCard';
import {ShopContext} from '../../Context';

const MyOrders = () => {
  const {order} = useContext(ShopContext);
  return (
    <Layout>
      My Orders
      {
        order.map((orders, index) => (
          <Link key={index} to={`/my-orders/${index}`}>
            <OrdersCard {...orders} />
          </Link>
        ))
      }
    </Layout>
  );
}

export default MyOrders;
