'use server';

import { cookies } from "next/headers";
import { z } from "zod";
import { redirect } from "next/navigation";
import { COOKIE_NAME } from "@/utils/constants";

import { GetCurrentUser } from './UserActions';
import { GetRandom } from "@/utils/helpers";
import { GetCurrentStudent } from "./StudentActions";

const responseSchema = z.object({
    // response: z.string(),
    student_id: z.string(),
    open_date: z.string().optional(),
    completion_date: z.string().optional(),
    name: z.string().trim().optional(),
    response_to_survey_id: z.string(),
  })

const questionListItemSchema = z.object({
    question_id: z.string().trim(),
    qustion_slug: z.string().trim()
})

const answerSchema = z.object({
    short_answer: z.string().optional(),
    long_answer: z.string().optional(),
    feedback: z.string().optional(),
    question_input_type: z.string().optional(),
    answered_check_box: z.boolean().optional(),
    answered_check_box_for: z.string().optional(),
})

const questionIdListSchema = z.array(questionListItemSchema)


export const createStudentResponse = async (formData) => {
    const cookieStore = await cookies();
    const token = cookieStore.get(COOKIE_NAME)
    let urlParam = '';

    const timestamp = Date.now(); // Get the current timestamp in milliseconds

    // Create a Date object from the timestamp
    const date = new Date(timestamp);

    // Convert the date to a string
    const dateString = date.toString();

    console.log(formData)

    const student_response = responseSchema.parse({
        student_id: formData.get('student_id'),
        open_date: dateString,
        name: formData.get('Name'),
        response_to_survey_id: formData.get('survey_id'),
    })

    urlParam = formData.get('survey_id');

    const response = await fetch(`${SERVER_NAME}/api/student-responses`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token.value}`,
        },
        body: JSON.stringify({
            data: {
                name: student_response.name,
                student_id: student_response.student_id,
                response_to_survey_id: student_response.response_to_survey_id,
                OpenDate: student_response.open_date
            }
        })
    });

    if (!response.ok) {
        const errorData = await response.json();
        console.error('Error:', errorData);
        if(errorData.error.details.errors.length >= 1) {
            errorData.error.details.errors.forEach((detail, index) => {
                console.log(`detail-${index}:`, detail)
            })
        }
        return;
    }

    const result = await response.json();

    console.log(result)

    redirect(`/surveys/${urlParam}?start-survey=true&studentResponse=${result.data.documentId}`)
}


export const GetStudentResponsesByUser = async () => {
    const cookieStore = await cookies();
    const token = cookieStore.get(COOKIE_NAME)

    const user = await GetCurrentUser();

    const response = await fetch(`${SERVER_NAME}/api/student-responses?filters[student_id]=${user.documentId}`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token.value}`,
        }
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


export const GetStudentResponseById = async (id) => {
    const cookieStore = await cookies();
    const token = cookieStore.get(COOKIE_NAME)

    const user = await GetCurrentUser();

    const response = await fetch(`${SERVER_NAME}/api/student-response/${id}`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token.value}`,
        }
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


export const UpdateStudentResponse = async (formData) => {
    const cookieStore = await cookies();
    const token = cookieStore.get(COOKIE_NAME)
    let urlParam = '';

    const timestamp = Date.now(); // Get the current timestamp in milliseconds

    // Create a Date object from the timestamp
    const date = new Date(timestamp);

    // Convert the date to a string
    const dateString = date.toString();

    console.log(formData)

    const student_response = responseSchema.parse({
        student_id: formData.get('student_id'),
        open_date: dateString,
        name: formData.get('Name'),
        response_to_survey_id: formData.get('survey_id'),
    })

    urlParam = formData.get('survey_id');

    const response = await fetch(`${SERVER_NAME}/api/student-responses/${'id'}`, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token.value}`,
        },
        body: JSON.stringify({
            data: {
                name: student_response.name,
                student_id: student_response.student_id,
                response_to_survey_id: student_response.response_to_survey_id,
                OpenDate: student_response.open_date
            }
        })
    });

    if (!response.ok) {
        const errorData = await response.json();
        console.error('Error:', errorData);
        if(errorData.error.details.errors.length >= 1) {
            errorData.error.details.errors.forEach((detail, index) => {
                console.log(`detail-${index}:`, detail)
            })
        }
        return;
    }

    const result = await response.json();

    console.log(result)

    redirect(`/surveys/${urlParam}?start-survey=true&studentResponse=${result.data.documentId}`)
}


export const alreadyStartedSurvey = async(response_id, survey_id) => {
    const cookieStore = await cookies();
    const token = cookieStore.get(COOKIE_NAME)

    const user = await GetCurrentUser();

    const response = await fetch(`${SERVER_NAME}/api/student-responses/${response_id}?filters[student_id]=${user.documentId}&filters[response_to_survey_id]=${survey_id}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token.value}`,
        }
    });

    if (!response.ok) {
        const errorData = await response.json();
        console.error('Error:', errorData);
        if(errorData.error.details.errors.length >= 1) {
            errorData.error.details.errors.forEach((detail, index) => {
                console.log(`detail-${index}:`, detail)
            })
        }
        return;
    }

    const result = await response.json();

    // console.log(result)

    // redirect(`/surveys/${urlParam}?start-survey=true&studentResponse=${result.data.documentId}`)
}