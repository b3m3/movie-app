import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Button from '../../components/ui/button/Button';
import Video from '../../components/video/Video';
import Backdrop from '../../components/images/backdrop';
import Poster from '../../components/images/poster/Poster';
import Info from '../../components/info/Info';

import { MOVIEDB_ROOT, MOVIEDB_API, LANG, RU } from '../../constans/api';
import { getApiResource } from '../../service/getApiResource';
import { useQueryParams } from '../../hooks/useQueryParams';
import { withErrorApi } from '../../hoc/withErrorApi';

import style from './more.module.css';

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

  console.log(resultsArray);

  return (
    <section>
      <div className="container">
        <div className={style.main}>
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
              />
            </div>}

          <Video id={id} />
        </div>
      </div>
    </section>
  );
}

export default withErrorApi(More);