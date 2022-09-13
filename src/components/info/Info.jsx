import Rating from '../rating/Rating';
import Countries from '../lists/countries/Countries';
import Genres from '../lists/genres/Genres';

import { reverseStr } from '../../utils/utils';

import style from './info.module.css'; 

const Info = ({ bg, title, name, release, date, runtime, time, vote, seasons, status, countries, genres, overview }) => {
  return (
    <div className={`${style.info} ${bg ? style.bg : null}`}>
      <h3>
        {title ? title : name ? name : 'Title missing'}
      </h3>

      <div className={style.row}>
        {release ? <h4>{reverseStr(release)}</h4> : date ? <h4>{reverseStr(date)}</h4> : null}
        {runtime ? <h4>{runtime + ' мин'}</h4> : time ? <h4>{time[0] + ' мин'}</h4> : null}
        <Rating data={vote} />
      </div>

      {seasons && 
        <div className={style.row}>
          {seasons && <h4>Количество сезонов: <b>{seasons}</b></h4>}
          {status && <h4>{status === 'Ended' ? 'Завершённый' : 'He завершённый'}</h4>}
        </div>}

      <Countries countries={countries} />
      <Genres genres={genres} />
      <p>
        {overview ? overview : 'There is no description for this content.'}
      </p>
    </div>
  );
}

export default Info;