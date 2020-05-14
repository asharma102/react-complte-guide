import React from 'react';
import PropTypes from 'prop-types';
import Person from './Person/Person';


const persons = props => (
  props.persons.map((personList, index) => (
    <Person
      name={personList.name}
      age={personList.age}
      click={() => props.clicked(index)}
      key={personList.id}
      changed={event => props.changed(event, personList.id)}
    />
  ))
);
persons.PropTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  click: PropTypes.func,
  changed: PropTypes.func,
};
export default persons;
