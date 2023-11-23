import checkResponse from "./checkResponse";

export const BASE_URL = 'https://auth.nomoreparties.co';

function request(url, options) {
  return fetch(url, options).then(checkResponse)
}

export const register = (email, password) => {
  return request(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
        "Content-Type": "application/json" 
    },
    body: JSON.stringify({email: email, password: password})
  })
  .then((res) => {
    console.log(res)
    return res;
  })
  .catch((err) => 
  console.log(err)
  
  );
}; 


export const authorize = (email, password) => {
  return request(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
        "Content-Type": "application/json" 
    },
    body: JSON.stringify({email: email, password: password})
  })
  .then((res) => {
    if(res.token){
      console.log(res)
      localStorage.setItem('jwt', res.token);
      return res;
    }else{
      return;
    }
  })
  .catch((err) => console.log(err));
}; 

export const checkToken = (token) => {
  return request(`${BASE_URL}/users/me`, {
      method: "GET",
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
      }
  })
  .then(data => data)
};