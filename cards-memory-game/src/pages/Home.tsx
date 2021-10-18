import React from 'react';
import Header from "components/Header/Header";
import CardsContainer from "components/Cards/CardsContainer";
import Timer from "components/Timer/Timer";
import Footer from "components/Footer/Footer";
import {startGame} from "redux/appSlice";
import {useDispatch, useSelector} from "react-redux";
import {gameStateSelector} from "redux/selectors";

const Home = () => {


  const gameState = useSelector(gameStateSelector)
  const dispatch = useDispatch()

  const startGameHandler = () => {
    dispatch(startGame())
  }

  console.log(gameState.isGameStarted ? 'cardsContainer' : '<button onClick={startGameHandler}>start</button>')
  return (
    <div className={"Home"}>
      <Header/>
      <Timer/>
      {gameState.isGameStarted ? <CardsContainer/> :
        <button onClick={startGameHandler}>start</button>}
      <Footer/>
    </div>
  );
};

export default Home;
