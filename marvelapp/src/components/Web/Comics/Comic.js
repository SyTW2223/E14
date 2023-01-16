import React, { useState, useEffect } from 'react';
import { getComics } from '../../../api/marvel';
//import "./Character.scss";
function Comics() {
    const [comics, setComics] = useState([]);
  
    useEffect(() => {
      getComics()
        .then((response) => {
          setComics(response.data.data.results);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);
  
    return (
      <div className = "comics">
        {comics.map((comic) => (
          <div key={comic.id}>
            <h2>{comic.name}</h2>
            <img  src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt={comic.name} />
          </div>
        ))}
      </div>
    );
  }
  
  export default Comics;
  