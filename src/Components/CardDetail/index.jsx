import React, {useContext} from 'react';
import {ShopContext} from '../../Context';

const CardDetail = () => {

  const {isProductDetailOpen, closeProductDetail, productToShow} = useContext(ShopContext);

  return (
    <aside className={`${isProductDetailOpen ? 'flex' : 'hidden'} flex-col top-0 lg:top-[68px] shadow-2xl fixed right-0 border lg:border-black bg-white rounded-lg w-full lg:w-[360px] min-h-screen lg:min-h-0 lg:h-[calc(100vh-68px)] z-10`}>
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>Detail</h2>
        <button onClick={() => closeProductDetail()} className='transition duration-300 hover:scale-125 hover:text-red-600'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <figure className='px-6'>
        <img className='w-full h-[18rem] shadow-lg p-5 rounded-lg object-contain border border-black' src={productToShow.image} alt={productToShow.category} />
      </figure>
      <p className='flex flex-col p-6 gap-3'>
        <span className='font-medium text-2xl'>${Math.trunc(productToShow.price)}</span>
        <span className='font-medium text-xl'>{productToShow.title}</span>
        <span className='font-light text-lg'>{productToShow.description}</span>
      </p>
    </aside>


  );
  
}

export default CardDetail;
