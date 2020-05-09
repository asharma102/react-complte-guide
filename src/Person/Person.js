import React from 'react';
import stylePerson from './Person.css';
//import react-dom from 'react-dom'



const person = (props) => {
    return (
        <div className={stylePerson.Person}>
            <p onClick={props.click}>I am {props.name}  and i am {props.age} year old</p>
            <p>{props.children}</p>
            <input type="text" value={props.name} onChange={props.changed} />
        </div>
    )
}

export default person;