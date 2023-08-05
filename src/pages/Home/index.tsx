import React from "react";
import HomeHeader from "./components/HomeHeader";
import HomeCards from "./components/HomeCards";

import {HOME_CARDS} from "./constants";
import styles from "./styles.module.scss";

const Home = () => {
    return (
        <div
            className={styles.home}
            id="home"
        >
            <HomeHeader />
            <HomeCards cards={HOME_CARDS} />
            <div className={styles.homeBgRound} />
        </div>
    );
}

export default Home;