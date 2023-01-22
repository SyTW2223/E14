import React from "react";
import { Comics } from "../../../components/Web";

import "./comic_main.scss";

export function ComicsPagina() {
  return (
    <div>
      <div className="titulo_comic_main">COMICS</div>
      <Comics /> {/* Llamada a componente de REACT */}
    </div>
  );
}
