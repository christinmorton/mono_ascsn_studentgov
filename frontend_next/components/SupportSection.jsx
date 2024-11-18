import React from 'react'

const SupportSection = ({content}) => {
    return (
        <section>
            <h1>{content.Title}</h1>
    
            <p>{content.MarketingLead}</p>
        </section>
      )
}

export default SupportSection