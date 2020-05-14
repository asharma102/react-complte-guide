import React from 'react';
import PropTypes from 'prop-types';
import stylePerson from './Person.css';
import AuthContext from '../../../context/auth-context';

// import persons from '../Persons';
// import react-dom from 'react-dom'


const person = props => (
  <React.Fragment>
    <AuthContext.Consumer>
      {context =>
        context.authenticated ? <p>Authentocated</p> : <p>Not Authentocated</p>}
    </AuthContext.Consumer>
    <div className={stylePerson.Person}>
      <button onClick={props.click}>I am {props.name}  and i am {props.age} year old</button>
      <p>{props.children}</p>
      <input type="text" value={props.name} onChange={props.changed} />
    </div>

    <div>Adjacent Div</div>

  </React.Fragment>
);
person.PropTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func,
};

export default person;
