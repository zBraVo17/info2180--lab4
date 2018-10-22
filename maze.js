var boundaries;
var end;
var start;
var win;
var youlose;

window.onload = function() {
    boundaries = document.querySelectorAll(".boundary");
    end = document.getElementById("end");
    start = document.getElementById("start");
    for (var i = 0; i < boundaries.length - 1; i++) {
      boundaries[i].onmouseover = outOfBounds;
	}
}

function outOfBounds(){
	if (win = true){
		if(youlose = true)
		{
			youlose = true;
			for (var i = 0; i < boundaries.length - 1; i++) {
			boundaries[i].className += " youlose";
			}
		}
	}
}
