import React from 'react'

import { GetAllSurveys } from '@/actions/GetSurveys'
import SurveyCards from '@/components/SurveyCards';

// import { GetCurrentStudent } from '@/actions/StudentActions'
// import { redirect } from 'next/navigation'

const SurveyPage = async () => {
    const surveys = await GetAllSurveys();
  return (
    <main className='max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto'>
        <div className='w-full flex flex-col items-center bg-blue-600 p-4 rounded-lg rounded-b-none'>
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-white leading-normal py-4">Surveys</h1>
            <p className="w-[625px] my-2 pb-8 text-white text-center">Here are current surveys by the student Government.</p>
        </div>
            <div className='bg-blue-300 rounded-b-lg'><SurveyCards surveys={surveys} /></div>
    </main>
  )
}

export default SurveyPage