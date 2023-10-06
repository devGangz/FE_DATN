export const ACCESS_TOKEN = "accessToken";
export const USER_ID = "userId";

export const localStorage = window.localStorage;

export const setAccessToken = (token: string) => {
  localStorage.setItem(ACCESS_TOKEN, token);
};

export const getAccessToken = () => {
  return localStorage.getItem(ACCESS_TOKEN);
};

export const removeAccessToken = () => {
  localStorage.removeItem(ACCESS_TOKEN);
};

export const setUserId = (id: string) => {
  localStorage.setItem(USER_ID, id);
};

export const getUserId = () => {
  return localStorage.getItem(USER_ID);
};

export const removeUserId = () => {
  localStorage.removeItem(USER_ID);
};

export const clearStorage = () => {
  removeUserId();
  removeAccessToken();
};
