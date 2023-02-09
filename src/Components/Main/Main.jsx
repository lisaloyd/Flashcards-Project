import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Main = (props) => {
    const [collections, setCollections] = useState([]);


    useEffect (() => {
        getAllCollections();
    }, [])

    async function getAllCollections() {
        let response = await axios.get('http://127.0.0.1:8000/api/collections/');
        setCollections(response.data);
    }
}
    
export default Main;