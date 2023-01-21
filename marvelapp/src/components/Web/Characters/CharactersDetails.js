import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getCharactersById } from "../../../api/marvel";
import "./CharactersDetails.scss";
import { User } from "../../../api/user";
import { useAuth } from "../../../hooks";
import { useNavigate } from "react-router-dom";
import { Button, Icon } from "semantic-ui-react";

const usuario_api = new User();

export function CharactersDetails() {
  const { accessToken, user } = useAuth();
  const navigate = useNavigate();
  let { id } = useParams(); //El nombre ha de ser el mismo con el que se definio el parametro.
  const [characters, setCharacters] = useState([]);
  const [hoveredCharacter, setHoveredCharacter] = useState(null);
  const [selectedCharacterId, setSelectedCharacterId] = useState(null);

  useEffect(() => {
    getCharactersById(id)
      .then((response) => {
        setCharacters(response.data.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  let value_title = "";
  characters.map((character) => {
    value_title = character.name;
  });

  let isFaved;
  let icon_name = "heart";
  let icon_text = "FAV";
  if (user !== null) {
    isFaved = user.personajesFav.some((favName) => favName === value_title);
    if (isFaved) {
      console.log("ya es favorito");
      icon_name = "close";
      icon_text = "UNFAV";
    }
  }

  console.log(value_title);
  console.log(user);

  const personajeData = { personajesFav: `${value_title}` };
  const obj = JSON.stringify(personajeData);

  const handleLikeClick = () => {
    if (user !== null) {
      if (isFaved) {
        const removeData = { personajesFav: [`${value_title}`] };
        const removeDataobj = JSON.stringify(removeData);
        (async () => {
          await usuario_api.updateUser(
            accessToken,
            user._id,
            removeDataobj,
            "remove"
          );
        })();
      } else {
        (async () => {
          await usuario_api.updateUser(accessToken, user._id, obj, "add");
        })();
      }

      window.location.reload();
    } else {
      navigate("/auth");
    }
  };

  return (
    <div className="characters">
      <div className="character__inner">
        {characters.map((character) => {
          if (
            character.thumbnail.path ===
            "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"
          )
            return null;
          let descripcion_personaje = "";
          if (character.description === "")
            descripcion_personaje = "Descripcion no disponible";
          else descripcion_personaje = character.description;
          return (
            <div className="hero-info">
              <img
                className="characterdetail__image"
                src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                alt={character.name}
              />
              <div className="hero-info__right">
                <h2 className="hero-info__name">{character.name}</h2>

                <h3>Descripcion </h3>
                <div>{descripcion_personaje}</div>
                <h3>Comics </h3>
                {character.comics.items.map((c) => (
                  <div>{c.name}</div>
                ))}
                <h3>Series </h3>
                {character.series.items.map((s) => (
                  <div>{s.name}</div>
                ))}
                <h3>Eventos </h3>
                {character.events.items.map((e) => (
                  <div>{e.name}</div>
                ))}
                <h3>Historias </h3>
                {character.stories.items.map((stories) => (
                  <div>{stories.name}</div>
                ))}
              </div>
              <Button icon onClick={handleLikeClick}>
                <Icon name={icon_name} />
                {icon_text}
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
