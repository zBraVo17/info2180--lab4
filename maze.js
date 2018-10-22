/*
Author :  Eric Anderson
ID #: 620085617
Lab 4
*/

//Variables

var boundaries;
var end;
var start;
var youwin;
var youlose;
var mazeState;
//var status = '';
var mazeBoundary;

    // window.onload handler that sets up the necessary event handlers on the page
window.onload = function() {
    //Select the HTML element from index.html
    boundaries = document.querySelectorAll(".boundary");
    end = document.getElementById("end");
    start = document.getElementById("start");
    mazeState = document.getElementById("status");
    mazeBoundary = document.getElementById("maze");

    //Function for the events used
    end.onmouseover = completeMaze;
    start.onclick = restartableMaze;
    mazeBoundary.onmouseleave = noCheating;

    //For loop was used to exclude the unused boundary from being touched
    for (var i = 0; i < boundaries.length - 1; i++) {
      boundaries[i].onmouseover = outOfBounds;
	}
}

    //The outOfBounds function is the check if the user hit the walls within the maze
function outOfBounds(){
	if (youwin = true){
		if(youlose = true)
		{
			youlose = true;
    //The maze Status to indicate to the user that the user have lost
      mazeState.innerText = "You Lose! Click 'S' to restart the Maze";
			for (var i = 0; i < boundaries.length - 1; i++) {
			boundaries[i].className += " youlose";
			}
		}
	}
}

    //The completeMaze validate that the user have complete the maze without hitting the walls
function completeMaze(){
	if(youlose = true){
		youwin = true;
		mazeState.innerText = "You Win! Click 'S' to replay the Maze";
		}
}

    //The restartableMaze is implemented to make the maze restartable by click the 'S'
function restartableMaze(){
	win = false;
	youlose = false;
	//mazeState.innerText = ;
  mazeState.innerText = "Move your mouse over the 'S' to begin";
  //mazeState.innerText = "Move your mouse over the 'S' to begin, move through and complete the maze without hitting the walls.";
	for (var i = 0; i < boundaries.length - 1; i++) {
		boundaries[i].className = "boundary";
	}
}

/* On-Page status updates trial
function onPageUpdate(status) {
        document.getElementById('status').textContent = status;
    } */

    //The noCheating function is to ensure the user did  not cheat by moves the mouse anywhere outside the maze after clicking the Start area
function noCheating(){
  if(win = true){
        outOfBounds();
  }
}
