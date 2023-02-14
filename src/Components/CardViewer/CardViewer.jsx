// Trying to create and utilize 'next' and 'previous' buttons on card
import React, { useEffect, useState } from "react";
import Card from "../Card/Card";

const CardViewer = ({ cards }) => {
  const [index, setIndex] = useState(0);
  const currentCard = cards[index];
  //  return <Card card={card} />;

  function handleNext() {
    if (index < cards.length - 1) setIndex(index + 1);
  }

  function handlePrevious(){
    if (index > 0) setIndex(index - 1);
  }

  return (
    <div>
      <button className="btn" onClick={handlePrevious}>
        Previous
      </button>
      <Card card={currentCard} />
      <button className="btn" onClick={handleNext}>
        Next
      </button>
    </div>
  );
};

export default CardViewer;
