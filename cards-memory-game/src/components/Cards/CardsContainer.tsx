import React, {useEffect, useRef} from 'react';
import CardsList from "components/Cards/CardsList";
import {useDispatch} from "react-redux";
import {finishGame} from "redux/appSlice";

const CardsContainer = () => {

  const dispatch = useDispatch();
  let openCards = useRef<HTMLElement[]>([]);
  let correct = useRef<number>(0);
  const timerRef = useRef<number>();
  const disableRef = useRef<boolean>(false);

  useEffect(() => {

    return () => clearTimeout(timerRef.current);
  }, []);


  const clickHandler = (event: React.MouseEvent<HTMLElement>) => {
    if (disableRef.current) {
      return
    }
    const target = event.target as HTMLElement;
    if (target.classList.contains('cardImage') && !target.classList.contains('active')) {
      const card = target.closest('.Card') as HTMLElement;
      card!.classList.add('active');
      openCards.current.push(card);
      if (openCards.current.length === 2) {
        disableRef.current = true;
        if (openCards.current[0].dataset.img == openCards.current[1].dataset.img) {
          correctHandler();
          (correct.current === 8)? dispatch(finishGame()): null;
        } else {
          wrongHandler()
        }
      }
    }
  }


  function correctHandler() {
    correct.current = correct.current + 1;
    openCards.current[0].classList.add('correct');
    openCards.current[1].classList.add('correct');
    openCards.current = [];
    disableRef.current = false;
    let audioObj = new Audio(`/audio/correct.mp3`);
    audioObj.play()
  }

  function wrongHandler() {
    openCards.current[0].classList.add('wrong');
    openCards.current[1].classList.add('wrong');
    timerRef.current = setTimeout(() => {
      openCards.current[0].classList.remove('active');
      openCards.current[1].classList.remove('active');
      openCards.current[0].classList.remove('wrong');
      openCards.current[1].classList.remove('wrong');
      openCards.current = [];
      disableRef.current = false;
      let audioObj = new Audio(`/audio/error.mp3`);
      audioObj.play()
    }, 1100);
  }


  return (
      <div className={"CardsContainer"} onClick={clickHandler}>
        <CardsList/>
      </div>
  );
};

export default CardsContainer;
