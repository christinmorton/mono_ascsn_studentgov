import { GetAllStudentClubs } from '@/actions/StudentClubActions'

import MenuList from '@/components/MenuList'
import SmallFlyerCard from '@/components/SmallFlyerCard'
import StudentClubCard from '@/components/StudentClubCard'
import React from 'react'

const StudentClubsPage = async () => {
  const student_clubs = await GetAllStudentClubs();
//   console.log(student_clubs)
    return (
    <main className='max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto'>
        <div className='flex flex-col items-center justify-center'>
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal py-4">All Current Student Clubs</h1>

            <p className="w-[625px] my-2 pb-8 text-black-500 text-center">The ASCSN and Student Government, in partnership with college departments and student clubs, bring a variety of events to life on campus. From workshops to cultural celebrations, these events foster community and growth. Students are encouraged to join, participate, and make the most of these opportunities.<br /> <br />Approved events reflect our mission to support student life and engagement. Be sure to check this section regularly for the latest updates and exciting activities. Together, we create a vibrant and inclusive campus experience.</p>
        </div>

        <div className="w-full flex flex-col items-start bg-yellow-300 rounded-xl text-blue-600 p-6">
            <h4 className="text-xl lg:text-3xl xl:text-4xl font-medium text-black-600 leading-normal pt-6">Student Club List</h4>
             <div className='w-full flex flex-row'>
                <div className='w-[30%] flex flex-col p-6'>
                    <h4 className="text-2xl my-2 pb-8 text-black-500">Filters</h4>
                    <hr />
                    <div className='flex flex-col'>
                    <p className="my-2 pb-8 text-black-500">Date</p>
                    <p className="my-2 pb-8 text-black-500">size</p>
                    <p className="my-2 pb-8 text-black-500">Advertiser</p>
                    </div>
                </div>
                
                <div className='w-[70%] flex flex-row flex-wrap justify-start gap-4 p-2'>
                    {student_clubs.map((item, index) => (
                        <StudentClubCard key={index} club={item} />
                    ))}
                </div>
            </div>
        </div>
    </main>
  )
}

export default StudentClubsPage