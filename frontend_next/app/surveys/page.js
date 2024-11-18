import React from 'react'

import { GetAllSurveys } from '@/actions/GetSurveys'
import SurveyCards from '@/components/SurveyCards';

// import { GetCurrentStudent } from '@/actions/StudentActions'
// import { redirect } from 'next/navigation'

const SurveyPage = async () => {
    const surveys = await GetAllSurveys();
  return (
    <main>
        <div>
            <h1>Surveys</h1>

            <p>Here are current surveys by the student Government.</p>

            <div><SurveyCards surveys={surveys} /></div>
        </div>
    </main>
  )
}

export default SurveyPage