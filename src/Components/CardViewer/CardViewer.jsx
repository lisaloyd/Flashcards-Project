import React, { useState, } from 'react';

const CardViewer = (props) => {
    const [nextButton, setNextButton] = useState([]);
    const [previousButton, setPreviousButton] = useState([]);

    return(
        <div>
            <h3>{props.flashcards.collection}</h3>
        <button type='text' className={previousButton} onClick={() => togglepreviousButton('previous')}>Previous</button>
            <button type='text' className={nextButton} onClick={() => togglenextButton('next')}>Next</button>
        </div>
    )
}




export default CardViewer;
