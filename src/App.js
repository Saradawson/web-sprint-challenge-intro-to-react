import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Characters from './components/Character';

const App = () => {
  const [characters, setCharacters] = useState();
  console.log('characters', characters);

useEffect(() => {
  const charactersData = [];
  axios.get(`https://swapi.dev/api/people`)
    .then(res => {
      res.data.results.map(character => {
        setCharacters(character);
      });
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
        { characters && <Characters characters={characters}/>}
      </div>
  );
}

export default App;
