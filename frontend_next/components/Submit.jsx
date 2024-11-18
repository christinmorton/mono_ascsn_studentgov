'use client'
import React from 'react'
import {useFormStatus} from 'react-dom'

const Submit = ({label}) => {
  const {pending} =  useFormStatus();
  return (
    <button>Submit</button>
  )
}

export default Submit