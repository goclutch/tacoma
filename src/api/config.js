let api_address;
const dev = true;

if (dev) {
  api_address = 'localhost:8000/api';
} else {
  api_address = 'finback-lotus.herokuapp.com/api';
}

export default api_address;
