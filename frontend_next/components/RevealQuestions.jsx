'use client'
import React from 'react'

import { useSearchParams, usePathname } from "next/navigation";
import SingleQuestion from './forms/SingleQuestion';

const RevealQuestions = ({questions, survey_id, student_id}) => {
    const searchParams = useSearchParams();
    const reveal = searchParams.get("start-survey");
    const response = searchParams.get("studentResponse");
    const pathname = usePathname();
    console.log(questions)
  return (
    <div>
        {/* {reveal && ( */}
            <div>
                {questions.forEach((question, index) => (
                    <SingleQuestion key={index} question={question} student_id={student_id} survey_id={survey_id} response_id={response} />
                ))}
            </div>
        {/* )} */}
    </div>
  )
}

export default RevealQuestions