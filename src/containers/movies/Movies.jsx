import Gallery from '../../components/gallery';

import { MOVIES_POPULAR, MOVIES_TOP_RATED, MOVIES_NOW_PLAYING, MOVIES_UPCOMING } from '../../constans/api';

import {BsBookmarkStarFill} from 'react-icons/bs';
import {FaPlay} from 'react-icons/fa';
import {FcCalendar} from 'react-icons/fc';
import {FcLike} from 'react-icons/fc';

const Movies = () => {
  const movies = [
    {title: 'Popular', color: 'orange', icon: <BsBookmarkStarFill />, url: MOVIES_POPULAR},
    {title: 'Now playing', color: 'green', icon: <FaPlay />, url: MOVIES_NOW_PLAYING},
    {title: 'Upcoming', color: '', icon: <FcCalendar />, url: MOVIES_UPCOMING},
    {title: 'Top rated', color: '', icon: <FcLike />, url: MOVIES_TOP_RATED}];
  
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