import React from 'react'

import { GetSiteMenu } from '@/actions/GetSiteMenu'
// import MenuList from '../MenuList';
import Item from '../Item';

const LeftFooter = async () => {
    const menu = await GetSiteMenu('footer-left-menu');
    console.log(menu)
    return (
      <div className='grid grid-cols-2 justify-between p-12 gap-6'>
        {menu.MenuItems.map((item, index) => 
        (<Item key={index} item={item} index={index}  />)
      )}
      </div>
    )
}

export default LeftFooter