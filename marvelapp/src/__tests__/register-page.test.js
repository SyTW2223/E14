import { render, screen } from "@testing-library/react"
import { RegisterForm } from "../components/Admin/Auth/RegisterForm/index"

describe("Formulario de registro", () => {
  it("Comprobar que el contenido del formulario es correcto", () => {
    render(<RegisterForm />);
    
    const nombreField = screen.getByPlaceholderText("Nombre y Apellidos");
    const nicknameField = screen.getByPlaceholderText("Nickname");
    const edadField = screen.getByPlaceholderText("Edad");
    const emailField = screen.getByPlaceholderText("Correo electronico");
    const passwordField = screen.getByPlaceholderText("Contraseña");
    const repeatpasswordField = screen.getByPlaceholderText("Repetir Contraseña");
    const checkField = screen.getByText("He leido y acepto las politicas de privacidad");
    const submitField = screen.getByText("Crear cuenta");

    expect(nombreField).toBeInTheDocument();
    expect(nicknameField).toBeInTheDocument();
    expect(edadField).toBeInTheDocument();
    expect(emailField).toBeInTheDocument();
    expect(passwordField).toBeInTheDocument();
    expect(repeatpasswordField).toBeInTheDocument();
    expect(checkField).toBeInTheDocument();
    expect(submitField).toBeInTheDocument();

  });
})