import { Link, useParams } from 'react-router-dom';

import { useQueryParams } from '../../hooks/useQueryParams';
import { PAGE_ROOT, SEARCH } from '../../constans/api';
import Button from '../ui/button';

import style from './navigation.module.css';

const Navigation = ({ idPage, totalPages }) => {
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
          side={false}
          idPage={idPage}
        />
      </Link>
    </div>
  );
}

export default Navigation;



