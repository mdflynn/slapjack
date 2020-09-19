class Game {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
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
  }

  createPlayer() {
    this.player1 = new Player('left', 0);
    this.player1.turn = true;
    this.player2 = new Player('right', 0);
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
//intial deal. after initial deal has occurced
//player move to centerpile or  PlayerPile
  deal(leftPlayer, rightPlayer) {
    for (var i = 0; i < this.cardDeck.length; i++) {
      if ([i] % 2 === 0) {
        leftPlayer.hand.push(this.cardDeck[i]);
      } else {
        rightPlayer.hand.push(this.cardDeck[i]);
      }
    }
  }

  // playerHandler(event) {
  //   how to use event in non DOM file?
  // }

  slap(player) {
    if (this.centralPile[0].value === 'jack') {
      goodSlap(player);
    } else if (this.centralPile[0].value === this.centralPile[2].value) {
      goodSlap(player);
    } else if (this.centralPile[0].value === this.centralPile[1].value) {
      goodSlap(player);
    } else if (this.centralPile[0].value === 'jack' &&  (leftPlayer.hand.length === 0 || rightPlayer.hand.length === 0)) {
        //game over or if player w/o cards slapped, give pile
    } else {
      badSlap(player);
    }
  }

  goodSlap(slapper) {
    for (var i = 0; i < this.centralPile.length; i++) {
      game.slapper.hand.push(this.centralPile[i])
    }
  }

  badSlap(slapper) {
    if (game.slapper.id === 'left') {
      game.player2.push(game.player1.hand[0]);
    } else {
      game.player1.push(game.player2.hand[0]);
    }
  }

  updateWin(player) {
    player.wins++;
  }

  reset(leftPlayer, rightPlayer) {
    leftPlayer.hand = [];
    rightPlayer.hand = [];
    this.centralPile = [];
    //how do I use 1 parameter to work with both players hand?
  }

  // beginGame() {
  //
  // }deal out deck to players
  //This should be done in DOM.

}
