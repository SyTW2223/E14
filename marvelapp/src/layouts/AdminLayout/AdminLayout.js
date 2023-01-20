import React from 'react';
import {Container} from "semantic-ui-react";
import {TopBarLogged} from "../../components/Admin";
import "./AdminLayout.scss";


export  function AdminLayout(props) {
    const { children } = props;
    return (
      <div className="client-layout">
          <div >
            <TopBarLogged />
          </div>
          {children}
          <div className="client-layout__footer">
            <Container>
            <span>TEST1</span>
            <span>TEST2</span>
            </Container>
            <Container>
            <span>GRUPO E14</span>
            <span>Jonay Estévez Díaz</span>
            <span>Marcos Jesús Santana Ramos</span>
            <span>Eduardo Da Silva Yanes</span>
            </Container>
          </div>
      </div>
    );
}
