import React, {createContext, useReducer} from 'react';
import './App.css';
import GameScreen from "./screens/GameScreen";
import GameStateReducer from "./reducers/GameStateReducer";
import BingoMatrixGenerator from "./supporters/BingoMatrixGenerator";
import StateInterface from "./interfaces/StateInterface";

const initialState: StateInterface = {matrix: [], hasWon: false, funQuotes: ''};

export const GameContext = createContext<{state: StateInterface, dispatch: React.Dispatch<any>}>({
  state: initialState,
  dispatch: () => null
});

function App() {
  const [state, dispatch] = useReducer(GameStateReducer, BingoMatrixGenerator());
  return (
    <div className="App">
      <header className="App-header">
        <GameContext.Provider value={{state, dispatch}}>
          <GameScreen/>
        </GameContext.Provider>
      </header>
    </div>
  );
}

export default App;
