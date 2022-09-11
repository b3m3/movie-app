import Gallery from '../../components/gallery/Gallery';

import { SERIES_POPULAR, SERIES_TOP_RATED, SERIES_ON_THE_AIR, SERIES_AIRING_TODAY } from '../../constans/api';

import {FaStar} from 'react-icons/fa';
import {FaMicrophone} from 'react-icons/fa';
import {IoIosToday} from 'react-icons/io';
import {AiFillLike} from 'react-icons/ai';

const Series = () => {
  const series = [
    {title: 'Popular', color: 'orange', icon: <FaStar />, url: SERIES_POPULAR},
    {title: 'On the air', color: 'grey', icon: <FaMicrophone />, url: SERIES_ON_THE_AIR},
    {title: 'Airing today', color: 'red', icon: <IoIosToday />, url: SERIES_AIRING_TODAY},
    {title: 'Top rated', color: 'lightblue', icon: <AiFillLike />, url: SERIES_TOP_RATED}]

  return (
    <section className="series">
      {series.map(({ title, url, color, icon }) => (
        <Gallery 
          key={title}
          title={title}
          url={url}
          color={color}
          icon={icon}
        />))}
    </section>
  );
}

export default Series;