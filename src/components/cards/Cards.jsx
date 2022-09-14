import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import { useQueryParams } from '../../hooks/useQueryParams';

import Card from '../card/Card';

import 'swiper/css';
import 'swiper/css/navigation';
import style from './cards.module.css';

export const Cards = ({ resultsArray }) => {
  const pathTv = useQueryParams().pathTv;

  return (
    <ul className={style.list}>
      {resultsArray && resultsArray.map(({ id, poster_path, title, name, vote_average }) => (
        <li key={id} >
          <Card
            pathTv={pathTv}
            id={id}
            poster_path={poster_path}
            title={title}
            name={name}
            vote_average={vote_average}
          />
        </li>
      ))}
    </ul>
  );
}

// export const CardsSlider = ({ resultsArray }) => {
//   const prev = useRef(null);
//   const next = useRef(null);
//   const pathTv = useQueryParams().pathTv;

//   return (
//     <Swiper
//       modules={[Navigation]}
//       className={style.swiper}
//       spaceBetween={20}
//       slidesPerView={'auto'}
//       navigation={{
//         nextEl: next.current,
//         prevEl: prev.current
//       }}
//     >
//       {resultsArray && resultsArray.map(({ id, poster_path, title, name, vote_average }) => (
//         <SwiperSlide key={id} className={style.slide} >
//           <Card
//             pathTv={pathTv}
//             id={id}
//             poster_path={poster_path}
//             title={title}
//             name={name}
//             vote_average={vote_average}
//           />
//         </SwiperSlide>
//       ))}

//       <Arrow ref={prev}/>
//       <Arrow ref={next} next={true} />
//     </Swiper>
//   );
// }