import React, { useRef } from "react";
import { getComicsbyTitle } from "../../../api/marvel";
import { Button, Icon } from "semantic-ui-react";

//ESTO ES LA DE COMICS
import "./BarraBusquedaComics.scss";
export function BarraBusquedaComics({ setterSearchComic, setterComics }) {
  let input = useRef("");

  const handleClick = async (e) => {
    e.preventDefault();
    let value = input.current.value;
    if (value === "") {
      setterSearchComic(null);
      return;
    }

    try {
      let heroes = await getComicsbyTitle(value);
      setterComics(heroes.data.data.results);
      setterSearchComic(1);
    } catch (err) {
      return console.error(err);
    }
  };

  return (
    <form className="form_comic">
      <input
        className="input_searchbar"
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
