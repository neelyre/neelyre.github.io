$(() => {

let guessSubmit = () => {

let correctAnswers=0;
// let correctNumbers=0
let currentRound = 1;

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

if(guess1 == Answer1)
	{
		correctAnswers++;
		value1Checked=1;
		guess1Checked=1;
    playerTurns++;
    console.log('one Black');
	}
	if(guess2 == Answer2)
	{
		correctAnswers++;
		value2Checked=1;
		guess2Checked=1;
    console.log('one Black');
	}
  if(guess3 == Answer3)
{
  correctAnswers++;
  value3Checked=1;
  guess3Checked=1;
  console.log('one Black');
}
if(guess4 == Answer4)
{
  correctAnswers++;
  value4Checked=1;
  guess4Checked=1;
  console.log('one Black');
}

if (guess1 == Answer2) {
guess1Checked=1;
console.log('one white');
  }

     if (guess1 == Answer3) {
guess1Checked=1;
console.log('one white');
    }

       if (guess1 == Answer4) {
  guess1Checked=1;
  console.log('one white');
      }

if (guess2 == Answer1) {
guess2Checked=1;
console.log('one white');
        }

    if (guess2 == Answer3) {
  guess2Checked=1;
  console.log('one white');
          }

       if (guess2 == Answer4) {
    guess2Checked=1;
    console.log('one white');
            }

if (guess3 == Answer1) {
guess3Checked=1;
console.log('one white');
                    }
    if (guess3 == Answer2) {
    guess3Checked=1;
    console.log('one white');
                      }

      if (guess3 == Answer4) {
      guess3Checked=1;
      console.log('one white');
            }

if (guess3 == Answer1) {
guess3Checked=1;
console.log('one white');
                    }
    if (guess3 == Answer2) {
    guess3Checked=1;
    console.log('one white');
                      }

      if (guess3 == Answer4) {
      guess3Checked=1;
      console.log('one white');
                        }

                        

// document.getElementById(fourWayToggle1()+currentRound).disabled=true;
// document.getElementById(fourWayToggle2()+currentRound).disabled=true;
// document.getElementById(fourWayToggle3()+currentRound).disabled=true;
// document.getElementById(fourWayToggle4()+currentRound).disabled=true;

// if (correctAnswers = 4){
// alert('you win');
// }

if (playerTurns = 10) {
alert('you lose. correct code was' + GameCode);
}

}

console.log(guessArray);
    //issue white
})
