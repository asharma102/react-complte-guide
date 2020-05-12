import React from 'react';
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
export default persons;
