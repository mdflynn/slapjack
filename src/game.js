class Game {
  constructor(playerDetails) {
    this.player = playerDetails.id;
    this.cardDeck = [
      'r1', 'r2', 'r3', 'r4', 'r5', 'r6', 'r7', 'r8', 'r9', 'r10', 'rJ', 'rQ', 'rK', 'rA',
      'b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7', 'b8', 'b9', 'b10', 'bJ', 'bQ', 'bK', 'bA',
      'gr1', 'gr2', 'gr3', 'gr4', 'gr5', 'gr6', 'gr7', 'gr8', 'gr9', 'gr10', 'grJ', 'grQ', 'grK', 'grA',
      'go1', 'go2', 'go3', 'go4', 'go5', 'go6', 'go7', 'go8', 'go9', 'go10', 'goJ', 'goQ', 'goK', 'goA',
      'wild'
    ]; //53 cards (1 wild)
    //how to associate with images?
    this.centralPile = [];
    this.turn = false;
  }

  shuffle(deck) {
    //need to randomzie array order
    //push new array to player hand
  }

  deal(player) {
    //distribute each card 1 by 1 to player hand
    //loop through cardDeck.
    //if index is even push to leftPlayer
    //if index is odd push to rightPlayer
  }

  slap(player) {
    //do i need event parameter?
    //if top card === jack, central pile pushed to player hand
    //if centralPile[0] === [1], central pile pushed to player hand
    //if centralPile[0] === [2], central pile pushed to player hand
    //if not, take top card from slapper push to end of opponent hand
  }

  reset() {
    //takes cards from each player hand
    //push to cardDeck
  }
}
