import React from 'react';
import styles from '../styles/Login.module.css'
import { useRef, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setValidation } from '../redusers/formReduser';

const Login = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const nameRef = useRef();
  const passwordRef = useRef();
  
  const username = useSelector(state => state.forms.username);
  const password = useSelector(state => state.forms.password);
  
  const [inputName, setInputName] = useState('');
  const [inputNameState, setInputNameState] = useState(false);
  const [inputNameError, setInputNameError] = useState("Поле не может быть пустым");

  const [inputPassword, setInputPassword] = useState('');
  const [inputPasswordState, setInputPasswordState] = useState(false);
  const [inputDateError, setInputDateError] = useState("Поле не может быть пустым");
 

  const nameChange = () => {
    setInputName(nameRef.current.value)
  };

  const passwordChange = () => {
    setInputPassword(passwordRef.current.value)
  };

  const blurHandlerName = () => {
    if(inputName.trim()){
      setInputNameState(false)
    }else{
      setInputNameState(true)
    } 
  };
  const blurHandlerPassword = () => {
    if(inputPassword.trim()){
      setInputPasswordState(false)
    }else{
      setInputPasswordState(true)
    } 
  };

  const validHeandler = () => {
    if(username === inputName.trim() && password === inputPassword.trim()){
      localStorage.setItem("autorization", 1);
      dispatch(setValidation(1));
      setInputName('');
      setInputPassword('');
      navigate('/profil');
    }else{
      setInputNameState(true)
      setInputNameError('Неверное имя или пароль')
    }
  };
  
  return (
    <form className={styles.form} onClick={(e) => {e.stopPropagation(); e.preventDefault()}}>
      <label htmlFor="m2" className={styles.label}>Введите имя</label>
      {inputNameState && <div className={styles.error}>{inputNameError}</div>}
      <input
        value={inputName}
        name="name"
        onBlur={() => blurHandlerName()}
        id ='m2'
        className={styles.input}
        type="text"
        onChange={() => nameChange()}
        ref={nameRef}
      />
      <label htmlFor="m1" className={styles.label}>Введите пароль</label>
      {inputPasswordState && <div className={styles.error}>{inputDateError}</div>}
      <input
        value={inputPassword}
        name="date"
        onBlur={() => blurHandlerPassword()}
        id ='m1'
        className={styles.input}
        type="number"
        onChange={() => passwordChange()}
        ref={passwordRef}
      />
      <div className={styles.elButton}>
        <button className={styles.btn} onClick={() => {validHeandler()}}>Войти</button>
      </div>
    </form>
  );
};

export default Login;