import { shuffleArray, sleep, printDivider } from './helper';

type Suit = 'club' | 'diamonds' | 'hearts' | 'spades';
const HALF_DECK_SIZE = 26;

const ranks = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"];
const suits: Suit[] = ["club", "diamonds", "hearts", "spades"];

const suitsSymbolMap: Record<Suit, string> = {
    "club": '♣',
    "diamonds": '♦',
    "hearts": '♥',
    "spades": '♠',
}

class Deck {
    cards: string[];
    constructor() {
        this.cards = ranks.reduce<string[]>((res, rank) => res.concat(suits.map(suit => `${rank}-${suit}`)), []);
    }
    getShuffledDeck(): string[] {
        return shuffleArray(this.cards); // Get the shuffled deck
    }
}

class Game {
    player1Deck: string[];
    player2Deck: string[];
    player1Points: number;
    player2Points: number;

    constructor() {
        const deck = new Deck();
        const shuffledDeck = deck.getShuffledDeck();
        this.player1Deck = shuffledDeck.slice(0, HALF_DECK_SIZE);
        this.player2Deck = shuffledDeck.slice(HALF_DECK_SIZE);
        this.player2Deck = shuffledDeck.slice(HALF_DECK_SIZE);
        this.player1Points = 0;
        this.player2Points = 0;
    }

    private findRoundWinner(player1Card: string, player2Card: string) {
        const [player1Rank, player1Suit] = player1Card.split('-');
        const [player2Rank, player2Suit] = player2Card.split('-');
        printDivider();
        console.log(`Player 1 draws - ${player1Rank}${suitsSymbolMap[player1Suit as Suit]}`);
        console.log(`Player 2 draws - ${player2Rank}${suitsSymbolMap[player2Suit as Suit]}`);
        const player1RankIndex = ranks.indexOf(player1Rank);
        const player2RankIndex = ranks.indexOf(player2Rank);
        if (player1RankIndex > player2RankIndex) {
            console.log("Player 1 Wins this round!");
            this.player1Points++;
        } else if (player2RankIndex > player1RankIndex) {
            console.log("Player 2 Wins this round!");
            this.player2Points++;
        } else {
            console.log("Round draw!")
        }
        printDivider();
    }

    private findGameWinner() {
        console.log(`🚀 Player 1 Score: ${this.player1Points}`)
        console.log(`🚀 Player 2 Score: ${this.player2Points}`)
        if (this.player1Points > this.player2Points) {
            console.log("Player 1 Wins the game!");
        } else if (this.player2Points > this.player1Points) {
            console.log("Player 2 Wins the game!");
        } else {
            console.log("Game Draw!");0
        }
    }

    async play() {
        console.log("Game Begins!");
        console.log("Player 1 - Deck: ", this.player1Deck);
        console.log("Player 2 - Deck: ", this.player2Deck);
        for (let i = 0; i < HALF_DECK_SIZE; i++) {
            console.log(`Round ${i + 1}: `);
            const player1Card = this.player1Deck.pop();
            const player2Card = this.player2Deck.pop();
            if (player1Card && player2Card) {
                this.findRoundWinner(player1Card, player2Card)
                await sleep(1000); // sleep for 1 seconds
            }
        }
        this.findGameWinner();
    }
}

const game = new Game();

game.play().then(() => {
    console.log("Game Over!");
});