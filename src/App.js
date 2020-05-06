import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

const app = props => {

  
    const [personsState, setPersonsState] = useState({
        person:[
          {name:'max', age:28},
          {name:'Sam', age:29},
          {name:'maTan', age:26}
        ]
       });

    const [otherState, setOtherState] = useState ({
      otherState : "some other state"
    })
    console.log(personsState, otherState)

    const switchNameHandler = (name) => {
    //console.log('was click');
        //Dont do it - this.state.person[0].name="Maximilian";
        setPersonsState({
          person:[
            {name:name, age:28},
            {name:'Sam', age:29},
            {name:'maTan', age:26}
          ]
        })
      };

    const nameChangeHandler =(event) => {
      setPersonsState({
        person:[
          {name:'max', age:28},
          {name: event.target.value, age:29},
          {name:'maTan', age:27}
        ]
      })
    }

    return (
      <div className="App">
        <h1>hello</h1>
        <button onClick={()=>switchNameHandler('abhi')} >Switch Name</button>
        <Person 
        name={personsState.person[0].name} 
        age={personsState.person[0].age}
        />

        <Person 
        name={personsState.person[1].name} 
        age={personsState.person[1].age}
        click={()=>switchNameHandler('Max')}
        changed={nameChangeHandler} >My hobbie: Racing
        </Person>
        <Person name={personsState.person[2].name} age={personsState.person[2].age}/>
      </div>
    );
  }
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
