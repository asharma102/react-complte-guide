import React from 'react';
import styled from 'styled-components'

import './Person.css';
//import react-dom from 'react-dom'
const style = {
    '@media (min-width:500px)': {
        width: '450px'
    }
}

const StyledDiv = styled.div`
    width: 60%;
    margin: 16px auto; 
    border: 1px solid #ccc;
    border-bottom: 3px solid #ccc;
    padding: 16px;
    text-align: center;
    @media (min-width:500px): {
        width: '450px'
    }

`

const person = (props) => {
    return (
        <StyledDiv>
            <p onClick={props.click}>I am {props.name}  and i am {props.age} year old</p>
            <p>{props.children}</p>
            <input type="text" value={props.name} onChange={props.changed} />
        </StyledDiv>
    )
}

export default person;