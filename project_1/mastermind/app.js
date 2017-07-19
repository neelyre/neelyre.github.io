$(() => {

console.log('hi');

//MASTER MIND GAMe

// -----
// //variables
// ------

const colorInPlay = ['red', 'green', 'blue', 'yellow', 'white', 'black'];

const colorsForResult = ['white', 'black'];

let playerTurns = 10;

let GameCode = [];



//colors for play:
// red
// blue
// green
// yellow
// white
// black
//
// colors for codekeeper
// black  (right color. right place)
// white  (right color. wrong place)
//
// number in code combination : 4
//
// number of player attempts to win: 10
//
// -----
// FUNCTIONS
// ----
//
// func - codekeepr (computer)  generate random number (1-6 foreach color from array. repeat 3 tiems to genreate 4 random colors)

const generateCode = () => {
  let x = colorInPlay[(Math.floor(Math.random() * 6))]);
  GameCode.push(x);
  // GameCode.push(colorInPlay[(Math.floor(Math.random() * 6))]);
  // GameCode.push(colorInPlay[(Math.floor(Math.random() * 6))]);
  // GameCode.push(colorInPlay[(Math.floor(Math.random() * 6))]);
}

console.log(GameCode);
console.log(colorInPlay[(Math.floor(Math.random() * 6))]);
//
// player tries = 10
//
// {player input 4 color combination (div clicks), then submit.
//
// func - check for mathing colors, if none return null
//
// if match colors, check for position.
//
// if match color, but no match, issue white peg.
// if match color and match position, issue black peg. subtract 1 from tries.}
//
// repeat steps in brackets.
//
// if player tries = 0, end GAMe
// if codekeeper issues 4 black pegs, player win.








})
