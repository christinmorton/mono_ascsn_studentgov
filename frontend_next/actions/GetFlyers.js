import { cookies } from "next/headers";
import { z } from "zod";
import { redirect } from "next/navigation";
import { COOKIE_NAME, SERVER_NAME } from "@/utils/constants";

import { GetCurrentUser } from './UserActions';

export const GetAllFlyers = async () => {
    const flyers = await fetch(`${SERVER_NAME}/api/flyers?populate=${'*'}`)
  
    const data = await flyers.json();
  
    return data.data;
}

export const GetFlyerById = async (id) => {
    const flyer = await fetch(`${SERVER_NAME}/api/flyers/${id}?populate=${'*'}`)

    if (!flyer.ok) {
        const errorData = await flyer.json();
        console.error('Error:', errorData);
        return errorData
    }

    const data = await flyer.json();
    
    return data.data;
}


export const GetFlyerBySlug = async (slug) => {
    const flyers = await GetAllFlyers();

    console.log(flyers)

    return flyers.filter((item) => item.slug === slug)
}

export const CreateNewFlyer = async () => {
    const cookieStore = await cookies();
    const token = cookieStore.get(COOKIE_NAME)

    const user = await GetCurrentUser();
}


export const UpdateFlyer = async (formData) => {
    const cookieStore = await cookies();
    const token = cookieStore.get(COOKIE_NAME)

    const user = await GetCurrentUser();
}

export const DeleteFlyer = async(formData) => {
    const cookieStore = await cookies();
    const token = cookieStore.get(COOKIE_NAME)

    const user = await GetCurrentUser();
}
