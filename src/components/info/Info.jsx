import Rating from '../rating/Rating';
import { reverseStr } from '../../utils/utils';

import style from './info.module.css';

const Info = ({ 
  bg, title, name, release, date, runtime, time, vote, 
  seasons, status, countries, genres, overview 
  }) => {

  return (
    <div className={`${style.info} ${bg ? style.bg : null}`}>
      <h3>
        {title ? title : name ? name : 'Название отсутсвует'}
      </h3>

      <div className={style.row}>
        {release && 
          release 
            ? <h4>{reverseStr(release)}</h4> 
            : date 
            ? <h4>{reverseStr(date)}</h4> 
            : null}

        {runtime && 
          runtime 
            ? <h4>{runtime + ' мин'}</h4> 
            : time 
            ? <h4>{time[0] + ' мин'}</h4> 
            : null}

        <Rating data={vote} />
      </div>

      {seasons &&
        <div className={style.row}>
          {seasons && 
            <h4>Количество сезонов: <b>{seasons}</b></h4>}

          {status && 
            <h4>{status === 'Ended' ? 'Завершённый' : 'He завершённый'}</h4>}
        </div>}

      {countries &&
        <ul className={style.countries}>
          {countries.map(({name}) => (
            <li key={name}>{name}</li>))}
        </ul>}

      {genres && 
        <ul className={style.genres}>
          {genres.map(({name}) => (
            <li key={name}>{name}</li>))}
        </ul>}

      <p>
        {overview ? overview : 'Для этого контента описание отсутствует'}
      </p>
    </div>
  );
}

export default Info;