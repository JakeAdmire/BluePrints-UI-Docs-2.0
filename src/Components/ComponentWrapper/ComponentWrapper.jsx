import React from 'react';
import styles from './styles.module.css';

export const ComponentWrapper = ({ extension = false, background, children }) => (
    <div   className={extension ? styles.wrapper + ' ' + styles.extensionWrapper : styles.wrapper}
            style={{ backgroundColor: background, borderColor: background}}>
        <div className={styles.wrapperBox}>
            { children }
        </div>
    </div>
);
