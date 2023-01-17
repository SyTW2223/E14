import React, { useState, useEffect } from 'react';
import { getComics } from '../../../api/marvel';
import "./Comic.scss";
function Comics() {
    const [comics, setComics] = useState([]);
  
    useEffect(() => {
      getComics()
        .then((response) => {
          setComics(response.data.data.results);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);
  
   return (
     <div className = "comics">
       {comics.map((comic) => {
         if (comic.thumbnail.path === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available') return null;
         return (
           <div key={comic.id} className = 'card'>
             <img className = "character__image" src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt={comic.title} />
             <h2>{comic.title}</h2>
           </div>
     );
   })}
     </div>
   );

  // return (
  //     <div className = "comics">
  //       <div className="comic__inner">
  //         {comics.map((comic) => {
  //           if (comic.thumbnail.path === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available') return null;
  //           return (
  //             <div 
  //               key={comic.id} className="comic"
  //               onMouseEnter={() => setHoveredComic(comic.id)}
  //               onMouseLeave={() => setHoveredComic(null)}
  //             >
  //               <img className = "character__image" src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt={comic.name} />
  //               {hoveredComic === comic.id && 
  //                 <div className="character__namee animate__animated animate__fadeIn">{comic.name}</div>
  //               }
  //             </div>
  //           );
  //         })}
  //       </div>
  //     </div>
  //   );
}
  
  export default Comics;
  