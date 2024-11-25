'use client'
import Image from 'next/image'
import React from 'react'

import profileIcon from '@/assets/vendor_assets/freepik_template/slice1.svg'

const StudentGovernmentCard = ({member, noTitle = true}) => {
  return (
    <div>
        <Image src={profileIcon} layout="responsive"
              quality={100}
              height={400}
              width={300} alt='Example of student body profile picture' />
        {noTitle ? (<h1>{member.title}</h1>) : (null)}
        <p>{member.member_name}</p>
    </div>
  )
}

export default StudentGovernmentCard