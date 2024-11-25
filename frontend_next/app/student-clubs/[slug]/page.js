import Image from "next/image"

import { GetStudentClubById } from "@/actions/StudentClubActions"

import img from "@/assets/images/Charleston_StudentUnion.webp"

const StudentClubBySlug = async ({params}) => {
  const student_club = await GetStudentClubById(params.slug)
  console.log(student_club)
  return (
    <main className='max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto'>
      <div className="flex flex-col p-4 bg-blue-600 rounded-xl text-yellow-300 py-24 my-24">
          <div className="h-full p-4">
            <Image src={img} alt='a simple test image' layout="responsive"
              quality={100}
              height={414}
              width={508} />
          </div>

          <div className="flex flex-col justify-evenly">
            <div className='flex flex-col items-center justify-center p-10'>
              <h1 className="text-2xl  text-yellow-300">{student_club.Title}</h1>
              <p className=" text-white">{student_club.PlainTextDescription}</p>
            </div>

            <div className='flex flex-col items-center justify-center p-10'>
              <h4>Club President: {student_club.ClubOrganizer.Name}</h4>
              <h4>Contact Email: {student_club.ClubOrganizer.Email}</h4>
              <h4>Active Semester: {student_club.ClubOrganizer.ActiveSemester}</h4>
            </div>
          </div>
      </div>

        
        
    </main>
  )
}

export default StudentClubBySlug