import React, {useContext} from 'react';

const OrderCard = ({ image, title, price, id, quantity, handleChandeDelete }) => {
  return (
    <div className='flex justify-between rounded-lg border p-2 shadow-md transition duration-300 hover:-translate-y-1'>
      <div className='flex items-center justify-center gap-3'>
        <figure className='h-20 w-20'>
          <img className='w-full h-full object-contain' src={image} alt='' />
        </figure>
        <div className='flex flex-col gap-2'>
            <span className='text-base font-light line-clamp-1'>{title}</span>
            <div className='flex items-center gap-1 border w-fit px-3 rounded-lg'>
              <span>{quantity}</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
              </svg>
            </div>
        </div>
      </div>
      <div className={`flex flex-col items-end ${handleChandeDelete ? 'justify-between' : 'justify-end'}`}>
        {
          handleChandeDelete ?
          (<button onClick={() => handleChandeDelete(id, quantity)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 transition duration-300 hover:scale-110 hover:text-red-600">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>
          </button>)
          :
          null
        }
        <span className='text-base font-semibold'>${Math.trunc(price) * Math.trunc(quantity)}</span>
      </div>
    </div>
  );
}

export default OrderCard;
