$(() => {

console.log('hi');

//MASTER MIND GAMe

// -----
// //variables
// ------

const colorInPlay = ['red', 'green', 'blue', 'yellow', 'white', 'black'];

const colorsForResult = ['white', 'black'];

let rounds = 0;

let GameCode = []; //test for now

let guessArray = ['black', 'black', 'black', 'black'];

const resCollection = ['#res1', '#res2', '#res3', '#res4', '#res5', '#res6', '#res7', '#res8', '#res9', '#res10',]

$('.results').append('<img src = images/results/blank.png>');




// FUNCTIONS
// ----


//
//
const nextRound = '<div id = "Round" class="level"> <h3 class="title"></h3><div class="buttondisplay"><a id="boxa" class="button" class="active"></a><a id="boxb" class="button" class="active"></a><a id="boxc" class="button" class="active"></a><a id="boxd" class="button" class="active"></a></div><a id="submit" class="submitter">SUBMIT</a><div id="res1" class="results"></div></div>';

const buildRounds = () => {
  for (i = 1; i <= 10; i++){
    $('#Gameboard').append('<div id = "Round'+i+'" class="level"> <h3 class="title">Round '+i+'</h3><div class="buttondisplay"><a id="box'+i+'a" class="button btna" class="active"></a><a id="box'+i+'b" class="button btnb" class="active"></a><a id="box'+i+'c" class="button btnc" class="active"></a><a id="box'+i+'d" class="button btnd" class="active"></a></div><a id="submit'+i+'" class="submitter">SUBMIT</a><div id="res'+i+'" class="results"></div></div>');

    // $('.title').append(i);
  }
}

// }

//CODE GOOD//

const generateCode = GameCode.push(colorInPlay[(Math.floor(Math.random() * 6))]) + GameCode.push(colorInPlay[(Math.floor(Math.random() * 6))]) + GameCode.push(colorInPlay[(Math.floor(Math.random() * 6))]) +
GameCode.push(colorInPlay[(Math.floor(Math.random() * 6))]);

$('#answerA').css('background-color', GameCode[0]).hide()
$('#answerB').css('background-color', GameCode[1]).hide()
$('#answerC').css('background-color', GameCode[2]).hide()
$('#answerD').css('background-color', GameCode[3]).hide()

///CODE GOOD   * this is code player must break
// console.log(GameCode);




const SwapResult = () => {
      var x = document.getElementById('submit'+ (rounds + 1));
              if (x.style.display === 'none') {
                    x.style.display = 'block';
                } else {
                    x.style.display = 'none';
                  }
            $('#Round').removeClass('active').addClass('inactive');


              guessSubmit();
              // $('res1').append('img src = ' + GetResult() + '');
              // $("#R").attr("disabled", true);

}


// }
//
///ALL FUNCTIONS BELOW ARE GOOD/////

const fourWayToggle1 = {
    number: 0,
    toggle(e){
      console.log(e);
      fourWayToggle1.number = (fourWayToggle1.number + 1) % 6;
    if (fourWayToggle1.number == 0) {
      $(e.currentTarget).css("background-color", "red");
      guessArray.splice(0, 1);
      guessArray.splice(0, 0, "red");

    }
    if (fourWayToggle1.number == 1) {
      $(e.currentTarget).css("background-color", "blue")
      guessArray.splice(0, 1);
      guessArray.splice(0, 0, "blue");

    }
    if (fourWayToggle1.number == 2) {
      $(e.currentTarget).css("background-color", "green");
      guessArray.splice(0, 1);
      guessArray.splice(0, 0, "green");

    }
    if (fourWayToggle1.number == 3) {
      $(e.currentTarget).css("background-color", "yellow")
      guessArray.splice(0, 1);
      guessArray.splice(0, 0, "yellow");

    }
    if (fourWayToggle1.number == 4) {
      $(e.currentTarget).css("background-color", "white")
      guessArray.splice(0, 1);
      guessArray.splice(0, 0, "white");

    }
    if (fourWayToggle1.number == 5) {
      $(e.currentTarget).css("background-color", "black")
      guessArray.splice(0, 1);
      guessArray.splice(0, 0, "black");0

    }

    }
}

const fourWayToggle2 = {
    number: 0,
    toggle(e){
      fourWayToggle2.number = (fourWayToggle2.number + 1) % 6;
    if (fourWayToggle2.number == 0) {
      $(e.currentTarget).css("background-color", "red");
      guessArray.splice(1, 1);
      guessArray.splice(1, 0, "red");

    }
    if (fourWayToggle2.number == 1) {
      $(e.currentTarget).css("background-color", "blue")
      guessArray.splice(1, 1);
      guessArray.splice(1, 0, "blue");

    }
    if (fourWayToggle2.number == 2) {
      $(e.currentTarget).css("background-color", "green");
      guessArray.splice(1, 1);
      guessArray.splice(1, 0, "green");

    }
    if (fourWayToggle2.number == 3) {
      $(e.currentTarget).css("background-color", "yellow")
      guessArray.splice(1, 1);
      guessArray.splice(1, 0, "yellow");

    }
    if (fourWayToggle2.number == 4) {
      $(e.currentTarget).css("background-color", "white")
      guessArray.splice(1, 1);
      guessArray.splice(1, 0, "white");

    }
    if (fourWayToggle2.number == 5) {
      $(e.currentTarget).css("background-color", "black")
      guessArray.splice(1, 1);
      guessArray.splice(1, 0, "black");

    }

    }
}

const fourWayToggle3 = {
    number: 0,
    toggle(e){
      fourWayToggle3.number = (fourWayToggle3.number + 1) % 6;
    if (fourWayToggle3.number == 0) {
      $(e.currentTarget).css("background-color", "red");
      guessArray.splice(2, 1);
      guessArray.splice(2, 0, "red");

    }
    if (fourWayToggle3.number == 1) {
      $(e.currentTarget).css("background-color", "blue")
      guessArray.splice(2, 1);
      guessArray.splice(2, 0, "blue");

    }
    if (fourWayToggle3.number == 2) {
      $(e.currentTarget).css("background-color", "green");
      guessArray.splice(2, 1);
      guessArray.splice(2, 0, "green");

    }
    if (fourWayToggle3.number == 3) {
      $(e.currentTarget).css("background-color", "yellow")
      guessArray.splice(2, 1);
      guessArray.splice(2, 0, "yellow");

    }
    if (fourWayToggle3.number == 4) {
      $(e.currentTarget).css("background-color", "white")
      guessArray.splice(2, 1);
      guessArray.splice(2, 0, "white");

    }
    if (fourWayToggle3.number == 5) {
      $(e.currentTarget).css("background-color", "black")
      guessArray.splice(2, 1);
      guessArray.splice(2, 0, "black");

    }

    }
}

const fourWayToggle4 = {
    number: 0,
    toggle(e){
      fourWayToggle4.number = (fourWayToggle4.number + 1) % 6;
    if (fourWayToggle4.number == 0) {
      $(e.currentTarget).css("background-color", "red");
      guessArray.splice(3, 1);
      guessArray.splice(3, 0, "red");

    }
    if (fourWayToggle4.number == 1) {
      $(e.currentTarget).css("background-color", "blue")
      guessArray.splice(3, 1);
      guessArray.splice(3, 0, "blue");

    }
    if (fourWayToggle4.number == 2) {
      $(e.currentTarget).css("background-color", "green");
      guessArray.splice(3, 1);
      guessArray.splice(3, 0, "green");

    }
    if (fourWayToggle4.number == 3) {
      $(e.currentTarget).css("background-color", "yellow")
      guessArray.splice(3, 1);
      guessArray.splice(3, 0, "yellow");

    }
    if (fourWayToggle4.number == 4) {
      $(e.currentTarget).css("background-color", "white")
      guessArray.splice(3, 1);
      guessArray.splice(3, 0, "white");

    }
    if (fourWayToggle4.number == 5) {
      $(e.currentTarget).css("background-color", "black")
      guessArray.splice(3, 1);
      guessArray.splice(3, 0, "black");

    }

    }
}

///ALL FUNCTIONS ABOVE ARE GOOD


//GUESS FUNCTION//  WORKING
//
let guessSubmit = () => {

let correctAnswers=0;
let correctColors =0;

rounds++;
console.log(rounds);
let guess1Checked=0;
let guess2Checked=0;
let guess3Checked=0;
let guess4Checked=0;

// let correctColors = guess1Checked + guess2Checked + guess3Checked + guess4Checked;


const Answer1 = GameCode[0];
const Answer2 = GameCode[1];
const Answer3 = GameCode[2];
const Answer4 = GameCode[3];

const guess1 = guessArray[0];
const guess2 = guessArray[1];
const guess3 = guessArray[2];
const guess4 = guessArray[3];

// playerTurns++;

if(guess1 === Answer1)
	{
		correctAnswers++;
		// value1Checked=1;
		// guess1Checked=1;

    console.log('one Black');
	}
  else if (guess1 === Answer2 && guess2 !== Answer2) {
  correctColors++;
  console.log('one white');
    }

    else if (guess1 === Answer3 && guess3 !== Answer3) {
  correctColors++;
  console.log('one white');
      }

    else if (guess1 === Answer4 && guess4 !== Answer4) {
  correctColors++;
    console.log('one white');
        }
	if(guess2 === Answer2)
	{
		correctAnswers++;
		// value2Checked=1;
		// guess2Checked=1;

    console.log('one Black');
	}

  else if (guess2 === Answer1 && guess1 !== Answer1) {
  correctColors++;
  console.log('one white');
          }

    else if (guess2 === Answer3 && guess3 !== Answer3) {
  correctColors++;
    console.log('one white');
            }

      else if (guess2 === Answer4 && guess4 !== Answer4) {
      correctColors++;
      console.log('one white');
              }
  if(guess3 === Answer3)
{
  correctAnswers++;
  // value3Checked=1;
  // guess3Checked=1;

  console.log('one Black');
}

else if (guess3 === Answer1 && guess1 !== Answer1) {
correctColors++;
console.log('one white');
                    }
    else if (guess3 === Answer2 && guess2 !== Answer2) {
    correctColors++;
    console.log('one white');
                      }

      else if (guess3 === Answer4 && guess4 !== Answer4) {
      correctColors++;
      console.log('one white');
            }
if(guess4 === Answer4)
{
  correctAnswers++;

  // value4Checked=1;
  // guess4Checked=1;

  console.log('one Black');
}

else if (guess4 === Answer1 && guess1 !== Answer1) {
correctColors++;
console.log('one white');
                    }
    else if (guess4 === Answer2 && guess2 !== Answer2) {
    correctColors++;
    console.log('one white');
                      }

      else if (guess4 === Answer3 && guess3 !== Answer3) {
      correctColors++;
      console.log('one white');
    }

console.log(rounds - 1);
console.log(resCollection[rounds - 1]);
                        if (correctAnswers === 1 && correctColors === 0) {
                          $(resCollection[rounds - 1]).empty().append("<img src = images/results/1_black.png>");

                        }
                        if(correctAnswers === 2 && correctColors === 0) {
                          $('.results').empty().append("<img src = images/results/2_black.png>");
                        }
                        if (correctAnswers == 3 && correctColors == 0) {
                          $('.results').empty().append("<img src = images/results/3_black.png>");
                        }
                        if (correctAnswers == 4) {
                          $('.results').empty().append("<img src = images/results/4_black.png>");
                          $('#answerA').show();
                          $('#answerB').show();
                          $('#answerC').show();
                          $('#answerD').show();
                          $('#ctc').hide();
                        }
                        if (correctAnswers == 0 && correctColors == 1) {
                          $('.results').empty().append("<img src = images/results/1_white.png>");
                        }
                        if (correctAnswers == 0 && correctColors == 2) {
                          $('.results').empty().append("<img src = images/results/2_white.png>");
                        }
                        if (correctAnswers == 0 && correctColors == 3) {
                          $('.results').empty().append("<img src = images/results/3_white.png>");
                        }
                        if (correctAnswers == 0 && correctColors == 4) {
                          $('.results').empty().append("<img src = images/results/4_white.png>");
                        }
                        if (correctAnswers == 1 && correctColors == 1) {
                            $('.results').empty().append("<img src = images/results/1b_1w.png>");
                        }
                        if (correctAnswers == 2 && correctColors == 1) {
                            $('.results').empty().append("<img src = images/results/2b_1w.png>");
                        }
                        if (correctAnswers == 3 && correctColors == 1) {
                            $('.results').empty().append("<img src = images/results/3b_1w.png>");
                        }
                        if (correctAnswers == 1 && correctColors == 2) {
                            $('.results').empty().append("<img src = images/results/1b_2w.png>");
                        }
                        if (correctAnswers == 2 && correctColors == 2) {
                            $('.results').empty().append("<img src = images/results/2b_2w.png>");
                        }
                        if (correctAnswers == 3 && correctColors == 1) {
                            $('.results').empty().append("<img src = images/results/3b_1w.png>");
                        }
                        if (correctAnswers == 1 && correctColors == 3) {
                            $('.results').empty().append("<img src = images/results/1b_3w.png>");
                        }
                        if (correctAnswers == 0 && correctColors == 0) {
                            $('.results').empty().append("<img src = images/results/noColors.png>");
                        }

console.log(rounds);
                              console.log(correctColors);
                            }
////////////CODE ABOVE GOOD///////


                        //////RESULSTS FUNCTION////






// console.log(playerTurns);
// console.log(GetResult());
// alert('you win');
// }

// console.log(playerTurns);

// if (playerTurns === 10) {
// alert('you lose. correct code was' + GameCode);
// }

///BUTTONS//

// $(function(){
// 	$("#boxa").on('click', () => {
// 			fourWayToggle1.toggle();
// 	});
// 	}
// );
//
// $(function(){
// 	$("#boxb").on('click', () => {
// 			fourWayToggle2.toggle();
// 	});
// 	}
// );
//
// $(function(){
// 	$("#boxc").on('click', () => {
// 			fourWayToggle3.toggle();
// 	});
// 	}
// );
//
// $(function(){
// 	$("#boxd").on('click', () => {
// 			fourWayToggle4.toggle();
// 	});
// 	}
// );

// const z = parseInt('box2a'.replace(/[^0-9\.]/g, ''), 10);
// alert(number);
//
// $('#box2a').on('click',)


	// $("#box2a").click(fourWayToggle1.toggle());


//
$(function(){
	$(".btna").on('click', (e) => {
			fourWayToggle1.toggle(e);
	});
	}
);

$(function(){
	$(".btnb").on('click', (e) => {
			fourWayToggle2.toggle(e);
	});
	}
);

$(function(){
	$(".btnc").on('click', (e) => {
			fourWayToggle3.toggle(e);
	});
	}
);

$(function(){
	$(".btnd").on('click', (e) => {
			fourWayToggle4.toggle(e);
	});
	}
);




$(function(){
	$(".submitter").on('click', () => {
			SwapResult();

      console.log(guessArray);
      // console.log(generateCode);
      // console.log(generateCode);


	});
	}
);

// $(function(){
// 	$("#learn").on('click', () => {
//     var x = document.getElementById('instructions');
//     if (x.style.display === 'none') {
//         x.style.display = 'block';
//     } else {
//         x.style.display = 'none';
//     }
//   })
// })
// })

//BUTTONS//

// var text = $('2a').text();





//guessSubmit MUST BE ENTERED MULTIPLE TIMES TO CHECK PLAYER TURN COUNT//
// guessSubmit();
buildRounds();
console.log(guessArray);

console.log(generateCode);
console.log(colorInPlay);
console.log(GameCode);
console.log(rounds);




//
//
})
