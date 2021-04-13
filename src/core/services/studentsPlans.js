import { baseStudentsPlans } from '../constants/url';

export const getStudentsPlansService = async (accessToken) => {
  return fetch(`${baseStudentsPlans}/api/AcademicPlans/GetAcademicPlans`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

export const createStudentsPlanService = async (accessToken, studentPlan) => {
  console.log('before Post', { studentPlan });
  return fetch(`${baseStudentsPlans}/api/AcademicPlans/PostAcademicPlan`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({ ...studentPlan }),
  });
};
// /api​/AcademicPlans​/DeleteAcademicPlan?Id=${studentsPlanId}
export const deleteStudentsPlanService = async (accessToken, studentsPlanId) => {
  console.log('before Delete', { studentsPlanId });
  return fetch(`${baseStudentsPlans}/api/AcademicPlans/DeleteAcademicPlan?ID=${studentsPlanId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

export const editStudentsPlanService = async (accessToken, studentPlan) => {
  console.log('before PUT', { studentPlan });
  return fetch(`${baseStudentsPlans}/api/AcademicPlans/PutAcademicPlan/${studentPlan.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({ ...studentPlan }),
  });
};
