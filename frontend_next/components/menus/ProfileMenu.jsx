import Link from 'next/link'
import React from 'react'


import { Logout } from '@/actions/Auth'

const ProfileMenu = () => {
  return (
    <div className='w-full h-[75px] bg-[#004890] text-white flex flex-row items-center justify-evenly'>
        <Link href={'/dashboard'}>dashboard</Link>
        {/* <Link href={'/dashboard/profile'}>Profile</Link> */}
        <Link href={'/surveys'}>Surveys</Link>
        {/* <Link href={'/student-clubs/me'}>My Club Feed</Link> */}
        <button onClick={Logout}>log out</button>
    </div>
  )
}

export default ProfileMenu