import { reverseStr, minutesToHours } from '../../utils/utils';
import Rating from '../rating';
import Logo from '../images/logo';

import {RiHomeWifiLine} from 'react-icons/ri';
import {FaImdb} from 'react-icons/fa';

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
            ? <p>{reverseStr(release)}</p> 
            : date 
            ? <p>{reverseStr(date)}</p> 
            : null}

        {runtime 
          ? <p>{minutesToHours(runtime)}</p> 
          : time && time.length > 0 
          ? <p>{minutesToHours(time[0])}</p> 
          : null}

        <Rating data={vote} />

        {imdb_id && 
          <a
            href={`https://www.imdb.com/title/${imdb_id}`}
            target={'_blank'}
            rel="noreferrer"
            className={style.imdb}
          >
            <FaImdb />
          </a>}

        {homepage && 
          <a
            href={homepage}
            target={'_blank'}
            rel="noreferrer"
            className={style.homepage}
          >
            <RiHomeWifiLine />
          </a>}
      </div>

      {seasons &&
        <div className={style.row}>
          {seasons && 
            <p>Количество сезонов: <span>{seasons}</span></p>}

          {status && 
            <p>{status === 'Ended' ? 'Завершённый' : 'He завершённый'}</p>}
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