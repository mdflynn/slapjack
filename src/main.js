// const game = new Game()
// const hook up to dom  'queyselctor'
//
// domEle.on('click', function(event) {
//   game.handlePlayerClick(event)
// })
var game;

document.addEventListener('keydown', buttonHandler)
window.onload = beginGame;

function beginGame() {
  game = new Game();
  game.createPlayer();
  game.shuffle(game.cardDeck);
  game.deal(game.player1, game.player2);
}

function buttonHandler(event) {
  playerDeal(event);
  playerSlap(event);
}

function playerDeal(event) {
  if (event.key === 'q' && game.player1.turn) {
    game.player1.playCard(game);
    game.player1.turn = game.player2.turn;
  } else if (event.key === 'p' && game.player2.turn) {
    game.player2.playCard(game);
    game.player2.turn = game.player1.turn;
  }
}

function playerSlap(event) {
  if (event.key === 'f') {
    game.slap(game.player1);
  } else if (event.key === 'j') {
    game.slap(game.player2);
  }
}
