import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardViewer from './Components/CardViewer/CardViewer';


function App() {

  const [flashcards, setFlashcards] = useState([]);
  const [collections, setCollections] = useState([]);
  

  useEffect (() => {
    getCardsForCollection();
    getAllCollections();
  }, [])

  async function getCardsForCollection(){
    let response = await axios.get('http://127.0.0.1:8000/api/collections/2/cards/');
    setFlashcards(response.data);
  }

  async function getAllCollections() {
    let response = await axios.get('http://127.0.0.1:8000/api/collections/');
    setCollections(response.data);
};
  
  return (
    <div>
      <CardViewer />
    </div>
  );
}

export default App;
