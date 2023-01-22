import {render, screen} from '@testing-library/react'
import { TopBar } from "../components/Web"
import { BrowserRouter as Router } from 'react-router-dom';

describe("TopBar", () => {
    it("Comprobar se renderiza correctamente", () => {
        render(
            <Router>
            <TopBar />
          </Router>);
      const botonAcceso = screen.getByTestId("zona_topbar");
      expect(botonAcceso).toBeVisible();

    });
  })


  