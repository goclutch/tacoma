import api_address from '../config';
import axios from 'axios';

const signin = (username, password) => {
  let method = 'post';
  let url = `http://${api_address}/signin`;
  let data = {
    username,
    password
  };
  return axios({
    method,
    url,
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
const signup = (username, password, firstName, lastName) => {
  let method = 'post';
  let url = `http://${api_address}/signup`;
  let data = {
    username,
    password,
    firstName,
    lastName
  };
  return axios({
    method,
    url,
    data
  })
    .then(response => {
      return { network_error: false, response };
    })
    .catch(error => {
      if (!error.response) return { network_error: true, error };
      else return { network_error: false, error };
    });
};

export default {
  signin,
  signup
};
