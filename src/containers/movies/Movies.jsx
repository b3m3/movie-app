import Gallery from '../../components/gallery';

import { MOVIES_POPULAR, MOVIES_TOP_RATED, MOVIES_NOW_PLAYING, MOVIES_UPCOMING } from '../../constans/api';

import {GiStarsStack} from 'react-icons/gi';
import {SiAirplayvideo} from 'react-icons/si';
import {FcCalendar} from 'react-icons/fc';
import {FaMedal} from 'react-icons/fa';

const Movies = () => {
  const movies = [
    {title: 'Popular', color: 'orange', icon: <GiStarsStack />, url: MOVIES_POPULAR},
    {title: 'Now playing', color: 'lightgreen', icon: <SiAirplayvideo />, url: MOVIES_NOW_PLAYING},
    {title: 'Upcoming', color: '', icon: <FcCalendar />, url: MOVIES_UPCOMING},
    {title: 'Top rated', color: 'lightblue', icon: <FaMedal />, url: MOVIES_TOP_RATED}];
  
  return (
    <section className="movies">
      {movies.map((props) => (
        <Gallery 
          key={props.title}
          {...props}
        />))}
    </section>
  );
}

export default Movies;