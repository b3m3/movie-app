import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import { POSTER_S } from '../../constans/api';
import NoImage from './img/no-image.jpg';
import {BsFillArrowLeftCircleFill} from 'react-icons/bs'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'

import 'swiper/css';
import 'swiper/css/navigation';
import style from './cards.module.css';

export const Cards = ({ resultsArray }) => {
  return (
    <ul className={style.list}>
      {resultsArray && resultsArray.map(({ id, poster_path, title, name }) => (
        <li
          key={id}
        >
          <Link 
            to={`/movies/${id}`}
            className={style.card}
          >
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
        {resultsArray && resultsArray.map(({ id, poster_path, title, name }) => (
          <SwiperSlide
            key={id}
            className={style.slide}
          >
            <Link
              className={style.card}
              to={`/movies/${id}`}
            >
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