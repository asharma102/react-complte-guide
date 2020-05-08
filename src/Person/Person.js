import React from 'react';
import './Person.css';
import Radium from 'radium'
//import react-dom from 'react-dom'
const style = {
    '@media (min-width:500px)': {
        width: '450px'
    }
}

const person = (props) => {
    return (
        <div className="Person" style={style}>
            <p onClick={props.click}>I am {props.name}  and i am {props.age} year old</p>
            <p>{props.children}</p>
            <input type="text" value={props.name} onChange={props.changed} />
        </div>
    )
}

export default Radium(person);