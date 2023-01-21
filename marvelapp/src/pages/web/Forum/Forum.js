import React, { useState} from 'react'
import { Container, Button } from "semantic-ui-react";
import {ListPosts, PostForm} from "../../../components/Web/Forum";
import {BasicModal} from "../../../components/Shared";
import { useAuth } from "../../../hooks";

import { useNavigate } from 'react-router-dom';


export  function Forum() {
  const [showModal, setShowModal] = useState(false);
  const [reload, setReload] = useState(false);
  const {user} = useAuth();
  const navigate = useNavigate();


  const onOpenCloseModal = () => setShowModal((prevState) => !prevState);
  const onReload = () => setReload((prevState) => !prevState);

  const handleNewPostClick = () => {
    if(user !== null){
      onOpenCloseModal();
    } else {
      navigate('/auth');
    }
  }

  return (
    <Container>
        <ListPosts reload={reload} />
        <Button onClick={handleNewPostClick} color='green'>Nuevo POST</Button>
        <BasicModal 
          show={showModal} 
          close={onOpenCloseModal} 
          title="Crea tu mensaje" 
          size="large"
        >
        
        <PostForm onClose={onOpenCloseModal} onReload={onReload} />
        </BasicModal>
    </Container>
  )
}
