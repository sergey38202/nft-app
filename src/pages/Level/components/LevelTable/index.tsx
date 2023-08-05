import React from "react";

import {TLevelTableProps} from "./types";
import styles from "./styles.module.scss";

const LevelTable = ({ tableItems }: TLevelTableProps) => {
    return (
        <div className={styles.levelTableContainer}>
            <div className={styles.levelTableTitleWrapper}>
                {tableItems.map(item => (
                    <div key={item.id} className={styles.levelTableTitle}>
                        {item.title}
                    </div>
                ))}
            </div>
            {tableItems[0].items.map((_, index) => (
                <div key={index} className={styles.levelTableRowContainer}>
                    {tableItems.map(item => (
                        <div key={item.id + index} className={styles.levelTableItem}>
                            {item.id === 2 ? (
                                <img
                                    src={item.items[index]}
                                    alt={item.title}
                                    width={54}
                                    height={54}
                                />
                            ) : (
                                <div className={styles.levelTableRowItem}>
                                    { item.items[index] }
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default LevelTable;