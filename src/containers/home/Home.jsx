import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import Title from '../../components/title/Title';
import Backdrop from '../../components/images/backdrop/Backdrop';
import Poster from '../../components/images/poster/Poster';
import Button from '../../components/ui/button/Button';
import Rating from '../../components/rating/Rating';
import Error from '../../components/error/Error';
import { MOVIEDB_ROOT, MOVIEDB_API, TRANDING, DAY, SERIES, MOVIES, LANG, RU } from '../../constans/api';
import { getApiResource } from '../../service/getApiResource';
import { useQueryParams } from '../../hooks/useQueryParams';
import { reverseStr } from '../../utils/utils';

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
        {errorApi
          ? <Error />
          : <>
              <Title 
                title='Tranding'
                icon={<ImFire/>}
                color={'red'}
              />
              
              <Swiper
                modules={[Navigation]}
                className={style.swiper}
                spaceBetween={20}
                slidesPerView={1.33}
              >
                {resultsArray && resultsArray.map(({
                  id, backdrop_path, poster_path, overview, release_date, first_air_date, title, name, vote_average}) => (
                  <SwiperSlide 
                    key={id}
                    className={style.slide}
                  >
                    <Backdrop
                      src={backdrop_path}
                      alt={title}
                    />
                    <Poster 
                      src={poster_path}
                      alt={title}
                    />

                    <div className={style.info}>
                      <div className={style.block}>
                        <h2>
                          {title ? title : name ? name : 'Title missing'}
                        </h2>

                        <div className={style.row}>
                          {release_date 
                            ? <h4>{reverseStr(release_date)}</h4>
                            : null}
                          {first_air_date 
                            ? <h4>{reverseStr(first_air_date)}</h4>
                            : null}
                          {vote_average && 
                            <Rating data={vote_average} />}
                        </div>

                        <p>
                          {overview.length > 150 
                            ? overview.slice(0, 150) + '...' 
                            : 'There is no description for this video.'}
                        </p>
                      </div>

                      <Link 
                        to={name 
                          ? `${pathTv}${SERIES}${id}` 
                          : `${pathTv}${MOVIES}${id}`}
                      >
                        <Button name='More' />
                      </Link>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </>
        }
      </div>
    </section>
  );
}

export default Home;