import React from 'react';
import {Routes, Route} from "react-router-dom";
import {Home} from "../pages/web/Home";
import {PersonajesPagina} from "../pages/web/Characters";
import {ComicsPagina, ComicsPaginaDetalles} from "../pages/web/Comics";
import {Forum} from "../pages/web/Forum"
import { ClientLayout, AdminLayout} from "../layouts";
import { PersonajesDetallesPagina} from "../pages/web/Characters";
import { useAuth } from "../hooks";



import {Auth, Users, Blog} from "../pages/admin";



export function WebRouter() {
    const { user } = useAuth();
    //console.log("PEDRO SANCHES PIVES");
    //console.log(user);
    const loadLayout = (Layout, Page) => {
        return (
            <Layout>
                <Page />
            </Layout>
        );

    };
    let LayoutInUse = ClientLayout;
    if (user !== null){
        LayoutInUse = AdminLayout
    }
  return (
   <Routes>
        <Route path="/" element = {loadLayout(LayoutInUse, Home)} />
        <Route path="/personajes" element = {loadLayout(LayoutInUse, PersonajesPagina)} />
        <Route path="/comics" element = {loadLayout(ClientLayout, ComicsPagina)} />
        <Route path="/personajes/:id" element = {loadLayout(ClientLayout, PersonajesDetallesPagina)} /> {/*Redirige a la pagina donde se muestra la info detallada en funcion del id*/}
        <Route path="/comics/:id" element = {loadLayout(ClientLayout, ComicsPaginaDetalles)} />
        <Route path="/foro" element = {loadLayout(LayoutInUse, Forum)} />
        
   </Routes>
  );
}
