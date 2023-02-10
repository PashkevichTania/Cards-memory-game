import {
  useEffect,
  useRef,
  useState
} from 'react'
import {
  useGameStateStore,
  selectors
} from 'entities/GameState'
import {
  useScoreStore,
  selectors as scoreSelectors
} from 'entities/score'
import {
  useTimerStore,
  selectors as timerSelectors
} from 'entities/timer'

export const useTimer = (): {
  seconds: number
  minutes: number
} => {
  const gameState = useGameStateStore(
    selectors.gameState
  )
  const setScore = useScoreStore(
    scoreSelectors.setScore
  )
  const setTime = useTimerStore(
    timerSelectors.setTime
  )

  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const intervalRef = useRef<number>()

  useEffect(() => {
    if (gameState.isGameFinished) {
      const finalTime = minutes * 60 + seconds
      setTime(
        `00${minutes}`.slice(-2) +
          ':' +
          `00${seconds}`.slice(-2)
      )
      setScore(16 * 100 - finalTime * 10)
      setMinutes(0)
      setSeconds(0)
      clearInterval(intervalRef.current)
    }
  }, [gameState.isGameFinished])

  useEffect(() => {
    if (gameState.isGameStarted) {
      intervalRef.current = setInterval(() => {
        if (seconds === 59) {
          setMinutes((min) => min + 1)
          setSeconds(0)
        } else {
          setSeconds((sec) => sec + 1)
        }
      }, 1000)
    }
    return () =>
      clearInterval(intervalRef.current)
  }, [gameState.isGameStarted, seconds])

  return { seconds, minutes }
}
