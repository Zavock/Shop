import React, {useContext} from 'react';

const OrdersCard = ({ totalPrice, totalProducts, date }) => {
  return (
    <div className='flex justify-between rounded-lg border p-2 shadow-md transition duration-300 hover:-translate-y-1'>
      <p>
        <span>{ date }</span>
        <span>{ totalPrice }</span>
        <span>{ totalProducts }</span>
      </p>
    </div>
  );
}

export default OrdersCard;