class Player {
  constructor(id) {
    this.id = id;
    this.wins = JSON.parse(localStorage.getItem(`${this.id}-data`)) || 0;
    this.hand = [];
    this.turn = false;
  }

  playCard(game) {
    if (this.turn) {
      resetGameInfo();
      game.centralPile.unshift(this.hand[0]);
      this.hand.splice(0, 1);
      this.turn = false;
      highlightCenter(this.id);
    }
  }

  saveWinsToStorage() {
    var stringData = JSON.stringify(this.wins);
    localStorage.setItem(`${this.id}-data`, stringData);
  }

  
}
