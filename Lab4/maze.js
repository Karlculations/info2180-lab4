window.onload= function(){
	
	var boundary1 = document.getElementById("boundary1")
	var boundary = document.querySelectorAll(".boundary"); //returns an array
	
	boundary1.addEventListener("mouseover", mouseOver);
	
	for (var j = 0; j < boundary.length-1; j++){
		boundary[j].addEventListener("mouseover", mouseOver);
	}
	
	function mouseOver() {
		boundary1.className = "boundary youlose";
		for (var i = 0; i<boundary.length-1; i++){ //stop one short because we don't want to change the example border under the maze
			boundary[i].className += " youlose";
		};
	};
};