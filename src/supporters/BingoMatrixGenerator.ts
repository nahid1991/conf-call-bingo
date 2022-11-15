import Bingos from "../utils/Bingos";
import StateInterface from "../interfaces/StateInterface";
import WinConditionInterface from "../interfaces/WinConditionInterface";

export default function BingoMatrixGenerator(): StateInterface {
  const initialState: StateInterface = { matrix: [], hasWon: false, funQuotes: 'You play, I will do the thinking! 🙃'};
  const randomizedBingos: string[] = randomizeBingos(Bingos);
  const gameMatrix: WinConditionInterface[][] = [];
  let counter: number = 0;
  for (let i = 0; i < 5; i++) {
    const row: WinConditionInterface[] = [];
    for (let j = 0; j < 5; j++) {
      const newWinCondition: WinConditionInterface = {
        string: randomizedBingos[counter],
        isSelected: false
      };
      if ((i === 0 || i === 4) || (j === 0 || j === 4)) {
        row.push(newWinCondition);
      } else {
        row.push(newWinCondition);
      }
      counter++;
    }
    gameMatrix.push(row);
  }
  initialState.matrix = gameMatrix;
  return initialState;
}

const randomizeBingos = (bingos: string[]): string[] => {
  const shuffledBingos: string[] = bingos;
  let currentLength: number = bingos.length;
  while (--currentLength > 0) {
    const randomIndex: number = Math.floor(Math.random() * (currentLength + 1));
    swap(randomIndex, currentLength, shuffledBingos);
  }
  return shuffledBingos;
}

const swap = (i: number, j: number, array: any[]): void => {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}
