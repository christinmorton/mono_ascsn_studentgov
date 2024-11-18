'use client'
import Link from 'next/link'
import React from 'react'

const StudentClubCard = ({club}) => {
  return (
    <div className='flex flex-col items-center justify-around p-6'>
        <h4>{club.Title}</h4>
        <Link href={`/student-clubs/${club.documentId}`}>Learn More</Link>
    </div>
  )
}

export default StudentClubCard