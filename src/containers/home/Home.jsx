import { useState, useEffect } from 'react';

import HomeBody from './HomeBody';
import Title from '../../components/title';
import withSlider from '../../hoc/withSlider';
import { tabTitle } from '../../utils/utils';
import { ALL_TRANDING } from '../../constans/api';
import { getApiResource } from '../../service/getApiResource';
import { withErrorApi } from '../../hoc/withErrorApi';

import { ImFire } from 'react-icons/im';

import '../../styles/swiper.css';
import style from './home.module.css';

const Home = ({ setErrorApi }) => {
  const [resultsArray, setResultsArray] = useState(null);

  const HomeSlider = withSlider(HomeBody, resultsArray, '100%', true, false);

  useEffect(() => {
    (async () => {
      const res = await getApiResource(ALL_TRANDING);
      tabTitle('Movies | Home');

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

        <HomeSlider />
      </div>
    </section>
  );
}

export default withErrorApi(Home);