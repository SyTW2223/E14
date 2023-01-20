import React, { useState} from 'react'
import { Container, Button } from "semantic-ui-react";
import {ListPosts, PostForm} from "../../../components/Web/Forum";
import {BasicModal} from "../../../components/Shared"


export  function Forum() {
  const [showModal, setShowModal] = useState(false);
  const [reload, setReload] = useState(false);

  const onOpenCloseModal = () => setShowModal((prevState) => !prevState);
  const onReload = () => setReload((prevState) => !prevState);
  return (
    <Container>
        <ListPosts reload={reload} />
        <Button onClick={onOpenCloseModal} color='green'>Nuevo POST</Button>
        <BasicModal 
          show={showModal} 
          close={onOpenCloseModal} 
          title="Crear unevo post" 
          size="large"
        >
        
        <PostForm onClose={onOpenCloseModal} onReload={onReload} />
        </BasicModal>
    </Container>
  )
}
