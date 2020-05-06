import React from 'react';
//import react-dom from 'react-dom'

const person = (props) => {
    return (
        <div>
            <p onClick={props.click}>I am {props.name}  and i am {props.age} year old</p>
            <p>{props.children}</p>
            <input type="text" onChange = {props.changed}/>
        </div>
    )
}

export default person;