import React, {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {gameStateSelector} from "redux/selectors";
import {setScore, setTime} from "redux/appSlice";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const gameState = useSelector(gameStateSelector);
  const intervalRef = useRef<number>()
  const dispatch = useDispatch()

  useEffect(() => {
    if (gameState.isGameFinished) {
      const finalTime = (minutes * 60 + seconds);
      dispatch(setTime((`00${minutes}`).slice(-2) + ':' + (`00${seconds}`).slice(-2)));
      dispatch(setScore((16 * 100) - finalTime * 10));
      setMinutes(0);
      setSeconds(0);
      clearInterval(intervalRef.current);
    }
  }, [gameState])

  useEffect(() => {
    if (gameState.isGameStarted) {
      intervalRef.current = setInterval(() => {
        if (seconds === 59) {
          setMinutes(min => min + 1);
          setSeconds(0);
        } else {
          setSeconds(sec => sec + 1);
        }
      }, 1000);
    }
    return () => clearInterval(intervalRef.current);
  }, [gameState, seconds]);


  return (
      <div className={"Timer"}>
        <div className={"minutes"}>{(`00${minutes}`).slice(-2)}</div>
        <div className={"doubleDot"}> :</div>
        <div className={"seconds"}>{(`00${seconds}`).slice(-2)}</div>
      </div>
  );
};

export default Timer;
