import { CellValue } from "../types/types";

const ROWS = 6;
const COLUMNS = 7;
const WIN_LEGHT = 4;

/**
 * Создает пустую игровую доску
 * @returns {CellValue[][]} двумерный массив 6x7
 */
export const createEmptyBoard = (): CellValue[][] => {
    const board = Array(ROWS).fill(null).map(() => Array(COLUMNS).fill(null));
    console.log(board);
    return board
};