import { baseStudentsUrl } from '../constants/url';

export const getStudentsService = async (accessToken) => {
  return fetch(`${baseStudentsUrl}/api/Students/GetStudents`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

export const createStudentService = async (accessToken, student) => {
  console.log('before Post', { student });
  return fetch(`${baseStudentsUrl}/api/Students/PostStudent`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({ ...student }),
  });
};

export const deleteStudentService = async (accessToken, studentId) => {
  console.log('before Delete', { studentId });
  return fetch(`${baseStudentsUrl}/api/Students/DeleteStudent?Id=${studentId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

export const editStudentService = async (accessToken, student) => {
  console.log('before PUT', { student });
  return fetch(`${baseStudentsUrl}/api/Students/PutStudent/${student.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({ ...student }),
  });
};
