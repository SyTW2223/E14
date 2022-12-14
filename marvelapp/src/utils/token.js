import jwtDecode from "jwt-decode"; //HAY QUE INSTALARLA

export const hasExpiredToken = (token) => {
  const { exp } = jwtDecode(token);
  const currentData = new Date().getTime();

  if (exp <= currentData) {
    return true;
  }

  return false;
};