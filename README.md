# SlapJack
A project by [Mike Flynn](https://github.com/mdflynn)

### Introduction
The game is SlapJack! A two-player card game to pass the time and have a little friendly competition. This project is intended to demonstrate the foundational concepts of frontend development. It will show the separation of the DOM and the Data Model as well as DRY Javascript. This is the final, solo project for Mod 1 at Turing School of Software & Design.

### Goals
- Solidify and demonstrate my understanding of:

  - DRY JavaScript
  - localStorage to persist data
  - event delegation to handle similar event listeners


- Understand the difference between the data model and how the data is displayed on the DOM

- Use my problem solving process to break down large problems, solve things step by step, and trust myself to not rely on an outside “answer” to a logical challenge


### Languages Used
- Javascript
- HTML
- CSS

### Challenges
My initial struggles were with how I should properly tie in the two classes with each other to play the game in the Dev Tools console without any DOM being written. I was also struggling with keeping the DOM and Data Model completely separated.

### Wins
It felt great to finally get all of the game logic added and to have the game fully functional. Learning how and win to use parameters in my classes. It was different writing it from scratch without any TDD to guide me. And in general, having fun with the CSS after the base project was finished.

### Reflections / Lessons Learned
- I found it more difficult to write parameters in my methods when not using tests. Realizing I wasn't as firm in the concept as I thought.
- I found it interesting how to call functions in different files. I learned that I could call a function declared in `main.js` within `game.js` without any kind of additional parameters of having to use `this`.
- Better understanding of how classes interact.
- Better understanding how to keep data model and DOM separated.
- Learning to really read what the project outline is asking for. I missed a step in logic and it really threw me for a loop trying to get it back in after I had refactored everything.

#### Welcome Screen
![Welcome Screen](./assets/WelcomeScreen.png)

#### Gameplay
![Gameplay](https://media.giphy.com/media/jYbRrDOdaUk0Oy3i8x/giphy.gif)

![Gameplay](https://media.giphy.com/media/i1H4qh448XN7ObE84J/giphy.gif)

#### Bad Slap
![Bad slap](https://media.giphy.com/media/LXD2c9oRoZYcbSrEot/giphy.gif)

#### Data Persisting On Reload
![Data Persisting](https://media.giphy.com/media/Cg8bt5BVFw59D5fSH6/giphy.gif)
