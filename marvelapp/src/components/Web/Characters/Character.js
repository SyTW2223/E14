import React, { useState, useEffect } from 'react';
import { getCharacters } from '../../../api/marvel';
import "./Character.scss";

function Characters() {
  const [characters, setCharacters] = useState([]);
  const [hoveredCharacter, setHoveredCharacter] = useState(null);

  useEffect(() => {
    getCharacters()
      .then((response) => {
        setCharacters(response.data.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

 /* return (
    <div className = "characters">
      {characters.map((character) => (
        <div key={character.id}>
          <h2>{character.name}</h2>
          <img className = "character__image" src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} />
        </div>
      ))}
    </div>
  );
}*/
/*return (
  <div className = "characters">
    <div className="character__inner">
    {characters.map((character) => {
      if (character.thumbnail.path === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available') return null;
      return (
        <div key={character.id}>
          <h2>{character.name}</h2>
          <img className = "character__image" src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} />
          <div className="character__namee animate__animated animate__fadeIn">{character.name}</div>
        </div>
      );
    })}
    </div>
  </div>
);
}*/

/*return (

  <div className = "characters">
    <div className="character__inner">
    {characters.map((character) => {
      if (character.thumbnail.path === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available') return null;
      return (
        <div key={character.id} className="character">
        <div className="character__namee animate__animated animate__fadeIn">{character.name}</div>
          <img className = "character__image" src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} />


</div>
  );
})}
</div>
</div>
);
}*/

  return (
    <div className = "characters">
      <div className="character__inner">
        {characters.map((character) => {
          if (character.thumbnail.path === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available') return null;
          return (
            <div 
              key={character.id} className="character"
              onMouseEnter={() => setHoveredCharacter(character.id)}
              onMouseLeave={() => setHoveredCharacter(null)}
            >
              <img className = "character__image" src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} />
              {hoveredCharacter === character.id && 
                <div className="character__namee animate__animated animate__fadeIn">{character.name}</div>
              }
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Characters;