import { roundNumber, getCardColors } from '../../utils/utils';

import { MdMovie } from 'react-icons/md'

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
        <MdMovie />
      </span>
    </div>
  );
}

export default Rating;