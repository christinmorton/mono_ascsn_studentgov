import React from 'react'

import { GetSurveyById } from '@/actions/GetSurveys'
import Link from 'next/link';


const SurveyPageById = async ({params}) => {
    const id = await params.id;
    const survey = await GetSurveyById(id);

    console.log(survey)

    const renderQuestions = () => {
        return survey.SurveyQuestion.map((question, index) => (
            <p key={index}>{question.Question}</p>
        ))
    }
  return (
    <main className='w-full h-screen flex flex-col items-center justify-start'>
        <div>
            <h1>Survey by id</h1>
            <h2>{survey.Title}</h2>
            <hr></hr>
            <p>{survey.Description}</p>
            <hr></hr>
            {survey.SurveyQuestion.length ? (
                <h1>No Questions in list</h1>
            ) : (
                <div>
                    {survey.SurveyQuestion.map((question, index) => (
                <p key={index}>{question.Question}</p>
            ))}
                </div>
            )}
        </div>
    </main>
  )
}

export default SurveyPageById