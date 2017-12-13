

const sphereMaterial = new THREE.MeshLambertMaterial({color: 0xCC0000});
var startheight=0;
var endheight=0;
var movementDirection = 1;
var i = 0;
var frequency = .3;
var amplitude = 127;
var center = 128;

function Sphere(){
	
	var radius = 10;
	var segments = 16;
	var rings = 16;
	
	this.texture = new THREE.MeshLambertMaterial({color: 0xCC0000});

	this.obj = new THREE.Mesh(
		new  THREE.SphereGeometry(radius,
			segments,
			rings),

		this.texture)

	this.obj.castShadow = true;
	this.obj.receiveShadow = true;

	this.obj.position.z = -600;
	
	this.maxSpeed = 6;
	this.initSpeed = 1;
	this.xSpeed = this.initSpeed;
	this.ySpeed = this.initSpeed;

	this.yVel = 15;
	this.isJumping = false;

	this.x = 0;
	this.multiplier = 0.17;
}

	Sphere.prototype.moveLeft = function() {
		this.accelerationX();
	  	this.obj.position.x -= this.xSpeed;
	};

	Sphere.prototype.moveRight = function() {
		this.accelerationX();
	 	this.obj.position.x += this.xSpeed;
	};

	Sphere.prototype.moveUp = function() {
		this.accelerationY();
	  	this.obj.position.y += this.ySpeed;
	};

	Sphere.prototype.moveDown = function() {
		this.accelerationY();
	  	this.obj.position.y -= this.ySpeed;
	};

	Sphere.prototype.jump = function(){

	}

	Sphere.prototype.decreaseSpeed = function(){	

	  	if (this.xSpeed > this.initSpeed)
	  	{
	  		this.xSpeed *= 0.85;
	  	}
	  	if (this.ySpeed > this.initSpeed)
	  	{
	  		this.ySpeed *= 0.85;
	  	}	  	
	
	}

	Sphere.prototype.accelerationX = function(x) {
		 	if(this.xSpeed < this.maxSpeed){
	  		this.xSpeed *= 1.05;
		  }
	}

	Sphere.prototype.accelerationY = function() {
		if(this.ySpeed < this.maxSpeed){
		this.ySpeed *= 1.1;
		} 
	}


Sphere.prototype.update = function(){		

	if (Key.isDown(Key.UP) || Key.isDown(Key.W)) this.moveUp();
	if (Key.isDown(Key.LEFT) || Key.isDown(Key.A)) this.moveLeft();
	if (Key.isDown(Key.DOWN) || Key.isDown(Key.S)) this.moveDown();
	if (Key.isDown(Key.RIGHT) || Key.isDown(Key.D)) this.moveRight();
  	
  	if(Key.isDown(Key.SPACE)) {
  		this.isJumping = true;
  		if(startheight ==0){
  			startheight = this.obj.position.y;
  		}
  	}
  	
  	if (this.isJumping){
  		if(this.x >= 6.300318530718){
  				this.isJumping=false;
  				this.x = 0;
  				if(endheight ==0){
  			endheight = this.obj.position.y;
  			
  			if(Math.abs((Math.abs(endheight) - Math.abs(startheight))) < 2 )
  			{
  				this.obj.position.y -= (Math.abs(endheight) - Math.abs(startheight));
  			}	
  			endheight = 0;
  			startheight=0;
  		}

  			}
  		else {
				this.x += this.multiplier;
  			this.obj.position.y += sinWave(this.x) * 3.9;
  		}
  	}  	

	if (Key.allUp()){ // no movement key is pressed
		this.decreaseSpeed();
	}

  sphere.texture.color.setHex(gradientColorHEX(i));

  //float up and down
	// sphere.obj.position.y += Math.sin(i);
}
