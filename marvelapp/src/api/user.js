import { ENV } from "../utils";

export class User {
  baseApi = ENV.BASE_API;

  async getMe(accessToken) {
    try {
      console.log("THIS IS GET ME API FUNCTION");
      console.log(accessToken)
      const url = `${this.baseApi}/${ENV.API_ROUTES.USER_ME}`;
      const params = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };

      const response = await fetch(url, params);
      const result = await response.json();

      if (response.status !== 200) throw result;

      return result;
    } catch (error) {
      throw error;
    }
  }

  async createUser(accessToken, data) {
    console.log("CREATE USER");
    console.log(data);
    try {
      const formData = new FormData();
      Object.keys(data).forEach((key) => {
        formData.append(key, data[key]);
      });

      if (data.fileAvatar) {
        formData.append("avatar", data.fileAvatar);
      }

      const url = `${this.baseApi}/${ENV.API_ROUTES.USER}`;
      const params = {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        body: formData,
      };

      const response = await fetch(url, params);
      const result = await response.json();

      if (response.status !== 201) throw result;

      return result;
    } catch (error) {
      throw error;
    }
  }

  async getUsers(accessToken, active = undefined) {
    try {
      const url = `${this.baseApi}/${ENV.API_ROUTES.USERS}?active=${active}`;
      const params = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };

      const response = await fetch(url, params);
      const result = await response.json();

      if (response.status !== 200) throw result;

      return result;
    } catch (error) {
      throw error;
    }
  }

  async updateUser(accessToken, idUser, userData, type) {
    try {
      const data = userData;
      console.log(type);
      console.log(accessToken);
      console.log(idUser);
      console.log(data);
      if (!data.password) {
        delete data.password;
      }

      const formData = new FormData();
      Object.keys(data).forEach((key) => {
        formData.append(key, data[key]);
      });

      if (data.fileAvatar) {
        formData.append("avatar", data.fileAvatar);
      }

      let rutaAPI = ENV.API_ROUTES.UPDATEINFO;
      if(type === "remove"){
        rutaAPI = ENV.API_ROUTES.REMOVEINFO;
      }
      const url = `${ENV.BASE_API}/${rutaAPI}/${idUser}`;
      
      console.log(url);
      const params = {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type':'application/json',
        },
        body: userData,
      };
      console.log("PARAMS");
      console.log(params);

      const response = await fetch(url, params);
      const result = await response.json();

      if (response.status !== 200) throw result;
      console.log("FUNCIONA");
      return result;
    } catch (error) {
      throw error;
    }
  }

  async deleteUser(accessToken, idUser) {
    try {
      const url = `${this.baseApi}/${ENV.API_ROUTES.USER}/${idUser}`;
      const params = {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };

      const response = await fetch(url, params);
      const result = await response.json();

      if (response.status !== 200) throw result;

      return result;
    } catch (error) {
      throw error;
    }
  }

  async getUserByNick(accessToken, nickname) {
    try {
      const url = `${this.baseApi}/${ENV.API_ROUTES.USER}/${nickname}`;
      const params = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };
      const response = await fetch(url, params);
      const result = await response.json();

      if (response.status !== 200) throw result;
      //console.log("RESULTADOOO");
      //console.log(result);
      return result;
    } catch (error) {
      throw error;
    }
  }


}