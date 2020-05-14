/* eslint-disable */
import React, { useRef, useEffect, useContext } from 'react';
import style from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const cockpit = (props) => {
  const btnref = useRef();
  const authContext = useContext(AuthContext);

  console.log(authContext.authenticated);

  useEffect(() => {
    console.log('[cockpit.js] use');
    btnref.current.click();
  }, []);

  // using context in outside of render
  // static contextType = AuthContext

  const classes = [];
  let btnClass = '';
  // console.log(btnClass);
  if (props.personsLength <= 2) {
    classes.push(style.red);
  }
  if (props.personsLength <= 1) {
    classes.push(style.bold);
  }

  if (props.showPerson) {
    btnClass = style.Red;
  }
  return (
    <div className={style.Cockpit}>
      <h1>{props.title}</h1>
      <p className={classes.join(' ')}>This is really working</p>
      <button ref={btnref} className={btnClass} onClick={props.clicked}>
        Toggle Name
      </button>

      <button onClick={authContext.login}>Log in</button>

    </div>
  );
};


export default cockpit;
