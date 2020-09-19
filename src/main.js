// const game = new Game()
// const hook up to dom  'queyselctor'
//
// domEle.on('click', function(event) {
//   game.handlePlayerClick(event)
// })
var game;

document.addEventListener('keydown', playerDeal)
window.onload = startNewGame;

function startNewGame() {
  game = new Game();
  game.createPlayer();
}

function playerDeal(event) {
  if (event.keyCode === 'q' && game.player1.turn) {
    game.player1.playCard(game);
    game.player1.turn = game.player2.turn;
  } else if (event.keyCode === 'p' && game.player2.turn) {
    game.player2.playCard(game);
    game.player2.turn = game.player1.turn;
  }
}

function playerSlap(event) {
  if (event.keyCode === 'f') {
    game.slap(game.player1);
  } else if (event.keyCode === 'j') {
    game.slap(game.player2);
  }
}
