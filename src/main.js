var gameImg = document.querySelector('#game-img');
var leftPlayerWins = document.querySelector('#left-player');
var rightPlayerWins = document.querySelector('#right-player');
var header = document.querySelector('header');

var game;

document.addEventListener('keydown', buttonHandler)
window.onload = gameHandler;

function gameHandler() {
  beginGame();
  loadPlayerWins();
}

function beginGame() {
  game = new Game(gameOver());
  game.player1.turn = true;
}

function loadPlayerWins() {
  var getLocalPlayer1 = localStorage.getItem('left-data');
  var getLocalPlayer2 = localStorage.getItem('right-data');
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
//refactor playerDeal

function playerDeal(event) {
  leftPlayerEvents(event);
  rightPlayerEvents(event);
}

function leftPlayerEvents(event) {
  if (event.key === 'q' && game.player1.turn && !game.player2.hand) {
    game.player1.playCard(game);
    game.player1.turn = true;
    centerImageHandler();
  } else if (event.key === 'q' && game.player1.turn) {
    game.player2.turn = game.player1.turn;
    game.player1.playCard(game);
    centerImageHandler();
  }
}

function rightPlayerEvents(event) {
  if (event.key === 'p' && game.player2.turn && !game.player1.hand) {
    game.player2.playCard(game);
    game.player2.turn = true;
    centerImageHandler();
  } else if (event.key === 'p' && game.player2.turn) {
    game.player1.turn = game.player2.turn;
    game.player2.playCard(game);
    centerImageHandler();
  }
}

function centerImageHandler() {
  if (game.centralPile.length > 0) {
    gameImg.src = game.centralPile[0].src;
  } else {
    gameImg.src = "http://upload.wikimedia.org/wikipedia/commons/c/ce/Transparent.gif";
  }
}

function playerSlap(event) {
  if (event.key === 'f') {
    game.slap(game.player1);
    centerImageHandler();
  } else if (event.key === 'j') {
    game.slap(game.player2);
    centerImageHandler();
  }
}

function gameOver(text) { //not working
  header.innerText = text;
}

//when someone slaps successfully/unsuccessfully
//if win, update HTML for player win
