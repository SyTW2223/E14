import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Icon } from "semantic-ui-react";
import { get3RandomCharacters } from "../../../api/marvel";

import "./PersonajeHome.scss";

export function PersonajeHome() {
  const [characters, setCharacters] = useState([]);
  const [hoveredCharacter, setHoveredCharacter] = useState(null);
  const [selectedCharacterId, setSelectedCharacterId] = useState(null);

  useEffect(() => {
    get3RandomCharacters()
      .then((response) => {
        setCharacters(response.data.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function handleClick(id) {
    setSelectedCharacterId(id);
    console.log(id);
  }
  return (
    <div className="container__personajes">
      <h2 className="personajes-title">Personajes Recomendados</h2>
      <div className="zona-personajes-home">
        {characters.map((character) => {
          let portada_personaje = "";
          if (
            character.thumbnail.path ===
            "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"
          )
            portada_personaje =
              "https://media4.giphy.com/media/j6aoUHK5YiJEc/giphy.gif?cid=ecf05e47eev3bvox4etxd6olnes3t021q8m41i03rajj114e&rid=giphy.gif&ct=g";
          else
            portada_personaje = `${character.thumbnail.path}.${character.thumbnail.extension}`;
          return (
            <div className="personaje-home" key={character.id}>
              <img
                src={portada_personaje}
                alt={character.name}
                className="personaje-home__img"
              />
              <div className="personaje-home__name">{character.name}</div>
            </div>
          );
        })}
      </div>
      <div className="button-personajes">
        <Link to="/personajes">
          <Button fluid animated inverted>
            <Button.Content visible>Accede a los personajes</Button.Content>
            <Button.Content hidden>
              <Icon name="arrow right" />
            </Button.Content>
          </Button>
        </Link>
      </div>
    </div>
  );
}
