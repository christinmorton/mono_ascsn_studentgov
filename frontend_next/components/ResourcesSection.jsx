import React from 'react'

const ResourcesSection = ({content}) => {
    return (
        <section>
            <h1>{content.Title}</h1>
    
            <p>{content.MarketingLead}</p>
        </section>
      )
}

export default ResourcesSection