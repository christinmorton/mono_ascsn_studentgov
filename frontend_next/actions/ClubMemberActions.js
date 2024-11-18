import { cookies } from "next/headers";
import { z } from "zod";
import { redirect } from "next/navigation";
import { COOKIE_NAME } from "@/utils/constants";

import { GetCurrentUser } from './UserActions';


export const CreateClubMember = async (formData) => {
    const cookieStore = await cookies();
    const token = cookieStore.get(COOKIE_NAME)

    const user = await GetCurrentUser();
}

export const RequestToJoinAClub = async (formData) => {
    const cookieStore = await cookies();
    const token = cookieStore.get(COOKIE_NAME)

}

export const UpdateClubMemberProfile = async (formData) => {
    const cookieStore = await cookies();
    const token = cookieStore.get(COOKIE_NAME)

    const user = await GetCurrentUser();
}

export const LeaveAStudentClub = async () => {
    const cookieStore = await cookies();
    const token = cookieStore.get(COOKIE_NAME)

    const user = await GetCurrentUser();
}
