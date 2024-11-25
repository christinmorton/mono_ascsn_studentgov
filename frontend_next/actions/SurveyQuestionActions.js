'use server';

import { cookies } from "next/headers";
import { z } from "zod";
import { redirect } from "next/navigation";
import { COOKIE_NAME, SERVER_NAME } from "@/utils/constants";

import { GetCurrentUser } from './UserActions';
import { GetRandom } from "@/utils/helpers";
import { GetCurrentStudent } from "./StudentActions";

const questionSchema = z.object({
    question: z.string(),
    student_id: z.string(),
    open_date: z.date(),
    completion_date: z.string().optional(),
    short_answer: z.string().optional(),
    long_answer: z.string().optional(),
    feedback: z.string().optional(),
    Name: z.string().optional(),
    question_input_type: z.string().optional(),
    answered_check_box: z.boolean().optional(),
    answered_check_box_for: z.string().optional(),
    survey_question: {
        connect: z.string()
    },
    student_id: {
        connect: z.string()
    }
  })

export const GetAllQuestions = async () => {
    const cookieStore = await cookies();
    const token = cookieStore.get(COOKIE_NAME)

    if (!token) redirect('/signin')

    const questions = await fetch(`${SERVER_NAME}/api/survey-questions?pagination[page]=1&pagination[pageSize]=40`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token.value}`,
        }
    });

    if (!questions.ok) {
        const errorData = await questions.json();
        console.error('Error:', errorData);
        return errorData
    }
  
    const data = await questions.json();

    return data.data;
}

export const GetFiveRandomQuestions = async () => {
    const questions = await GetAllQuestions();

    const data = GetRandom(questions, 5)

    return data;
}
// 'Boolean'
// 'MultipleChoice'
// "ShortAnswer"
// "LongAnswer"
// 'Feedback'
export const AnswerSingleQuestion = async (formState, formData) => {
//   console.log(formData);

  const student = await GetCurrentStudent();
  console.log(student)

  const answer = {
    question: formData.get('single-question'),
    open_date: Date.now(),
    completion_date: '',
    short_answer: formData.get('question_type') === 'ShortAnswer' ? formData.get('single-question') : 'null',
    long_answer: formData.get('question_type') === 'LongAnswer' ? formData.get('single-question') : 'null',
    feedback: formData.get('question_type') === 'Feedback' ? formData.get('single-question') : 'null',
    question_input_type: formData.get('input_type'),
    answered_check_box: formData.get('question_type') === 'Boolean' && true,
    answered_check_box_for: formData.get('question_type') === 'Boolean' ? formData.get('single-question') : 'null',
    survey_question: {
        connect: formData.get('question_id')
    },
    student_id: {
        connect: student.documentId
    }
    }

//   const question = questionSchema.parse(answer)


    console.log(answer)

//   const studentResposne = await fetch(`${SERVER_NAME}/api/student-reponses?filters[user_id][$eq]=${id}`, {
//     method: 'POST',
//     headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token.value}`,
//     },
//     body: JSON.stringify({
//         data: {
//             Name: '',
//             ShortAnswer: '',
//             LongAnswer: '',
//             OpenDate: '',
//             Feedback: '',
//             question_input_type: '',
//             completion_date: '',
//             answered_check_box: false,
//             answered_check_box_for: false,
//             survey_question: {
//                 connect: ''
//             },
//             student_id: {
//                 connect: ''
//             }
//         }
//     })
// });

// const data = await student.json();

// return data;  
  
    return {message: 'Please answer question...'}
}


export const GetQuestionById = async (id) => {
    const cookieStore = await cookies();
    const token = cookieStore.get(COOKIE_NAME)

    const question = await fetch(`${SERVER_NAME}/api/content-type-builder/components/${id}?populate=*`, {
      method: 'GET',
      headers: {
          Authorization: `Bearer ${token.value}`,
      }
    })
    console.log(question)
  
  //   if (!question.ok) {
  //     const errorData = await question.json();
  //     console.error('Error:', errorData);
  //     return errorData
  // }
  
  //   const data = await question.json();
  
  //   return data.data;
  }