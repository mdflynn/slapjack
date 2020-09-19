// const game = new Game()
// const hook up to dom  'queyselctor'
//
// domEle.on('click', function(event) {
//   game.handlePlayerClick(event)
// })
var game;

window.onload = startNewGame;

function startNewGame() {
  game = new Game();
  game.createPlayer();
}
