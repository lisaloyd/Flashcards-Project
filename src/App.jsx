import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [flashcards, setFlashcards] = useState([]);
  const [collections, setCollections] = useState([]);


  useEffect (() => {
    getAllCollections();
    getCardsForCollections();
  }, [])

  async function getAllCollections(){
      let response = await axios.get('http://127.0.0.1:8000/api/collections/');
      setCollections(response.data);
  } 

  async function getCardsForCollections(){
    let response = await axios.get('http://127.0.0.1:8000/api/collections/2/cards/');
    setFlashcards(response.data);
  }
  
  return (
    <div>
      
    </div>
  );
}

export default App;
