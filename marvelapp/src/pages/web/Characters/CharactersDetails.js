import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import { getCharactersById, getCharactersByName } from '../../../api/marvel';
import { CharactersDetails} from '../../../components/Web';

export function PersonajesDetallesPagina() {
  return (
    <div>
        <h1>PERSONAJES UWU</h1>
        <CharactersDetails />
    </div>
  );
}
