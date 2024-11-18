import React from 'react'

import { Login } from '@/actions/Auth'
import Link from 'next/link'

const instructions = 'Use this form to login to your account. If you do not have an account please go ahead and register one if you are a current csn student.'

const LoginPage = () => {
      return (
        <div>
            <h1>Login into your account here</h1>
            <p>{instructions}</p>
            <p>If you do not have a account and you are a csn student please <span className='font-bold underline'><Link href={'/auth/register'}>register here</Link></span></p>
          <form action={Login}>
            <div>
                <label htmlFor="email">CSN Email</label>
                <input type="email" name="email" required placeholder="Enter your email here..."  />
            </div>
            {/* <div>
                <label htmlFor="student-id">Student ID#</label>
                <input type="number" name="student-id" placeholder="Enter your student id# here..."  />
            </div> */}
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" required placeholder="Enter your password here..."  />
            </div>
            <div>
                <button type='sumbit'>Login</button>
            </div>
          </form>
        </div>
      );
}

export default LoginPage