import React from "react";
import { Container } from "semantic-ui-react";
import "./Banner.scss";

export function Banner() {
  return (
    <div className="home">
      <Container>
        <h1>Explora el maravilloso mundo de MARVEL</h1>
        <h2> A través de los personajes y comics de esta gran ficción</h2>
      </Container>
      <div className="home__dark" />
    </div>
  );
}
