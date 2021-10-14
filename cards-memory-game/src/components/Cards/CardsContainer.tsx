import React from 'react';
import {useDispatch} from "react-redux";
import {finishGame, startGame} from "redux/appSlice";
import {CARDS_IMAGES} from "const";
import Card from "components/Cards/Card";

const CardsContainer = () => {

    const dispatch = useDispatch()

    const startGameHandler = () => {
      dispatch(startGame())
    }
    const finishGameHandler = () => {
        dispatch(finishGame())
    }

    function shuffle(array: string[]) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    const cardsArray = shuffle(CARDS_IMAGES.concat(CARDS_IMAGES));

    const cardsList = cardsArray.map((cardImage) =>
        <Card cardImage={cardImage} key={cardImage+Math.random()} />
    )

    return (
        <div>
            <button onClick={startGameHandler}>start game</button>
            <button onClick={finishGameHandler}>finish game</button>
            <div className={"CardsContainer"}>
                {cardsList}

            </div>
        </div>

    );
};

export default CardsContainer;