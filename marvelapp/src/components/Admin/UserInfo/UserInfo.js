import React from "react";
import { useAuth } from "../../../hooks";
import { DateTime } from "luxon";
import { Container } from "semantic-ui-react";

import "./UserInfo.scss";

export function UserInfo() {
  const { user } = useAuth();

  const date = new Date(user.createdAt);

  console.log("LO DE DEBAJO ES FRANCES");
  console.log(user);
  //setComics();
  return (
    <div>
      <div className="zona_info_usuario">
        <h1 className="titulos_secciones">
          Información de tu usuario: {user.nickname}
        </h1>
        <Container classname="container_user">
          <div className="texto_usuario">
            <h3 className="titulo_info"> Nickname:</h3>
            <div className="texto_info">{user.nickname}</div>
            <div class="ui divider"></div>
            <h3 className="titulo_info"> Nombre:</h3>
            <div className="texto_info">{user.nombre}</div>
            <div class="ui divider"></div>
            <h3 className="titulo_info"> Edad:</h3>
            <div className="texto_info">{user.edad}</div>
            <div class="ui divider"></div>
            <h3 className="titulo_info"> Se unió a la comunidad el día:</h3>
            <span className="texto_info">
              {DateTime.fromISO(date.toISOString())
                .setLocale("es")
                .toFormat("dd 'de' LLLL 'del' yyyy")}
            </span>
          </div>
          <div className="zona_imagen">
            <img
              className="imagen_usuario"
              src={"https://cdn-icons-png.flaticon.com/512/147/147144.png"}
              alt={"Avatar del usuario"}
            />
          </div>
        </Container>
      </div>
      <div className="zonaGustos">
        <h2 className="titulos_secciones">Tus gustos</h2>
        <Container classname="container_gustos">
          <div className="cosas_fav">
            <h3 className="titulo_cosas_fav">Comic favoritos</h3>
            <div>
              <div class="ui divider"></div>
              {user.comicsFav.map((comic) => {
                return <div className="info_cosas_fav">{comic}</div>;
              })}
            </div>
            <div>{user.comicsFav.map}</div>
          </div>
          <div className="cosas_fav">
            <h3 className="titulo_cosas_fav">Personajes favoritos</h3>
            <div>
              <div class="ui divider"></div>
              {user.personajesFav.map((heroe) => {
                return <div className="info_cosas_fav">{heroe}</div>;
              })}
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
