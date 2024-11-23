import { cookies } from "next/headers";
import { z } from "zod";
import { redirect } from "next/navigation";
import { COOKIE_NAME, SERVER_NAME } from "@/utils/constants";

import { GetCurrentUser } from './UserActions';

const ascsnContentSchema = z.object({
    id: z.number(),
    documentId: z.string(),
    Title: z.string(),
    MarketingLead: z.string(),
    publishedAt: z.string(),
    Image: z.string().optional(),
    CallToActionLink: z.string().optional()
})

export const GetPage = async (id) => {
    const page = await fetch(`${SERVER_NAME}/api/${id}?populate[0]=Support&populate[1]=hero&populate[2]=Resources&populate[3]=Guiddance`)

    if (!page.ok) {
        const errorData = await page.json();
        console.error('Error:', errorData);
        return errorData
    }
  
    const data = await page.json();
  
    return data.data;
}

export const GetAllASCSNContent= async () => {
    const articles = await fetch(`${SERVER_NAME}/api/marketing-articles?populate[0]=ChildSection`)

    if (!articles.ok) {
        const errorData = await articles.json();
        console.error('Error:', errorData);
        return errorData
    }
  
    const data = await articles.json();
  
    return data.data;
}

export const GetHomepageContent = async () => {
    const articles = await GetAllASCSNContent();

    let support = null;
    let resources = null;
    let guidance = null;
    let resourceLinks = null;
    let studentGovernmentBody = null;
    let studentUnions = null;

    articles.forEach((article) => {
        const content = {
            id: article.id,
            documentId: article.documentId,
            Title: article.Title,
            MarketingLead: article.MarketingLead,
            publishedAt: article.publishedAt,
            Image: article.Image,
            CallToActionLink: article.CallToActionLink,
            ChildSection: article.ChildSection
        };


        switch (content.Title) {
            case 'Support':
                support = content;
                break;
            case 'Resources':
                resources = content;
                break;
            case 'Guidance':
                guidance = content;
                break;
            case 'Resource Links':
                resourceLinks = content;
                break;
            case '2024-2025 ASCSN Leadership':
                studentGovernmentBody = content;
                break;
            case 'Student Unions':
                studentUnions = content
                break;
            default:
                break;
        }
    });

    // const ascsnContent = [support, resources, guidance, resourceLinks, studentGovernmentBody].filter(Boolean);

    const allContent = [support, resources, guidance, resourceLinks, studentGovernmentBody, studentUnions].filter(Boolean);

    const ascsnContent = articles.filter((article) => {
        return !allContent.some((content) => content?.id === article.id);
    });

    return {
        support,
        resources,
        guidance,
        resourceLinks,
        studentUnions,
        ascsnContent,
    };
};

export const CreateASCSNContent = async () => {
    const cookieStore = await cookies();
    const token = cookieStore.get(COOKIE_NAME)

    const user = await GetCurrentUser();
}


export const UpdateASCSNContent = async (formData) => {
    const cookieStore = await cookies();
    const token = cookieStore.get(COOKIE_NAME)

    const user = await GetCurrentUser();
}

export const DeleteASCSNContent = async(formData) => {
    const cookieStore = await cookies();
    const token = cookieStore.get(COOKIE_NAME)

    const user = await GetCurrentUser();
}


export const GetAllStudentGovernmentTerms = async() => {
    // const cookieStore = await cookies();
    // const token = cookieStore.get(COOKIE_NAME)

    // const user = await GetCurrentUser();

    const studentGovernmentTerms = await fetch(`${SERVER_NAME}/api/student-government-terms?populate=*`)

    if (!studentGovernmentTerms.ok) {
        const errorData = await studentGovernmentTerms.json();
        console.error('Error:', errorData);
        return errorData
    }
  
    const data = await studentGovernmentTerms.json();
  
    return data.data;
}

export const GetStudentGovernmentTermById = async (id) => {
    // const cookieStore = await cookies();
    // const token = cookieStore.get(COOKIE_NAME)

    // const user = await GetCurrentUser();

    const studentGovernmentTerm = await fetch(`${SERVER_NAME}/api/student-government-terms/${id}?populate=*`)

    if (!studentGovernmentTerm.ok) {
        const errorData = await studentGovernmentTerm.json();
        console.error('Error:', errorData);
        return errorData
    }
  
    const data = await studentGovernmentTerm.json();
  
    return data.data;
}