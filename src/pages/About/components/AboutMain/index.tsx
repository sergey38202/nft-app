import React from "react";

import styles from "./styles.module.scss";

const AboutMain = () => {
    return (
        <div className={styles.aboutMainContainer}>
            <div className={styles.aboutMainAppWrapper1}>
                <div className={styles.aboutMainInfoWrapper}>
                    <div className={styles.aboutMainInfoTitle}>
                        Download BetterStep
                    </div>
                    <div className={styles.aboutMainInfoDescription}>
                        Start earning money by walking! Download our
                        app now and convert your steps into earnings
                        with our blockchain and cryptocurrency-based experience.
                    </div>
                </div>
                <div className={styles.aboutMainInfoNftCard} />
            </div>
            <div className={styles.aboutMainAppWrapper2}>
                <div className={styles.aboutMainInfoWrapper}>
                    <div className={styles.aboutMainInfoTitle}>
                        Walk, earn, and thrive
                    </div>
                    <div className={styles.aboutMainInfoDescription}>
                        The earned rewards are distributed equally in
                        $BTT and $BFF tokens. Our goal is to provide
                        users with a fun, rewarding, and innovative experience.
                        Discover our project now and turn your steps into earnings.
                    </div>
                    <a href="#" className={styles.aboutMainInfoLink}>Launch App</a>
                </div>
                <div className={`${styles.aboutMainInfoNftCard} ${styles.aboutMainInfoNftCard2}`} />
            </div>
        </div>
    );
}

export default AboutMain;