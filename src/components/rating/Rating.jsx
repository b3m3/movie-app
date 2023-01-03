import { roundNumber, getCardColors } from '../../utils/utils';

import { TiStarburst } from 'react-icons/ti'

import style from './rating.module.css';

const Rating = ({ data }) => {
  return (
    <div 
      className={style.rating}
    >
      <span>
        {data && roundNumber(data)}
      </span>
      <span
        className={style[getCardColors(roundNumber(data))]}
      >
        <TiStarburst />
      </span>
    </div>
  );
}

export default Rating;