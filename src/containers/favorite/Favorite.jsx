import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

import withList from '../../hoc/withList';
import Card from '../../components/card/Card';
import Title from '../../components/title/Title';
import { tabTitle } from '../../utils/utils';

import { MdFavorite } from 'react-icons/md';

const Favorite = () => {
  const [favoriteData, setFavoriteData] = useState(null);
  const storeData = useSelector(store => store.favoriteReduces);

  const CardList = withList(Card, favoriteData, 'grid');

  useEffect(() => {
    tabTitle('Movies | Favorite')
    const arr = Object.entries(storeData);
    const res = arr.map(item => ({
      id: item[0],
      ...item[1]
    }))

    setFavoriteData(res);
  }, [storeData]);

  return (
    <div className="favorite">
      <div className="container">
        <Title 
          title={'Favorite'}
          icon={<MdFavorite />}
          color={'orange'}
        />
        {favoriteData && favoriteData.length 
          ? <CardList />
          : <h4 
              style={{textAlign: 'center', textShadow: '0 0 7px #fff', display: 'block'}}
            >
              Список пуст &#129335;
            </h4>
        }
      </div>
    </div>
  );
}

export default Favorite;