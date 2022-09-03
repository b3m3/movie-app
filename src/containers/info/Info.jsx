import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';

import { POSTER_S, POSTER_B, MOVIEDB_ROOT, MOVIEDB_API, MOVIES, LANG } from '../../constans/api';
import { getApiResource } from '../../service/getApiResource';
import { BiArrowBack } from 'react-icons/bi';

import style from './info.module.css';

const Info = () => {
  const [infoCard, setInfoCard] = useState([]);
  const [genresCard, setGenresCard] = useState([]);
  const {id} = useParams();
  
  const navigate = useNavigate();
  
  useEffect(() => {
    (async () => {
      const res = await getApiResource(`${MOVIEDB_ROOT}${MOVIES}${id}${MOVIEDB_API}${LANG}ru`);
      const { 
        backdrop_path, genres, overview, poster_path, 
        release_date, title, vote_average, runtime, production_countries
      } = await res;

      setInfoCard(info => 
        [{ backdrop_path, overview, poster_path, release_date, 
          title, vote_average, runtime, production_countries }]);
      setGenresCard(gen => [{ genres }]);
    })();
  }, []);

  return (
    <div className="info-page">
      <div className="container">
        <div className={style.main}>

          <button
            className={style.button}
            onClick={() => navigate(-1)}
          >
            <span><BiArrowBack /></span>
            <span>Back</span>
          </button>

          {infoCard && infoCard.map((
            { backdrop_path, overview, poster_path, production_countries, 
              release_date, title, vote_average, runtime}) => (

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
                <h2>{title && title}</h2>

                <div className={style.row}>
                  <span>
                    {release_date && release_date.split('-').reverse().join('.')}
                  </span>
                  <span>{runtime && runtime + ' min'}</span>
                  <span className={style.rating}>
                    {vote_average && (vote_average).toFixed(1)}
                  </span>
                </div>

                <ul className={style.country}>
                  {production_countries && production_countries.map(({name}) => (
                    <li key={name}>{name}</li>
                  ))}
                </ul>

                <ul className={style.genres}>
                  {genresCard && genresCard.map(pite => 
                    pite.genres.map(({name}) => (
                    <li key={name}>{name}</li>
                  )))}
                </ul>

                <p className={style.overview}>{overview ? overview : 'Not overview...'}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Info;