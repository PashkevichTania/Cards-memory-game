import React, {useState} from 'react';

const Card = (props: {cardImage: string}) => {

    const { cardImage } = props;

    const [styleFront, setStyleFront] = useState({})
    const [styleBack, setStyleBack] = useState({})

    function flip() {
        setStyleFront({transform: 'rotateY(180deg)'})
        setStyleBack({transform: 'rotateY(360deg)'})
    }
    function flipBack() {
        setStyleFront({})
        setStyleBack({})
    }

    return (
        <div className={"Card"}>
                <div className="front" onClick={flip} style={styleFront} id="cardFront">
                    <img className={"cardImage"} src={`/cardsImages/thumbnail.jpg`} alt={"thumbnail"} />
                </div>
                <div className="back" onClick={flipBack} style={styleBack} id="cardBack">
                    <img className={"cardImage"} src={`/cardsImages/${cardImage}`} alt={cardImage} />
                </div>
        </div>
    );
};

export default Card;