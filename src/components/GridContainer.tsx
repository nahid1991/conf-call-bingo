import React, {FC, useContext} from 'react';
import './GridContainer.css';
import Grid from "./Grid";
import GridContainerPropsInterface from "../interfaces/GridContainerPropsInterface";
import {GameContext} from "../App";

const GridContainer: FC<GridContainerPropsInterface> = ({rowIndex}): JSX.Element => {
  const {state} = useContext(GameContext)
  const populateCols = (): JSX.Element[] => {
    const cols: JSX.Element[] = [];
    for (let j = 0; j < 5; j++) {
      cols.push(<Grid key={rowIndex + j} bingo={state.matrix[rowIndex][j]} i={rowIndex} j={j}/>);
    }
    return cols;
  }

  return (<div className="GridContainer">
    {populateCols()}
    {/*<Grid />*/}
  </div>);
}

export default GridContainer;
