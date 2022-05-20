import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Character from './components/Character';

const App = () => {
  const [character, setCharacter] = useState();
  console.log(character);

useEffect(() => {
  axios.get(`https://swapi.dev/api/people`)
    .then(res => {
      setCharacter(res.data.results);
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
      <h1 className="Header">Characters</h1>
      <Character></Character>
    </div>
  );
}

export default App;
