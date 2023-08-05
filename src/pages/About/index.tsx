import React from "react";
import styles from "./styles.module.scss";
import AboutHeader from "./components/AboutHeader";
import {STEPS} from "./constants";
import AboutMain from "./components/AboutMain";

const About = () => {
    return (
        <div className={styles.aboutContainer}>
            <AboutHeader steps={STEPS} />
            <AboutMain />
        </div>
    );
}

export default About;