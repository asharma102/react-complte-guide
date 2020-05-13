import React from 'react';
import style from './Cockpit.css';

const cockpit = (props) => {
  // useEffect(() => {
  //     //console.log('[cockpit.js] use')
  // })

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
      <button className={btnClass} onClick={props.clicked}>
        Toggle Name
      </button>
    </div>
  );
};


export default cockpit;
