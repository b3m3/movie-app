import { Link } from 'react-router-dom';

import { POSTER_S } from '../../constans/api';
import NoImage from './img/no-image.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
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
              <img src={POSTER_S && POSTER_S ? POSTER_S+poster_path : NoImage} alt={title} />
            </div>

            <p>
              {title && title}
              {name && name}
              {/* {title && title.length > 27 
                ? title.slice(0, 27) + '...' 
                : title}
              {name && name.length > 27 
                ? name.slice(0, 27) + '...' 
                : name} */}
            </p> 
          </Link>
        </li>
      ))}
    </ul>
  );
}

export const CardsSlider = ({ resultsArray }) => {
  return (
    <div className={style.slider} >
      <Swiper
        className={style.swiper}
        spaceBetween={20}
        slidesPerView={'auto'}
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
                {title && title.length > 27 
                  ? title.slice(0, 27) + '...' 
                  : title}
                {name && name.length > 27 
                  ? name.slice(0, 27) + '...' 
                  : name}
              </p> 
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}