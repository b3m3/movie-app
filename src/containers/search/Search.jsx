import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Title from '../../components/title/Title';
import Navigation from '../../components/navigation/Navigation';
import Error from '../../components/error/Error';
import Card from '../../components/card/Card';

import { MOVIEDB_ROOT, SEARCH, QUERY, MOVIEDB_API, PAGE_ROOT, LANG, RU } from '../../constans/api';
import { getApiResource } from '../../service/getApiResource';
import { useQueryParams } from '../../hooks/useQueryParams';
import { changeUrlToStr } from '../../utils/utils';
import withList from '../../hoc/withList';

const Search = () => {
  const [resultsArray, setResultsArray] = useState(null);
  const [totalPages, setTotalPages] = useState(null)
  const [currentPage, setCurrentPage] = useState(null);
  const [noResults, setNoResults] = useState(false);
  const [errorApi, setErrorApi] = useState(false);

  const { name } = useParams();
  const idPage = useQueryParams().idPage;
  const pathTv = useQueryParams().pathTv;

  const CardList = withList(Card, resultsArray, 'grid');
  
  useEffect(() => {
    setCurrentPage(+idPage);
    window.scrollTo(0, 0);
    
    (async () => {
      const res = await getApiResource(
        MOVIEDB_ROOT+SEARCH+pathTv+MOVIEDB_API+LANG+RU+QUERY+name+PAGE_ROOT+idPage
      ); 
      
      if (res) {
        setResultsArray(res.results);
        setTotalPages(res.total_pages);
        setErrorApi(false);
      } else {
        setErrorApi(true);
      }

      if (res.results.length !== 0) {
        setNoResults(false);
      } else {
        setNoResults(true);
      }
    })();
  }, [name, idPage, pathTv]);

  return (
    <div className="category">
      <div className="container">
        {errorApi 
          ? <Error />
          : noResults
          ? <Error noResults name={name} />
          : <>
              <Title 
                title={name && changeUrlToStr(name)}
              />
              <CardList 
                resultsArray={resultsArray}
              />
              <Navigation
                currentPage={currentPage}
                idPage={idPage}
                totalPages={totalPages}
              />
            </>}
      </div>
    </div>
  );
}

export default Search;