import React, { useRef } from "react";
import { getCharactersByName } from "../../../api/marvel";
import { Button, Icon } from "semantic-ui-react";

import "./BarraBusqueda.scss";
export function BarraBusqueda({ setterSearch, setterHeroes }) {
  let input = useRef("");
  const handleClick = async (e) => {
    e.preventDefault();
    let value = input.current.value;
    if (value === "") {
      setterSearch(null);
      return;
    }

    try {
      let heroes = await getCharactersByName(value);
      setterHeroes(heroes.data.data.results);
      setterSearch(1);
    } catch (err) {
      return console.error(err);
    }
  };

  return (
    <form className="form_personaje">
      <input
        className="input_searchbar_personaje"
        type="text"
        placeholder="Buscar"
        ref={input}
      />
      <Button
        color="red"
        size="small"
        animated="vertical"
        onClick={handleClick}
      >
        <Button.Content hidden>Buscar</Button.Content>
        <Button.Content visible>
          <Icon name="search" />
        </Button.Content>
      </Button>
    </form>
  );
}
