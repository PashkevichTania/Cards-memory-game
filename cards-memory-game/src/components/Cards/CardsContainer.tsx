import React, {memo, useEffect, useRef} from 'react';
import CardsList from "components/Cards/CardsList";
import {useDispatch} from "react-redux";
import {finishGame} from "redux/appSlice";

const CardsContainer = () => {

  const dispatch = useDispatch()
  let openCards = useRef<HTMLElement[]>([]);
  let correct = useRef<number>(0);


  const timerRef = useRef<number>();

  useEffect(() => {

    return () => clearTimeout(timerRef.current);
  }, []);


  const clickHandler = (event: any) => {
    if (event.target.classList.contains('cardImage')) {
      const card = event.target.offsetParent.offsetParent
      if (!card.classList.contains('active')) {
        card.classList.add('active');
        openCards.current.push(card)
        if (openCards.current.length === 2) {
          if (openCards.current[0].dataset.img == openCards.current[1].dataset.img) {
            correctHandler()
            if (correct.current=== 8){
              dispatch(finishGame())
            }
          } else {
            wrongHandler()
          }
        }
      }
    }
  }


  function correctHandler() {
    correct.current = correct.current + 1
    openCards.current[0].classList.add('correct');
    openCards.current[1].classList.add('correct');
    openCards.current = []
  }

  function wrongHandler() {
    openCards.current[0].classList.add('wrong');
    openCards.current[1].classList.add('wrong');
    timerRef.current = setTimeout(() => {
      openCards.current[0].classList.remove('active');
      openCards.current[1].classList.remove('active');
      openCards.current[0].classList.remove('wrong');
      openCards.current[1].classList.remove('wrong');
      openCards.current = []
    }, 1100);
  }


  return (
    <div className={"CardsContainer"} onClick={clickHandler}>
      <CardsList/>
    </div>
  );
};

export default memo(CardsContainer);
