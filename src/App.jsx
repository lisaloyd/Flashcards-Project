import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Main from './Components/Main/Main.jsx';


function App() {

  const [flashcards, setFlashcards] = useState([]);
  

  useEffect (() => {
    getCardsForCollection();
  }, [])

  
  async function getCardsForCollection(){
    let response = await axios.get('http://127.0.0.1:8000/api/collections/2/cards/');
    setFlashcards(response.data);
  }
  
  
  return (
    <div>
      <Main />
    </div>
  );
}

export default App;
