import React from 'react';
import {Container} from "semantic-ui-react";
import {TopBar, Footer} from "../../components/Web";
import "./ClientLayout.scss";

export  function ClientLayout(props) {
 const {children} = props
    return (
    <div className="client-layout">
        <div className="client-layout__header">
          <TopBar />
        </div>
        {children}
        <div className="client-layout__footer">
          <Container>
          <Footer.Info />
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



