import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getCharactersById } from '../../../api/marvel';
import "./Character.scss";

export function CharactersDetails() {
    let {id} = useParams(); //El nombre ha de ser el mismo con el que se definio el parametro.
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
  
    return (
      <div className = "characters">
      <div className="character__inner">
        {characters.map((character) => {
          if (character.thumbnail.path === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available') return null;
          return (
            <div to={`/personajes/${character.id}`}
              key={character.id}
              onMouseEnter={() => setHoveredCharacter(character.id)}
              onMouseLeave={() => setHoveredCharacter(null)}
              onClick={() => setSelectedCharacterId(character.id)}
            >
              <div>{character.name}</div>
              <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} />
              <div>{character.description}</div>
              {
                character.comics.items.map(c => <div>{c.name}</div>)
              }
              {
                character.series.items.map(s => <div>{s.name}</div>)
              }
              {
                character.events.items.map(e => <div>{e.name}</div>)
              }
              {
                character.stories.items.map(stories => <div>{stories.name}</div>)
              }
            </div>
          );
        })}
      </div>
    </div>
    );
}
