import style from './genres.module.css';

const Genres = ({ genres }) => {
  return (
    <>
      {genres && <ul className={style.genres}>
        {genres.map(item => (
          <li key={item.name}>
            {item.name}
          </li>
        ))}
      </ul>}
    </>
  );
}

export default Genres;