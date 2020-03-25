import React from 'react';

export const BrandHighlight = ({ override }) => (
    <span style={{ fontWeight: 500, color: '#0097e1' }}>{override || 'blueprints-ui'}</span>
);