import React, { useState } from 'react';
import styles from './Accordion.module.scss';

const Accordion = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={styles.AccordionContainer}>
            <div className={styles.accordionItem}>
                <button className={`${styles.accordionHeader} ${isOpen ? styles.active : ''}`} onClick={toggleAccordion}>
                    FAQ Question 1 <span className={styles.iconAccordion}>{isOpen ? '-' : '+'}</span>
                </button>
                <div className={`${styles.accordionContent} ${isOpen ? styles.open : ''}`}>
                    <p>Answer to question 1...</p>
                </div>
            </div>
        </div>
    );
}

export default Accordion;