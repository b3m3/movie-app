import Rating from '../rating/Rating';
import { reverseStr } from '../../utils/utils';
import { minutesToHours } from '../../utils/utils';
import Logo from '../images/logo/Logo';

import style from './info.module.css';

const Info = ({ 
  bg, title, name, release, date, runtime, time, vote, companies,
  seasons, status, countries, genres, tagline, overview, imdb_id, homepage
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

        {runtime 
          ? <h4>{minutesToHours(runtime)}</h4> 
          : time && time.length > 0 
          ? <h4>{minutesToHours(time[0])}</h4> 
          : null}

        <Rating data={vote} />

        {imdb_id && 
          <a
            href={`https://www.imdb.com/title/${imdb_id}`}
            target={'_blank'}
            rel="noreferrer"
            className={style.imdb}
          >
            <span>IMDB</span> page
          </a>}

        {homepage && 
          <a
            href={homepage}
            target={'_blank'}
            rel="noreferrer"
            className={style.homepage}
          >
            Homepage
          </a>}
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

      {tagline && 
        <h3 className={style.tagline}>{tagline}</h3>}

      <p className={style.overview}>
        {overview 
          ? overview.toLowerCase().indexOf('сервер') 
            ? overview.slice(0, overview.toLowerCase().indexOf('сервер')) 
            : overview
          : 'Для этого контента описание отсутствует'}
      </p>

      <Logo companies={companies} />
    </div>
  );
}

export default Info;