import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';

import { useQueryParams } from '../../../hooks/useQueryParams';
import { SEARCH, PAGE_ROOT, MOVIES } from '../../../constans/api';

import { FiSearch } from 'react-icons/fi';

import style from './input.module.css';

const Input = () => {
  const [inputValue, setInputValue] = useState('');
  const link = useRef(null);
  const pathTv = useQueryParams().pathTv;
  
  return (
    <div className={style.wrapp}>
      <input 
        placeholder={pathTv === 'tv/' ? 'Search series' : 'Search movies'}
        className={style.input}
        value={inputValue}
        onChange={e => setInputValue(value => e.target.value)}
        onKeyDown={e => e.key === 'Enter' ? link.current.click() : null}
      />
      <Link
        ref={link}
        to={`${pathTv === '/' ? MOVIES : pathTv}${SEARCH}${inputValue}${PAGE_ROOT}1`}
        className={style.btn}
        onClick={() => setInputValue('')}
      >
        <FiSearch />
      </Link>
    </div>
  );
}

export default Input;