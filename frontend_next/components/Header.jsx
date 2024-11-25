import React from 'react'

// import Link from 'next/link';

import TopHeader from './menus/TopHeader'
import BottomHeader from './menus/BottomHeader'
import Logo from './Logo'
import UserHeader from './UserHeader'



const Header = async () => {
    // const siteHeader = await fetch('http://localhost:1337/api/site-header?populate=*', {cache: 'force-cache'})
    // const siteHeader = await fetch('http://localhost:1337/api/site-header?populate=*')
    // let data = await siteHeader.json();
    // let headerBottomMenu, headerTopMenu;

    // headerTopMenu = data.data.header_top_menu.documentId;
    // headerBottomMenu = data.data.header_bottom_menu.documentId;

    // let tempMenu1 = await fetch(`http://localhost:1337/api/menus/${headerTopMenu}?populate=*`)
    // let tempMenu2 = await fetch(`http://localhost:1337/api/menus/${headerBottomMenu}?populate=*`)

    // tempMenu1 = await tempMenu1.json();
    // tempMenu2 = await tempMenu2.json();

    // let topMenuList = tempMenu1.data.MenuItems;
    // let bottomMenuList = tempMenu2.data.MenuItems;

    // console.log(topMenuList, bottomMenuList)

    return (
        <header
            id="site-header"
            className="w-full flex flex-col"
        >
            <div className='flex flex-row items-center justify-between p-4'>
                <Logo />
                <TopHeader />
            </div>
            <div className='w-full flex flex-row items-center justify-start p-0 m-0'>
                <BottomHeader />
            </div>
            <div className='w-full flex flex-row items-center justify-start p-0 m-0'>
                <UserHeader />
            </div>
        </header>
    )
}

export default Header