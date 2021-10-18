import React, {useState} from 'react';
import {CARDS_IMAGES} from "const";
import Card from "components/Cards/Card";
import {useDispatch, useSelector} from "react-redux";
import {gameStateSelector} from "redux/selectors";
import {startGame} from "redux/appSlice";

const CardsContainer = () => {

  const [openCards, setOpenCards] = useState<HTMLElement[]>([])
  const [correct, setCorrect] = useState(0)
  const gameState = useSelector(gameStateSelector)
  const dispatch = useDispatch()

  function shuffle(array: string[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const cardsArray = shuffle(CARDS_IMAGES.concat(CARDS_IMAGES));

  const cardsList = cardsArray.map((cardImage) =>
    <Card cardImage={cardImage} clickHandler={clickHandler} key={cardImage + Math.random()}/>
  )


  const clickHandler = (event: React.MouseEvent<HTMLElement>) => {
    const card = event.currentTarget
console.log(openCards)
    if (gameState.isGameStarted){
      dispatch(startGame())
      setOpenCards((openCards)=>openCards.concat(card))
    }else {
      if (!card.classList.contains('disabled')) {
        if (openCards.length === 2) {
          if (openCards[0].dataset.img == openCards[1].dataset.img) {
            correctHandler()
          } else {
            wrongHandler()
          }
        } else {
          card.classList.add('disabled');
        }
      }
    }
  }

  function correctHandler() {
    setCorrect((correct)=>correct+1)

    openCards[0].classList.add('correct');
    openCards[0].classList.add('disabled');
    openCards[1].classList.add('correct');
    openCards[1].classList.add('disabled');

    setOpenCards([])
  }

  function wrongHandler() {

    openCards[0].classList.add('notcorrect');
    openCards[1].classList.add('notcorrect');

    setTimeout(() => {

      openCards[0].classList.remove('disabled');
      openCards[1].classList.remove('disabled');

      setOpenCards([])

    }, 1100);
  }

  return (
    <div className={"CardsContainer"}>
      {cardsList}
    </div>
  );
};

export default CardsContainer;
