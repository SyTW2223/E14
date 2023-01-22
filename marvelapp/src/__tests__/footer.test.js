import {render, screen} from '@testing-library/react'
import { Footer } from "../components/Web"
import { BrowserRouter as Router } from 'react-router-dom';



describe("Footer", () => {

    // beforeEach(() => {
    //     render(<Router><Footer /></Router>);
    //   });
    
    //   // Clears all renders
    //   afterEach(() => {
    //     cleanup();
    //   });

    it("Comprobar se renderiza correctamente el footer", () => {
        render(
            <Router>
            <Footer.Info />
          </Router>);
      const zonainfo = screen.getByTestId("footerinfo");
      expect(true).toBe(true);

    });
  })
 