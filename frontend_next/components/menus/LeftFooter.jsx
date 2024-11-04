import React from 'react'


import { GetSiteMenu } from '@/actions/GetSiteMenu'
import MenuList from '../MenuList';

const LeftFooter = async () => {
    const menu = await GetSiteMenu('footer-left-menu');
    return (
      <div>
        <MenuList menuList={menu} />
      </div>
    )
}

export default LeftFooter