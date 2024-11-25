import React from 'react'
import CreateStudent from '@/components/forms/CreateStudent'

import { GetCurrentStudent } from '@/actions/StudentActions'
import { redirect } from 'next/navigation'

const ConfigureStudent = async () => {
    // const studentExist = await GetCurrentStudent();
    

    // if(studentExist) redirect('/dashboard');

  return (
    <div>
        <h1>Welcome to the ASCSN Student Government App!</h1>
        <h4>We created this app to better serve CSN&apos;s student body.</h4>

        <p>This app seeks to strengthen the voice of the students. Your experiences on campus and college matter! With this application we hope to identify ways we can improve csn.</p>

        <p>By creating this account you are expected to be a student currently registered and taking classes at the College of Southern Nevada. You are welcome to create an annonymous account but you must sign up with your student email and student ID number.</p>

        <CreateStudent />
    </div>
  )
}

export default ConfigureStudent