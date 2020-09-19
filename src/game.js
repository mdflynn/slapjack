class Game {
  constructor(left, right) {
    //do i need parameters? can't see benefit.
    //this.player = playerDetails.id;
    this.cardDeck = [
      { suite: 'red', value: 'ace', href: './assets/red-01.png'}, { suite: 'red', value: 2, href: './assets/red-02.png'}, { suite: 'red', value: 3, href: './assets/red-03.png'}, { suite: 'red', value: 4, href: './assets/red-04.png'}, { suite: 'red', value: 5, href: './assets/red-05.png'}, { suite: 'red', value: 6, href: './assets/red-06.png'}, { suite: 'red', value: 7, href: './assets/red-07.png'},
      { suite: 'red', value: 8, href: './assets/red-08.png'}, { suite: 'red', value: 9, href: './assets/red-09.png'}, { suite: 'red', value: 10, href: './assets/red-10.png'}, { suite: 'red', value: 'jack', href: './assets/red-jack.png'}, { suite: 'red', value: 'queen', href: './assets/red-queen.png'}, { suite: 'red', value: 'king', href: './assets/red-king.png'},
      { suite: 'blue', value: 'ace', href: './assets/blue-01.png'}, { suite: 'blue', value: 2, href: './assets/blue-02.png'}, { suite: 'blue', value: 3, href: './assets/blue-03.png'}, { suite: 'blue', value: 4, href: './assets/blue-04.png'}, { suite: 'blue', value: 5, href: './assets/blue-05.png'}, { suite: 'blue', value: 6, href: './assets/blue-06.png'}, { suite: 'blue', value: 7, href: './assets/blue-07.png'},
      { suite: 'blue', value: 8, href: './assets/blue-08.png'}, { suite: 'blue', value: 9, href: './assets/blue-09.png'}, { suite: 'blue', value: 10, href: './assets/blue-10.png'}, { suite: 'blue', value: 'jack', href: './assets/blue-jack.png'}, { suite: 'blue', value: 'queen', href: './assets/blue-queen.png'}, { suite: 'blue', value: 'king', href: './assets/blue-king.png'},
      { suite: 'green', value: 'ace', href: './assets/green-01.png'}, { suite: 'green', value: 2, href: './assets/green-02.png'}, { suite: 'green', value: 3, href: './assets/green-03.png'}, { suite: 'green', value: 4, href: './assets/green-04.png'}, { suite: 'green', value: 5, href: './assets/green-05.png'}, { suite: 'green', value: 6, href: './assets/green-06.png'}, { suite: 'green', value: 7, href: './assets/green-07.png'},
      { suite: 'green', value: 8, href: './assets/green-08.png'}, { suite: 'green', value: 9, href: './assets/green-09.png'}, { suite: 'green', value: 10, href: './assets/green-10.png'}, { suite: 'green', value: 'jack', href: './assets/green-jack.png'}, { suite: 'green', value: 'queen', href: './assets/green-queen.png'}, { suite: 'green', value: 'king', href: './assets/green-king.png'},
      { suite: 'gold', value: 'ace', href: './assets/gold-01.png'}, { suite: 'gold', value: 2, href: './assets/gold-02.png'}, { suite: 'gold', value: 3, href: './assets/gold-03.png'}, { suite: 'gold', value: 4, href: './assets/gold-04.png'}, { suite: 'gold', value: 5, href: './assets/gold-05.png'}, { suite: 'gold', value: 6, href: './assets/gold-06.png'}, { suite: 'gold', value: 7, href: './assets/gold-07.png'},
      { suite: 'gold', value: 8, href: './assets/gold-08.png'}, { suite: 'gold', value: 9, href: './assets/gold-09.png'}, { suite: 'gold', value: 10, href: './assets/gold-10.png'}, { suite: 'gold', value: 'jack', href: './assets/gold-jack.png'}, { suite: 'gold', value: 'queen', href: './assets/gold-queen.png'}, { suite: 'gold', value: 'king', href: './assets/gold-king.png'}
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
    //player.giveCards
    //pushes to player1.hand.push()
  }

  // giveCards(player) {
  //   //push shuffled deck to player hand
  //
  // }

  deal(leftPlayer, rightPlayer) {
    for (var i = 0; i < this.cardDeck.length; i++) {
      if ([i] % 2 === 0) {
        leftPlayer.hand.push(this.cardDeck[i]);
      } else {
        rightPlayer.hand.push(this.cardDeck[i]);
      }
    }
  }

  playerHandler(event) {
    //how to use event in non DOM file?
  }

  slap(leftPlayer, rightPlayer) { //player only? how to tie to each player without event listener?


    //if not, take top card from slapper push to end of opponent hand
    //update win total if all card holder slaps jack
    if (this.centralPile[0].value === 'jack') {
      //push to correct player pile
    } else if (this.centralPile[0].value === this.centralPile[2].value) {
      //push to correct player pile
    } else if (this.centralPile[0].value === this.centralPile[1].value) {
      //push to correct player pile
    } else if (this.centralPile[0].value === 'jack' &&  (leftPlayer.hand.length === 0 || rightPlayer.hand.length === 0)) {
        //game over or if player w/o cards slapped, give pile
    } else {
      //take top card from player pile, add to bottom of other player pile
    }
  }

  reset(leftPlayer, rightPlayer) {
    leftPlayer.hand = [];
    rightPlayer.hand = [];
    //how do I use 1 parameter to work with both players hand?
  }

  beginGame() {}//deal out deck to players

  // createPlayer() {
  //   var player1 = new Player('left', 0);
  //   var player2 = new Player('right', 0);
  // }
  //instantiate new players?

  //needs to be in main.js for dom maniuplation?
}
