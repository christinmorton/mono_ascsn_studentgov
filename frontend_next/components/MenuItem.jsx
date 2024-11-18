'use client';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React, { useState } from 'react'

//  className='bg-[#f9f1e2] px-4'

const isActive = (path, route) => {
  if(route === '/dashboard')
    return path === '/dashboard'
    else {
      return  path.includes(route)
  }
}

const MenuItem = ({menuitem, index, specialBackground}) => {
  const path = usePathname()
  const activeClass = 'bg-primary hover:bg-primary'
  const render = () => {
    if(menuitem.Label === 'Apply' | menuitem.Label === 'Request Info') return 'bg-[#f9f1e2]'
    else return ''

  }
  return (
    <Link href={menuitem.URL} className={`w-full h-full py-2 px-2 hover:bg-content1 rounded-lg ${
      isActive(path, menuitem.URL) ? activeClass : '' 
    }`}>{menuitem.Label}</Link>
  )
}

export default MenuItem