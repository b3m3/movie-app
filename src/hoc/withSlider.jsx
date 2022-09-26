import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import { useQueryParams } from '../hooks/useQueryParams';

import 'swiper/css';
import 'swiper/css/navigation';
import '../styles/swiper.css';

const withSlider = (Component, results, slideWidth, breakpoints, slidesPerView) => {
  return () => {
    const pathTv = useQueryParams().pathTv;

      return (
        <Swiper
          style={{padding: '15px'}}
          modules={[Navigation]}
          spaceBetween={20}
          navigation
          slidesPerView={slidesPerView ? 'auto' : null}
          breakpoints={breakpoints 
            ? {
                0: {slidesPerView: 1},
                768: {slidesPerView: 1.355}
              }
            : null}
        >
          {results && results.map((props, id) => (
            <SwiperSlide 
              key={id}
              style={{width: `${slideWidth}`}}
            >
              <Component
                pathTv={pathTv}
                id={id}
                {...props}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      );
  }
}

export default withSlider;