'use client';
// import React, {useActionState} from 'react'
// import {useFormState} from 'react-dom'
import { Register } from '@/actions/Auth'
import Link from 'next/link';

const instructions = 'If you are a current student at CSN please use your student email. If you are not a student at CSN please to do not take this survey or create an account.'

const initialState = { message: null }

const RegisterForm = () => {
    // const [formState, action] = useActionState(Register, initialState)
  return (
    <div>
        <h1>Create your account here</h1>
        <p>{instructions}</p>
        <p>Have an account already? You can <span className='font-bold underline'><Link href={'/auth/login'}>login here</Link></span></p>
        <form action={Register}>
            <div>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" required placeholder="Enter your username here..."  />
            </div>
            <div>
                <label htmlFor="email">CSN Email</label>
                <input type="email" name="email" required placeholder="Enter your email here..."  />
            </div>
            {/* <div>
                <label htmlFor="student-id">Student ID#</label>
                <input type="number" name="student-id" placeholder="Enter your student id here..."  />
            </div> */}
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" required placeholder="Enter your password here..."  />
            </div>
            <div>
                <button type='sumbit'>Register</button>
            </div>
        </form>
    </div>
  )
}

export default RegisterForm