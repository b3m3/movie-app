import { MOVIES, SERIES } from '../constans/api';

const withList = (Component, data, style) => {
  return () => {
    return (
      <ul
        className={style === 'grid' ? 'list-grid' : 'list-flex'}
      >
        {data && data.map((props, id) => {
          return (
            <li key={id}>
              <Component
                key={id}
                pathTv={props.name ? SERIES : MOVIES}
                {...props}
              />
            </li>)
          })
        }
      </ul>
    );
  }
}

export default withList;