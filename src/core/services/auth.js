import { baseAuthUrl } from '../constants/url';

export const loginService = async (login, password) => {
  return fetch(`${baseAuthUrl}/api/v1/account/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ login, password }),
  });
};

export const registerService = async (login, password) => {
  return fetch(`${baseAuthUrl}/api/v1/account/reg`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ login, password }),
  });
};
