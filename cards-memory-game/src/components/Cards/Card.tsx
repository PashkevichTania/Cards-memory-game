import React from "react";


const Card = (props: { cardImage: string }) => {

  const {cardImage} = props;

  return (
    <div className={"Card"} data-img={cardImage}>
      <div className="front" id="cardFront">
        <img className={"cardImage"} src={`/cardsImages/thumbnail.jpg`} alt={"thumbnail"}/>
      </div>
      <div className="back" id="cardBack">
        <img className={"cardImage"} src={`/cardsImages/${cardImage}`} alt={cardImage}/>
      </div>
    </div>
  );
};

export default Card;
