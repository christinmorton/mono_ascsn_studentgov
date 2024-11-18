'use client';
import { useActionState } from "react";
import { AnswerSingleQuestion } from "@/actions/SurveyQuestionActions";


const SingleQuestion = ({question, survey_id, student_id, response_id=null}) => {
    const [formState, action] = useActionState(AnswerSingleQuestion, { message: ''})
    // console.log(question)
  return (
    <form action={action}>
        <div>
          <label htmlFor={'single-question'}>{question.Question}</label>
          <input type='text' name={'single-question'} placeholder={question.Type} />
      </div>
      <div>
        <input type="hidden" name="survey_id" value={survey_id} />
        {/* <input type="hidden" name="response_id" value={response_id} /> */}
        <input type="hidden" name="student_id" value={student_id} />
        <input type="hidden" name="question_type" value={question.Type} />
        <input type="hidden" name="question_input_type" value={question.input_type} />
      </div>
      <div>
        {formState.message}
      </div>
      <div>
        <button>Save Answer</button>
      </div>
    </form>
  )
}

export default SingleQuestion