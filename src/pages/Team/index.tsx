import React from "react";

import {TTeamProps} from "./types";
import styles from "./styles.module.scss";

const Team = ({ team }: TTeamProps) => {
    return (
        <div
            className={styles.teamContainer}
            id="career"
        >
            <div className={styles.teamTitle}>Our team</div>
            <div className={styles.teamItemWrapper}>
                { team.map((item) => (
                    <div className={styles.teamItem} key={item.id}>
                        <div className={styles.teamItemImage} />
                        <div className={styles.teamItemTitle}>{ item.title }</div>
                        <div className={styles.teamItemPosition}>{ item.position }</div>
                    </div>
                )) }
            </div>
            <div className={styles.teamBg} />
        </div>
    );
}

export default Team;