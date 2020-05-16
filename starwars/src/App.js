import React, {useState} from 'react';
import './App.css';
// import Character from './components/CharacterInfo';
import axios from 'axios'
import CharacterInfo from './components/CharacterInfo.jsx';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [isCharacter, setCharacter]=useState(false)

  
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const getCharacter=()=>{
    const URL="https://swapi.py4e.com/api/people/"
    //console.log('testing')
    setCharacter(true)
   
    axios
    .get(URL)
    .then(response=>{
      console.log(response.data)
    })
    .catch(error=>{
      console.log('unable to connect to character card')
    })
     //console.log('testing')
  };

  return (
    <div className="App">
      <h1 className="Header">StarWars Trivia</h1>

      <CharacterInfo getCharacter={getCharacter} setCharacter={setCharacter}/>
    </div>
  );
}

export default App;
