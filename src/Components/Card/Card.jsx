// Trying to switch between the word and definition on a card

import React, { useState } from "react";

const Card = ({ card }) => {
  if (card) {
    return <div>{card.word}</div>;
  }
};

export default Card;
