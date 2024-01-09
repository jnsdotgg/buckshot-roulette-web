
let player1Health;
let player2Health;
let turn
let blankShells;
let liveShells;

function setStatus(message) {
    document.getElementById("status").innerText = message;
    setTimeout(() => {
        document.getElementById("status").innerText = "";
    }, 2500);
}

function damage(player, amount) {
    if (player === "player1") {
        player1Health -= amount;
    }

    if (player === "player2") {
        player2Health -= amount;
    }
    renderHealth();
}

function shoot(player) {

    if (turn == 1) {

        if (player === "opponent") {
            damage("player2", 1);
            console.log(player2Health);

        } else if (player === "self") {
            damage("player1", 1);
            console.log(player1Health);
        }
    }

    if (turn == 2) {

        if (player === "opponent") {
            damage("player1", 1);

        } else if (player === "self") {
            damage("player2", 1);

        }
    }

    nextTurn();
}

function renderHealth() {
    if (player1Health <= 0) {
        setStatus("Player 2 Wins!");
        startGame();
    }
    document.getElementById("player-1-health").innerText = player1Health;
    document.getElementById("player-2-health").innerText = player2Health;
}

function renderShells() {
    document.getElementById("blank-shells").innerText = blankShells;
    document.getElementById("live-shells").innerText = liveShells;
}

function nextTurn() {
    if (turn == 1) {
        turn = 2;
    } else {
        turn = 1;
    }
    renderTurn();
}

function renderTurn() {
    document.getElementById("turn-indicator").innerText = turn;
}

function startGame() {
    liveShells = 2;
    blankShells = 2;
    renderShells();
    setStatus("Game Started");
    player1Health = 2;
    player2Health = 2;
    renderHealth();
    turn = Math.floor(Math.random() * 2) + 1;
    renderTurn();
}

startGame();