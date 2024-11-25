'use client';
// import React, {useActionState} from 'react'
// import {useFormState} from 'react-dom'
import { Register } from '@/actions/Auth'
import Link from 'next/link';

const instructions = 'If you are a current student at CSN please use your student email. If you are not a student at CSN please to do not take this survey or create an account.'

const RegisterForm = () => {
  return (
    <div className='w-full h-[700px] flex flex-col items-center justify-evenly bg-blue-600 p-12 rounded-xl'>
        <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-white leading-normal">Register</h1>
        <p className="w-[625px] text-md lg:text-xl xl:text-2xl font-medium text-white leading-normal pt-6">{instructions}</p>
        <form action={Register} className='w-[600px] h-[400px] flex flex-col items-center justify-center pt-12'>
            <div className='w-[80%] flex flex-row items-center justify-between p-6'>
                <label htmlFor="username" className='text-white'>Username</label>
                <input type="text" name="username" required placeholder="Enter your username here..."  />
            </div>
            <div className='w-[80%] flex flex-row items-center justify-between p-6'>
                <label htmlFor="email" className='text-white'>CSN Email</label>
                <input type="email" name="email" required placeholder="Enter your email here..."  />
            </div>
            {/* <div>
                <label htmlFor="student-id">Student ID#</label>
                <input type="number" name="student-id" placeholder="Enter your student id here..."  />
            </div> */}
            <div className='w-[80%] flex flex-row items-center justify-between p-6'>
                <label htmlFor="password" className='text-white'>Password</label>
                <input type="password" name="password" required placeholder="Enter your password here..."  />
            </div>
            <div className='p-6'>
                <button type='sumbit' className={
        "py-3 lg:py-4 px-12 lg:px-16 text-blue-700 font-semibold rounded-lg bg-yellow-300 hover:shadow-orange-md transition-all outline-none"}>Register</button>
            </div>
        </form>
        <p className="w-[625px] text-md lg:text-lg xl:text-xl font-medium text-white leading-normal">Have an account already? You can <span className='font-bold underline'><Link href={'/auth/login'}>login here</Link></span></p>
    </div>
  )
}

export default RegisterForm