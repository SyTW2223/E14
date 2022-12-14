import {render, screen, waitFor} from '@testing-library/react'
import { LoginForm } from "../components/Admin/Auth"
import userEvent from '@testing-library/user-event'


describe("Formulario de Login", () => {
    it("Comprobar que el contenido del formulario de logearse es correcto", () => {
      render(<LoginForm />);
      
      
      const emailField = screen.getByPlaceholderText("Correo electrónico");
      const passwordField = screen.getByPlaceholderText("Contraseña");
      const submitField = screen.getByText("Entrar");
  
      expect(emailField).toBeInTheDocument();
      expect(passwordField).toBeInTheDocument();
      expect(submitField).toBeInTheDocument();
    });
  })
  