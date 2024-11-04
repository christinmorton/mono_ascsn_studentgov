import React from 'react'


import { GetSiteMenu } from '@/actions/GetSiteMenu'
import MenuList from '../MenuList';


const BottomFooter = async () => {
    const menu = await GetSiteMenu('footer-bottom-menu');
    return (
      <div>
        <MenuList menuList={menu} />
      </div>
    )
}

export default BottomFooter