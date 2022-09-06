// const api = process.env.REACT_APP_API_URL;
const api = "http://omninotify-backend.herokuapp.com";

export async function auth(login, password) {
  try {

    const response = await fetch(`${api}/login`, {
      method: 'POST',
      mode: 'cors',
      headers: {'Content-Type': 'application/json'}, 
      body: JSON.stringify({login: login, password: password})
    });

    return await response.json();

  } catch (error) {
    return {error: error};
  }
}


export async function register(name, email, companyName, phone, adress, password) {
  try {
    
    const response = await fetch(`${api}/users/register`, {
      method: 'POST',
      mode: 'cors',
      headers: {'Content-Type': 'application/json'}, 
      body: JSON.stringify({
        name, email, companyName, phone, adress, password
      })
    });

    return await response.json();

  } catch (error) {
    return {error: error};
  }
}