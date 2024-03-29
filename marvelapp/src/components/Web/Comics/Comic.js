import React, { useState, useEffect } from "react";
import { getComics } from "../../../api/marvel";
import { Link } from "react-router-dom";
import { BarraBusquedaComics } from "../BarraBusquedaComics";
import { Loader } from "semantic-ui-react";
import "./Comic.scss";
export function Comics() {
  const [comics, setComics] = useState([]);
  const [hoveredComic, setHoveredComic] = useState(null);
  const [searchingComic, setSearchingComic] = useState(null);

  useEffect(() => {
    if (searchingComic === null) {
      getComics()
        .then((response) => {
          setComics(response.data.data.results);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [searchingComic]);

  if (!comics) return <Loader active inline="centered" />;
  
  return (
    <div className="comics" data-testid="zona_comic">
      <BarraBusquedaComics
        setterSearchComic={setSearchingComic}
        setterComics={setComics}
      />
      <div className="comic__inner">
        {comics.map((comic) => {
          if (
            comic.thumbnail.path ===
            "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"
          )
            return null;
          return (
            <Link
              to={`/comics/${comic.id}`}
              key={comic.id}
              className="comic"
              onMouseEnter={() => setHoveredComic(comic.id)}
              onMouseLeave={() => setHoveredComic(null)}
            >
              <img
                className="comic__image"
                src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                alt={comic.title}
              />
              {hoveredComic === comic.id && (
                <div className="comic__namee animate__animated animate__fadeIn">
                  {comic.title}
                </div>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
