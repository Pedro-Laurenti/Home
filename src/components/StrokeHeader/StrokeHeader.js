import React from 'react';
import styles from './StrokeHeader.module.scss';

const StrokeHeader = ({ children }) => {
    return (
    <div className={styles['stroke-header-wrapper']}>
        <div className={styles['stroke-1']}></div>
        <div className={styles['stroke-2']}></div>
        <div className={styles['stroke-3']}></div>
        <div className={styles['stroke-4']}></div>
    </div>
    );
};

export default StrokeHeader ;