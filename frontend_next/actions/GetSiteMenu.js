import { SERVER_NAME } from "@/utils/constants";


export const GetSiteMenu = async (searchTerm) => {
    const menu = await fetch(`${SERVER_NAME}/api/menus?populate=${'*'}`)
  
    const data = await menu.json();
  
    return data.data.find(item => item.slug === searchTerm);
  }


  export const GetCSNLocations = async (searchTerm) => {
    const menu = await fetch(`${SERVER_NAME}/api/addresses?populate=${'*'}`)
  
    const data = await menu.json();
  
    const locations = data.data.filter(item => item.Description === searchTerm);

    return locations;
  }