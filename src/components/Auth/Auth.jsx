import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../css/auth.module.css';

const Auth = () => {

  let dataA = {
    login: null,
    passw: null,
    update: false
  }

  const navigate = useNavigate();
  const fReset = useRef(null);
  const rLogin = useRef(null);
  const rPassw = useRef(null);
  const rAuth = useRef(null);
  const [authStep, setAuthStep] = useState(false);
  const [loginEmpty, setLoginEmpty] = useState("");
  const [passwEmpty, setPasswEmpty] = useState("");
  const [update, setUpdate] = useState(false);

  const authStore = sessionStorage.getItem('authUser') !== null;


  const [showAuth, setShowAuth] = useState(!authStore);

  function getValidation(field, error) {
    if (field.length >= 4) {
      error.current.textContent = "";
      return field;
    }

    if (field.length === 0) {
      error.current.textContent = "Поле не должно быть пустым!";
      rAuth.current.textContent = "";
    }
    else if (field.length <= 4) {
      error.current.textContent = "Поле должно содержать не менее 4-х символов!";
      rAuth.current.textContent = "";
    }
    return false;
  }

  function submitHundler(e) {
    e.preventDefault();

    dataA.login = getValidation(loginEmpty, rLogin);
    dataA.passw = getValidation(passwEmpty, rPassw);

    if (!update) {
      rAuth.current.textContent = "Вы должны согласиться с условиями для регистрации!";
      return;
    }

    if (dataA.login && dataA.passw) {
      authStore ? setShowAuth(showAuth) : setShowAuth(!showAuth);
      if (!authStep) {
        sessionStorage.setItem('authUser', JSON.stringify(dataA));
        rAuth.current.textContent = "Вы зарегистрированы!";
      }
      else {
        let getAuth = JSON.parse(sessionStorage.getItem('authUser'));
        if (getAuth !== null && loginEmpty === getAuth.login && passwEmpty === getAuth.passw) {
          rAuth.current.textContent = "";
          navigate('/main');
        }
        else {
          rAuth.current.textContent = "Неверный логин или пароль!";
        }
      }
    }
    return false;
  }

  function getCurrentStep() {
    fReset.current.reset();
    setLoginEmpty("");
    setPasswEmpty("");
    rAuth.current.textContent = "";
    rLogin.current.textContent = "";
    rPassw.current.textContent = "";

    return setAuthStep(!authStep);
  }

  return (
      <div className={styles.main}>
        <div className={styles.window}>
          <p className={styles.register}
            onClick={getCurrentStep}>
            {authStep ? "Зарегистрироваться" : "Авторизоваться"}
          </p>
          <h2>{authStep ? "Вход" : "Регистрация"}</h2>
          <form className={styles.form} ref={fReset}>
            <input type="text"
              className={styles.text}
              placeholder='Логин'
              onInput={(e) => setLoginEmpty(e.target.value)} />
            <p className={styles.error} ref={rLogin}></p>
            <input type="password"
              className={styles.pass}
              placeholder='Пароль'
              onInput={(e) => setPasswEmpty(e.target.value)} />
            <p className={styles.error} ref={rPassw}></p>
            <div className={styles.privacy}>
              <input type="checkbox" id='update' aria-hidden />
              <label htmlFor="update"
                className={styles.custom_checkbox}
                onClick={() => setUpdate(!update)}>
                {update ? dataA.update = true : dataA.update = false}
              </label>
              <label className={styles.agree}>Я согласен получать обновления на почту</label>
              <p className={authStep ? styles.error : styles.succ} ref={rAuth}
              ></p>
              <button className={styles.login}
                type='submit'
                onClick={submitHundler}>
                {authStep ? "Войти" : "Зарегистрироваться"}
              </button>
            </div>
          </form>
        </div>
      </div>
  );
}
export default Auth;