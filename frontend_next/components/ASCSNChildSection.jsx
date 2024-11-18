import React from 'react'

const ASCSNChildSection = ({child}) => {
  return (
    <div>
        <h1>{child.Heading}</h1>
        <p>{child.PlainTextDescription}</p>
    </div>
  )
}

export default ASCSNChildSection