import { memo } from 'react'
import { CARDS_IMAGES } from 'shared/constants'
import { shuffle } from 'shared/lib/shuffle'
import Card from './Card'
import styles from './styles.module.scss'

const CardsList = () => {
  const cardsArray = shuffle(
    CARDS_IMAGES.concat(CARDS_IMAGES)
  )
  const cardsList = cardsArray.map(
    (cardImage) => (
      <Card
        cardImage={cardImage}
        key={cardImage + Math.random()}
      />
    )
  )

  return (
    <div className={styles.cardsList}>
      {cardsList}
    </div>
  )
}

export default memo(CardsList)
