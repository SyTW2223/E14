import React from "react";
import Characters from "../../../components/Web/Characters/Character";
//import {HomeData} from '../../../components/Web/'
import { Banner, PersonajeHome, ComicsHome } from "../../../components/Web";
import "./Home.scss";

export function Home() {
  return (
    <div>
      <Banner />
      <PersonajeHome />
      <ComicsHome />
    </div>
  );
}
