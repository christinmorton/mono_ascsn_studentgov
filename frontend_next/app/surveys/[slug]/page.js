import React from 'react'

import { GetSurveyById } from '@/actions/GetSurveys'
import { GetCurrentUser } from '@/actions/UserActions';
import { createStudentResponse } from '@/actions/StudentResponseActions';
import { GetFiveRandomQuestions } from '@/actions/SurveyQuestionActions';
import SingleQuestion from '@/components/forms/SingleQuestion';

{/* <Link href={"/?website-service-modal=true"} className="p-4 rounded-md bg-blue-700 text-white">Hire me!</Link> */}
const SurveyPageBySlug = async (props) => {
    const params = await props.params;
    const user = await GetCurrentUser();

    const survey = await GetSurveyById(params.slug)
    const questions = await GetFiveRandomQuestions();
    console.log(questions)
  return (
    <main className='w-full h-screen flex flex-col items-center justify-start'>
        <div>
            <h1>{survey.Title}</h1>
            <h2>{survey.Name}</h2>
            <hr></hr>
            <p>{survey.Description}</p>
            <hr></hr>

            {/* <form action={createStudentResponse}>
              <input type='hidden' name='Name' value={survey.Name} />
              <input type='hidden' name='survey_id' value={survey.documentId} />
              <input type='hidden' name='student_id' value={user.documentId} />

              <button type='submit'>Take Survey</button>
            </form> */}
            
        </div>

        {questions.map((question, index) => (
            <SingleQuestion key={index} question={question} student_id={user.documentId} survey_id={survey.documentId} />
        ))}
    </main>
  )
}

export default SurveyPageBySlug