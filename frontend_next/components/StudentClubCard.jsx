'use client'
import Link from 'next/link'
import React from 'react'

const StudentClubCard = ({club}) => {
  return (
    <div className={`w-[225px] flex flex-col p-6 bg-[#004890] rounded-lg`}>
        <h4 className="text-2xl  text-yellow-300">{club.Title}</h4>
        <Link href={`/student-clubs/${club.documentId}`}><span className="my-2 pb-8 text-yellow-400">Learn More</span></Link>
    </div>
  )
}

export default StudentClubCard