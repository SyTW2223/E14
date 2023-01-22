import React, { useRef } from 'react';
import { getComicsbyTitle } from '../../../api/marvel';
import { Input } from 'semantic-ui-react';
import { useLocation } from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react';


//ESTO ES LA DE COMICS
import "./BarraBusquedaComics.scss"
export function BarraBusquedaComics({setterSearchComic, setterComics}) {
    let input = useRef("");
    //const path = window.location.href;
    //const location = useLocation();
    //console.log("FINAL BICHARDO");
    //console.log(path);
    const handleClick = async (e) => {
        e.preventDefault();
        let value = input.current.value;
        if (value === ""){ setterSearchComic(null);
          return;}

        try {
            console.log("Testing Try");
            console.log(value);
            let heroes = await getComicsbyTitle(value);
            console.log(heroes)
            setterComics(heroes.data.data.results);
            setterSearchComic(1);
          } catch (err) {
            return console.error(err);
          }
        };

    return (
        <form className='form_comic'>
            <input className='input_searchbar' type="text" placeholder='Buscar' ref={input}/>
            <Button color='red' size='small' animated='vertical' onClick={handleClick}>
              <Button.Content hidden>Buscar</Button.Content>
                <Button.Content visible>
                 <Icon name='search' />
              </Button.Content>
            </Button>
        </form>
  )
}
