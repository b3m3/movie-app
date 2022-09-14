import { useQueryParams } from '../hooks/useQueryParams';

const withList = (Component, data, style) => {
  return () => {
    const pathTv = useQueryParams().pathTv;

    const flex = {
      display: 'flex',
    }

    const grid = {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(12.8125rem, 1fr))',
      gridColumnGap: '15px',
      gridRowGap: '1.25rem'
    }

    return (
      <ul style={style === 'grid' ? grid : flex}>
        {data && data.map((props, id) => (
          <li key={id}>
            <Component
              pathTv={pathTv}
              {...props}
            />
          </li>))}
      </ul>
    );
  }
}

export default withList;