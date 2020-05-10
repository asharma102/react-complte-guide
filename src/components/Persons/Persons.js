import React from 'react';
import Person from './Person/Person'

const persons = (props) => {

    return (
        props.persons.map((personList, index) => {
            return (
                <Person
                    name={personList.name}
                    age={personList.age}
                    click={() => props.clicked(index)}
                    key={personList.id}
                    changed={(event) => props.changed(event, personList.id)}
                />
            );
        })
    )
}
export default persons;