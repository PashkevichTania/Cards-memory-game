import React, {MouseEventHandler, useEffect, useState} from 'react';

const Card = (props: { cardImage: string, clickHandler: MouseEventHandler<HTMLDivElement> }) => {

    const {cardImage ,clickHandler} = props;


    const [styleFront, setStyleFront] = useState({})
    const [styleBack, setStyleBack] = useState({})

    function flipToFront() {
        setStyleFront({transform: 'rotateY(180deg)'})
        setStyleBack({transform: 'rotateY(360deg)'})
    }

    function flipToBack() {
        setStyleFront({})
        setStyleBack({})
    }


    return (
        <div className={"Card"} onClick={clickHandler} data-img={cardImage}>
            <div className="front" style={styleFront} id="cardFront">
                <img className={"cardImage"} src={`/cardsImages/thumbnail.jpg`} alt={"thumbnail"}/>
            </div>
            <div className="back" style={styleBack} id="cardBack">
                <img className={"cardImage"} src={`/cardsImages/${cardImage}`} alt={cardImage}/>
            </div>
        </div>
    );
};

export default Card;