import React from 'react'

import { Login } from '@/actions/Auth'
import Link from 'next/link'

const instructions = 'Use this form to login to your account. If you do not have an account please go ahead and register one if you are a current csn student.'

const LoginPage = () => {
      return (
      <div className='w-full h-[600px] flex flex-col items-center justify-evenly bg-blue-600 p-12 rounded-xl'>
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-white leading-normal">Login</h1>

            <p className="w-[625px] text-md lg:text-xl xl:text-2xl font-medium text-white leading-normal pt-6">{instructions}</p>
          <form action={Login} className='w-[600px] h-[400px] flex flex-col items-center justify-center pt-12'>
            <div className='w-[80%] flex flex-row items-center justify-between p-6'>
                <label htmlFor="email" className='text-white'>CSN Email</label>
                <input type="email" name="email" required placeholder="Enter your email here..."  />
            </div>
            {/* <div>
                <label htmlFor="student-id">Student ID#</label>
                <input type="number" name="student-id" placeholder="Enter your student id# here..."  />
            </div> */}
            <div className='w-[80%] flex flex-row items-center justify-between p-6'>
                <label htmlFor="password" className='text-white'>Password</label>
                <input type="password" name="password" required placeholder="Enter your password here..."  />
            </div>
            <div className='p-6'>
                <button type='sumbit' className={
        "py-3 lg:py-4 px-12 lg:px-16 text-blue-700 font-semibold rounded-lg bg-yellow-300 hover:shadow-orange-md transition-all outline-none"}>Login</button>
            </div>
          </form>

          <p className="w-[625px] text-md lg:text-lg xl:text-xl font-medium text-white leading-normal">If you do not have a account and you are a csn student please <span className='font-bold underline'><Link href={'/auth/register'}>register here</Link></span></p>
        </div>
      );
}

export default LoginPage