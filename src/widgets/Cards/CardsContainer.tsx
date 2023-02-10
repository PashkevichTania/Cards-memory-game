import { memo } from 'react'
import { useCardsContainer } from 'widgets/Cards/model/useCardsContainer'
import CardsList from './CardsList'
import styles from './styles.module.scss'

const CardsContainer = () => {
  const { clickHandler } = useCardsContainer()
  return (
    <div className={styles.cardsContainer} onClick={clickHandler}>
      <CardsList />
    </div>
  )
}

export default memo(CardsContainer)
