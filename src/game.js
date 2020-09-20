class Game {
  constructor() {
    this.player1 = new Player('Left');
    this.player2 = new Player('Right');
    this.cardDeck = [
      { suite: 'red', value: 'ace', src: './assets/red-01.png'}, { suite: 'red', value: 2, src: './assets/red-02.png'}, { suite: 'red', value: 3, src: './assets/red-03.png'}, { suite: 'red', value: 4, src: './assets/red-04.png'}, { suite: 'red', value: 5, src: './assets/red-05.png'}, { suite: 'red', value: 6, src: './assets/red-06.png'}, { suite: 'red', value: 7, src: './assets/red-07.png'},
      { suite: 'red', value: 8, src: './assets/red-08.png'}, { suite: 'red', value: 9, src: './assets/red-09.png'}, { suite: 'red', value: 10, src: './assets/red-10.png'}, { suite: 'red', value: 'jack', src: './assets/red-jack.png'}, { suite: 'red', value: 'queen', src: './assets/red-queen.png'}, { suite: 'red', value: 'king', src: './assets/red-king.png'},
      { suite: 'blue', value: 'ace', src: './assets/blue-01.png'}, { suite: 'blue', value: 2, src: './assets/blue-02.png'}, { suite: 'blue', value: 3, src: './assets/blue-03.png'}, { suite: 'blue', value: 4, src: './assets/blue-04.png'}, { suite: 'blue', value: 5, src: './assets/blue-05.png'}, { suite: 'blue', value: 6, src: './assets/blue-06.png'}, { suite: 'blue', value: 7, src: './assets/blue-07.png'},
      { suite: 'blue', value: 8, src: './assets/blue-08.png'}, { suite: 'blue', value: 9, src: './assets/blue-09.png'}, { suite: 'blue', value: 10, src: './assets/blue-10.png'}, { suite: 'blue', value: 'jack', src: './assets/blue-jack.png'}, { suite: 'blue', value: 'queen', src: './assets/blue-queen.png'}, { suite: 'blue', value: 'king', src: './assets/blue-king.png'},
      { suite: 'green', value: 'ace', src: './assets/green-01.png'}, { suite: 'green', value: 2, src: './assets/green-02.png'}, { suite: 'green', value: 3, src: './assets/green-03.png'}, { suite: 'green', value: 4, src: './assets/green-04.png'}, { suite: 'green', value: 5, src: './assets/green-05.png'}, { suite: 'green', value: 6, src: './assets/green-06.png'}, { suite: 'green', value: 7, src: './assets/green-07.png'},
      { suite: 'green', value: 8, src: './assets/green-08.png'}, { suite: 'green', value: 9, src: './assets/green-09.png'}, { suite: 'green', value: 10, src: './assets/green-10.png'}, { suite: 'green', value: 'jack', src: './assets/green-jack.png'}, { suite: 'green', value: 'queen', src: './assets/green-queen.png'}, { suite: 'green', value: 'king', src: './assets/green-king.png'},
      { suite: 'gold', value: 'ace', src: './assets/gold-01.png'}, { suite: 'gold', value: 2, src: './assets/gold-02.png'}, { suite: 'gold', value: 3, src: './assets/gold-03.png'}, { suite: 'gold', value: 4, src: './assets/gold-04.png'}, { suite: 'gold', value: 5, src: './assets/gold-05.png'}, { suite: 'gold', value: 6, src: './assets/gold-06.png'}, { suite: 'gold', value: 7, src: './assets/gold-07.png'},
      { suite: 'gold', value: 8, src: './assets/gold-08.png'}, { suite: 'gold', value: 9, src: './assets/gold-09.png'}, { suite: 'gold', value: 10, src: './assets/gold-10.png'}, { suite: 'gold', value: 'jack', src: './assets/gold-jack.png'}, { suite: 'gold', value: 'queen', src: './assets/gold-queen.png'}, { suite: 'gold', value: 'king', src: './assets/gold-king.png'}
    ];
    this.centralPile = [];
    this.shuffle(this.cardDeck)
    this.deal(this.player1, this.player2);
  }

  shuffle(deck) {
    var currentIndex = deck.length, temporayValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporayValue = deck[currentIndex];
      deck[currentIndex] = deck[randomIndex];
      deck[randomIndex] = temporayValue;
    }
  }

  deal(leftPlayer, rightPlayer) {
    for (var i = 0; i < this.cardDeck.length; i++) {
      if ([i] % 2 === 0) {
        leftPlayer.hand.push(this.cardDeck[i]);
      } else {
        rightPlayer.hand.push(this.cardDeck[i]);
      }
    }
  }

  slap(player) {
      if(this.slapEndGame(player)) {
        this.endGame(player);
      } else if (this.slapSlapJack(player)) {
        this.slapClear(player);
      } else if (this.slapSlapJack(player)) {
        this.slapClear(player);
      } else if (this.slapDouble(player)) {
         this.slapClear(player);
      } else if (this.slapSandwich(player)) {
        this.slapClear(player);
      } else {
        this.badSlap(player);
      }
  }

  slapEndGame(slapper) {

    if ((this.centralPile[0].value === 'jack' && (this.player1.hand.length + this.centralPile.length === 52)) ||
      (this.centralPile[0].value === 'jack' && (this.player2.hand.length + this.centralPile.length === 52))) {
      return true;
    }
  }

  slapSlapJack(slapper) {
    if (this.centralPile[0].value === 'jack') {
      goodSlapText(slapper, `SLAPJACK`);
      return true;
    }
  }

  slapDouble(slapper) {
    //if (this.centralPile.length > 1) {
      if (this.centralPile[0].value === this.centralPile[1].value && this.centralPile.length > 1) {
        goodSlapText(slapper, `DOUBLE`);
        return true;
    //  }
    }
  }

  slapSandwich(slapper) {
    if (this.centralPile.length > 2) {
      if (this.centralPile[0].value === this.centralPile[2].value) {;
        goodSlapText(slapper, `SANDWHICH`);
        return true
      }
    }
  }

  slapClear(slapper) {
    for (var i = 0; i < this.centralPile.length; i++) {
      slapper.hand.push(this.centralPile[i]);
    }
    this.centralPile = [];
    this.shuffle(slapper.hand);
  }

  badSlap(slapper) {
    if (slapper.id === 'Left') {
      this.player2.hand.push(this.player1.hand[0]);
      this.player1.hand.splice(0, 1);
    } else {
      this.player1.hand.push(this.player2.hand[0]);
      this.player2.hand.splice(0, 1);
    }
    badSlapText(slapper);
  }

  endGame(winner) {
    winner.wins++;
    winner.saveWinsToStorage();
    this.resetDecks();
    gameOver(winner.id);
  }

  resetDecks() {
    this.player1.hand = [];
    this.player2.hand = [];
    this.centralPile = [];
  }
}
