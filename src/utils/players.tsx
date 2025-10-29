import { Player } from "../types/types";

/**
 * Функции для смены игрока
 * @param {Player} currentPlayer - текущий игрок
 * @returns {Player} противоположный игрок
 */
export const getNextPlayer = (currentPlayer: Player): Player => {
    return currentPlayer === 'green' ? 'orange' : 'green';
};