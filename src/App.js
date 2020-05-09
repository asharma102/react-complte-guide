import React, { useState } from "react";
import logo from "./logo.svg";
import style from "./App.css";
import Person from "./Person/Person";

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
    btnClass.push(style.Red);
    displayPerson = (
      <div>
        {personsState.person.map((personList, index) => {
          return (
            <Person
              name={personList.name}
              age={personList.age}
              click={() => deletePersonHandler(index)}
              key={personList.id}
              changed={(event) => nameChangeHandler(event, personList.id)}
            />
          );
        })}
      </div>

    );

  }

  let classes = [];
  if (personsState.person.length <= 2) {
    classes.push(style.red);
  }
  if (personsState.person.length <= 1) {
    classes.push(style.bold);
  }


  return (

    <div className={style.App}>
      <h1>I am a React App</h1>
      <p className={classes.join(' ')}>This is really working</p>
      <button className={btnClass.join(' ')} onClick={togglePersonHandler}>
        Toggle Name
      </button>
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
