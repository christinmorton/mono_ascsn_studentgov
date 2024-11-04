export const GetAllSurveys = async () => {
    const menu = await fetch(`http://localhost:1337/api/student-surveys?populate=${'*'}`)
  
    const data = await menu.json();
  
    return data.data;
  }

  export const GetAllQuestions = async () => {
    const menu = await fetch(`http://localhost:1337/api/survey-questions?populate=${'*'}`)
  
    const data = await menu.json();
  
    return data.data;
  }

  export const GetSurveyById = async (id) => {
    const surveys = await GetAllSurveys();

    const survey = surveys.find(element => element.documentId === id);

    return survey;
  }