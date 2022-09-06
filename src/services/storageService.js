export function setAuthToken(token) {
  localStorage.setItem('auth_token', token);
  localStorage.setItem('auth_token_creation_date', Date.now());
  return token;
}

export function getAuthToken() {
  return {
    token: localStorage.getItem('auth_token'),  
    createdOn: localStorage.getItem('auth_token_creation_date')
  };
}

export function clearAuthToken() {
  localStorage.removeItem('auth_token');
  localStorage.removeItem('auth_token_creation_date');
  return true;
}