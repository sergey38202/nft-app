import React from "react";
import RedLevel from "../../../../assets/red-level.svg";
import YellowLevel from "../../../../assets/yellow-level.svg";
import BlueLevel from "../../../../assets/blue-level.svg";
import GreenLevel from "../../../../assets/green-level.svg";

import styles from "./styles.module.scss";

const LevelHeader = () => {
    return (
        <div
            className={styles.levelHeaderContainer}
            id="features"
        >
            <div className={styles.levelHeaderTitle}>Rarity Level</div>
            <div className={styles.levelHeaderDescription}>
                More information about the rarity levels of NFTs
            </div>
            <div className={styles.levelHeaderRounds}>
                <img src={RedLevel} alt="red round" />
                <img src={YellowLevel} alt="yellow round" />
                <img src={BlueLevel} alt="blue round" />
                <img src={GreenLevel} alt="green round" />
            </div>
        </div>
    );
}

export default LevelHeader;