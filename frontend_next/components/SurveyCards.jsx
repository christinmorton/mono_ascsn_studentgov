import React from 'react'
import SurveyCard from './SurveyCard';

const SurveyCards = ({surveys}) => {
    return (
      <div className='w-full flex flex-row items-center justify-evenly p-6'>
        {surveys.map((item, index) => 
          (<SurveyCard key={index} survey={item} />)
        )}
      </div>
    )
}

export default SurveyCards