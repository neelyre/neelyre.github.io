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

let guessArray = ['red', 'yellow', 'blue', 'green'];
//
// const total = GameCode.push('football', 'swimming');
//
// for (i=1; i <= 10; i++) {
//    const $rounds = $('<div/>').addClass('round').attr('id', 'box' + i);
//    $('.rounds').append($rounds);
//
// }

// let SelectorOne = $('<div/>').addClass('guess1');
// $('#colorSelector').append(SelectorOne);

$('.results').append('<img src = images/results/blank.png>');





const SwapResult = () => {
  var x = document.getElementById('submit1');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
    guessSubmit();
    $('res1').append(GetResult())

}

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




// }
//
///ALL FUNCTIONS BELOW ARE GOOD/////

const fourWayToggle1 = {
    number: 0,
    toggle(){
      fourWayToggle1.number = (fourWayToggle1.number + 1) % 6;
    if (fourWayToggle1.number == 0) {
      $('#boxa').css("background-color", "red");
      guessArray.splice(0, 1);
      guessArray.splice(0, 0, "red");

    }
    if (fourWayToggle1.number == 1) {
      $('#boxa').css("background-color", "blue")
      guessArray.splice(0, 1);
      guessArray.splice(0, 0, "blue");

    }
    if (fourWayToggle1.number == 2) {
      $('#boxa').css("background-color", "green");
      guessArray.splice(0, 1);
      guessArray.splice(0, 0, "green");

    }
    if (fourWayToggle1.number == 3) {
      $('#boxa').css("background-color", "yellow")
      guessArray.splice(0, 1);
      guessArray.splice(0, 0, "yellow");

    }
    if (fourWayToggle1.number == 4) {
      $('#boxa').css("background-color", "white")
      guessArray.splice(0, 1);
      guessArray.splice(0, 0, "white");

    }
    if (fourWayToggle1.number == 5) {
      $('#boxa').css("background-color", "black")
      guessArray.splice(0, 1);
      guessArray.splice(0, 0, "black");0

    }

    }
}

const fourWayToggle2 = {
    number: 0,
    toggle(){
      fourWayToggle2.number = (fourWayToggle2.number + 1) % 6;
    if (fourWayToggle2.number == 0) {
      $('#boxb').css("background-color", "red");
      guessArray.splice(1, 1);
      guessArray.splice(1, 0, "red");

    }
    if (fourWayToggle2.number == 1) {
      $('#boxb').css("background-color", "blue")
      guessArray.splice(1, 1);
      guessArray.splice(1, 0, "blue");

    }
    if (fourWayToggle2.number == 2) {
      $('#boxb').css("background-color", "green");
      guessArray.splice(1, 1);
      guessArray.splice(1, 0, "green");

    }
    if (fourWayToggle2.number == 3) {
      $('#boxb').css("background-color", "yellow")
      guessArray.splice(1, 1);
      guessArray.splice(1, 0, "yellow");

    }
    if (fourWayToggle2.number == 4) {
      $('#boxb').css("background-color", "white")
      guessArray.splice(1, 1);
      guessArray.splice(1, 0, "white");

    }
    if (fourWayToggle2.number == 5) {
      $('#boxb').css("background-color", "black")
      guessArray.splice(1, 1);
      guessArray.splice(1, 0, "black");

    }

    }
}

const fourWayToggle3 = {
    number: 0,
    toggle(){
      fourWayToggle3.number = (fourWayToggle3.number + 1) % 6;
    if (fourWayToggle3.number == 0) {
      $('#boxc').css("background-color", "red");
      guessArray.splice(2, 1);
      guessArray.splice(2, 0, "red");

    }
    if (fourWayToggle3.number == 1) {
      $('#boxc').css("background-color", "blue")
      guessArray.splice(2, 1);
      guessArray.splice(2, 0, "blue");

    }
    if (fourWayToggle3.number == 2) {
      $('#boxc').css("background-color", "green");
      guessArray.splice(2, 1);
      guessArray.splice(2, 0, "green");

    }
    if (fourWayToggle3.number == 3) {
      $('#boxc').css("background-color", "yellow")
      guessArray.splice(2, 1);
      guessArray.splice(2, 0, "yellow");

    }
    if (fourWayToggle3.number == 4) {
      $('#boxc').css("background-color", "white")
      guessArray.splice(2, 1);
      guessArray.splice(2, 0, "white");

    }
    if (fourWayToggle3.number == 5) {
      $('#boxc').css("background-color", "black")
      guessArray.splice(2, 1);
      guessArray.splice(2, 0, "black");

    }

    }
}

const fourWayToggle4 = {
    number: 0,
    toggle(){
      fourWayToggle4.number = (fourWayToggle4.number + 1) % 6;
    if (fourWayToggle4.number == 0) {
      $('#boxd').css("background-color", "red");
      guessArray.splice(3, 1);
      guessArray.splice(3, 0, "red");

    }
    if (fourWayToggle4.number == 1) {
      $('#boxd').css("background-color", "blue")
      guessArray.splice(3, 1);
      guessArray.splice(3, 0, "blue");

    }
    if (fourWayToggle4.number == 2) {
      $('#boxd').css("background-color", "green");
      guessArray.splice(3, 1);
      guessArray.splice(3, 0, "green");

    }
    if (fourWayToggle4.number == 3) {
      $('#boxd').css("background-color", "yellow")
      guessArray.splice(3, 1);
      guessArray.splice(3, 0, "yellow");

    }
    if (fourWayToggle4.number == 4) {
      $('#boxd').css("background-color", "white")
      guessArray.splice(3, 1);
      guessArray.splice(3, 0, "white");

    }
    if (fourWayToggle4.number == 5) {
      $('#boxd').css("background-color", "black")
      guessArray.splice(3, 1);
      guessArray.splice(3, 0, "black");

    }

    }
}

///ALL FUNCTIONS ABOVE ARE GOOD
// };
// console.log(fourWayToggle);
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

//GUESS FUNCTION//  WORKING
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

playerTurns++;

if(guess1 == Answer1)
	{
		correctAnswers++;
		value1Checked=1;
		guess1Checked=1;

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

if (guess4 == Answer1) {
guess4Checked=1;
console.log('one white');
                    }
    if (guess4 == Answer2) {
    guess4Checked=1;
    console.log('one white');
                      }

      if (guess4 == Answer3) {
      guess4Checked=1;
      console.log('one white');
                        }

                        //////RESULSTS FUNCTION////

const GetResult = () => {

const correctColors = guess1Checked + guess2Checked + guess3Checked + guess4Checked;

if (correctAnswers == 1 && correctColors == 0) {
  return "images/results/1_black.png";
}
if (correctAnswers == 2 && correctColors == 0) {
  return "images/results/2_black.png";
}
if (correctAnswers == 3 && correctColors == 0) {
  return "images/results/3_black.png";
}
if (correctAnswers == 4) {
  return "images/results/4_black.png";
}
if (correctAnswers == 0 && correctColors == 1) {
  return "images/results/1_white.png";
}
if (correctAnswers == 0 && correctColors == 2) {
  return "images/results/2_white.png";
}
if (correctAnswers == 0 && correctColors == 3) {
  return "images/results/3_white.png";
}
if (correctAnswers == 0 && correctColors == 4) {
  return "images/results/4_white.png";
}
if (correctAnswers == 1 && correctColors == 1) {
    return "images/results/1b_1w.png";
}
if (correctAnswers == 2 && correctColors == 1) {
    return "images/results/2b_1w.png";
}
if (correctAnswers == 3 && correctColors == 1) {
    return "images/results/3b_1w.png";
}
if (correctAnswers == 1 && correctColors == 2) {
    return "images/results/1b_2w.png";
}
if (correctAnswers == 2 && correctColors == 2) {
    return "images/results/2b_2w.png";
}
if (correctAnswers == 3 && correctColors == 1) {
    return "images/results/3b_1w.png";
}
if (correctAnswers == 1 && correctColors == 3) {
    return "images/results/1b_3w.png";
}
if (correctAnswers == 0 && correctColors == 0) {
    return "images/results/noColors.png";
}


console.log(playerTurns);
// if (correctAnswers = 4){
// alert('you win');
}

// console.log(playerTurns);

if (playerTurns === 10) {
alert('you lose. correct code was' + GameCode);
}

///BUTTONS//

$(function(){
	$("#boxa").on('click', () => {
			fourWayToggle1.toggle();
	});
	}
);

$(function(){
	$("#boxb").on('click', () => {
			fourWayToggle2.toggle();
	});
	}
);

$(function(){
	$("#boxc").on('click', () => {
			fourWayToggle3.toggle();
	});
	}
);

$(function(){
	$("#boxd").on('click', () => {
			fourWayToggle4.toggle();
	});
	}
);

$(function(){
	$("#submit1").on('click', () => {
			SwapResult();
	});
	}
);

//BUTTONS//








//guessSubmit MUST BE ENTERED MULTIPLE TIMES TO CHECK PLAYER TURN COUNT//
guessSubmit();

console.log(guessArray);
console.log((result1));



//
//
})
