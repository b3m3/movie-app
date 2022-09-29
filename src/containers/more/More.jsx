import { useState, useEffect, lazy, Suspense } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Loading from '../../components/loading';
import Button from '../../components/ui/button';
import Video from '../../components/video';
import Poster from '../../components/images/poster';
import Info from '../../components/info';
import FavoriteButton from '../../components/ui/favoriteButton';

import { MOVIEDB_ROOT, MOVIEDB_API, LANG, RU } from '../../constans/api';
import { getApiResource } from '../../service/getApiResource';
import { useQueryParams } from '../../hooks/useQueryParams';
import { withErrorApi } from '../../hoc/withErrorApi';

import style from './more.module.css';

const Backdrop = lazy(() => import('../../components/images/backdrop'));

const More = ({ setErrorApi }) => {
  const [resultsArray, setResultsArray] = useState(null);
  const { id } = useParams();
  const pathTv = useQueryParams().pathTv;
  const back = useNavigate();
  
  useEffect(() => {
    (async () => {
      const res = await getApiResource(MOVIEDB_ROOT+pathTv+id+MOVIEDB_API+LANG+RU);

      if (res) {
        setResultsArray(res);
      } else {
        setErrorApi(true);
      }
    })();
  }, [id, pathTv, setErrorApi]);

  return (
    <section>
      <div className="container">
        <div className={style.main}>
          <Button
            name="Back"
            onClick={() => back(-1)}
            side={true}
          />

          <Suspense fallback={<Loading />}>
            {resultsArray && 
              <Backdrop
                src={resultsArray.backdrop_path}
                alt={resultsArray.title}/>}
          </Suspense>

          {resultsArray &&
            <div className={style.body}>
              <Poster 
                src={resultsArray.poster_path}
                alt={resultsArray.title}
              />

              <span className={style.favorite_wrapp}>
                <FavoriteButton 
                  id={id}
                  pathTv={pathTv}
                  poster_path={resultsArray.poster_path}
                  title={resultsArray.title}
                  name={resultsArray.name}
                  vote_average={resultsArray.vote_average}
                />
              </span>

              <Info
                bg={true}
                title={resultsArray.title} 
                name={resultsArray.name} 
                release={resultsArray.release_date}
                date={resultsArray.first_air_date}
                runtime={resultsArray.runtime}
                time={resultsArray.episode_run_time}
                companies={resultsArray.production_companies}
                vote={resultsArray.vote_average}
                seasons={resultsArray.number_of_seasons}
                status={resultsArray.status}
                countries={resultsArray.production_countries}
                genres={resultsArray.genres}
                tagline={resultsArray.tagline}
                overview={resultsArray.overview}
                imdb_id={resultsArray.imdb_id}
                homepage={resultsArray.homepage}
              />
            </div>}

          <Video id={id} />
        </div>
      </div>
    </section>
  );
}

export default withErrorApi(More);