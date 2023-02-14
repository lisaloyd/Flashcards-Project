import React, { useEffect, useState } from "react";
import axios from "axios";
import CardViewer from "./Components/CardViewer/CardViewer";
import CollectionList from "./Components/CollectionList/CollectionList";

function App() {
  const [flashcards, setFlashcards] = useState([]);
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    getCardsForCollection(1);
    getAllCollections();
  }, []);
  console.log(flashcards)

  async function getCardsForCollection(collectionId) {
    let response = await axios.get(
      `http://127.0.0.1:8000/api/collections/${collectionId}/cards/`
    );

    setFlashcards(response.data);
  }

  async function getAllCollections() {
    let response = await axios.get("http://127.0.0.1:8000/api/collections/");
    setCollections(response.data);
  }

  return (
    <div>
      <CardViewer cards ={flashcards}/>
  
      <CollectionList collections={collections} />
    </div>
  );
}

export default App;
