import React, {useEffect} from 'react';
import Header from "components/Header/Header";
import CardsContainer from "components/Cards/CardsContainer";
import Timer from "components/Timer/Timer";
import Footer from "components/Footer/Footer";
import {startGame} from "redux/appSlice";
import {useDispatch, useSelector} from "react-redux";
import {gameStateSelector, scoreSelector, timeSelector} from "redux/selectors";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {


  const gameState = useSelector(gameStateSelector)
  const dispatch = useDispatch()
  const time = useSelector(timeSelector)
  const score = useSelector(scoreSelector)

  useEffect(()=>{
    if (gameState.isGameFinished){
      notify()
    }
  },[score])

  const startGameHandler = () => {
    dispatch(startGame())
  }

  const notify = () => toast(
    <div style={{display: "flex", flexDirection:"column" ,alignItems:"flex-end"}}>
      <p>🦄 Congrats you win!</p>
      <p> Your time: <span style={{color:'#b81640'}}>{time}</span></p>
      <p>Your score: <span style={{color:'#b81640'}}>{score}</span></p>
    </div>, {
    position: "top-center",
    autoClose: 10000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

  return (
    <div className={"Home"}>
      <Header/>
      <Timer/>
      {gameState.isGameStarted ? <CardsContainer/> :
        <button className={"startBtn"} onClick={startGameHandler}>start</button>}
      <Footer/>
      <ToastContainer
        position="top-center"
        autoClose={10000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Home;
