import React from 'react';
import {useDispatch} from "react-redux";
import {finishGame, startGame} from "redux/appSlice";

const CardsContainer = () => {

    const dispatch = useDispatch()

    const startGameHandler = () => {
      dispatch(startGame())
    }
    const finishGameHandler = () => {
        dispatch(finishGame())
    }

    return (
        <div>
            <button onClick={startGameHandler}>start game</button>
            <button onClick={finishGameHandler}>finish game</button>
        </div>
    );
};

export default CardsContainer;