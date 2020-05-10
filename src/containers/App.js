import React, { useState } from "react";
import style from "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

const app = (props) => {
  const [personsState, setPersonsState] = useState({
    person: [
      { id: "asd", name: "max", age: 28 },
      { id: "dfg", name: "Sam", age: 29 },
      { id: "ryt", name: "maTan", age: 26 },
    ],
  });

  const [otherState, setOtherState] = useState({
    otherState: "some other state",
  });

  const [showPesrsonState, setShowPesrsonState] = useState({
    showPerson: false,
  });

  console.log(personsState, otherState, showPesrsonState);


  const deletePersonHandler = (personIndex) => {
    const persons = [...personsState.person];
    persons.splice(personIndex, 1);
    setPersonsState({ person: persons });
  };

  const nameChangeHandler = (event, id) => {

    const personsIndex = personsState.person.findIndex(
      p => {
        return p.id === id
      }
    );

    const person = { ...personsState.person[personsIndex] }

    person.name = event.target.value;

    const persons = [...personsState.person]

    persons[personsIndex] = person

    setPersonsState({
      person: persons
    })
  };

  const togglePersonHandler = () => {
    setShowPesrsonState({
      showPerson: !showPesrsonState.showPerson,
    });
  };


  let displayPerson = null;
  let btnClass = [style.Button];



  if (showPesrsonState.showPerson) {
    displayPerson = (
      <div>
        <Persons
          persons={personsState.person}
          clicked={deletePersonHandler}
          changed={nameChangeHandler}
        />
      </div>

    );

  }

  return (

    <div className={style.App}>
      <Cockpit
        persons={personsState.person}
        showPerson={showPesrsonState.showPerson}
        clicked={togglePersonHandler}
      />
      <div>{displayPerson}</div>
    </div>

  );
};
//}

export default app;

//Class based

// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Person from './Person/Person'

// class App extends Component {

//   state = {
//     person:[
//       {name:'max', age:28},
//       {name:'Sam', age:29},
//       {name:'maTan', age:26}
//     ]
//   }
//   switchNameHandler = () => {
//     //console.log('was click');
//     //Dont do it - this.state.person[0].name="Maximilian";
//     this.setState({
//       person:[
//         {name:'Maximilian', age:28},
//         {name:'Sam', age:29},
//         {name:'maTan', age:26}
//       ]
//     })
//   }

//   render() {
//     return (
//       <div className="App">
//         <h1>hello</h1>
//         <button onClick={this.switchNameHandler} >Switch Name</button>
//         <Person name={this.state.person[0].name} age={this.state.person[0].age}/>
//         <Person name={this.state.person[1].name} age={this.state.person[1].age}>My hobbie: Racing</Person>
//         <Person name={this.state.person[2].name} age={this.state.person[2].age}/>
//       </div>
//     );
//   }
// }

// export default App;
