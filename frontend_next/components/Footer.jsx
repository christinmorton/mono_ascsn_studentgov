import React from 'react'

import { GetCSNLocations } from '@/actions/GetSiteMenu'

import Logo from './Logo'
import LeftFooter from './menus/LeftFooter'
import BottomFooter from './menus/BottomFooter'
import SocialLinks from './menus/SocialLinks'
import Tabs from './Tabs'


const Footer = async () => {
  const campuses = await GetCSNLocations('ASCSN Campus Locations');
  const learningCenters = await GetCSNLocations('ASCSN Learning Centers');
  // console.log(campuses, learningCenters)
  return (
    <footer
          id="site-footer"
          className="w-full flex flex-col items-center justify-between"
        >
           <div className='w-full flex flex-row'>
                <div className='w-[30%] bg-[#f9f1e2] p-4'>
                <Logo />
                <LeftFooter />
                </div>
                <div className='w-[70%] bg-[#004890] text-white'>
                  <Tabs campuses={campuses} learningCenters={learningCenters} />
                </div>
            </div>
            <div className='w-full flex flex-row items-center justify-between'>
                <p>&copy;2024 College of Southern Nevada</p>
                <BottomFooter/>
                <SocialLinks />
            </div>
        </footer>
  )
}

export default Footer