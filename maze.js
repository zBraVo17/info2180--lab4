var boundaries;
var end;
var start;
var youwin;
var youlose;
var mazeState;
// var status = '';


window.onload = function() {
    boundaries = document.querySelectorAll(".boundary");
    end = document.getElementById("end");
    start = document.getElementById("start");
    mazeState = document.getElementById("status");

    end.onmouseover = completeMaze;
    start.onclick = restartableMaze;

    for (var i = 0; i < boundaries.length - 1; i++) {
      boundaries[i].onmouseover = outOfBounds;
	}
}

function outOfBounds(){
	if (youwin = true){
		if(youlose = true)
		{
			youlose = true;
      mazeState.innerText = "You Lose! Click 'S' to restart the Maze";
			for (var i = 0; i < boundaries.length - 1; i++) {
			boundaries[i].className += " youlose";
			}
		}
	}
}

function completeMaze(){
	if(youlose = true){
		youwin = true;
		mazeState.innerText = "You Win! Click 'S' to restart the Maze";
		}
}

function restartableMaze(){
	win = false;
	youlose = false;
	//mazeState.innerText = ;
  mazeState.innerText = "Move your mouse over the 'S' to begin, move through and complete the maze without hitting the walls.";
	for (var i = 0; i < boundaries.length - 1; i++) {
		boundaries[i].className = "boundary";
	}
}
