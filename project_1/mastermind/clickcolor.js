$(() => {

$(function(){
	$("#red").on('click', () => {
			click.enterColor("red");
	});
	}
);

$(function(){
	$("#blue").on('click', () => {
			click.enterColor("blue");
	});
	}
);

$(function(){
	$("#green").on('click', () => {
			click.enterColor("green");
	});
	}
);

$(function(){
	$("#yellow").on('click', () => {
			click.enterColor("yellow");
	});
	}
);

$(function(){
	$("#white").on('click', () => {
			click.enterColor("white");
	});
	}
);

$(function(){
	$("#black").on('click', () => {
			click.enterColor("black");
	});
	}
);

$(function(){
	$("#submit").on('click', () => {
			click.guessSubmit();
	});
	}
);
})
