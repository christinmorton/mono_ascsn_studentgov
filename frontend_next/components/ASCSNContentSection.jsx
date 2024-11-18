'use client'
import React from 'react'

const ASCSNContentSection = ({content}) => {
  return (
    <section>
        <h1>{content.Title}</h1>

        <p>{content.MarketingLead}</p>
    </section>
  )
}

export default ASCSNContentSection