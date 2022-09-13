import style from './error.module.css';

const Error = ({ noResults, name }) => {
  return (
      <div className={style.error}>
        {noResults 
          ? <p>
              По запросу "{name}" ничего не найдено &#128532;.<br />
              Повторите ввод, или измените категорию
            </p>
          : <p>
              {/* An error has occurred. We cannot display data.<br />
              Come back when we fix everything or reboot your page. */}
              Произошла ошибка. Мы не можем отобразить данные.<br />
              Возвращайтесь, когда мы все исправим или перезагрузите страницу.
            </p>}
      </div>
  );
}

export default Error;