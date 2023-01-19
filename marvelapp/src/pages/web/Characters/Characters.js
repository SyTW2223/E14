import React, { useState } from 'react';

import {Characters} from '../../../components/Web';
import {BarraBusqueda} from "../../../components/Web/BarraBusqueda";

export function PersonajesPagina() {
  const [heroes, setHeroes] = useState([]);
  return (
    <div>
        <h1>PERSONAJES</h1>
        <BarraBusqueda setter={setHeroes}/>
        <Characters /> {/* Llamada a componente de REACT */}
    </div>
  );
}

