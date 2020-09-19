var gameImg = document.querySelector('#game-img');
var leftPlayerWins = document.querySelector('#left-player');
var rightPlayerWins = document.querySelector('#right-player');

var game;

document.addEventListener('keydown', buttonHandler)
window.onload = gameHandler;

function gameHandler() {
  beginGame();
  loadPlayerWins();
}

function beginGame() {
  game = new Game();
  game.createPlayer();
  game.shuffle(game.cardDeck);
  game.deal(game.player1, game.player2);
}

function loadPlayerWins() {
  var getLocalPlayer1 = localStorage.getItem('left-data');
  var getLocalPlayer2 = localStorage.getItem('right-data');
  var parsePlayer1 = JSON.parse(getLocalPlayer1);
  var parsePlayer2 = JSON.parse(getLocalPlayer2);
  if (parsePlayer1) {
    leftPlayerWins.innerHTML = `${parsePlayer1} Wins`;
  } if (parsePlayer2) {
    rightPlayerWins.innerHTML = `${parsePlayer2} Wins`;
  }
}

function buttonHandler(event) {
  playerDeal(event);
  playerSlap(event);
}

function playerDeal(event) {
  if (event.key === 'q' && game.player1.turn) {
    game.player2.turn = game.player1.turn;
    game.player1.playCard(game);
    centerImageHandler();
  } else if (event.key === 'p' && game.player2.turn) {
    game.player1.turn = game.player2.turn;
    game.player2.playCard(game);
    centerImageHandler();
  }
}

function centerImageHandler() {
  if (game.centralPile.length > 0) {
    gameImg.classList.remove('hidden');
    gameImg.src = game.centralPile[0].src;
  } else {
    gameImg.removeAttribute('src');
    //gameImg.classList.add('hidden');
    //gameImg.src = '';
  }
  //cant update img on reset?
}

//how to update dom when someone wins?
//if win, update HTML for player win

function playerSlap(event) {
  if (event.key === 'f') {
    game.slap(game.player1);
  } else if (event.key === 'j') {
    game.slap(game.player2);
  }
}
