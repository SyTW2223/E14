import React, {useState} from 'react';
import { useAuth } from "../../../hooks";
import { DateTime } from "luxon";
import {Container} from "semantic-ui-react";


import "./UserInfo.scss"

export function UserInfo() {
  const { user } = useAuth();
  const [comics, setComics] = useState([]);

  const date = new Date(user.createdAt);

  console.log("LO DE DEBAJO ES FRANCES");
  console.log(user);
  //setComics();
  return (
    <div>
      <h1>Este es el componente con la info del usuario</h1>
      <div class="row">
    <div class="column"></div>
    <div class="column"></div>
    </div>
      <div>{user.nickname}</div>
      <div>{user.nombre}</div>
      <div>{user.edad}</div>
      <span>
        Se unió el 
            {DateTime.fromISO(date.toISOString()).setLocale("es").toFormat("dd 'de' LLLL 'del' yyyy")}
        </span>
      <h1>Comic favoritos</h1>
      <div>{user.comicsFav.map((comic) => {
        return (
            <div>{comic}</div>
        );
        })}</div>
      <div>{user.comicsFav.map}</div>
      <h1>Personajes favoritos</h1>
      <div>{user.personajesFav.map((heroe) => {
        return (
            <div>{heroe}</div>
        );
        })}</div>
    </div>
  )
}