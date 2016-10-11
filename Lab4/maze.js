window.onload= function(){
	
	var boundary1 = document.getElementById("boundary1")
	
	boundary1.addEventListener("mouseover", mouseOver);
	
	function mouseOver() {
		boundary1.className = "boundary youlose";
	};
};