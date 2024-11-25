import React from 'react'
import { cookies } from 'next/headers';
import { COOKIE_NAME } from '@/utils/constants';


// import UserMenu from './menus/UserMenu'
// import { GetUserToken } from '@/actions/UserActions'
import ProfileMenu from './menus/ProfileMenu';
import ASCSNNavigation from './menus/ASCSNNavigation';


const UserHeader = async () => {
  const cookieStore = await cookies();
  const hasToken = await cookieStore.has(COOKIE_NAME); 

  return (
    <div className='w-full flex flex-row items-center justify-between'>
      <div className={`${!hasToken ? 'w-[100%]' : 'w-[60%]'} flex flex-row`}>
        <ASCSNNavigation />
      </div>
      {hasToken && (
        <div className='w-[40%]'>
          <ProfileMenu />
        </div>
      )}
      
    </div>
  )
}

export default UserHeader