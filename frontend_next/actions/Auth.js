'use server';

import { cookies } from "next/headers";
import { z } from "zod";
import { redirect } from "next/navigation";
import { COOKIE_NAME, SERVER_NAME } from "@/utils/constants";

const authSchema = z.object({
    username: z.string().optional(),
    email: z.string().email(),
    // student_id:  z.string().optional(),
    password: z.string(),
  })

export const Login = async (FormData) => {
    console.log(FormData)
    const data = authSchema.parse({
        email: FormData.get('email'),
        password: FormData.get('password'),
      })
    
      try {
        const response = await fetch(`${SERVER_NAME}/api/auth/local`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                    identifier: data.email,
                    password: data.password
            })
        });
    
        if (!response.ok) {
            const errorData = await response.json();
            console.error('Error:', errorData);
            // return errorData
        }
        console.log(response)

        const result = await response.json();

        cookies().set(COOKIE_NAME, result.jwt)

      } catch (e) {
        console.error(e)
        return { message: 'Failed to sign you up' }
      }
    //   console.log({message: 'Logged in successfully...'})
      redirect('/dashboard')
}

export const Register = async (FormData) => {
    const data = authSchema.parse({
        username: FormData.get('username'),
        email: FormData.get('email'),
        // student_id: FormData.get('student-id'),
        password: FormData.get('password'),
      })
    //   console.log(data)
    
      try {
        const response = await fetch(`${SERVER_NAME}/api/auth/local/register`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                    username: data.username,
                    email: data.email,
                    password: data.password
            })
        });
    
        if (!response.ok) {
            const errorData = await response.json();
            console.error('Error:', errorData);
            return errorData
        }


        const result = await response.json();

        cookies().set(COOKIE_NAME, result.jwt)

      } catch (e) {
        console.error(e)
        return { message: 'Failed to sign you up' }
      }

      console.log({message: 'Registered in successfully...'})
      // redirect('/dashboard')
      redirect('/dashboard/configure')
}

export const Logout = async () => {
  cookies().delete(COOKIE_NAME)

  redirect('/')
}

export const ForgotPassword = async () => {}


export const RequestRoleChange = async (formData) => {
  
}