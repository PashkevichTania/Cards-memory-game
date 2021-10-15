import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {gameStateSelector} from "redux/selectors";

const Timer = () => {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const gameState = useSelector(gameStateSelector)

    useEffect(() => {
        let interval: number | undefined;
        if (gameState.isGameStarted) {
            interval = setInterval(() => {
                if (seconds === 59){
                    setMinutes(minutes => minutes +1);
                    setSeconds(0);
                }else {
                    setSeconds(seconds => seconds + 1);
                }
            }, 1000);
        } else if (gameState.isGameFinished) {
            setMinutes(0);
            setSeconds(0);
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [seconds]);



    return (
        <div className={"Timer"}>
            <div className={"minutes"}>{(`00${minutes}`).slice(-2)}</div>
            <div className={"doubleDot"}> : </div>
            <div className={"seconds"}>{(`00${seconds}`).slice(-2)}</div>
        </div>
    );
};

export default Timer;
