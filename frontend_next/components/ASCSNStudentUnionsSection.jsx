import React from 'react'
import ASCSNChildSection from './ASCSNChildSection'

const ASCSNStudentUnionsSection = ({content}) => {
    return (
        <section>
            <h1>{content.Title}</h1>
    
            <p>{content.MarketingLead}</p>

            {content.ChildSection.map((section, index) => (
                <ASCSNChildSection key={index} child={section} />
            ))}
        </section>
      )
}

export default ASCSNStudentUnionsSection