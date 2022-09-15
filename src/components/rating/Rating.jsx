import { roundNumber } from '../../utils/utils';

import style from './rating.module.css';

const Rating = ({ data }) => {
  const green = {background: 'rgba(94, 255, 0, 0.92)'};
  const yellowGreen = {background: 'rgba(187, 255, 0, 0.92)'};
  const yellow= {background: 'rgba(255, 238, 0, 0.92)'};
  const orange = {background: 'rgba(255, 187, 0, 0.92)'};
  const red = {background: 'rgba(255, 8, 0, 0.92)'};

  return (
    <span 
      className={style.rating}
      style={roundNumber(data) >= 8 ? green 
              : roundNumber(data) >= 7 ? yellowGreen 
              : roundNumber(data) >= 6 ? yellow 
              : roundNumber(data) >= 5 ? orange 
              : red}
    >
      {data && roundNumber(data)}
    </span>
  );
}

export default Rating;