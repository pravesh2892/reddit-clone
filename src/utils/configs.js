const PROJECT_ID = "dbt6ga9tkodz";

export const getHeaderWithProjectId = () => {
  return {
    headers: { projectId: PROJECT_ID },
  };
};

export const getHeaderWithProjectIDAndContent = () => {
    
  return {
    headers: { projectId: PROJECT_ID, "Content-Type": "application/json" },
  };
};

export const getAuthHeaderConfig = () => {
  const token = sessionStorage.getItem("authToken");
  if(token){
  return {
    headers: {
      Authorization: `Bearer ${token}`,
      projectID: PROJECT_ID,
    },
  };
}else{
  return {
    error: "user not logged in" 
  }
}
};