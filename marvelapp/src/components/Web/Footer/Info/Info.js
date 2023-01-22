import React from "react";
import { Button } from "semantic-ui-react";
import { map } from "lodash";
import { Icon } from "../../../../assets";
import "./Info.scss";

export function Info() {
  return (
    <div className="footer-info" data-testid="footerinfo">
      <p>
        Aplicación creada para la asignatura de "Sistemas y tecnologías web" del
        curso 2022/2023, perteneciente al grado de Ingeniería informática de la
        ULL. Datos proporcionados por ©2023 MARVEL mediante su API. Este
        proyecto es con fines educativos.
      </p>
    </div>
  );
}
