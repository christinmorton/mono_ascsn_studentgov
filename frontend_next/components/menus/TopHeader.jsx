import Link from 'next/link'
import React from 'react'
import MenuList from '../MenuList'


import { GetSiteMenu } from '@/actions/GetSiteMenu'

const TopHeader = async () => {
  const menu = await GetSiteMenu('top-header-menu');

  return (
    <div className='h-[121px] flex flex-row items-center justify-evenly text-[#004890]'>
      <MenuList menuList={menu} />
    </div>
  )
}

export default TopHeader