import React from 'react'

import { CreateStudentAction } from '@/actions/StudentActions'

const instructions = 'Use this form to register an account on this app. This app is not connected to the csn system and will never ask for sensitive information. The main purposes of this application is to allow the student government to a send survey\' to students and inform students of club info and club event. Also this application will provide a curated resource of ASCSN events and resources.';


const CreateStudent = async () => {
    return (
        <div>
            <h1>Are you a current CSN student?</h1>
            <p>{instructions}</p>
            <form action={CreateStudentAction}>
                <div>
                    <label htmlFor="studentID">Student ID number</label>
                    <input type="text" name="student_id" placeholder="Enter your studentID here..."  />
                </div>
                <div>
                    <button type='sumbit'>Register</button>
                </div>
            </form>
        </div>
      )
}

export default CreateStudent