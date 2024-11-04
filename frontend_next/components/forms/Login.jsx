import React from 'react'

import Form from './Form'
import InputGroup from './InputGroup'
import { LoginAction } from '@/actions/Auth'

const instructions = 'Use this form to login to your account. If you do not have an account please go ahead and register one if you are a current csn student.'

const Login = () => {
      return (
        <div>
            <h1>Login into your account here</h1>
            <p>{instructions}</p>
          <form action={LoginAction}>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder="Enter your email here..."  />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder="Enter your email here..."  />
            </div>
            <div>
                <button type='sumbit'>Login</button>
            </div>
          </form>
        </div>
      );
}

export default Login