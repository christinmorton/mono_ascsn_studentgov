import React from 'react'
import Link from 'next/link';

import { GetAllQuestions, GetAllSurveys } from '@/actions/GetSurveys'
import SurveyCards from '@/components/SurveyCards';

const SurveyPage = async () => {
    const surveys = await GetAllSurveys();
    console.log(surveys)
  return (
    <main>
        <div>
            <h1>Surveys</h1>

            <SurveyCards surveys={surveys} />
        </div>
    </main>
  )
}

export default SurveyPage