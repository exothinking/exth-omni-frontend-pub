// const api = process.env.REACT_APP_API_URL;
const api = "http://omninotify-backend.herokuapp.com";

export async function getMyApps(token) {
  try {
    const response = await fetch(`${api}/apps`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'authorization': `${token}`,
      }
    });

    return await response.json();

  } catch (error) {
    return {error: error};
  }
}

export async function createNewApp(token, appName) {
  try {
    const response = await fetch(`${api}/apps`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'authorization': `${token}`,
      },
      body: JSON.stringify({app_name: appName}),
    });

    return await response.json();

  } catch (error) {
    return {error: error};
  }
}

export async function setChannel(token, channel, appId) {
  try {
    const response = await fetch(`${api}/apps/${appId}/${channel}/settings`, {
      method: 'PUT',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'authorization': `${token}`,
      }
    });

    return await response.json();

  } catch (error) {
    return {error: error};
  }
}