import { Link } from 'react-router-dom';
import { useState } from 'react';

import { useQueryParams } from '../../../hooks/useQueryParams';
import { SEARCH, PAGE_ROOT } from '../../../constans/api';

import { FiSearch } from 'react-icons/fi';

import style from './input.module.css';

const Input = () => {
  const [inputValue, setInputValue] = useState('');
  const pathTv = useQueryParams().pathTv;

  return (
    <div className={style.wrapp}>
      <input 
        placeholder={'Search'}
        className={style.input}
        value={inputValue}
        onChange={e => setInputValue(value => e.target.value)}
      />
      <Link 
        to={`${pathTv}${SEARCH}${inputValue}${PAGE_ROOT}1`}
        className={style.btn}
        onClick={() => setInputValue('')}
      >
        <FiSearch />
      </Link>
    </div>
  );
}

export default Input;