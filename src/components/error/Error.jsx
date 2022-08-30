import style from './error.module.css';

const Error = () => {
  return (
    <div className={style.error}>
      <p>
        An error has occurred. We cannot display data.<br />
        Come back when we fix everything or reboot your page.
      </p>
    </div>
  );
}

export default Error;