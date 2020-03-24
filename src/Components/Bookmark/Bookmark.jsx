import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';

import styles from './styles.module.css';


export const Bookmark = ({ icon = faBookmark, text, link }) => (
    <a target="_empty" href={link} className={styles.bookmark}>
        <FontAwesomeIcon icon={icon} /><span>{text}{text && ' ('}{link}{text && ')'}</span>
    </a>
);
