import { roundNumber } from '../../utils/utils';

import style from './rating.module.css';

const Rating = ({ data }) => {
  return (
    <span 
      className={`${style.rating} 
      ${data >= 8 ? style.rating_8 
        : data >= 7 ? style.rating_7
        : data >= 6 ? style.rating_6
        : data < 6 ? style.rating_5 : null}`}
    >
      { data && roundNumber(data) }
    </span>
  );
}

export default Rating;