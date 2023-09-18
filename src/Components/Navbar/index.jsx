import React, {useContext} from 'react';
import { NavLink } from 'react-router-dom';
import {ShopContext} from '../../Context';
import SideBar from '../SideBar';


const Navbar = () => {
  const {count, openCheckoutDetail, openSideBar, setOpenSideBar} = useContext(ShopContext)
  return (
    <nav className='bg-white flex justify-between z-10 top-0 w-full py-5 shadow-md px-5 text-sm fixed animate-slide-down'>
      <ul className='flex gap-6 justify-center'>
        <li >
          <button onClick={() => setOpenSideBar(true)} className='rounded-full border shadow-md p-1'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </li>
        <li className='font-semibold text-3xl'>
          <NavLink to='/' >
            Shopi
          </NavLink>
        </li>
        {/* <li className='font-semibold text-lg'>
          <NavLink to='/' >
            Shopi
          </NavLink>
        </li>
        <li>
          <NavLink to='/' className={({ isActive }) => isActive ? activeStyle : undefined}>
            All
          </NavLink>
        </li>
        <li>
          <NavLink to='/electronics' className={({ isActive }) => isActive ? activeStyle : undefined}>
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink to='/jewelery' className={({ isActive }) => isActive ? activeStyle : undefined}>
            Jewelery
          </NavLink>
        </li>
        <li>
          <NavLink to="/clothing" className={({ isActive }) => isActive ? activeStyle : undefined}>
            Clothing
          </NavLink>
        </li>
      </ul>
      <ul className='flex items-center gap-4'>
        <li className='text-black/60'>
          zule@hotmail.com
        </li>
        <li>
          <NavLink to='/my-orders' className={({ isActive }) => isActive ? activeStyle : undefined}>
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink to='/my-account' className={({ isActive }) => isActive ? activeStyle : undefined}>
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink to='/signin' className={({ isActive }) => isActive ? activeStyle : undefined}>
            Sign In
          </NavLink>
        </li>
        <li className='flex items-center relative gap-1'>
          <button onClick={() => openCheckoutDetail()}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
          </button>
          <span className='absolute bottom-3 left-3 bg-black text-xs rounded-full px-1 text-white '>
            {count}
          </span>
        </li> */}
      </ul>
      <ul className='flex gap-6 justify-center'>
        <li className='flex items-center relative gap-1'>
          <button onClick={() => openCheckoutDetail()}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
          </button>
          <span className='absolute bottom-5 left-6 bg-black text-xs rounded-full px-1 text-white '>
            {count}
          </span>
        </li>
      </ul>
      {
        openSideBar ? 
        (
          <SideBar />
        )
        :
        (
          null
        )
      }
    </nav>
  );
}

export default Navbar;
