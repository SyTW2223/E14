import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react';
import { get3RandomComics } from '../../../api/marvel';

import "./../PersonajeHome/PersonajeHome.scss";

export function ComicsHome() {
    const [comics, setComics] = useState([]);
    const [hoveredComic, setHoveredComic] = useState(null);
  
    useEffect(() => {
      get3RandomComics()
        .then((response) => {
          setComics(response.data.data.results);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);

  return (
    <div className = "container__personajes">
      <h2 className='personajes-title'>Comics Recomendados</h2>
      <div className="zona-personajes-home">
        {comics.map((comic) => {
          let portada_comic = "";
          if (comic.thumbnail.path === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available') 
            portada_comic = "https://media4.giphy.com/media/j6aoUHK5YiJEc/giphy.gif?cid=ecf05e47eev3bvox4etxd6olnes3t021q8m41i03rajj114e&rid=giphy.gif&ct=g";
          else portada_comic = `${comic.thumbnail.path}.${comic.thumbnail.extension}`
          return (
            <div className='personaje-home'>
              <img src={portada_comic} alt={comic.title} className='personaje-home__img'/>
              <div className='personaje-home__name'>{comic.title}</div>
            </div>
          );
        })}
      </div>
      <div className='button-personajes'>
      <Link to='/comics'>
        <Button fluid animated inverted>
          <Button.Content visible>Accede a los comics</Button.Content>
            <Button.Content hidden>
            <Icon name='arrow right' />
          </Button.Content>
        </Button>
      </Link>
      </div>
    </div>
  );
}
