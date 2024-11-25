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
    <main className='max-w-screen-xl h-full py-24 mx-auto'>
        <div className='flex flex-row items-start justify-between gap-4 p-6'>
            <div className='w-[40%] flex flex-col items-start justify-start bg-yellow-300 p-8 rounded-l-lg'>
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-blue-600 leading-normal py-4">{survey.Title}</h1>
              {/* <h2>{survey.Name}</h2> */}
              <hr></hr>
              <p className='text-blue-600'>{survey.Description}</p>
              <hr></hr>
            </div>

            {/* <form action={createStudentResponse}>
              <input type='hidden' name='Name' value={survey.Name} />
              <input type='hidden' name='survey_id' value={survey.documentId} />
              <input type='hidden' name='student_id' value={user.documentId} />

              <button type='submit'>Take Survey</button>
            </form> */}

            <div className='w-[60%] h-[700px] flex flex-col items-start'>
              {questions.map((question, index) => (
                  <SingleQuestion key={index} question={question} student_id={user.documentId} survey_id={survey.documentId} />
              ))}
            </div>
            
        </div>
    </main>
  )
}

export default SurveyPageBySlug