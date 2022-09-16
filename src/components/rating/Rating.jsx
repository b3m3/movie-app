import { roundNumber } from '../../utils/utils';

import { MdMovie } from 'react-icons/md'

import style from './rating.module.css';

const Rating = ({ data }) => {
  const green = {color: 'rgba(94, 255, 0, 0.85)'};
  const yellowGreen = {color: 'rgba(187, 255, 0, 0.85)'};
  const yellow= {color: 'rgba(255, 238, 0, 0.85)'};
  const orange = {color: 'rgba(255, 187, 0, 0.85)'};
  const red = {color: 'rgba(255, 8, 0, 0.85)'};

  return (
    <div 
      className={style.rating}
    >
      <span>{data && roundNumber(data)}</span>
      <span
        style={roundNumber(data) >= 8 ? green 
          : roundNumber(data) >= 7 ? yellowGreen 
          : roundNumber(data) >= 6 ? yellow 
          : roundNumber(data) >= 5 ? orange 
          : red}
      >
        <MdMovie />
      </span>
    </div>
  );
}

export default Rating;