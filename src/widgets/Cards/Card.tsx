import { memo } from 'react'
import styles from './styles.module.scss'

const Card = ({ cardImage }: { cardImage: string }) => {
  return (
    <div className={styles.card} data-img={cardImage}>
      <div className={styles.front} id="cardFront">
        <img className={styles.cardImage} src={`/cardsImages/thumbnail.jpg`} alt={'thumbnail'} />
      </div>
      <div className={styles.back} id="cardBack">
        <img className={styles.cardImage} src={`/cardsImages/${cardImage}`} alt={cardImage} />
      </div>
    </div>
  )
}

export default memo(Card)
