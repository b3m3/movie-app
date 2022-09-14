import { useState, useEffect } from 'react';

import Title from '../../components/title/Title';
import HomeBody from './HomeBody';
import withSlider from '../../hoc-helpers/withSlider';

import { MOVIEDB_ROOT, MOVIEDB_API, TRANDING, DAY, ALL, LANG, RU } from '../../constans/api';
import { getApiResource } from '../../service/getApiResource';
import { withErrorApi } from '../../hoc-helpers/withErrorApi';

import { ImFire } from 'react-icons/im';

import '../../styles/swiper.css';
import style from './home.module.css';

const Home = ({ setErrorApi }) => {
  const [resultsArray, setResultsArray] = useState(null);

  const HomeSlider = withSlider(HomeBody, resultsArray, '100%', '1.355')

  useEffect(() => {
    (async () => {
      const res = await getApiResource(MOVIEDB_ROOT+TRANDING+ALL+DAY+MOVIEDB_API+LANG+RU);

      if (res) {
        setResultsArray(res.results);
      } else {
        setErrorApi(true);
      }
    })();
  }, [setErrorApi])

  return (
    <section className={`${style.home} home`}>
      <div className="container">
        <Title 
          title='Tranding' 
          icon={<ImFire/>}
          color={'red'}
        />

        <HomeSlider resultsArray={resultsArray} />
      </div>
    </section>
  );
}

export default withErrorApi(Home);