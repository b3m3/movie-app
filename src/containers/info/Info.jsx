import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Button from '../../components/ui/button/Button';
import { POSTER_S, POSTER_B, MOVIEDB_ROOT, MOVIEDB_API, LANG, RU } from '../../constans/api';
import { getApiResource } from '../../service/getApiResource';
import Error from '../../components/error/Error';

import style from './info.module.css';

const Info = () => {
  const [infoCard, setInfoCard] = useState(null);
  const [ganres, setGanres] = useState(null);
  const [errorApi, setErrorApi] = useState(false);
  const { id, tv } = useParams();
  const back = useNavigate();
  
  useEffect(() => {
    (async () => {
      const res = await getApiResource(`${MOVIEDB_ROOT}${tv}/${id}${MOVIEDB_API}${LANG}${RU}`);

      if (res) {
        setInfoCard(res);
        setGanres(res.genres);
      } else {
        setErrorApi(true);
      }
    })();
  }, [id, tv]);

  return (
    <div className="info-page">
      <div className="container">
        <div className={style.main}>
          {!errorApi 
          ? <>
             <Button
              name="Back"
              onClick={() => back(-1)}
              side={true}
            />
            
            {infoCard &&
              <div key={id} className={style.body}>
                <img 
                  className={style.backdrop}
                  src={infoCard.backdrop_path 
                    ? POSTER_B+infoCard.backdrop_path 
                    : POSTER_B+infoCard.poster_path}
                  alt="backdrop_path"
                />

                <div className={style.image}>
                  <img src={infoCard.poster_path && POSTER_S+infoCard.poster_path} alt={infoCard.title} />
                </div> 

                <div className={style.info}>
                  <h2>{infoCard.title && infoCard.title}</h2>

                  <div className={style.row}>
                    <span>
                      {infoCard.release_date 
                        ? infoCard.release_date.split('-').reverse().join('.')
                        : infoCard.first_air_date.split('-').reverse().join('.')}
                    </span>
                    <span>
                      {infoCard.runtime 
                        ? infoCard.runtime + ' min'
                        : infoCard.episode_run_time[0] + ' min'}
                    </span>
                    <span className={style.rating}>
                      {infoCard.vote_average && (infoCard.vote_average).toFixed(1)}
                    </span>
                  </div>

                  {infoCard.number_of_seasons && 
                    <div className={style.row}>
                      <p className={style.seasons}>
                        Number of seasons: <span>{infoCard.number_of_seasons}</span>
                      </p>
                    </div>}

                  <ul className={style.country}>
                    {infoCard.production_countries.map(({name}) => (
                      <li key={name}>{name}</li>
                    ))}
                  </ul>

                  <ul className={style.genre}>
                    {ganres && ganres.map(item => (
                      <li key={item.name}>{item.name}</li>
                    ))}
                  </ul>

                  <p className={style.overview}>
                    {infoCard.overview ? infoCard.overview : 'Not overview...'}
                  </p>
                </div>
              </div>}
            </>
          : <Error />}
        </div>
      </div>
    </div>
  );
}

export default Info;