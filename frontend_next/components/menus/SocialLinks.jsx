import React from 'react'

import { GetSiteMenu } from '@/actions/GetSiteMenu'
import MenuList from '../MenuList';

const SocialLinks = async () => {
    const menu = await GetSiteMenu('social-link-menu');
    return (
      <div>
        <MenuList menuList={menu} />
      </div>
    )
}

export default SocialLinks