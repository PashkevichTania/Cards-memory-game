import {
  useGameStateStore,
  selectors,
  GameState
} from 'entities/GameState'
import {
  useScoreStore,
  selectors as scoreSelectors
} from 'entities/score'
import {
  useTimerStore,
  selectors as timerSelectors
} from 'entities/timer'
import { useEffect } from 'react'
import { notify } from 'shared/lib/notify'

export const useHome = (): {
  startGameHandler: () => void
  gameState: GameState
} => {
  const gameState = useGameStateStore(
    selectors.gameState
  )
  const startGame = useGameStateStore(
    selectors.startGame
  )
  const score = useScoreStore(
    scoreSelectors.score
  )
  const time = useTimerStore(timerSelectors.time)

  useEffect(() => {
    if (score) {
      notify(
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end'
          }}
        >
          <p>🦄 Congrats you win!</p>
          <p>
            {' '}
            Your time:{' '}
            <span style={{ color: '#b81640' }}>
              {time}
            </span>
          </p>
          <p>
            Your score:{' '}
            <span style={{ color: '#b81640' }}>
              {score}
            </span>
          </p>
        </div>
      )
    }
  }, [score])

  const startGameHandler = () => {
    startGame()
  }

  return { startGameHandler, gameState }
}
