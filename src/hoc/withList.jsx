import { useQueryParams } from '../hooks/useQueryParams';
import { MOVIES, SERIES } from '../constans/api';

const withList = (Component, data, style) => {
  return () => {
    const flex = {
      display: 'flex',
      gap: '10px',
      flexWrapp: 'wrapp'
    }

    const grid = {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(12.8125rem, 1fr))',
      gridColumnGap: '15px',
      gridRowGap: '1.25rem'
    }

    return (
      <ul style={style === 'grid' ? grid : flex}>
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