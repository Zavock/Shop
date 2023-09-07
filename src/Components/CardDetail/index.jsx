import React, {useContext} from 'react';
import {ShopContext} from '../../Context';

const CardDetail = () => {

  const {isProductDetailOpen, closeProductDetail, productToShow} = useContext(ShopContext);
  console.log('Product', productToShow)

  return (
    <aside className={`${isProductDetailOpen ? 'flex' : 'hidden'} flex-col top-[68px] fixed right-0 border bg-white border-black rounded-lg w-[360px] h-[calc(100vh-68px)] z-10`}>
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>Detail</h2>
        <button onClick={() => closeProductDetail()}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <figure className='px-6 '>
        <img className='w-full h-[18rem] shadow-2xl p-5 rounded-lg object-contain' src={productToShow.image} alt={productToShow.category} />
      </figure>
      <p className='flex flex-col p-6 gap-3'>
        <span className='font-medium text-2xl'>${productToShow.price}</span>
        <span className='font-medium text-xl'>{productToShow.title}</span>
        <span className='font-light text-lg'>{productToShow.description}</span>
      </p>
    </aside>


  );
  
}

export default CardDetail;
