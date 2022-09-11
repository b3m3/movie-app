import style from './countries.module.css';

const Countries = ({ countries }) => {
  return (
    <>
      {countries && <ul className={style.countries}>
        {countries.map(({name}) => (
          <li key={name}>
            {name}
          </li>
        ))}
      </ul>}
    </>
  );
}

export default Countries;