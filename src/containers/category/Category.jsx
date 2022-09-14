import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Card from '../../components/card/Card';
import Title from '../../components/title/Title';
import Navigation from '../../components/navigation/Navigation';

import { MOVIEDB_ROOT, MOVIEDB_API, PAGE_ROOT, LANG, RU } from '../../constans/api';
import { getApiResource } from '../../service/getApiResource';
import { useQueryParams } from '../../hooks/useQueryParams';
import { changeUrlToStr } from '../../utils/utils';
import withList from '../../hoc/withList';
import { withErrorApi } from '../../hoc/withErrorApi';

const Category = ({ setErrorApi }) => {
  const [resultsArray, setResultsArray] = useState(null);
  const [totalPages, setTotalPages] = useState(null)
  const [currentPage, setCurrentPage] = useState(null);
  
  const { category } = useParams();
  const idPage = useQueryParams().idPage;
  const pathTv = useQueryParams().pathTv;

  const CardList = withList(Card, resultsArray, 'grid');

  useEffect(() => {
    setCurrentPage(+idPage);
    window.scrollTo(0, 0);
    
    (async () => {
      const res = await getApiResource(
        MOVIEDB_ROOT+pathTv+category+MOVIEDB_API+LANG+RU+PAGE_ROOT+idPage
      );

      if (res) {
        setResultsArray(res.results);
        setTotalPages(res.total_pages);
      } else {
        setErrorApi(true)
      }
    })();
  }, [category, idPage, pathTv, setErrorApi]);

  return (
    <div className="category">
      <div className="container">
        <Title
          title={category && changeUrlToStr(category)}
        />

        <CardList
         resultsArray={resultsArray} 
        />

        <Navigation
          currentPage={currentPage}
          idPage={idPage}
          totalPages={totalPages}
        />
      </div>
    </div>
  );
}

export default withErrorApi(Category);