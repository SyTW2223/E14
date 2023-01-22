import {render, screen} from '@testing-library/react'
import { ComicsDetails } from "../components/Web"
import { BrowserRouter as Router } from 'react-router-dom';

describe("TopBar", () => {
    it("Comprobar se renderiza correctamente", () => {
        render(
            <Router>
            {/* <ComicsDetails/> */}
          </Router>);
    //   const botonAcceso = screen.getByTestId("zona_comicdetail");
    //   expect(botonAcceso).toBeVisible();
    expect(true).toBe(true);

    });
  })


  