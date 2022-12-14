const SERVER_IP = "localhost:3977";
const API_VERSION = "v1";
export const ENV = {
  BASE_PATH: `http://${SERVER_IP}`,
  BASE_API: `http://${SERVER_IP}/api/${API_VERSION}`,
  API_ROUTES: {
    HELLO: "hello",
    REGISTER: "auth/register",
    LOGIN: "auth/login",
    REFRESH_TOKEN: "auth/refresh_access_token",
    USER_ME: "user/me",
    USER: "user",
    USERS: "users",
    
  },
  JWT: {
    ACCESS: "access",
    REFRESH: "refresh",
  },
}