import { baseStudentsPlans } from '../constants/url';

export const getSpeciailitiesService = async (accessToken) => {
  return fetch(`${baseStudentsPlans}/api/Specialtys/GetSpecialties`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
};
