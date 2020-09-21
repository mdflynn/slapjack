var gameImg = document.querySelector('#game-img');
var leftPlayerWins = document.querySelector('#left-player');
var rightPlayerWins = document.querySelector('#right-player');
var leftImg = document.querySelector('#left-img');
var rightImg = document.querySelector('#right-img');
var span = document.querySelector('span');
var clearButton = document.querySelector('#clear-button');
var beginButton = document.querySelector('#begin-button');
var welcomeContainer = document.querySelector('.welcome-container');

var game;

clearButton.addEventListener('click', clearLocal);
beginButton.addEventListener('click', gameHandler);
document.addEventListener('keydown', buttonHandler);
window.onload = loadPlayerWins();

//welcome message... click to begin game
//also add hidden to message area
//hidden only goes away on refresh
//onload is just player wins from local localStorage
//clear history for local storage


function gameHandler() {
  dontGiveUp();
  beginGame();
}

function dontGiveUp() {
  var rick = new Audio("./assets/never-gonna.mp3");
  rick.pause();
  rick.volume = .1;
  rick.play();
}

function byeByeBye() {
  var nSync = new Audio("./assets/bye-bye-bye.mp3");
  nSync.pause();
  nSync.volume = .1;
  nSync.play();
}

function beginGame() {
  game = new Game();
  game.player1.turn = true;
  hideWelcome();
  resetGameInfo();
}

function hideWelcome() {
  welcomeContainer.classList.add('hidden');
}

function clearLocal() {
  byeByeBye();
  localStorage.clear();
  alert('THE PLAYING FIELD HAS BEEN LEVELED! Wins reset');
}

function loadPlayerWins() {
  var getLocalPlayer1 = localStorage.getItem('Left-data');
  var getLocalPlayer2 = localStorage.getItem('Right-data');
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
  leftPlayerEvents(event);
  rightPlayerEvents(event);
}

function leftPlayerEvents(event) {
  if (event.keyCode === 81 && game.player1.turn && !game.player2.hand.length) {
    game.player1.playCard(game);
    game.player1.turn = true;
    imageHandler();
    if (game.leftEndDeckCheck()) {
        leftImg.src = './assets/back.png';
    }
  } else if (event.keyCode === 81 && game.player1.turn) {
    game.player2.turn = game.player1.turn;
    game.player1.playCard(game);
    imageHandler();
  }
}

function rightPlayerEvents(event) {
  if (event.keyCode === 80 && game.player2.turn && !game.player1.hand.length) {
    game.player2.playCard(game);
    game.player2.turn = true;
    imageHandler();
    if (game.rightEndDeckCheck()) {
        rightImg.src = './assets/back.png';
    }
  } else if (event.keyCode === 80 && game.player2.turn) {
    game.player1.turn = game.player2.turn;
    game.player2.playCard(game);
    imageHandler();
  }
}

function imageHandler() {
  centerImageHandler();
  playerImageHandler();
}

function centerImageHandler() {
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

//should i seperate player slap by player?

function playerSlap(event) {
  if (event.keyCode === 70) {
    game.slap(game.player1);
    imageHandler();
  } else if (event.keyCode === 74) {
    game.slap(game.player2);
    imageHandler();
  }
}

function goodSlapText(slapper, text) {
  span.innerText = `${text}! ${slapper.id} takes the pile!!`;
  handlePlayerDeckImg();
}

function badSlapText(slapper) {
  if (slapper === game.player1) {
    span.innerText = `Bad Slap! Players 1 forfeits a card to Player 2!`;
  } else if (slapper === game.player2) {
    span.innerText = `Bad Slap! Players 2 forfeits a card to Player 1!`;
  }
}

function gameOver(winner) {
  handleEndTurn();
  handlePlayerDeckImg();
  span.innerText = `${winner} player wins!!`;

}

function handlePlayerDeckImg() {
  leftImg.src = './assets/back.png';
  rightImg.src = './assets/back.png';
}

function handleEndTurn() {
  game.player1.turn = game.player2.turn;
  game.player2.turn = !game.player1.turn;
}

function resetGameInfo() {
  span.innerText = 'SlapJack';
  leftPlayerWins.innerText = `${game.player1.wins} Wins`;
  rightPlayerWins.innerText = `${game.player2.wins} Wins`;
}
