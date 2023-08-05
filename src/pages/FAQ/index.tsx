import React from "react";
import {Accordion, AccordionDetails, AccordionSummary} from "@mui/material";
import AccordionIcon from "../../assets/accordion-arrow.svg";

import styles from "./styles.module.scss";
import {TFaqProps} from "./types";

const FAQ = ({ faqItems }: TFaqProps) => {
    return (
        <div className={styles.faqContainer}>
            <div className={styles.faqTitle}>FAQ</div>
            { faqItems.map((item) => (
                <React.Fragment key={item.id}>
                    <Accordion className={styles.faqAccordion}>
                        <AccordionSummary
                            expandIcon={<img src={AccordionIcon} alt={"Expand"} />}
                            id="panel1a-header"
                        >
                            <div className={styles.faqAccordionTitle}>{ item.title }</div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className={styles.faqAccordionDescription}>
                                { item.description }
                            </div>
                        </AccordionDetails>
                    </Accordion>
                </React.Fragment>
            )) }
        </div>
    );
}

export default FAQ;