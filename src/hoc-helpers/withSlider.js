import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import { useQueryParams } from '../hooks/useQueryParams';

import 'swiper/css';
import 'swiper/css/navigation';
import '../styles/swiper.css';

const withSlider = (Component, results, slideWidth, perView) => {
  return props => {
    const pathTv = useQueryParams().pathTv;

      return (
        <Swiper
          style={{padding: '15px'}}
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={`${perView}`}
          navigation
        >
          {results && results.map(({ id, poster_path, title, name, vote_average }) => (
            <SwiperSlide 
              key={id}
              style={{width: `${slideWidth}`}}
            >
              <Component
                pathTv={pathTv}
                id={id}
                poster_path={poster_path}
                title={title}
                name={name}
                vote_average={vote_average}
                {...props}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      );
  }
}

export default withSlider;