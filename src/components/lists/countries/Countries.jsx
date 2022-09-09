import style from './countries.module.css';

const Countries = ({ countries }) => {
  return (
    <ul className={style.countries}>
      {countries && countries.map(({name}) => (
        <li key={name}>
          {name}
        </li>
      ))}
    </ul>
  );
}

export default Countries;