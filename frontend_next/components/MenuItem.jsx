'use client';
import Link from 'next/link'
import React, { useState } from 'react'

//  className='bg-[#f9f1e2] px-4'

const MenuItem = ({menuitem, index, specialBackground}) => {
  const render = () => {
    if(menuitem.Label === 'Apply' | menuitem.Label === 'Request Info') return 'bg-[#f9f1e2]'
    else return ''

  }
  return (
    <Link href={menuitem.URL} className={`p-2 ${render()}`}>{menuitem.Label}</Link>
  )
}

export default MenuItem