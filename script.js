let currentPlayer = 1;
let currentScore = 0;
let totalScore = [0, 0];

function rollDice(player) {
    let diceResult = Math.floor(Math.random() * 6) + 1;
    document.getElementById(`currentScore${player}`).textContent = diceResult;
    
    if (diceResult !== 1) {
        currentScore += diceResult;
        document.getElementById(`currentScore${player}`).textContent = currentScore;
    } else {
        currentScore = 0;
        document.getElementById(`currentScore${player}`).textContent = currentScore;
        switchPlayer();
    }
}

function hold(player) {
    totalScore[player - 1] += currentScore;
    document.getElementById(`totalScore${player}`).textContent = totalScore[player - 1];
    currentScore = 0;
    document.getElementById(`currentScore${player}`).textContent = currentScore;

    if (totalScore[player - 1] >= 30) {
        document.getElementById(`player${player}`).innerHTML += "<p>WINNER!</p>";
    }

    switchPlayer();
}

function switchPlayer() {
    currentScore = 0;
    document.getElementById(`currentScore${currentPlayer}`).textContent = currentScore;
    currentPlayer = (currentPlayer === 1) ? 2 : 1;
}

function newGame() {
    currentPlayer = 1;
    currentScore = 0;
    totalScore = [0, 0];

    document.getElementById('totalScore1').textContent = '0';
    document.getElementById('currentScore1').textContent = '0';
    document.getElementById('totalScore2').textContent = '0';
    document.getElementById('currentScore2').textContent = '0';

    document.getElementById('player1').innerHTML = '<h2>Player 1</h2><p>Total Score: <span id="totalScore1">0</span></p><p>Current Score: <span id="currentScore1">0</span></p><div class="buttons"><button id="roll1" onclick="rollDice(1)">Roll Dice</button><button id="hold1" onclick="hold(1)">Hold</button></div>';
    document.getElementById('player2').innerHTML = '<h2>Player 2</h2><p>Total Score: <span id="totalScore2">0</span></p><p>Current Score: <span id="currentScore2">0</span></p><div class="buttons"><button id="roll2" onclick="rollDice(2)">Roll Dice</button><button id="hold2" onclick="hold(2)">Hold</button></div>';
}

