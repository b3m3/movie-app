import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import Rating from '../rating/Rating';
import Arrow from '../ui/arrow/Arrow';
import { POSTER_S } from '../../constans/api';
import { useQueryParams } from '../../hooks/useQueryParams';

import NoImage from './img/no-image.jpg';

import 'swiper/css';
import 'swiper/css/navigation';
import style from './cards.module.css';

export const Cards = ({ resultsArray }) => {
  const pathTv = useQueryParams().pathTv;

  return (
    <ul className={style.list}>
      {resultsArray && resultsArray.map(({ id, poster_path, title, name, vote_average }) => (
        <li key={id} >
          <Link 
            to={`/${pathTv}${id}`}
            className={style.card}
          >
            <span className={style.rating}>
              <Rating data={vote_average} />
            </span>

            <div className={style.poster}>
              <img src={poster_path ? POSTER_S+poster_path : NoImage} alt={title} />
            </div>

            <p>
              {title && title} {name && name}
            </p> 
          </Link>
        </li>
      ))}
    </ul>
  );
}

export const CardsSlider = ({ resultsArray }) => {
  const prev = useRef(null);
  const next = useRef(null);
  const pathTv = useQueryParams().pathTv;

  return (
    <Swiper
      modules={[Navigation]}
      className={style.swiper}
      spaceBetween={20}
      slidesPerView={'auto'}
      navigation={{
        nextEl: next.current,
        prevEl: prev.current
      }}
    >
      {resultsArray && resultsArray.map(({ id, poster_path, title, name, vote_average }) => (
        <SwiperSlide key={id} className={style.slide} >
          <Link
            className={style.card}
            to={`/${pathTv}${id}`}
          >
            <span className={style.rating}>
              <Rating data={vote_average} />
            </span>

            <div className={style.poster}>
              <img src={poster_path && POSTER_S ? POSTER_S+poster_path : NoImage} alt={title} />
            </div>

            <p>
              {title && title} {name && name}
            </p>
          </Link>
        </SwiperSlide>
      ))}

      <Arrow ref={prev}/>
      <Arrow ref={next} next={true} />
    </Swiper>
  );
}