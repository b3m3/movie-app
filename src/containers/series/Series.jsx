import Gallery from '../../components/gallery/Gallery';

import { SERIES_POPULAR, SERIES_TOP_RATED, SERIES_ON_THE_AIR } from '../../constans/api';

const Series = () => {
  const series = [
    {title: 'Popular', url: SERIES_POPULAR},
    {title: 'On the air', url: SERIES_ON_THE_AIR},
    {title: 'Top rated', url: SERIES_TOP_RATED}];

  return (
    <section className="series">
      {series.map(({ title, url }) => (
        <Gallery 
          key={title}
          title={title}
          url={url}
        />))}
    </section>
  );
}

export default Series;