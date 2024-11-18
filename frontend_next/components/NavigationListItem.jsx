'use client';
import Link from 'next/link';
import React from 'react'

const NavigationListItem = ({item, key = null}) => {
  return (
    <Link key={key} href={item.URL} className={`px-8`}>{item.Label}</Link>
  )
}

export default NavigationListItem