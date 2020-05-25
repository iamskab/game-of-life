import React from 'react';
import './GridTile.css';

function GridTile(props) { 
    return (
        <div className={props.live ? 'tile live': 'tile'} />
    ) 
};

export default GridTile;
