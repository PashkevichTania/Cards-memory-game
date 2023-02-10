import { useTimer } from './model/useTimer'
import styles from './styles.module.scss'

const Timer = () => {
  const { seconds, minutes } = useTimer()
  return (
    <div className={styles.Timer}>
      <div className={styles.minutes}>
        {`00${minutes}`.slice(-2)}
      </div>
      <div className={styles.doubleDot}> :</div>
      <div className={styles.seconds}>
        {`00${seconds}`.slice(-2)}
      </div>
    </div>
  )
}

export default Timer
