import React from 'react'

import { RegisterAction } from '@/actions/Auth'

const instructions = 'If you are a current student at CSN please use your student email. If you are not a student at CSN please to do not take this survey or create an account.'

const Register = () => {
  return (
    <div>
        <h1>Create your account here</h1>
        <p>{instructions}</p>
        <form action={RegisterAction}>
            <div>
                <label htmlFor="name">Name</label>
                <input type="name" name="name" placeholder="Enter your name here..."  />
            </div>
            <div>
                <label htmlFor="edcuation-level">Years studied</label>
                <input type="edcuation-level" name="edcuation-level" placeholder="Enter if your are first year, second year, ectera. here..."  />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder="Enter your email here..."  />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder="Enter your password here..."  />
            </div>
            <div>
                <button type='sumbit'>Register</button>
            </div>
        </form>
    </div>
  )
}

export default Register