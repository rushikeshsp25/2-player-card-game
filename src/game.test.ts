
import { describe, expect, test } from '@jest/globals';
import { shuffleArray } from './helper';
import { Game } from './game';

describe('helper module tests', () => {
    test('shuffleArray function should return a shuffled array', () => {
        const testArr = [1, 2, 3, 4, 5, 6, 7];
        const resArr = shuffleArray(testArr);
        expect(resArr).toHaveLength(testArr.length);
        expect(testArr.join()).not.toEqual(resArr.join());
    });
});

describe('Game class tests', () => {
    test('findRoundWinner should find the correct round winner', () => {
        const game = new Game();
        expect(game.findRoundWinner('2-club', '3-club')).toBe('player2');
    });
});