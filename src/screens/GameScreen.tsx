import React, {useContext, useEffect, useState} from 'react';
import GridContainer from "../components/GridContainer";
import './GameScreen.css';
import {GameContext} from "../App";

function GameScreen(): JSX.Element {
  const {state} = useContext(GameContext);
  const populateScreen = (): JSX.Element[] => {
    const rows: JSX.Element[] = [];
    for (let i = 0; i < 5; i++) {
      rows.push(<GridContainer rowIndex={i} key={i}/>)
    }
    return rows;
  }
  const animations = {
    animationName: "colors",
    animationIterationCount: "infinite",
    animationDuration: '1s'
  }
  return (
    <div>
      <div className="GameScreen">
        <div className="WinAnnounce" style={state.hasWon ? {...animations}: {}}>
          <h3 style={{display: state.hasWon ? "none" : "block"}}>{state.funQuotes}</h3>
          <h3 style={{display: state.hasWon ? "block" : "none"}}>Congratulations! </h3>
          <p style={{display: state.hasWon ? "block" : "none"}}>You've won Conf call bingo.</p>
          <p style={{display: state.hasWon ? "block" : "none"}}>&#128526; &#127942; &#127870; &#128526; &nbsp;<a href="/">Play Again!</a></p>
        </div>
        {populateScreen()}
      </div>
    </div>

  );
}

export default GameScreen;
