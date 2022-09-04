import { TV_POPULAR, TV_TOP_RATED, TV_ON_THE_AIR } from '../../constans/api';
import Title from '../../components/title/Title';

const Series = () => {
  const tv = [
    {title: 'Popular', url: TV_POPULAR},
    {title: 'On the air', url: TV_ON_THE_AIR},
    {title: 'Top rated', url: TV_TOP_RATED}];

  return (
    <section className="tv-page">
      <div className="container">
        <Title title={'series...'} />
      </div>
    </section>
  );
}

export default Series;