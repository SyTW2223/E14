import {ENV} from "../utils";

export class Post {
    baseApi = ENV.BASE_API;
    
async createPost (accessToken, nickname, data) {
  try {
    console.log("ESTE ES EL ACCESS TOKEN");
    console.log(accessToken);
    console.log("THIS IS DATA MADAFAKA");
    console.log(data);
    console.log("EL NICKNAME ES:");
    console.log(nickname);
    /*const formData = new FormData();
    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });
    formData.append("nickname", nickname);
    */
    const url = `${this.baseApi}/${ENV.API_ROUTES.POST}`
    const params = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type':'application/json',
      },
      //body: formData,
      body: JSON.stringify({
        nickname: nickname,
        titulo: data.titulo,
        comentario: data.comentario,
      }),
    }

    console.log("THIS IS FORM DATA");
    console.log(params.body);

    const response = await fetch(url, params);
    const result = await response.json();

    if (response.status !== 201) throw result;
    return result;
    console.log("Se ha enviado la cosa esta");
  } catch (error) {
    throw error;
  }
}

  async getPosts(page = 1, limit = 10) {
    try {
      const pageFilter = `page=${page}`;
      const limitFilter = `limit=${limit}`;
      //API_ROUTES.POST está en utils constants y va a /forum de la api
      const url = `${this.baseApi}/${ENV.API_ROUTES.POST}?${pageFilter}&${limitFilter}`;
      const response =await fetch(url);
      const result = await response.json();

      if(response.status !== 200) throw result;
      return result;
    } catch (error) {
      throw error;
    }
  }
}