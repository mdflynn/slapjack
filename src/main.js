var gameImg = document.querySelector('#game-img');
var leftPlayerWins = document.querySelector('#left-player');
var rightPlayerWins = document.querySelector('#right-player');
var leftImg = document.querySelector('#left-img');
var rightImg = document.querySelector('#right-img');
var span = document.querySelector('span');

var game;

document.addEventListener('keydown', buttonHandler)
window.onload = gameHandler;

function gameHandler() {
  beginGame();
  loadPlayerWins();
}

function beginGame() {
  game = new Game();
  game.player1.turn = true;
}

function loadPlayerWins() {
  var getLocalPlayer1 = localStorage.getItem('Left-data');
  var getLocalPlayer2 = localStorage.getItem('Right-data');
  var parsePlayer1 = JSON.parse(getLocalPlayer1);
  var parsePlayer2 = JSON.parse(getLocalPlayer2);
  if (parsePlayer1) {
    leftPlayerWins.innerHTML = `${parsePlayer1} Wins`;
  } else if (parsePlayer2) {
    rightPlayerWins.innerHTML = `${parsePlayer2} Wins`;
  }
}

function buttonHandler(event) {
  playerDeal(event);
  playerSlap(event);
}

function playerDeal(event) {
  leftPlayerEvents(event);
  rightPlayerEvents(event);
}

function leftPlayerEvents(event) {
  if (event.keyCode === 81 && game.player1.turn && !game.player2.hand.length) {
    game.player1.playCard(game);
    game.player1.turn = true;
    centerImageHandler();
  } else if (event.keyCode === 81 && game.player1.turn) {
    game.player2.turn = game.player1.turn;
    game.player1.playCard(game);
    centerImageHandler();
  }
}

//resetGame
//player1turn = player2turn
//add back img to both players
//how to highlight middle card based on player?

function rightPlayerEvents(event) {
  if (event.keyCode === 80 && game.player2.turn && !game.player1.hand.length) {
    game.player2.playCard(game);
    game.player2.turn = true;
    centerImageHandler();
  } else if (event.keyCode === 80 && game.player2.turn) {
    game.player1.turn = game.player2.turn;
    game.player2.playCard(game);
    centerImageHandler();
  }
}

function centerImageHandler() {
  playerImageHandler();
  if (game.centralPile.length > 0) {
    gameImg.src = game.centralPile[0].src;
  } else {
    gameImg.src = "http://upload.wikimedia.org/wikipedia/commons/c/ce/Transparent.gif";
  }
}

function playerImageHandler() {
  if (!game.player1.hand.length) {
    leftImg.src = "http://upload.wikimedia.org/wikipedia/commons/c/ce/Transparent.gif";
  } else if (!game.player2.hand.length) {
    rightImg.src = "http://upload.wikimedia.org/wikipedia/commons/c/ce/Transparent.gif";
  }
}

function playerSlap(event) {
  if (event.keyCode === 70) {
    game.slap(game.player1);
    centerImageHandler();
  } else if (event.keyCode === 74) {
    game.slap(game.player2);
    centerImageHandler();
  }
}

function goodSlapText(slapper, text) {
  span.innerText = `${text}! ${slapper.id} takes the pile!!`
}

function badSlapText(slapper) {
  if (slapper === game.player1) {
    span.innerText = `Bad Slap! Players 1 forfeits a card to Player 2!`;
  } else if (slapper === game.player2) {
    span.innerText = `Bad Slap! Players 2 forfeits a card to Player 1!`;
  }
}

function gameOver(winner) {
  span.innerText = `${winner} player wins!!`;
  leftImg.src = './assets/back.png';
  rightImg.src = './assets/back.png';
}
