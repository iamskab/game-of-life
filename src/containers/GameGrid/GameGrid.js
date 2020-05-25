import React, { useState, useEffect, useRef } from 'react';
import './GameGrid.css';
import GridTile from '../../components/GridTile/GridTile';

function GameGrid(props) {
    const [displayGrid, setDisplayGrid] = useState([]);
    const container = useRef(null);

    useEffect(() => {
        let counter = -1;
        const flatGrid = props.grid.flat();
        // console.log(flatGrid)
        setDisplayGrid(flatGrid.map(item => {
            counter++;
            return (
                <GridTile
                    key={counter}
                    live={item === 2}
                    active={item === 1}
                />
            );
        }));
        // props.addHistory(props.createHistory(flatGrid));
    }, [ props.grid ]);

    useEffect(() => {
        const width = window.getComputedStyle(container.current).getPropertyValue('width');
        container.current.style.height = (Number(width.replace('px', '')) * (450/690)) + 'px';
        // container.current.style.transform = `scaley(${Number(width.replace('px', '')) / 690})`;
      
    }, [window.innerWidth]);

    return (
        <div 
            id="game-grid"
            ref={container}
        >
            {displayGrid}
        </div>
    );
}

export default GameGrid;
