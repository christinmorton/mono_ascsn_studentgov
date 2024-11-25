'use client'
import React from 'react'

const ASCSNContentSection = ({content}) => {
  return (
    <section className="flex flex-col w-full my-16">
      {content.Title === 'Fall ASCSN Meetings' ? (null) : (
        <div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed w-9/12 sm:w-6/12 lg:w-4/12 mx-auto text-center text-white">{content.Title}</h1>

          <p className="leading-normal  mx-auto my-2 w-10/12 sm:w-7/12 lg:w-6/12 text-center text-white">{content.MarketingLead}</p>
        </div>
      )}
    </section>
  )
}

export default ASCSNContentSection