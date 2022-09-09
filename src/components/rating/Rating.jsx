import { roundNumber } from '../../utils/utils';

import style from './rating.module.css';

const Rating = ({ data }) => {
  return (
    <span 
      className={style.rating}
    >
      { data && roundNumber(data) }
    </span>
  );
}

export default Rating;