import { cookies } from "next/headers";
import { z } from "zod";
import { redirect } from "next/navigation";
import { COOKIE_NAME } from "@/utils/constants";

import { GetCurrentUser } from './UserActions';

const surveySchema = z.object({
  name: z.string().trim(),
  Title: z.string().trim().optional(),
  Description: z.string().optional(),
  created_by_user: z.string().optional()
})

const surveyQuestionItemSchema = z.object({
  question_id: z.string(),
  question_slug: z.string()
})

const surveyQuestionListSchema = z.array(surveyQuestionItemSchema)

export const GetAllSurveys = async () => {
    const menu = await fetch(`http://localhost:1337/api/student-surveys?populate=${'*'}`)
  
    const data = await menu.json();
  
    return data.data;
  }

  export const GetAllQuestions = async () => {
    const menu = await fetch(`http://localhost:1337/api/survey-questions?populate=${'*'}`)
  
    const data = await menu.json();
  
    return data.data;
  }

  export const GetSurveyById = async (id) => {
    const cookieStore = await cookies();
    const token = cookieStore.get(COOKIE_NAME)
    // const student = GetCurrentUser();
    let question_list = [];

    // if(!student) return {error: true, message: "student missing..."}

    const survey = await fetch(`http://localhost:1337/api/student-surveys/${id}?populate=*`, {
      method: 'GET',
      headers: {
          Authorization: `Bearer ${token.value}`,
      }
  });

  if (!survey.ok) {
    const errorData = await survey.json();
    console.error('Error:', errorData);
    return errorData
}

  const data = await survey.json();

  // if(data.data.hasOwnProperty('SurveyQuestion')){
  //   if(data.data.SurveyQuestion.length > 0) {
  //     data.data.SurveyQuestion.forEach((question) => {
  //       question_list.push(question)
  //     })
  //   }
  // }
  
  // if(data.data.hasOwnProperty('survey_quesstion_id_list')){
  //   if(data.data.survey_quesstion_id_list.length > 0) {
  //     console.log(data.data.survey_quesstion_id_list)
      // data.data.survey_quesstion_id_list.forEach(async (questionId) => {
      //   let question = await GetQuestionById(questionId.id);
        
      // //   if (!question.ok) {
      // //     const errorData = await question.json();
      // //     console.error('Error:', errorData);
      // //     return errorData
      // // }
      // // console.log(question)
      // })
    // }
  // }
  

  return data.data;
  }

  export const CreateNewSurvey = async (formData) => {
    const cookieStore = await cookies();
    const token = cookieStore.get(COOKIE_NAME)

    const user = await GetCurrentUser();

    const newSurvey = surveySchema.safeParse({
      name: formData.get('name'),
      Title: formData.get('title'),
      Description: formData.get('Description'),
      created_by_user: formData.get('user_id')
    })

    const response = await fetch(`http://localhost:1337/api/survey/${survey_id}`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token.value}`,
        },
        body: JSON.stringify({
          data: {
            name: newSurvey.name,
            Title: newSurvey.Title,
            Description: newSurvey.Description,
            created_by_user: newSurvey.created_by_user
          }
        })
    });

    if (!response.ok) {
        const errorData = await response.json();
        console.error('Error:', errorData);
        return;
    }

    const result = await response.json();

    // console.log(result)

    return result
  }

  export const AddQuestionToSurvey = async (formData) => {
    const cookieStore = await cookies();
    const token = cookieStore.get(COOKIE_NAME)

    // const user = await GetCurrentUser();

    const survey_id = formData.get('survey_id')

    let surveyQuestions = []

    const survey_question = surveyQuestionListSchema.safeParse({
      question_id: formData.get('question_id'),
      question_slug: formData.get('question_slug')
    })

    surveyQuestions.push(survey_question)

    const survey = await GetSurveyById(survey_id);

    if (!survey.ok) {
      const errorData = await survey.json();
      console.error('Error:', errorData);
      return;
    }

    const s = await survey.json()

    console.log(s);

    const response = await fetch(`http://localhost:1337/api/survey/${survey_id}`, {
      method: 'PUT',
      headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token.value}`,
      },
      body: JSON.stringify({
        data: {
          assigned_survey_question_id_list: surveyQuestions
        }
      })
  });

  if (!response.ok) {
      const errorData = await response.json();
      console.error('Error:', errorData);
      return;
  }

  const result = await response.json();

  // console.log(result)

  return result
  }

  export const UpdateSurvey = async (formData) => {
    const cookieStore = await cookies();
    const token = cookieStore.get(COOKIE_NAME)

    const user = await GetCurrentUser();

    const newSurvey = surveySchema.safeParse({
      name: formData.get('name'),
      Title: formData.get('title'),
      Description: formData.get('Description'),
      created_by_user: formData.get('user_id')
    })

    const response = await fetch(`http://localhost:1337/api/survey/${survey_id}`, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token.value}`,
        },
        body: JSON.stringify({
          data: {
            name: newSurvey.name,
            Title: newSurvey.Title,
            Description: newSurvey.Description,
            created_by_user: newSurvey.created_by_user
          }
        })
    });

    if (!response.ok) {
        const errorData = await response.json();
        console.error('Error:', errorData);
        return;
    }

    const result = await response.json();

    // console.log(result)

    return result
  }