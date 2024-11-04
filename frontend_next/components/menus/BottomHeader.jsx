import React from 'react'

import { GetSiteMenu } from '@/actions/GetSiteMenu'
import MenuList from '../MenuList';


const BottomHeader = async () => {
    const menu = await GetSiteMenu('bottom-header-menu');
    return (
      <div className='w-full h-[131px] bg-[#004890] text-white'>
        <MenuList menuList={menu} search={true}/>
      </div>
    )
}

export default BottomHeader