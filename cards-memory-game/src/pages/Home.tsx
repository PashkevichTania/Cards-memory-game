import React from 'react';
import Header from "components/Header/Header";
import CardsContainer from "components/Cards/CardsContainer";
import Timer from "components/Timer/Timer";

const Home = () => {
    return (
        <main className={"Home"}>
            <Header />
            <Timer />
            <CardsContainer />
        </main>
    );
};

export default Home;
