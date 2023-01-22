import React from "react";
import { Button, Icon } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks";
import "./LogoutButton.scss";
export function LogoutButton() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const onLogout = () => {
    logout();
    navigate("/auth");
  };

  return (
    <div className="button_border">
      <Button animated="fade" color="red" onClick={onLogout}>
        <Button.Content visible>
          <Icon name="power off" /> Cerrar sesión
        </Button.Content>
        <Button.Content hidden>¿Estas seguro?</Button.Content>
      </Button>
    </div>
  );
}
