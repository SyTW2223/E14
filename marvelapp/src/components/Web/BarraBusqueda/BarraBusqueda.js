import React, { useRef } from 'react';
import { getCharactersByName } from '../../../api/marvel';

export function BarraBusqueda({setter}) {
  
    let input = useRef("");
    const handleClick = async (e) => {
        e.preventDefault();
        let value = input.current.value;
        if (value === "") return;

        try {
            console.log("Testing Try");
            console.log(value);
            let heroes = await getCharactersByName(value);
            console.log(heroes)
            setter(heroes);
          } catch (err) {
            return console.error(err);
          }
        };

    return (
        <form>
            <input type="text" placeholder='Busca a quien te salga del pingo' ref={input}/>
            <button onClick={handleClick}>Buscar</button>
        </form>
  )
}
