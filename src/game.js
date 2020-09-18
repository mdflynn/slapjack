class Game {
  constructor(left, right) {
    //do i need playerDetails?
    //this.player = playerDetails.id;
    this.cardDeck = [
      { name: 'r1', href: './assets/red-01.png'}, { name: 'r2', href: './assets/red-02.png'}, { name: 'r3', href: './assets/red-03.png'}, { name: 'r4', href: './assets/red-04.png'}, { name: 'r5', href: './assets/red-05.png'}, { name: 'r6', href: './assets/red-06.png'}, { name: 'r7', href: './assets/red-07.png'},
      { name: 'r8', href: './assets/red-08.png'}, { name: 'r9', href: './assets/red-09.png'}, { name: 'r10', href: './assets/red-10.png'}, { name: 'rJ', href: './assets/red-jack.png'}, { name: 'rQ', href: './assets/red-queen.png'}, { name: 'rK', href: './assets/red-king.png'},
      { name: 'b1', href: './assets/blue-01.png'}, { name: 'b2', href: './assets/blue-02.png'}, { name: 'b3', href: './assets/blue-03.png'}, { name: 'b4', href: './assets/blue-04.png'}, { name: 'b5', href: './assets/blue-05.png'}, { name: 'b6', href: './assets/blue-06.png'}, { name: 'b7', href: './assets/blue-07.png'},
      { name: 'b8', href: './assets/blue-08.png'}, { name: 'b9', href: './assets/blue-09.png'}, { name: 'b10', href: './assets/blue-10.png'}, { name: 'bJ', href: './assets/blue-jack.png'}, { name: 'bQ', href: './assets/blue-queen.png'}, { name: 'bK', href: './assets/blue-king.png'},
      { name: 'gr1', href: './assets/green-01.png'}, { name: 'gr2', href: './assets/green-02.png'}, { name: 'gr3', href: './assets/green-03.png'}, { name: 'gr4', href: './assets/green-04.png'}, { name: 'gr5', href: './assets/green-05.png'}, { name: 'gr6', href: './assets/green-06.png'}, { name: 'gr7', href: './assets/green-07.png'},
      { name: 'gr8', href: './assets/green-08.png'}, { name: 'gr9', href: './assets/green-09.png'}, { name: 'gr10', href: './assets/green-10.png'}, { name: 'grJ', href: './assets/green-jack.png'}, { name: 'grQ', href: './assets/green-queen.png'}, { name: 'grK', href: './assets/green-king.png'},
      { name: 'go1', href: './assets/gold-01.png'}, { name: 'go2', href: './assets/gold-02.png'}, { name: 'go3', href: './assets/gold-03.png'}, { name: 'go4', href: './assets/gold-04.png'}, { name: 'go5', href: './assets/gold-05.png'}, { name: 'go6', href: './assets/gold-06.png'}, { name: 'go7', href: './assets/gold-07.png'},
      { name: 'go8', href: './assets/gold-08.png'}, { name: 'go9', href: './assets/gold-09.png'}, { name: 'go10', href: './assets/gold-10.png'}, { name: 'goJ', href: './assets/gold-jack.png'}, { name: 'goQ', href: './assets/gold-queen.png'}, { name: 'goK', href: './assets/gold-king.png'}
    ];
    this.centralPile = [];
  }

  shuffle(deck) {
    var currentIndex = deck.length, temporayValue, randomIndex
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporayValue = deck[currentIndex];
      deck[currentIndex] = deck[randomIndex];
      deck[randomIndex] = temporayValue;
    }
    //need to randomzie array order ()
    //push new array to player hand

    //player.giveCards
    //pushes to player1.hand.push()
  }

  giveCards(player) {
    //push shuffled deck to player hand

  }

  deal(leftPlayer, rightPlayer) {
    //distribute each card 1 by 1 to player hand
    //loop through cardDeck.
    //if index is even push to leftPlayer
    //if index is odd push to rightPlayer
    for (var i = 0; i < this.cardDeck.length; i++) {
      if ([i] % 2 === 0) {
        leftPlayer.hand.push(this.cardDeck[i]);
      } else {
        rightPlayer.hand.push(this.cardDeck[i]);
      }
    }

  }

  playerHandler(event) {

  }

  slap(player) {
    //if top card === jack, central pile pushed to player hand
    //if centralPile[0] === [1], central pile pushed to player hand
    //if centralPile[0] === [2], central pile pushed to player hand
    //if not, take top card from slapper push to end of opponent hand
    //update win total if all card holder slaps jack
  }

  reset() {
    //takes cards from each player hand
    //push to cardDeck
  }

  beginGame() {}//deal out deck to players

  createPlayer() {}
  //instantiate new players?
}
