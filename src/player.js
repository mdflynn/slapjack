class Player {
  constructor(id, wins, hand) {
    this.id = id;
    this.wins = 0;
    this.hand = [];
    this.turn = false;
  }

  playCard(game) {
    if (this.turn) {
      game.centralPile.unshift(this.hand[0]);
      this.hand.splice(0, 1);
      this.turn = false;
    }
    //other player turn?
  }

  saveWinsToStorage() {

  }
}
