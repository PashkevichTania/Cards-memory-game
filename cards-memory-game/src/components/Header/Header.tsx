import React from 'react';
import {useDispatch} from "react-redux";
import {finishGame, startGame} from "redux/appSlice";

const Header = () => {

  const dispatch = useDispatch()

  const startGameHandler = () => {
    dispatch(startGame())
  }

  const finishGameHandler = () => {
    dispatch(finishGame())
  }

  return (
        <header className={"header"}>
            <h1>Cards match memory game!</h1>
          <div className={"btns"}>
              <button className={"start"} onClick={startGameHandler}>start game</button>
              <button className={"finish"} onClick={finishGameHandler}>finish game</button>
          </div>
        </header>
    );
};

export default Header;
