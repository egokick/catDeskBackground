
var elapsedTime = 0;
var frameCount = 0;
var lastTime = 0;

lastTime = new Date().getTime();

function fpsDisplay(){
	  var now = new Date().getTime();
	  frameCount++;
		elapsedTime += (now - lastTime);

	lastTime = now;

	if(elapsedTime >=  1000) {
	   fps = frameCount;
	   frameCount = 0;
	   elapsedTime -= 1000;
	}
	 document.getElementById('fps').innerHTML = fps;
}

function displayGUI(){


	var gui = new dat.GUI();
	gui.add(pointLight.position, 'x', 0, 1000);
	gui.add(pointLight.position, 'y', 0, 1000);
	gui.add(pointLight.position, 'z', 0, 1000);	
	
	gui.add(pointLight.color, 'r', 0.0, 1.0);	
	gui.add(pointLight.color, 'g', 0.0, 1.0);	
	gui.add(pointLight.color, 'b', 0.0, 1.0);	

	

}