import React from 'react';
import styles from './styles.module.css';

export const BrandHighlight = () => (
    <span style={{ fontWeight: 500, color: '#0097e1' }}>BluePrints-UI</span>
);

export const Subtitle = ({ text }) => (
    <span className={styles.subtitle}>{ text }</span>
)