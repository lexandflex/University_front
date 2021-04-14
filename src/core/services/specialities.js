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

export const createSpecialityService = async (accessToken, speciality) => {
  return fetch(`${baseStudentsPlans}/api/Specialtys/PostSpecialty`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({ ...speciality }),
  });
};

export const deleteSpecialityService = async (accessToken, specialityId) => {
  return fetch(`${baseStudentsPlans}/api/Specialtys/DeleteSpecialty?Id=${specialityId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

export const editSpecialityService = async (accessToken, speciality) => {
  return fetch(`${baseStudentsPlans}/api/Specialtys/PutSpecialty/${speciality.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({ ...speciality }),
  });
};
