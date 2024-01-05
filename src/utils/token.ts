const AUTHORIZATION_TOKEN_NAME = "authorization_token";

const saveToken = (token: string) => {
  localStorage.setItem(AUTHORIZATION_TOKEN_NAME, token);
};

const getToken = () => {
  const token = localStorage.getItem(AUTHORIZATION_TOKEN_NAME);
  return token ?? "";
};

const dropToken = () => {
  localStorage.removeItem(AUTHORIZATION_TOKEN_NAME);
};

export { saveToken, getToken, dropToken };
