import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Cards } from '../../components/cards/Cards';
import Title from '../../components/title/Title';
import Navigation from '../../components/navigation/Navigation';
import Error from '../../components/error/Error';

import { MOVIEDB_ROOT, SEARCH, QUERY, MOVIEDB_API, PAGE_ROOT, LANG, RU} from '../../constans/api';
import { getApiResource } from '../../service/getApiResource';
import { useQueryParams } from '../../hooks/useQueryParams';
import { changeUrlToStr } from '../../utils/utils';

const Search = () => {
  const [resultsArray, setResultsArray] = useState(null);
  const [totalPages, setTotalPages] = useState(null)
  const [currentPage, setCurrentPage] = useState(null);
  const [noResults, setNoResults] = useState(false);
  const [errorApi, setErrorApi] = useState(false);

  const { name } = useParams();
  const idPage = useQueryParams().idPage;
  const pathTv = useQueryParams().pathTv;

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
  }, [name, idPage]);

  return (
    <div className="category">
      <div className="container">
        {errorApi 
          ? <Error />
          : noResults
          ? <Error noResults />
          : <>
              <Title 
                title={name && changeUrlToStr(name)}
              />
              <Cards 
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