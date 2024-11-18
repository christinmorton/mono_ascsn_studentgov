import { GetStudentClubById } from "@/actions/StudentClubActions"


const StudentClubBySlug = async ({params}) => {
  const student_club = await GetStudentClubById(params.slug)
  console.log(student_club)
  return (
    <main>
        <h1>{student_club.Title}</h1>
        <h4>Club President: {student_club.ClubOrganizer.Name}</h4>
        <h4>Contact Email: {student_club.ClubOrganizer.Email}</h4>
        <h4>Active Semester: {student_club.ClubOrganizer.ActiveSemester}</h4>
        <p>{student_club.PlainTextDescription}</p>
    </main>
  )
}

export default StudentClubBySlug