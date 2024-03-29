import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Loader } from "semantic-ui-react";
import { getCharacters } from "../../../api/marvel";
import { BarraBusqueda } from "../../../components/Web/BarraBusqueda";

import "./Character.scss";

export function Characters() {
  const [characters, setCharacters] = useState([]);
  const [hoveredCharacter, setHoveredCharacter] = useState(null);
  const [selectedCharacterId, setSelectedCharacterId] = useState(null);
  const [searching, setSearching] = useState(null);

  useEffect(() => {
    if (searching === null) {
      getCharacters()
        .then((response) => {
          setCharacters(response.data.data.results);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [searching]);

  function handleClick(id) {
    setSelectedCharacterId(id);
    console.log(id);
  }

  if (!characters) return <Loader active inline="centered" />;

  return (
    <div className="characters">
      <BarraBusqueda setterSearch={setSearching} setterHeroes={setCharacters} />
      <div className="character__inner">
        {characters.map((character) => {
          if (
            character.thumbnail.path ===
            "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"
          )
            return null;
          return (
            <Link
              to={`/personajes/${character.id}`} //target="_blank"
              key={character.id}
              className="character"
              onMouseEnter={() => setHoveredCharacter(character.id)}
              onMouseLeave={() => setHoveredCharacter(null)}
              onClick={() => setSelectedCharacterId(character.id)}
            >
              <img
                className="character__image"
                src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                alt={character.name}
              />
              {hoveredCharacter === character.id && (
                <div className="character__namee animate__animated animate__fadeIn">
                  {character.name}
                </div>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
