'use server';

import { cookies } from "next/headers";
// import { z } from "zod";
import { redirect } from "next/navigation";
import { COOKIE_NAME, SERVER_NAME } from "@/utils/constants";



export const GetCurrentUser = async () => {

    const cookieStore = await cookies();
    const token = cookieStore.get(COOKIE_NAME)

    if (!token) redirect('/signin')

    const user = await fetch(`${SERVER_NAME}/api/users/me`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token.value}`,
        }
    });
  
    const data = await user.json();
  
    return data;
}

export const GetUserToken = async () => {
    const cookieStore = await cookies();
    const token = cookieStore.get(COOKIE_NAME)

    return token;
}