import React, { useState } from 'react';


const Card = (props) => {
    const [word, setWord] = useState({})
    const [definition, setDefinition] = useState({})




    return (
        <div>
            <center>
                <h3>{props.flashcards.word}</h3>
                <h3>{props.flashcards.definition}</h3>
                <button type='text' className={word} onClick={() => ('word')}></button>
                <button type ='text' className={definition} onClick={() => ('definition')}></button>
            </center>
        </div>
    )
    
}



export default Card;