import React from 'react';


export const Spacer = ({ spacing = 1, horizontal = false, inlineBlock = false }) => (
    <span style={{ 
        display: inlineBlock 
            ? 'inline-block' 
            : 'block',
        width: horizontal 
            ? spacing + 'rem' 
            : 0,
        height: horizontal
            ? 0
            : spacing + 'rem'
     }}></span>
);
