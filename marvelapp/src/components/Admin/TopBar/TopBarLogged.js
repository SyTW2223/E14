import React, {useState, useEffect} from 'react'
import { NavLink } from "react-router-dom";
import { Container, Button } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import { map } from "lodash";
import { Icon } from "../../../assets";
import {LogoutButton} from "../Logout"

import "./TopBarLogged.scss";

export function TopBarLogged() {
  return (
    <div className="top-bar">
        <Container>
            <div className="top-bar__left">
                <Link to="/" className="logo">
                    <Icon.LogoApp />
                </Link>
                <Link to="/personajes" className="text">
                    Personajes
                </Link>
                <Link to="/comics" className="text">
                   Comics
                </Link>
                <Link to="/foro" className="text">
                   Foro
                </Link>
                <Link to="/auth/me" className="text">
                   Mi perfil
                </Link>
                <LogoutButton/>
            </div>
        </Container>
    </div>
  )
}
