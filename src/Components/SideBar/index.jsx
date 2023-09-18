import React,{useContext} from 'react';
import { NavLink } from 'react-router-dom';
import {ShopContext} from '../../Context';

const SideBar = () => {
  const activeStyle = 'bg-black text-white p-5 rounded-lg transition duration-300'
  const {openSideBar, setOpenSideBar} = useContext(ShopContext)
  return (
    <div className='bg-gray-100 min-h-screen w-full fixed p-4 top-0 left-0 right-0 flex flex-col items-center gap-4'>
      <div className='flex items-center relative border-b pb-3 border-b-black w-full justify-center'>
        <span className='text-2xl text-center font-semibold'>Shopi</span>
        <button onClick={() => setOpenSideBar(false)} className='absolute right-0'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div onClick={() => setOpenSideBar(false)} className='text-lg font-medium border border-black w-full text-center p-2 mt-5'>
        <NavLink to='/' className={({ isActive }) => isActive ? activeStyle : undefined}>
          All
        </NavLink>
      </div>
      <div onClick={() => setOpenSideBar(false)} className='text-lg font-medium border border-black w-full text-center p-2'>
        <NavLink to='/electronics' className={({ isActive }) => isActive ? activeStyle : undefined}>
          Electronics
        </NavLink>
      </div>
      <div onClick={() => setOpenSideBar(false)} className={` text-lg font-medium border border-black w-full text-center p-2`}>
        <NavLink to='/jewelery' className={({ isActive }) => isActive ? activeStyle : undefined}>
          Jewelery
        </NavLink>
      </div>
      <div onClick={() => setOpenSideBar(false)} className='text-lg font-medium border border-black w-full text-center p-2 items-center'>
        <NavLink to="/clothing" className={({ isActive }) => isActive ? activeStyle : undefined}>
          Clothing
        </NavLink>
      </div>
    </div>  
  );
}

export default SideBar;
