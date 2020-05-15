import React, {useState} from 'react';
import './App.css';
import Character from './components/CharacterInfo';
import axios from 'axios'
import CharacterInfo from './components/CharacterInfo.jsx';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [isCharacter, setCharacter]=useState([])

  
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const getCharacter=()=>{
    const URL="http swapi.py4e.com/api/planets"
    //console.log('testing')
    axios
    .get(URL)
    .then()
    .catch()
    // console.log('testing')
  };

  return (
    <div className="App">
      <h1 className="Header">StarWars Trivia</h1>

      <CharacterInfo getCharacter={getCharacter}/>
    </div>
  );
}

export default App;
