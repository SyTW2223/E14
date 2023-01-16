import React, { useState, useEffect } from 'react';
import { getCharacters } from '../../../api/marvel';
import "./Character.scss";

function Characters() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters()
      .then((response) => {
        setCharacters(response.data.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className = "characters">
      {characters.map((character) => (
        <div key={character.id}>
          <h2>{character.name}</h2>
          <img className = "character__image" src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} />
        </div>
      ))}
    </div>
  );
}

export default Characters;
