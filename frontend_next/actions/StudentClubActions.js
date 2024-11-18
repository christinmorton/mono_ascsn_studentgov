import { cookies } from "next/headers";
import { z } from "zod";
import { redirect } from "next/navigation";
import { COOKIE_NAME } from "@/utils/constants";

import { GetCurrentUser } from './UserActions';


export const GetAllStudentClubs = async () => {
    const cookieStore = await cookies();
    const token = cookieStore.get(COOKIE_NAME)

    if(!token) redirect('/auth/login')

    const clubs = await fetch(`http://localhost:1337/api/student-clubs`)

    if (!clubs.ok) {
        const errorData = await clubs.json();
        console.error('Error:', errorData);
        return errorData
    }

    const data = await clubs.json();
    
    return data.data;

}

export const GetStudentClubById = async (id) => {
    const club = await fetch(`http://localhost:1337/api/student-clubs/${id}?populate=*`)

    if (!club.ok) {
        const errorData = await club.json();
        console.error('Error:', errorData);
        return errorData
    }

    const data = await club.json();
    
    return data.data;

}


export const CreateClubMember = () => {}

export const JoinAClub = () => {}
export const LeaveAClub = () => {}

export const GetClubFeed = () => {}