import React, { useRef } from 'react';
import { getCharactersByName } from '../../../api/marvel';
import { Input } from 'semantic-ui-react';
import { useLocation } from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react';

import "./BarraBusqueda.scss"
export function BarraBusqueda({setterSearch, setterHeroes}) {
    let input = useRef("");
    const path = window.location.href;
    const location = useLocation();
    console.log("FINAL BICHARDO");
    console.log(path);
    const handleClick = async (e) => {
        e.preventDefault();
        let value = input.current.value;
        if (value === ""){ setterSearch(null);
          return;}

        try {
            console.log("Testing Try");
            console.log(value);
            let heroes = await getCharactersByName(value);
            console.log(heroes)
            setterHeroes(heroes.data.data.results);
            setterSearch(1);
          } catch (err) {
            return console.error(err);
          }
        };

    return (
        <form className='form_personaje'>
            <input className='input_searchbar_personaje' type="text" placeholder='Buscar' ref={input}/>
            {/* <button onClick={handleClick}>Buscar</button> */}
            <Button color='red' size='small' animated='vertical' onClick={handleClick}>
              <Button.Content hidden>Buscar</Button.Content>
                <Button.Content visible>
                 <Icon name='search' />
              </Button.Content>
            </Button>
        </form>
  )
}
