import React, {useContext} from 'react';
import Layout from '../../Components/Layout';
import OrderCard from '../../Components/OrderCard';
import {ShopContext} from '../../Context';

const MyOrder = () => {
  const {order} = useContext(ShopContext);
  return (
    <Layout>
      My Order
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
