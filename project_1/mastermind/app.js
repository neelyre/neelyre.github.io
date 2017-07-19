$(() => {

console.log('hi');

//MASTER MIND GAMe

// -----
// //variables
// ------

const colorInPlay = ['red', 'green', 'blue', 'yellow', 'white', 'black'];

const colorsForResult = ['white', 'black'];

let playerTurns = 0;

let GameCode = ['red', 'green', 'blue', 'yellow']; //test for now
//
// const total = GameCode.push('football', 'swimming');

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

//CODE GOOD//

// const generateCode = GameCode.push(colorInPlay[(Math.floor(Math.random() * 6))]) + GameCode.push(colorInPlay[(Math.floor(Math.random() * 6))]) + GameCode.push(colorInPlay[(Math.floor(Math.random() * 6))]) + GameCode.push(colorInPlay[(Math.floor(Math.random() * 6))])

///CODE GOOD   * this is code player must break
// console.log(GameCode);

let guessArray = ['red', 'green', 'white', 'black'];

const entercolor = (select) => {
guessArray.push(select);
if (guessArray.length === 4) {
  guessSubmit();
   }

}



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


//
let guessSubmit = () => {

let correctAnswers=0;
let correctNumbers=0;

let Answer1Checked=0;
let Answer2Checked=0;
let Answer3Checked=0;
let Answer4Checked=0;

let guess1Checked=0;
let guess2Checked=0;
let guess3Checked=0;
let guess4Checked=0;

const Answer1 = GameCode[0];
const Answer2 = GameCode[1];
const Answer3 = GameCode[2];
const Answer4 = GameCode[3];

const guess1 = guessArray[0];
const guess2 = guessArray[1];
const guess3 = guessArray[2];
const guess4 = guessArray[3];

if(guess1 === Answer1)
	{
		correctAnswers++;
		value1Checked=1;
		guess1Checked=1;
	}
	if(guess2 === Answer2)
	{
		correctAnswers++;
		value2Checked=1;
		guess2Checked=1;
	}
  if(guess3 === Answer3)
{
  correctAnswers++;
  value3Checked=1;
  guess3Checked=1;
}
if(guess4 === Answer4)
{
  correctAnswers++;
  value4Checked=1;
  guess4Checked=1;
}

if (guess1 === Answer2) {
guess1Checked=1;
  }

     if (guess1 === Answer3) {
guess1Checked=1;
    }

       if (guess1 === Answer4) {
  guess1Checked=1;
      }

if (guess2 === Answer1) {
guess2Checked=1;
        }

    if (guess2 === Answer3) {
  guess2Checked=1;
          }

       if (guess2 === Answer4) {
    guess2Checked=1;
            }

if (guess3 === Answer1) {
guess3Checked=1;
                    }
    if (guess3 === Answer2) {
    guess3Checked=1;
                      }

      if (guess3 === Answer4) {
      guess3Checked=1;
            }

if (guess3 === Answer1) {
guess3Checked=1;
                    }
    if (guess3 === Answer2) {
    guess3Checked=1;
                      }

      if (guess3 === Answer4) {
      guess3Checked=1;
                        }

console.log(correctAnswers);

if (correctAnswers === 4){
alert('you win');
}

if (playerTurns === 10) {
alert('you lose. correct code was' + GameCode);
}

}

console.log(guessSubmit);
// console.log(GameCode[0]);
//     //issue white


//
//
//
//
// console.log(colorInPlay);
//
})
// console.log('outside');
