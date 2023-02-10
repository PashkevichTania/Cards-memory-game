import { useHome } from 'pages/home/model/useHome'
import CardsContainer from 'widgets/Cards/CardsContainer'
import Footer from 'widgets/Footer'
import Header from 'widgets/Header'
import Timer from 'widgets/Timer'
import styles from "./styles.module.scss";


const Home = () => {
 const {startGameHandler, gameState} = useHome()
  return (
    <div className={styles.Home}>
      <Header/>
      <Timer/>
      {gameState.isGameStarted ? <CardsContainer/> :
        <button className={styles.startBtn} onClick={startGameHandler}>start</button>}
      <Footer/>
    </div>
  );
};

export default Home;
