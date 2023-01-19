import React, {useState, useEffect} from 'react'
import { NavLink } from "react-router-dom";
import { Container, Button } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import { map } from "lodash";
import { Icon } from "../../../assets";
//import { Menu } from "../../../api"
import "./TopBar.scss";

//const menuController = new Menu()

export function TopBar() {
    //const [menu, setmenu] = useState(null);

    // useEffect(() => {
    //     (async () => {
    //         try {
    //             const response = await menuController.getMenu(true);
    //             setMenu(response)
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     }) ();
    // }, []);

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
                <Link to="/admin" className="text">
                   Acceso
                </Link>
                

                {/*<div className='menu'>
                     {map(menu, (item) =>(
                    <a key={item._id} href={item.path}>
                        {item.title}
                    </a> 
                    ))} 
                </div> */}
            </div>
        </Container>
    </div>
  )
}
