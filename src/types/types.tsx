export {};

export type Player = 'green' | 'orange';
export type CellValue = Player | null;
type GameStatus = 'playing' | 'win' | 'draw';

interface Position {
    row: number,
    column: number
}

interface GameState {
    board: CellValue[][];
    currentPlayer: Player;
    gameStatus: GameStatus;
    winningCells: Position[];
}