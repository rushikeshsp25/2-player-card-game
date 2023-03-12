import { Game } from "./game";

const game = new Game();

game.play().then(() => {
    console.log("Game Over!");
});