import WinConditionActionInterface from "../interfaces/WinConditionActionInterface";
import StateInterface from "../interfaces/StateInterface";
import CheckWinCondition from "../supporters/CheckWinCondition";
import FunQuotes from "../utils/FunQuotes";

export default function GameStateReducer(state: StateInterface, action: WinConditionActionInterface) {
  let newState = {...state};
  switch (action.type) {
    case "selected":
      newState.matrix[action.i!][action.j!].isSelected = true;
      if (newState.matrix[action.i!][action.j!].winCondition) {
        if(CheckWinCondition(newState.matrix)) {
          newState.hasWon = true;
        }
      }
      newState.funQuotes=FunQuotes[Math.floor((Math.random() * (FunQuotes.length - 1 + 1)))]
      return newState;
    default:
      newState = state;
      newState.hasWon = false;
      return newState;
  }
}
