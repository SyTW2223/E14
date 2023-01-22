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
    POST: "forum",
    UPDATEINFO: "user/update",
    REMOVEINFO: "user/remove",
  },
  JWT: {
    ACCESS: "access",
    REFRESH: "refresh",
  },
  MARVEL_PUBLIC_KEY: `b5e1ee4e561ec0224a594912716ad175 `,
  MARVER_PRIVATE_KEY:`f1de0f504a8d9b40f884073e6d1df1bdb659d3c3 `,
  MARVEL_HASH: `6e7943c7f421e1cdc4194b4a161ad67a`,
}