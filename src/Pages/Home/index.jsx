import React, { useState, useContext } from 'react';
import Layout from '../../Components/Layout';
import Card from '../../Components/Card';
import CardDetail from '../../Components/CardDetail';
import {ShopContext} from '../../Context';

const Home = () => {
  const {setSearchByTitle, filteredProducts} = useContext(ShopContext)
  const pathSplitted = window.location.pathname.split('/');
  let categoryId = pathSplitted[pathSplitted.length - 1];
  
  return (
    <Layout>
      <div className='mb-2 mt-3'>
        <h1 className='font-bold text-xl'>Our Products</h1> 
      </div>
      <input type='text' placeholder='Search product' className='rounded-lg border border-black w-80 p-2 mb-5 focus:outline-none' onChange={(e) => setSearchByTitle(e.target.value)} />
      <div className='grid justify-center gap-4 lg:grid-cols-4 w-full max-w-screen-lg sm:grid-cols-1'>
        {
          categoryId ? 
          (
            filteredProducts.filter(product => product.category === categoryId).map((product) => (
              <Card key={product.id} {...product} />
            ))
          )
          :
          (
            filteredProducts?.map((product) => (
              <Card key={product.id} {...product} />
            ))
          )
          
        }

        {
          categoryId.includes("clothing") ?
          (
            filteredProducts.filter(product => product.category.includes("clothing")).map((product) => (
              <Card key={product.id} {...product} />
            ))
          )
          :
          (
            null
          )
        }
      </div>
      <CardDetail />
    </Layout>
  );
}

export default Home;
