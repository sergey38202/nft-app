import React from "react";
import PlayStoreIcon from "../../../../assets/playstore-svgrepo-com.svg";
import AppStore from "../../../../assets/apple-173-svgrepo-com.svg";

import styles from "./styles.module.scss";

const HomeHeader = () => {
    return (
        <div className={styles.homeHeader}>
            <div className={styles.homeHeaderTitle}>Earn to move</div>
            <div className={styles.homeHeaderDescription}>
                Ready to energize your life and turn it into earnings?
                With Move to Earn, your steps hold real value. Simply walk,
                run, or exercise to earn. Each step matters.
            </div>
            <div className={styles.homeHeaderBtnWrapper}>
                <button className={styles.homeHeaderBtn1}>
                    <img
                        width={31}
                        height={38}
                        src={PlayStoreIcon}
                        alt="play store"
                    />
                    <span>Play Store</span>
                </button>
                <button className={styles.homeHeaderBtn2}>
                    <img
                        width={31}
                        height={38}
                        src={AppStore}
                        alt="app store"
                    />
                    <span>App Store</span>
                </button>
            </div>
        </div>
    );
}

export default HomeHeader;