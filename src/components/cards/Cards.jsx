import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import Rating from '../rating/Rating';
import { POSTER_S } from '../../constans/api';
import { useQueryParams } from '../../hooks/useQueryParams';

import NoImage from './img/no-image.jpg';
import {BsFillArrowLeftCircleFill} from 'react-icons/bs'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'

import 'swiper/css';
import 'swiper/css/navigation';
import style from './cards.module.css';

export const Cards = ({ resultsArray }) => {
  const pathTv = useQueryParams().pathTv;

  return (
    <ul className={style.list}>
      {resultsArray && resultsArray.map(({ id, poster_path, title, name, vote_average }) => (
        <li
          key={id}
        >
          <Link 
            to={`/${pathTv}${id}`}
            className={style.card}
          >

            <span className={style.rating}>
              <Rating data={vote_average} />
            </span>

            <div className={style.poster}>
              <img src={POSTER_S ? POSTER_S+poster_path : NoImage} alt={title} />
            </div>

            <p>
              {title && title}
              {name && name}
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
    <div className={style.slider} >
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
          <SwiperSlide
            key={id}
            className={style.slide}
          >
            <Link
              className={style.card}
              to={`/${pathTv}${id}`}
            >

              <span className={style.rating}>
                <Rating data={vote_average} />
              </span>

              <div className={style.poster}>
                <img src={POSTER_S && POSTER_S ? POSTER_S+poster_path : NoImage} alt={title} />
              </div>

              <p>
                {title && title}
                {name && name}
              </p> 
            </Link>
          </SwiperSlide>
        ))}
        <div className={style.arrows}>
          <div className={style.arrow} ref={prev}>
            <span><BsFillArrowLeftCircleFill /></span>
          </div>
          <div className={style.arrow} ref={next}>
            <span><BsFillArrowRightCircleFill /></span>
          </div>
        </div>
      </Swiper>
    </div>
  );
}