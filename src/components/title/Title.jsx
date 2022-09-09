import style from './title.module.css';

const Title = ({ title, icon, color }) => {
  return (
    <h2 className={style.title}>
      <span>{title}</span> 
      <span 
        className={style.icon}
        style={{color: `${color}`}}
      >
        {icon}
      </span>
    </h2>
  );
}

export default Title;