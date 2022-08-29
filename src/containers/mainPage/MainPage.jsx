import Category from '../../components/category/Category';

import { MOVIES_POPULAR, MOVIES_TOP_RATED, MOVIES_NOW_PLAYING } from '../../constans/api';

import style from './main-page.module.css';

const MainPage = () => {
  const movies = [
    {title: 'Popular', url: MOVIES_POPULAR},
    {title: 'Top rated', url: MOVIES_TOP_RATED},
    {title: 'Now playung', url: MOVIES_NOW_PLAYING}];

  return (
    <div className="main-page">
      {movies.map(({ title, url }) => (
        <Category 
          key={title}
          title={title}
          url={url}
        />
      ))}
    </div>
  );
}

export default MainPage;