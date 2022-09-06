import { Link } from 'react-router-dom';

import Button from '../ui/button/Button';

import { useQueryParams } from '../../hooks/useQueryParams';
import { PAGE_ROOT } from '../../constans/api';

import style from './navigation.module.css';

const Navigation = ({ idPage, currentPage, category }) => {
  const pathTv = useQueryParams().pathTv;

  return (
    <div className={style.navigation}>
      <Link
        to={`/${pathTv}${category}${PAGE_ROOT}${+idPage - 1}`}
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
        to={`/${pathTv}${category}${PAGE_ROOT}${+idPage + 1}`}
        className={idPage && idPage >= 100 ? style.ban : null}
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



