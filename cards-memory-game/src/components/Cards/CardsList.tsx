import React, {memo} from 'react';
import {CARDS_IMAGES} from "const";
import Card from "components/Cards/Card";


const CardsList = () => {

  const shuffle = (array: string[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const cardsArray = shuffle(CARDS_IMAGES.concat(CARDS_IMAGES));

  const cardsList = cardsArray.map((cardImage) =>
      <Card cardImage={cardImage} key={cardImage + Math.random()}/>)

  return (
      <div className={"CardsList"}>
        {cardsList}
      </div>
  );
};

export default memo(CardsList);
