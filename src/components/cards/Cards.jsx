import { useQueryParams } from '../../hooks/useQueryParams';

import Card from '../card/Card';

import style from './cards.module.css';

export const Cards = ({ resultsArray }) => {
  const pathTv = useQueryParams().pathTv;

  return (
    <ul className={style.list}>
      {resultsArray && resultsArray.map(({ id, poster_path, title, name, vote_average }) => (
        <li key={id} >
          <Card
            pathTv={pathTv}
            id={id}
            poster_path={poster_path}
            title={title}
            name={name}
            vote_average={vote_average}
          />
        </li>
      ))}
    </ul>
  );
}