
class Mobility {

	constructor(obj)
	{
		this.isJumping = false;
		this.maxSpeed = 6;
		this.initSpeed = 1;
		this.xSpeed = this.initSpeed;
		this.ySpeed = this.initSpeed;
		this.x = 0;
		this.multiplier = 0.17;
		this.endheight = 0;
		this.startheight=0;

		this.accelerationX = function(x) {
	 	if( this.xSpeed <  this.maxSpeed){
  		 this.xSpeed *= 1.05;
	  		}
		}

		this.accelerationY = function() {
			if( this.ySpeed <  this.maxSpeed){
			 this.ySpeed *= 1.1;
			} 
		}

		this.moveLeft = function() {
				this.accelerationX();
			  	obj.position.x -= this.xSpeed;
			};

			this.moveRight = function() {
				this.accelerationX();
			 	obj.position.x +=  this.xSpeed;
			};

			this.moveUp = function() {
				this.accelerationY();
			  	obj.position.y +=  this.ySpeed;
			};

			this.moveDown = function() {
				this.accelerationY();
			  	obj.position.y -=  this.ySpeed;
			};

			this.decreaseSpeed = function(){	

			  	if (this.xSpeed >  this.initSpeed)
			  	{
			  		 this.xSpeed *= 0.85;
			  	}
			  	if ( this.ySpeed >  this.initSpeed)
			  	{
			  		 this.ySpeed *= 0.85;
			  	}	  		
			}

			this.jump = function(){
				
				this.isJumping = true;
		  		if (this.startheight == 0)
		  		{
		  			this.startheight = obj.position.y;
		  		}
			}
			
			this.jumping = function(){

		  		if(this.x >= 6.300318530718)
		  		{
					this.isJumping=false;
					this.x = 0;
					if(this.endheight ==0)
					{
						this.endheight = obj.position.y;
			  			
			  			if(Math.abs((Math.abs(this.endheight) - Math.abs(this.startheight))) < 2 )
			  			{
			  				obj.position.y -= (Math.abs(this.endheight) - Math.abs(this.startheight));
			  			}	
			  			this.endheight = 0;
			  			this.startheight=0;
			  		}
				}
		  		else 
		  		{
					this.x += this.multiplier;
		  			obj.position.y += sinWave(this.x) * 3.9;
		  		}
			}

			this.update = function(){		

				if (Key.isDown(Key.UP) || Key.isDown(Key.W)) this.moveUp();
				if (Key.isDown(Key.LEFT) || Key.isDown(Key.A)) this.moveLeft();
				if (Key.isDown(Key.DOWN) || Key.isDown(Key.S)) this.moveDown();
				if (Key.isDown(Key.RIGHT) || Key.isDown(Key.D)) this.moveRight();	  	
				//rotate
				if(Key.isDown(Key.Q)) obj.rotation.y -= 0.05;
				if(Key.isDown(Key.R)) obj.rotation.y += 0.05;

			  	if(Key.isDown(Key.SPACE)) this.jump();
			  	if (this.isJumping) this.jumping();

				if (Key.allUp())
				{ // no movement key is pressed
					this.decreaseSpeed();
				}
			}

	}
}