import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import Title from '../../components/title/Title';
import Button from '../../components/ui/button/Button';
import Rating from '../../components/rating/Rating';
import { POSTER_B, POSTER_S, MOVIEDB_ROOT, MOVIEDB_API, TRANDING, DAY, SERIES, MOVIES, LANG, RU } from '../../constans/api';
import { getApiResource } from '../../service/getApiResource';
import { useQueryParams } from '../../hooks/useQueryParams';
import { reverseStr, roundNumber } from '../../utils/utils';

import { ImFire } from 'react-icons/im';

import style from './home.module.css';

const Home = () => {
  const [resultsArray, setResultsArray] = useState(null);
  const [errorApi, setErrorApi] = useState(false);
  const pathTv = useQueryParams().pathTv;

  useEffect(() => {
    (async () => {
      const res = await getApiResource(MOVIEDB_ROOT+TRANDING+MOVIES+DAY+MOVIEDB_API+LANG+RU);

      if (res) {
        setResultsArray(res.results);
        setErrorApi(false);
      } else {
        setErrorApi(true);
      }
    })();
  }, [])

  return (
    <section className={style.home}>
      <div className="container">

      <div className={style.header}>
        <Title title={"Tranding"} />
        <ImFire/>
      </div>
      
      <Swiper
        modules={[Navigation]}
        className={style.swiper}
        spaceBetween={20}
        slidesPerView={1.33}
      >
        {resultsArray && resultsArray.map(({
          id, backdrop_path, poster_path, overview, 
          release_date, first_air_date, title, name, vote_average}) => (
          <SwiperSlide key={id}>
            <div className={style.body}>
              <img 
                className={style.backdrop}
                src={backdrop_path && POSTER_B+backdrop_path} 
                alt={title} 
              />

              <div className={style.postes}>
                <img src={poster_path && POSTER_S+poster_path} alt={title} />
              </div>

              <div className={style.info}>
                <div className={style.info_body}>
                  <h2>{title && title || name && name}</h2>
                  <div className={style.row}>
                    <p>{release_date && reverseStr(release_date) || first_air_date && reverseStr(first_air_date)}</p>
                    {vote_average && <Rating data={vote_average} />}
                  </div>
                  <p>{overview && overview.length > 200 ? overview.slice(0, 200) + '...' : overview}</p>
                </div>
                <div className={style.info_bottom}>
                  <Link 
                    to={name 
                      ? `${pathTv}${SERIES}${id}` 
                      : `${pathTv}${MOVIES}${id}`}
                  >
                    <Button name='More' />
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </section>
  );
}

export default Home;