import React from "react";
import LevelHeader from "./components/LevelHeader";
import LevelTable from "./components/LevelTable";
import LevelSupport from "./components/LevelSupport";

import {LEVEL_SUPPORT_ITEMS, LEVEL_TABLE_ITEMS} from "./constants";
import styles from "./styles.module.scss";

const Level = () => {
    return (
        <div className={styles.levelContainer}>
            <LevelHeader />
            <LevelTable tableItems={LEVEL_TABLE_ITEMS} />
            <LevelSupport supportItems={LEVEL_SUPPORT_ITEMS} />
        </div>
    );
}

export default Level;