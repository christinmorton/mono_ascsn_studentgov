import { cookies } from "next/headers";
import { z } from "zod";
import { redirect } from "next/navigation";
import { COOKIE_NAME } from "@/utils/constants";

import { GetCurrentUser } from './UserActions';

export const GetAllEvents = async () => {
    const events = await fetch(`http://localhost:1337/api/events?populate=${'*'}`)
  
    const data = await events.json();
  
    return data.data;
}

export const GetEventById = async (id) => {
    const event = await fetch(`http://localhost:1337/api/events/${id}?populate=${'*'}`)

    if (!event.ok) {
        const errorData = await event.json();
        console.error('Error:', errorData);
        return errorData
    }

    const data = await event.json();
    
    return data.data;
}


export const GetEventBySlug = async (slug) => {
    const events = await GetAllEvents();

    console.log(events)

    return events.filter((item) => item.slug === slug)
}

export const CreateNewEvent = async () => {
    const cookieStore = await cookies();
    const token = cookieStore.get(COOKIE_NAME)

    const user = await GetCurrentUser();
}


export const UpdateEvent = async (formData) => {
    const cookieStore = await cookies();
    const token = cookieStore.get(COOKIE_NAME)

    const user = await GetCurrentUser();
}

export const DeleteEvent = async(formData) => {
    const cookieStore = await cookies();
    const token = cookieStore.get(COOKIE_NAME)

    const user = await GetCurrentUser();
}

