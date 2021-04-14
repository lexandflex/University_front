import { baseStudentsPlans } from '../constants/url';

export const getFacultiesService = async (accessToken) => {
  return fetch(`${baseStudentsPlans}/api/Faculties/GetFaculties`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
};
