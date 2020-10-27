import axios from 'axios';

export const axiosWithAuth = () => {
  const token = localStorage.getItem('token');

  return axios.create({
    baseURL: 'https://watertheplants.herokuapp.com/',
    headers: {
      Authorization: token
    }
  });
};


// token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxLCJ1c2VybmFtZSI6InRlc3QyMDAiLCJpYXQiOjE2MDM1NzEyODIsImV4cCI6MTYwMzU3ODQ4Mn0.rHE9BHD9-0TXnFrL9zOMSFKW6hmQM45M5_SmY30NXE0

