class Player {
  constructor(id, wins, hand) {
    this.id = id;
    this.wins = 0;
    this.hand = [];
    this.turn = false;
  }

  playCard(game) {
    if (this.turn) {
      game.centralPile.push(this.hand[0]);
      this.hand.splice(0, 1);
    }
    this.turn = false;
    //other player turn?
    //take last card in array to push to top of centralPile in game.js
  }

  saveWinsToStorage() {

  }
}
