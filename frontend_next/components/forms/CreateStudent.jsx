import React from 'react'

import { LoginAction } from '@/actions/Auth'

const instructions = 'Use this form to login to your account. If you do not have an account please go ahead and register one if you are a current csn student.'


const CreateStudent = () => {
    return (
        <div>
            <h1>Are you a current CSN student?</h1>
            <p>{instructions}</p>
            <form action={RegisterAction}>
                <div>
                    <label htmlFor="currentStudent">Current CSN Student</label>
                    <input type="radio" name="currentStudent" />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder="Enter your email here..."  />
                </div>
                <div>
                    <label htmlFor="studentID">Student ID number</label>
                    <input type="number" name="studentID" placeholder="Enter your studentID here..."  />
                </div>
                <div>
                    <button type='sumbit'>Register</button>
                </div>
            </form>
        </div>
      )
}

export default CreateStudent