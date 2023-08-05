import React from "react";

import {TAboutHeaderProps} from "./types";
import styles from "./styles.module.scss";

const AboutHeader = ({ steps }: TAboutHeaderProps) => {
    return (
        <div className={styles.aboutHeaderContainer}>
            <div className={styles.aboutHeaderTitle}>Earn while walking</div>
            <div className={styles.aboutHeaderStepsContainer}>
                { steps.map((step) => (
                    <div className={styles.aboutHeaderStep}>
                        <img
                            src={step.image}
                            alt={step.title}
                            width={235}
                            height={235}
                            className={styles.aboutHeaderStepImage}
                        />
                        <div className={styles.aboutHeaderStepTitle}>{ step.title }</div>
                    </div>
                )) }
            </div>
        </div>
    );
}

export default AboutHeader;