'use client'
import Link from 'next/link'
import React from 'react'

const SurveyCard = ({survey}) => {
    return (
        <div>
            <Link href={`/surveys/${survey.documentId}`}><h1>{survey.Title}</h1></Link>
            {/* <p>{survey.Description}</p> */}
        </div>
    )
}

export default SurveyCard