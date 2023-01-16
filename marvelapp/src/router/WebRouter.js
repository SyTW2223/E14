import React from 'react';
import {Routes, Route} from "react-router-dom";
import {Home} from "../pages/web/Home";
import {PersonajesPagina} from "../pages/web/Characters";
import {ComicsPagina} from "../pages/web/Comics";
import { ClientLayout } from "../layouts";

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
   </Routes>
  );
}
