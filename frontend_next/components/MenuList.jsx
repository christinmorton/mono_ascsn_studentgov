'use client';
import Link from 'next/link';
import React from 'react'

import MenuItem from './MenuItem';
// import { HiMagnifyingGlassCircle } from "react-icons/hi2";
import { FaMagnifyingGlass } from "react-icons/fa6";

const MenuList = ({menuList, search}) => {
  const totalItems = menuList.length;
  return (
    <nav className='w-full flex flex-row items-center justify-evenly p-6'>
      {menuList.MenuItems.map((item, index) => 
        (<MenuItem key={index} menuitem={item} index={index} specialBackground={index >= totalItems - 2} />)
      )}
      {search && <div className='h-[80px] w-[80px] flex flex-col items-center justify-center rounded-full bg-[#ffd200] p-4'><FaMagnifyingGlass size={56} fill='#004890' /></div>}
    </nav>
  )
}

export default MenuList