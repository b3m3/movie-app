import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Button from '../../components/ui/button/Button';
import Rating from '../../components/rating/Rating';
import Video from '../../components/video/Video';
import Error from '../../components/error/Error';
import Backdrop from '../../components/images/backdrop';
import Poster from '../../components/images/poster/Poster';
import Genres from '../../components/lists/genres/Genres';
import Countries from '../../components/lists/countries/Countries';

import { MOVIEDB_ROOT, MOVIEDB_API, LANG, RU } from '../../constans/api';
import { getApiResource } from '../../service/getApiResource';
import { useQueryParams } from '../../hooks/useQueryParams';
import { reverseStr } from '../../utils/utils';

import style from './info.module.css';

const Info = () => {
  const [resultsArray, setResultsArray] = useState(null);
  const [genres, setGenres] = useState(null);
  const [errorApi, setErrorApi] = useState(false);
  const { id } = useParams();
  const pathTv = useQueryParams().pathTv;
  const back = useNavigate();
  
  useEffect(() => {
    (async () => {
      const res = await getApiResource(MOVIEDB_ROOT+pathTv+id+MOVIEDB_API+LANG+RU);

      if (res) {
        setResultsArray(res);
        setGenres(res.genres);
      } else {
        setErrorApi(true);
      }
    })();
  }, [id, pathTv]);

  return (
    <section>
      <div className="container">
        {errorApi 
          ? <Error />
          : <div className={style.main}>
              <Button
                name="Back"
                onClick={() => back(-1)}
                side={true}
              />

              {resultsArray && 
                <div className={style.body}>
                  <Backdrop
                    src={resultsArray.backdrop_path}
                    alt={resultsArray.title}
                  />    

                  <Poster 
                    src={resultsArray.poster_path}
                    alt={resultsArray.title}
                  />

                  <div className={style.info}>
                    <h3>
                      {resultsArray.title 
                        ? resultsArray.title 
                        : resultsArray.name
                        ? resultsArray.name
                        : 'Title missing'}
                    </h3>

                    <div className={style.row}>
                      {resultsArray.release_date 
                        ? <h4>{reverseStr(resultsArray.release_date)}</h4>
                        : resultsArray.first_air_date
                        ? <h4>{reverseStr(resultsArray.first_air_date)}</h4>
                        : null}
                      {resultsArray.runtime
                        ? <h4>{resultsArray.runtime + ' min'}</h4>
                        : resultsArray.episode_run_time
                        ? <h4>{resultsArray.episode_run_time[0] + ' min'}</h4>
                        : null}
                      <Rating data={resultsArray.vote_average} />
                    </div>

                    {resultsArray.number_of_seasons && 
                      <div className={style.row}>
                        {resultsArray.number_of_seasons && 
                          <h4>Number od seasons: <b>{resultsArray.number_of_seasons}</b></h4>}

                        {resultsArray.status && 
                          <h4>{resultsArray.status}</h4>}
                      </div>}

                    <Countries countries={resultsArray.production_countries} />
                    <Genres genres={genres} />
                    <p>
                      {resultsArray.overview 
                        ? resultsArray.overview 
                        : 'There is no description for this video.'}
                    </p>
                  </div>
                </div>}

              <Video id={id} />
            </div>}
      </div>
    </section>
  );
}

export default Info;