import React from 'react';
import Header from "components/Header/Header";
import CardsContainer from "components/Cards/CardsContainer";
import Timer from "components/Timer/Timer";
import Footer from "components/Footer/Footer";

const Home = () => {
    return (
        <main className={"Home"}>
            <Header />
            <Timer />
            <CardsContainer />
            <Footer />
        </main>
    );
};

export default Home;
