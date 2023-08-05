import React from "react";

import {TTLevelSupportProps} from "./types";
import styles from "./styles.module.scss";

const LevelSupport = ({ supportItems }: TTLevelSupportProps) => {
    return (
        <div className={styles.levelSupportContianer}>
            { supportItems.map((supportItem) => (
                <div
                    className={styles.levelSupportItem}
                    key={supportItem.id}
                >
                    <img
                        src={supportItem.image}
                        alt="support"
                        width={72}
                        height={72}
                    />
                </div>
            )) }
        </div>
    );
}

export default LevelSupport;