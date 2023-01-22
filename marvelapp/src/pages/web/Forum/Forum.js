import React, { useState } from "react";
import { Container, Button } from "semantic-ui-react";
import { ListPosts, PostForm } from "../../../components/Web/Forum";
import { BasicModal } from "../../../components/Shared";
import { useAuth } from "../../../hooks";

import { useNavigate } from "react-router-dom";
import "./Forum.scss";

export function Forum() {
  const [showModal, setShowModal] = useState(false);
  const [reload, setReload] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  const onOpenCloseModal = () => setShowModal((prevState) => !prevState);
  const onReload = () => setReload((prevState) => !prevState);

  const handleNewPostClick = () => {
    if (user !== null) {
      onOpenCloseModal();
    } else {
      navigate("/auth");
    }
  };

  return (
    <div>
      <div className="titulo">Foro de la comunidad</div>
      <Container>
        <div class="ui section divider"></div>
        <Button fluid onClick={handleNewPostClick} color="red">
          CREA UN NUEVO COMENTARIO
        </Button>
        <div class="ui section divider"></div>
        <h3 className="subtitulos">Últimos comentarios</h3>
        <ListPosts reload={reload} />
        <BasicModal
          show={showModal}
          close={onOpenCloseModal}
          title="Crea tu mensaje"
          size="large"
        >
          <PostForm onClose={onOpenCloseModal} onReload={onReload} />
        </BasicModal>
      </Container>
    </div>
  );
}
