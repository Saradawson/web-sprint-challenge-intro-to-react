import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Character from './components/Character';


const App = () => {
  const [characters, setCharacters] = useState();
  // console.log('characters', characters);

useEffect(() => {
  
  axios.get(`https://swapi.dev/api/people/`)
    .then(res => {
      // console.log(res.data);
      setCharacters(res.data);
    })
    .catch(err => {
      console.error(err);
    })
}, [])

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
    return (
      <div className="App">
        <h1 className="Header">PICK YOUR CHARACTER</h1>
        {
          characters &&
          characters.map(char => {
            console.log(char);
            return <Character character={char} key={char.name}/>
          })
        }
      </div>
  );
}

export default App;
