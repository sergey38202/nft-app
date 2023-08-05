import React from "react";

import {THomeCardProps} from "./types";
import styles from "./styles.module.scss";

const HomeCards = ({ cards }: THomeCardProps) => {
    return (
        <div className={styles.homeCardsContainer}>
            { cards.map((card) => {
                const {
                    icon,
                    title,
                    param,
                    name,
                    titleColor
                } = card;

                return (
                    (
                        <div className={styles.homeCard}>
                            <div className={styles.homeCardImageWrapper}>
                                <img src={icon} alt={param} />
                            </div>
                            <div
                                className={styles.homeCardTitle}
                                style={{ background: `linear-gradient(${titleColor})` }}
                            >
                                { title }
                            </div>
                            <div className={styles.homeCardParam}>{ param }</div>
                            <div className={styles.homeCardName}>{ name }</div>
                        </div>
                    )
                )
            }) }
        </div>
    )
}

export default HomeCards;