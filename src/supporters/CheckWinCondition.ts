import WinConditionInterface from "../interfaces/WinConditionInterface";

export default function CheckWinCondition(matrix: WinConditionInterface[][]): boolean {
  return checkFromTopToBottom(matrix) || checkFromLeftToRight(matrix) || checkDiagonally(matrix);
}

const checkFromTopToBottom = (matrix: WinConditionInterface[][]): boolean => {
  for(let i = 0; i < 5; i++) {
    if(
      matrix[i][0].isSelected &&
      matrix[i][1].isSelected &&
      matrix[i][2].isSelected &&
      matrix[i][3].isSelected &&
      matrix[i][4].isSelected
    ) {
      return true;
    }
  }
  return false;
}

const checkFromLeftToRight = (matrix: WinConditionInterface[][]): boolean => {
  for(let i = 0; i < 5; i++) {
    if(
      matrix[0][i].isSelected &&
      matrix[1][i].isSelected &&
      matrix[2][i].isSelected &&
      matrix[3][i].isSelected &&
      matrix[4][i].isSelected
    ) {
      return true;
    }
  }
  return false;
}

const checkDiagonally = (matrix: WinConditionInterface[][]): boolean => {
  if(
    matrix[0][4].isSelected &&
    matrix[1][3].isSelected &&
    matrix[2][2].isSelected &&
    matrix[3][1].isSelected &&
    matrix[4][0].isSelected
  ) {
    return true;
  }

  if(
    matrix[0][0].isSelected &&
    matrix[1][1].isSelected &&
    matrix[2][2].isSelected &&
    matrix[3][3].isSelected &&
    matrix[4][4].isSelected
  ) {
    return true;
  }
  return false;
}
