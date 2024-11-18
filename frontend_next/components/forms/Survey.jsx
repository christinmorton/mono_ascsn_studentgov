import React from 'react'
import Link from 'next/link';
import { GetFiveRandomQuestions } from '@/actions/SurveyQuestionActions';
import SingleQuestion from '@/components/forms/SingleQuestion';

const Survey = async ({survey, user}) => {
  const randomQuestions = await GetFiveRandomQuestions();
  // console.log(survey)
  return (
    <div>
     <div>
          {/* {survey.SurveyQuestion.map((question, index) => ( */}
              <div>
                    <p>No questions yet...</p>
                  {/* <SingleQuestion question={question} survey_id={survey.documentId} student_id={user.documentId} /> */}
              </div>
          {/* ))} */}

          {/* {!survey.SurveyQuestion.length ? (
                <div>
                    <h1>No Questions in list</h1>
                    <p>This survey is still underconstruction...</p>
                    <p>So here are 5 random questions instead...</p>
                    {randomQuestions.map((question, index) => (
                        <div key={index}>
                            <SingleQuestion question={question} />
                        </div>
                    ))}
                </div>
            ) : (
                <form>
                    {survey.SurveyQuestion.map((question, index) => (
                <div key={index}>
                    {!question.slug ? (
                        <div>
                            <label htmlFor={''}>{question.Question}</label>
                            <input type='text' name={''} placeholder={question.Type} />
                        </div>
                    ) : (
                        <div>
                            <label htmlFor={question.slug}>{question.Question}</label>
                            <input type='text' name={question.slug} placeholder={question.Type} />
                        </div>
                    )}

                    <div>
                      <button>Submit</button>
                    </div>
                </div>
            ))}
                </form>
            )} */}

      </div>
    </div>
  )
}

export default Survey