import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import Title from '../../components/title/Title';
import Backdrop from '../../components/images/backdrop/Backdrop';
import Poster from '../../components/images/poster/Poster';
import Button from '../../components/ui/button/Button';
import Arrow from '../../components/ui/arrow/Arrow';
import Info from '../../components/info/Info';

import { MOVIEDB_ROOT, MOVIEDB_API, TRANDING, DAY, SERIES, MOVIES, ALL, LANG, RU } from '../../constans/api';
import { getApiResource } from '../../service/getApiResource';
import { useQueryParams } from '../../hooks/useQueryParams';
import { withErrorApi } from '../../hoc-helpers/withErrorApi';

import { ImFire } from 'react-icons/im';

import style from './home.module.css';

const Home = ({ setErrorApi }) => {
  const [resultsArray, setResultsArray] = useState(null);
  const prev = useRef(null);
  const next = useRef(null);
  const pathTv = useQueryParams().pathTv;

  useEffect(() => {
    (async () => {
      const res = await getApiResource(MOVIEDB_ROOT+TRANDING+ALL+DAY+MOVIEDB_API+LANG+RU);

      if (res) {
        setResultsArray(res.results);
      } else {
        setErrorApi(true);
      }
    })();
  }, [setErrorApi])

  return (
    <section className={`${style.home} home`}>
      <div className="container">
        <>
          <Title 
            title='Tranding' 
            icon={<ImFire/>}
            color={'red'}
          />
          <Swiper
            modules={[Navigation]}
            className={style.swiper}
            spaceBetween={20}
            slidesPerView={1.355}
            navigation={{
              prevEl: prev.current,
              nextEl: next.current
            }}
          >
            {resultsArray && resultsArray.map(item => (
              <SwiperSlide 
                key={item.id}
                className={style.slide}
              >
                <Backdrop
                  src={item.backdrop_path}
                  alt={item.title}
                />
                <Poster 
                  src={item.poster_path}
                  alt={item.title}
                />

                <div className={style.box}>
                  <Info 
                    title={item.title} 
                    name={item.name} 
                    release={item.release_date}
                    date={item.first_air_date}
                    vote={item.vote_average}
                    overview={item.overview.length > 150 ? item.overview.slice(0, 150) + '...' : item.overview}
                  />

                  <Link to={ item.name ? `${pathTv}${SERIES}${item.id}` : `${pathTv}${MOVIES}${item.id}` } >
                    <Button name='More' />
                  </Link>
                </div>
              </SwiperSlide>
            ))}
            
            <Arrow ref={prev} />
            <Arrow ref={next} next={true} />
          </Swiper>
        </>
      </div>
    </section>
  );
}

export default withErrorApi(Home);