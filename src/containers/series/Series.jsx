import Gallery from '../../components/gallery';

import { SERIES_POPULAR, SERIES_TOP_RATED, SERIES_ON_THE_AIR, SERIES_AIRING_TODAY } from '../../constans/api';

import {GiStarsStack} from 'react-icons/gi';
import {GiFilmStrip} from 'react-icons/gi';
import {BsCalendarDay} from 'react-icons/bs';
import {FaMedal} from 'react-icons/fa';

const Series = () => {
  const series = [
    {title: 'Popular', color: 'orange', icon: <GiStarsStack />, url: SERIES_POPULAR},
    {title: 'On the air', color: 'lightslategrey', icon: <GiFilmStrip />, url: SERIES_ON_THE_AIR},
    {title: 'Airing today', color: 'violet', icon: <BsCalendarDay />, url: SERIES_AIRING_TODAY},
    {title: 'Top rated', color: 'lightblue', icon: <FaMedal />, url: SERIES_TOP_RATED}]

  return (
    <section className="series">
      {series.map((props) => (
        <Gallery 
          key={props.title}
          {...props}
        />))}
    </section>
  );
}

export default Series;