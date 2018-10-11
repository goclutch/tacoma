import api_address from '../config';
import axios from 'axios';

const getUsers = token => {
  let method = 'get';
  let url = `http://${api_address}/users`;
  let headers = {
    'Content-Type': 'application/json',
    'x-access-token': token
  };
  return axios({
    method,
    url,
    headers
  })
    .then(response => {
      console.log('response', response);
      return { network_error: false, response };
    })
    .catch(error => {
      if (!error.response) return { network_error: true, error };
      else return { network_error: false, error };
    });
};
const getUserData = token => {
  let method = 'get';
  let url = `http://${api_address}/user`;
  let headers = {
    'Content-Type': 'application/json',
    'x-access-token': token
  };
  return axios({
    method,
    url,
    headers
  })
    .then(response => {
      console.log('response', response);
      return { network_error: false, response };
    })
    .catch(error => {
      if (!error.response) return { network_error: true, error };
      else return { network_error: false, error };
    });
};
const updateUserData = (token, formData) => {
  let method = 'patch';
  let url = `http://${api_address}/user`;
  let headers = {
    'Content-Type': 'application/json',
    'x-access-token': token
  };
  const data = {
    formData
  };
  return axios({
    method,
    url,
    headers,
    data
  })
    .then(response => {
      console.log('response', response);
      return { network_error: false, response };
    })
    .catch(error => {
      if (!error.response) return { network_error: true, error };
      else return { network_error: false, error };
    });
};
const updatePassword = (token, formData) => {
  let method = 'patch';
  let url = `http://${api_address}/login`;
  let headers = {
    'Content-Type': 'application/json',
    'x-access-token': token
  };
  const data = {
    formData
  };
  return axios({
    method,
    url,
    headers,
    data
  })
    .then(response => {
      console.log('response', response);
      return { network_error: false, response };
    })
    .catch(error => {
      if (!error.response) return { network_error: true, error };
      else return { network_error: false, error };
    });
};

export default {
  getUsers,
  getUserData,
  updateUserData,
  updatePassword
};
