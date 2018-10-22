var boundaries;
var end;
var start;
var youwin;
var youlose;
var mazeState;


window.onload = function() {
    boundaries = document.querySelectorAll(".boundary");
    end = document.getElementById("end");
    start = document.getElementById("start");
    mazeState = document.getElementById("status");

    end.onmouseover = completeMaze;

    for (var i = 0; i < boundaries.length - 1; i++) {
      boundaries[i].onmouseover = outOfBounds;
	}
}

function outOfBounds(){
	if (youwin = true){
		if(youlose = true)
		{
			youlose = true;
			for (var i = 0; i < boundaries.length - 1; i++) {
			boundaries[i].className += " youlose";
			}
		}
	}
}

function completeMaze(){
	if(youlose = true){
		youwin = true;
		mazeState.innerText = 'You Win!';
		}
}
