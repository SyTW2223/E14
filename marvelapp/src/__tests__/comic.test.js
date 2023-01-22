import {render, screen} from '@testing-library/react'
import { Comics } from "../components/Web"
import { BrowserRouter as Router } from 'react-router-dom';

describe("TopBar", () => {
    it("Comprobar se renderiza correctamente", () => {
        render(
            <Router>
            <Comics/>
          </Router>);
      const botonAcceso = screen.getByTestId("zona_comic");
      expect(botonAcceso).toBeVisible();

    });
  })

