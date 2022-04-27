import './App.css';
import React, {useState,useEffect} from 'react';
import axios from 'axios';


function App() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon?limit=900`)
    .then((response)=>{
      console.log(response);
      setPokemon(response.data.results);
    })
    .catch((err)=> console.log(err));
  }, []);


  return (
    <div className="App">
      <h1>Pokemon Axios</h1>
      {
        pokemon.map((pokemonName, index) =>(
          <div key={index}>
            <p> {pokemonName.name} </p>
          </div>
        ))
      }
    </div>
  );
}

export default App;