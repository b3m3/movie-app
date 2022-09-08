import { Link, useParams } from 'react-router-dom';

import Button from '../ui/button/Button';

import { useQueryParams } from '../../hooks/useQueryParams';
import { PAGE_ROOT, SEARCH } from '../../constans/api';

import style from './navigation.module.css';

const Navigation = ({ idPage, currentPage, totalPages }) => {
  const pathTv = useQueryParams().pathTv;
  const {name, category } = useParams();

  return (
    <div className={style.navigation}>
      <Link
        to={name
          ? `/${pathTv}${SEARCH}${name}${PAGE_ROOT}${+idPage - 1}`  
          : `/${pathTv}${category}${PAGE_ROOT}${+idPage - 1}`}
        className={idPage && idPage <= 1 ? style.ban : null}
      >
        <Button 
          name="Prev"
          onClick={() => currentPage && currentPage + 1}
          side={true}
          idPage={idPage}
        />
      </Link>

      <Link 
        to={name
          ? `/${pathTv}${SEARCH}${name}${PAGE_ROOT}${+idPage + 1}`  
          : `/${pathTv}${category}${PAGE_ROOT}${+idPage + 1}`}
        className={idPage && idPage >= totalPages ? style.ban : null}
      >
        <Button 
          name="Next"
          onClick={() => currentPage && currentPage - 1}
          side={false}
          idPage={idPage}
        />
      </Link>
    </div>
  );
}

export default Navigation;



