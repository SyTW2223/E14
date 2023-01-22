import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Container, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { map } from "lodash";
import { Icon } from "../../../assets";
import { Icon as SemanticIcon } from "semantic-ui-react";
//import { Menu } from "../../../api"
import "./TopBar.scss";

//const menuController = new Menu()

export function TopBar() {
  return (
    <div className="top-bar">
      <Container>
        <div className="top-bar__left" data-testid="zona_topbar">
          <Link to="/" className="logo" name="icono">
            <Icon.LogoApp />
          </Link>
          <Link to="/personajes" className="text" name="personajes">
            Personajes
          </Link>
          <Link to="/comics" className="text" name="comics">
            Comics
          </Link>
          <Link to="/foro" className="text" name="foro">
            Foro
          </Link>
          <Link to="/auth" className="text" data-testid="acceso">
            Acceso
          </Link>
        </div>
      </Container>
    </div>
  );
}
