import React from 'react';
import {Routes, Route} from "react-router-dom";
import {Home} from "../pages/web/Home";
import {PersonajesPagina} from "../pages/web/Characters";
import {ComicsPagina} from "../pages/web/Comics";
import { ClientLayout } from "../layouts";
import { PersonajesDetallesPagina } from "../pages/web/Characters"

export function WebRouter() {
    const loadLayout = (Layout, Page) => {
        return (
            <Layout>
                <Page />
            </Layout>
        );

    };
  return (
   <Routes>
        <Route path="/" element = {loadLayout(ClientLayout, Home)} />
        <Route path="/personajes" element = {loadLayout(ClientLayout, PersonajesPagina)} />
        <Route path="/comics" element = {loadLayout(ClientLayout, ComicsPagina)} />
        <Route path="/personajes/:id" element = {loadLayout(ClientLayout, PersonajesDetallesPagina)} /> {/*Redirige a la pagina donde se muestra la info detallada en funcion del id*/}
   </Routes>
  );
}
