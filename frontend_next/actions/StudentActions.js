'use server';

import { cookies } from "next/headers";
import { z } from "zod";
import { redirect } from "next/navigation";
import { COOKIE_NAME } from "@/utils/constants";

import { GetCurrentUser } from './UserActions';

const studentSchema = z.object({
    name: z.string(),
    email: z.string().email(), 
    student_id: z.string(),
    user_id: z.string(),
  })

export const GetCurrentStudent = async () => {

    const cookieStore = await cookies();
    const token = cookieStore.get(COOKIE_NAME)

    if (!token) redirect('/signin')

    const user = await GetCurrentUser();

    const id = user.documentId;

    const student = await fetch(`http://localhost:1337/api/students?filters[user_id][$eq]=${id}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token.value}`,
        }
    });
  
    const data = await student.json();

    console.log(data)
  
    return data;
}

export const CreateStudentAction = async (formData) => {
    const cookieStore = await cookies();
    const token = cookieStore.get(COOKIE_NAME)

    const user = await GetCurrentUser();

    const student = studentSchema.parse({
        name: user.username, 
        email: user.email, 
        student_id: formData.get('student_id'),
        user_id: user.documentId
      })

    if (!token) redirect('/auth/login')

    const response = await fetch(`http://localhost:1337/api/students`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token.value}`,
        },
        body: JSON.stringify({
            data: {
                Name: student.name,
                student_id: student.student_id,
                // users_permissions_user: student.user_id,
                user_id: student.user_id
            }
        })
    });

    if (!response.ok) {
        const errorData = await response.json();
        console.error('Error:', errorData);
        // return errorData
    }

    // console.log(response)

    redirect('/dashboard')
  
    // const data = await user.json();
  
    // return data;
}

export const CreateStudentResponse = async (formData) => {
    const cookieStore = await cookies();
    const token = cookieStore.get(COOKIE_NAME)

    // const user = await GetCurrentUser();


    if (!token) redirect('/auth/login')

    const response = await fetch(`http://localhost:1337/api/student-repsonses`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token.value}`,
        },
        body: JSON.stringify({
            data: {
                Name: student.name,
                student_id: student.student_id,
                // users_permissions_user: student.user_id,
                user_id: student.user_id
            }
        })
    });

    if (!response.ok) {
        const errorData = await response.json();
        console.error('Error:', errorData);
        // return errorData
    }

    console.log(response)

    redirect('/dashboard')
}