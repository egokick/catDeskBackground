
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

var controls = sphere;

var gui = new dat.GUI();
gui.add(controls, 'x', 0, 10.5);
gui.add(controls, 'maxSpeed', 0, 100);
