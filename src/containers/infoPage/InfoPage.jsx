import { useState, useEffect } from 'react';
import { useParams } from 'react-router';

import Button from '../../components/button/Button';
import { POSTER_S, POSTER_B, MOVIEDB_ROOT, MOVIEDB_API, MOVIES, TV, LANG } from '../../constans/api';
import { getApiResource } from '../../service/getApiResource';

import style from './info-page.module.css';

const InfoPage = () => {
  const [infoCard, setInfoCard] = useState([]);
  const [genresCard, setGenresCard] = useState([]);
  const {id} = useParams();

  useEffect(() => {
    (async () => {
      const res = await getApiResource(`${MOVIEDB_ROOT}${MOVIES}${id}${MOVIEDB_API}${LANG}ru`);
      const { 
        backdrop_path, genres, overview, poster_path, release_date, title, vote_average 
      } = await res;

      setInfoCard(info => 
        [{ backdrop_path, overview, poster_path, release_date, title, vote_average }]);
      setGenresCard(gen => [{ genres }]);
    })();
  }, []);

  return (
    <div className="info-page">
      <div className="container">
        <div className={style.main}>

          <Button name={`←⠀Back`} />

          {infoCard && infoCard.map((
            { 
              backdrop_path, 
              overview, 
              poster_path, 
              release_date, 
              title, 
              vote_average 
            }) => (
            <div key={id} className={style.body}>

              <img
                className={style.backdrop}
                src={POSTER_B+backdrop_path}
                alt="backdrop_path" 
              />

              <div className={style.image}>
                <img src={POSTER_S+poster_path} alt={title} />
              </div>

              <div className={style.info}>
                <div className={style.row}>
                  <span>
                    {release_date && release_date}
                  </span>
                  <span>
                    {vote_average && (vote_average).toFixed(1)}
                  </span>
                </div>

                <ul className={style.genres}>
                  {genresCard && genresCard.map(pite => 
                    pite.genres.map(({name}) => (
                    <li key={name}>{name}</li>
                  )))}
                </ul>

                <p className={style.overview}>{overview && overview}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default InfoPage;