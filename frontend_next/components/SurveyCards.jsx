import React from 'react'
import SurveyCard from './SurveyCard';

const SurveyCards = ({surveys}) => {
    return (
      <div className='w-full grid grid-cols-4 gap-4 justify-between  p-6'>
        {surveys.map((item, index) => 
          (<SurveyCard key={index} survey={item} bgColor={index % 2 === 0 ? '#FFD200' : '#004890'} />)
        )}
      </div>
    )
}

export default SurveyCards