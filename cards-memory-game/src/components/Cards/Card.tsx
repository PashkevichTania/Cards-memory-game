import React from 'react';

const Card = (props: {cardImage: string}) => {

    const { cardImage } = props

    return (
        <div className={"Card"}>
            <img className={"cardImage"} src={`/cardsImages/${cardImage}`} alt={cardImage} />
        </div>
    );
};

export default Card;