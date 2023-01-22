import React, { useState } from "react";

import { Characters } from "../../../components/Web";
import { BarraBusqueda } from "../../../components/Web/BarraBusqueda";

import "./character_main.scss";

export function PersonajesPagina() {
  const [heroes, setHeroes] = useState([]);
  return (
    <div>
      <div className="titulo_character_main">PERSONAJES</div>
      <Characters /> {/* Llamada a componente de REACT */}
    </div>
  );
}
