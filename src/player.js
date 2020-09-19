class Player {
  constructor(id, wins, hand) {
    this.id = id;
    this.wins = 0;
    this.hand = [];
    this.turn = false;
  }

  playCard(game) {
    game.centralPile.push(this.hand[0]);
    //take last card in array to push to top of centralPile in game.js
  }

  saveWinsToStorage() {

  }
}
//how to push from game class to player class?
