import { POSTER_S } from '../../../constans/api';

import NoImage from './img/no-image.jpg';

import style from './poster.module.css';

const Poster = ({ src, alt }) => {
  return (
    <div className={style.poster}>
      <img
        src={src ? POSTER_S+src : NoImage}
        alt={alt && alt}
      />
    </div>
  );
}

export default Poster;