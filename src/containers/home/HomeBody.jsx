import { Link } from 'react-router-dom';

import Backdrop from '../../components/images/backdrop/Backdrop';
import Poster from '../../components/images/poster/Poster';
import Button from '../../components/ui/button/Button';
import Info from '../../components/info/Info';

import { SERIES, MOVIES } from '../../constans/api';

import style from './home.module.css';

const HomeBody = ({ 
  pathTv, id, backdrop_path, title, name, poster_path, 
  release_date, first_air_date, vote_average, overview }) => {

  return (
    <>
      <Backdrop
        src={backdrop_path}
        alt={title}
      />
      <Poster 
        src={poster_path}
        alt={title}
      />

      <div className={style.box}>
        <Info 
          title={title} 
          name={name} 
          release={release_date}
          date={first_air_date}
          vote={vote_average}
          overview={overview.length > 150 ? overview.slice(0, 150) + '....' : overview}
        />

        <Link to={ name ? `${pathTv}${SERIES}${id}` : `${pathTv}${MOVIES}${id}` } >
          <Button name='More' />
        </Link>
      </div>
    </>
  )
}

export default HomeBody;