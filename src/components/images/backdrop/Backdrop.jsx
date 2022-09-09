import { POSTER_B } from '../../../constans/api';

import style from './backdrop.module.css';

const Backdrop = ({ src, alt }) => {
  return (
    <img 
      className={style.backdrop}
      src={src ? POSTER_B+src : null}
      alt={alt && alt}
    />
  );
}

export default Backdrop;