export const BASE_URL = 'https://auth.nomoreparties.co';

export const register = (email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
        "Content-Type": "application/json" 
    },
    body: JSON.stringify({email: email, password: password})
  })
  .then((response) => {
    try {
      if (response.status === 200){
        return response.json();
      }
    } catch(e){
      return (e)
    }
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
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
        "Content-Type": "application/json" 
    },
    body: JSON.stringify({email: email, password: password})
  })
  .then((response) => {
    try {
      if (response.status === 200){
        return response.json();
      }
    } catch(e){
      return (e)
    }
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
  return fetch(`${BASE_URL}/users/me`, {
      method: "GET",
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
      }
  })
  .then(res => res.json())
  .then(data => data)
};