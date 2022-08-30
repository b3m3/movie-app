import Category from '../../components/category/Category';

import { TV_POPULAR, TV_TOP_RATED, TV_ON_THE_AIR } from '../../constans/api';

const TvPage = () => {
  const tv = [
    {title: 'Popular', url: TV_POPULAR},
    {title: 'Top rated', url: TV_TOP_RATED},
    {title: 'On the air', url: TV_ON_THE_AIR}];

  return (
    <section className="tv-page">
      {tv.map(({ title, url }) => (
        <Category 
          key={title}
          title={title}
          url={url}
        />
      ))}
    </section>
  );
}

export default TvPage;