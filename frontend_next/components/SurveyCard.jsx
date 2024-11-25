'use client'
import Link from 'next/link'
import React from 'react'

const SurveyCard = ({survey}) => {
    return (
        <div className='flex flex-col items-center justify-center bg-yellow-300 p-6 rounded-xl'>
            <h1>{survey.Title}</h1>
            <Link href={`/surveys/${survey.documentId}`}><span className="my-2 pb-8 text-[#004890]">Take Survey</span></Link>
        </div>
    )
}

export default SurveyCard