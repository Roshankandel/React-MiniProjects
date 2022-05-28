import React, { useState } from 'react';
import Square from './Square';
import EndGame from "../Components/EndGame";
const Initial = "";
const X_PLAYER = "X";
const O_PLAYER = "O";
const winCombination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];
const Tictactoe = () => {
    const [grid, setGrid] = useState(Array(9).fill(Initial));
    //it returns array with nine empty elements
    const [player, setPlayer] = useState(false);
    const [gameFinished, setGameFinished] = useState(false);
    const [draw, setDraw] = useState(false);
    const [winCount, setwinCount] = useState({ X: 0, O: 0 });


    const isGameOver = () => {
        if (!gameFinished) {
            //Check if X wins the game
            for (let i = 0; i < winCombination.length; i++) {
                if (
                    grid[winCombination[i][0]] === X_PLAYER &&
                    grid[winCombination[i][1]] === X_PLAYER &&
                    grid[winCombination[i][2]] === X_PLAYER
                ) {
                    setGameFinished(true);
                    console.log("X Won");
                    setwinCount({ ...winCount, X: winCount.X + 1 });
                    return;
                }
            }
            //Check if O wins the game
            for (let i = 0; i < winCombination.length; i++) {
                if (
                    grid[winCombination[i][0]] === O_PLAYER &&
                    grid[winCombination[i][1]] === O_PLAYER &&
                    grid[winCombination[i][2]] === O_PLAYER
                ) {
                    setGameFinished(true);
                    console.log(" O Won");
                    setwinCount({ ...winCount, O: winCount.O + 1 });
                    return;
                }
            }
            // if the game is drawn
            if (!grid.includes(Initial)) {
                setDraw(true);
                setGameFinished(true);
                console.log("DRAW");
            }
        }
    }


    function restartGame() {
        setGrid(Array(9).fill(Initial));
        setGameFinished(false);
        setDraw(false);
    }

    function clearHistory() {

        setwinCount({ X: 0, O: 0 });
        restartGame();
    }

    isGameOver();
    function handleClick(id) {
        setGrid(
            grid.map((item, index) => {
                if (index === id) {
                    if (player) {
                        return X_PLAYER;
                    } else {
                        return O_PLAYER;
                    }
                } else {
                    return item;
                }
            })
        );
        setPlayer(!player);
    }
    return (
        <div>
            <span className="win-history">
                X's WINS: {winCount.X}
                <br />
                O's WINS: {winCount.O}
            </span>
            {gameFinished && (
                <EndGame
                    winCount={winCount}
                    restartGame={restartGame}
                    player={player}
                    draw={draw}
                    clearHistory={clearHistory}
                />
            )}
            <Square clickedArray={grid} handleClick={handleClick} />
        </div>
    )
}

export default Tictactoe;