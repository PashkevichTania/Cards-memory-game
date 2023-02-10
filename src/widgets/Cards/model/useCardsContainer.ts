import type React from 'react'
import { useEffect, useRef } from 'react'
import { selectors, useGameStateStore } from 'entities/GameState'
import styles from '../styles.module.scss'

export const useCardsContainer = (): {
  clickHandler: (event: React.MouseEvent<HTMLElement>) => void
} => {
  const finishGame = useGameStateStore(selectors.finishGame)
  const openCards = useRef<HTMLElement[]>([])
  const correct = useRef<number>(0)
  const timerRef = useRef<number>()
  const disableRef = useRef<boolean>(false)

  useEffect(() => () => clearTimeout(timerRef.current), [])

  const clickHandler = (event: React.MouseEvent<HTMLElement>) => {
    if (disableRef.current) {
      return
    }
    const target = event.target as HTMLElement
    if (target.classList.contains(styles.cardImage) && !target.classList.contains(styles.active)) {
      // TODO: why cant find closest by styles.card?
      const card = target.closest('[data-img]') as HTMLElement
      if (!card) return
      card.classList.add(styles.active)
      openCards.current.push(card)
      if (openCards.current.length === 2) {
        disableRef.current = true
        if (openCards.current[0].dataset.img == openCards.current[1].dataset.img) {
          correctHandler()
          correct.current === 8 ? finishGame() : null
        } else {
          wrongHandler()
        }
      }
    }
  }

  function correctHandler() {
    correct.current += 1
    openCards.current[0].classList.add(styles.correct)
    openCards.current[1].classList.add(styles.correct)
    openCards.current = []
    disableRef.current = false
    const audioObj = new Audio('/audio/correct.mp3')
    audioObj.play()
  }

  function wrongHandler() {
    openCards.current[0].classList.add(styles.wrong)
    openCards.current[1].classList.add(styles.wrong)
    timerRef.current = setTimeout(() => {
      openCards.current[0].classList.remove(styles.active)
      openCards.current[1].classList.remove(styles.active)
      openCards.current[0].classList.remove(styles.wrong)
      openCards.current[1].classList.remove(styles.wrong)
      openCards.current = []
      disableRef.current = false
      const audioObj = new Audio('/audio/error.mp3')
      audioObj.play()
    }, 1100)
  }

  return { clickHandler }
}
