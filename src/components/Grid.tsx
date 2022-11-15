import React, {FC, useContext, useState} from 'react';
import './Grid.css';
import GridPropsInterface from "../interfaces/GridPropsInterface";
import {GameContext} from "../App";

const Grid: FC<GridPropsInterface> = ({bingo, i, j}): JSX.Element => {
  const {state, dispatch} = useContext(GameContext);
  const [beingHovered, setBeingHovered] = useState(false);
  const selected = state.matrix[i][j].isSelected;
  const backgroundImage = {
    backgroundImage: "url(/assets/stamp.png)",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  };
  const handleSelectionAndCheckWinCondition = () => {
    if(!state.hasWon) dispatch({type: "selected", i: i, j: j, selected: true});
  }
  return (
    <div className="Grid"
         onMouseEnter={() => setBeingHovered(true)}
         onMouseLeave={() => setBeingHovered(false)}
         onClick={() => handleSelectionAndCheckWinCondition()}
         style={((beingHovered && !state.hasWon) || selected) ? {
           ...backgroundImage, padding: (beingHovered && !selected && !state.hasWon) ? "12px 0 12px 0"
             : "0 0 0 0"
         } : {}}
    >
      <div>
        <span>{bingo.string}</span>
      </div>
    </div>
  );
}

export default Grid;
