import React, { useRef } from 'react';
import { getCharactersByName } from '../../../api/marvel';
import { Input } from 'semantic-ui-react';

import "./BarraBusqueda.scss"
export function BarraBusqueda({setterSearch, setterHeroes}) {
  
    let input = useRef("");
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
        <form>
            <input className='input_searchbar' type="text" placeholder='Busca a quien te salga del pingo' ref={input}/>
            <button onClick={handleClick}>Buscar</button>
        </form>
  )
}
