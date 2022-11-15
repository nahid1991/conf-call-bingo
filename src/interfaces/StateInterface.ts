import WinConditionInterface from "./WinConditionInterface";

export default interface StateInterface {
  matrix: WinConditionInterface[][];
  hasWon: boolean;
  funQuotes: string;
}
