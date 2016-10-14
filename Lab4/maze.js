window.onload = function(){ //load elements when the page/window loads
	
	var start = document.getElementById("start");
	var end = document.getElementById("end");
	var boundary1 = document.getElementById("boundary1");
	var boundary = document.querySelectorAll(".boundary"); //returns an array
	var hit = false; //used to keep track of whether the player hit a wall(boundary) or not
	var maze = document.getElementById("maze");
		
	start.addEventListener("mouseover", beginMaze); //being the maze when mouse is over S
	
	function restart(){ //reload the page by clicking on S
		location.reload();
	};
	
	function endMaze(){ 
			if (hit){ //Is hit true? Did the player hit a wall?
				//alert("You lose!");
				document.getElementById("status").innerHTML = "You lose!";
			}else{
				//alert("You win!");
				document.getElementById("status").innerHTML = "You win!";
			}
	};
	
	function mouseOver(){ //event handler for when the mouse is over the boundaries
		boundary1.className = "boundary youlose"; //change boundary1 classes
		for (var i = 0; i<boundary.length-1; i++){ //stop one short because we don't want to change the example border under the maze
			boundary[i].className = "boundary youlose"; //attach this class name to the current class name
		}
		hit = true; //player hits a wall (boundary)
	};
		
	function beginMaze(){
			maze.onmouseleave = function(){
			mouseOver();
			endMaze();
		}
		start.addEventListener("click", restart);
		boundary1.addEventListener("mouseover", mouseOver);
		
		for (var j = 0; j < boundary.length-1; j++){
			boundary[j].addEventListener("mouseover", mouseOver);
		}
		
		end.addEventListener("mouseover", endMaze);	//end the maze when the mouse is over E
	};
	
};