import React, { useState, useEffect } from 'react';
import { getComics, getComicsbyId } from '../../../api/marvel';
import {User} from "../../../api/user"
import { Link, useParams, useNavigate } from 'react-router-dom';
import {Button, Icon} from "semantic-ui-react"
import {useAuth} from "../../../hooks"


const usuario_api = new User();

export function ComicsDetails() {
  const {accessToken, user} = useAuth();
  const navigate = useNavigate();

  let {id} = useParams(); //El nombre ha de ser el mismo con el que se definio el parametro.
    const [comics, setComics] = useState([]);
    const [hoveredComic, setHoveredComic] = useState(null);
    
  
    useEffect(() => {
      getComicsbyId(id)
        .then((response) => {
          setComics(response.data.data.results);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);
    //console.log(comics[0].title);
    let value_title = "";
    comics.map((comic) => {
     value_title = comic.title 
    })
    
  let isFaved;
  let icon_name = "heart";
  let icon_text = "FAV";
  if(user !== null){
    isFaved = user.comicsFav.some((favName) => favName === value_title);
    if(isFaved){
      console.log("ya es favorito");
      icon_name = "close";
      icon_text = "UNFAV";
    }
  }


  console.log(value_title);
  console.log(user);

  const comicData = {comicsFav: `${value_title}`};
  const obj = JSON.stringify(comicData);

  const handleLikeClick = () => {
    if(user !== null){
      if(isFaved){
        const removeData = {comicsFav: [`${value_title}`]};
        const removeDataobj = JSON.stringify(removeData);
        (async () => {
          await usuario_api.updateUser(accessToken, user._id, removeDataobj, "remove");
        })();
      } else {
        (async () => {
          await usuario_api.updateUser(accessToken, user._id, obj, "add");
        })();
      }
      
    
      window.location.reload();
    } else {
      navigate('/auth');
    }

   
  }
  

  
  return (
       <div className = "comics">
         <div className="comic__inner">
           {comics.map((comic) => {
                //console.log(comic);
                if (comic.thumbnail.path === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available') return null;
                let descripcion_comic = "";
                if (comic.description === "") 
                    descripcion_comic = "Descripcion no disponible"
                else 
                    descripcion_comic = comic.description;
                //Comprobar ISBN
                let isbn_comic = "";
                if (comic.isbn === "") 
                    isbn_comic = "ISBN no disponible"
                else 
                    isbn_comic = comic.isbn;    
            return (
                <div className='hero-info'>
                <img className='characterdetail__image' src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt={comic.title} />
                <div className='hero-info__right'>
                  <h2 className='hero-info__name'>{comic.title}</h2>
                  
                  <h3>Descripcion </h3>
                  <div>{descripcion_comic}</div>
                  <h3>ISBN </h3>
                  <div>Isbn: {isbn_comic}</div>
                  <h3>Cantidad de páginas</h3>
                  <div>Isbn: {comic.pageCount}</div> 
                  <Button icon onClick={handleLikeClick}>
                    <Icon name= {icon_name}/>
                      {icon_text}
                  </Button>
                </div>
              </div>
             );
           })}
         </div>
        </div>
        );
}
  
  
 