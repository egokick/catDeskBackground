	window.addEventListener('keyup', function(event) { Key.onKeyup(event); }, false);
	window.addEventListener('keydown', function(event) { Key.onKeydown(event); }, false);


	//keyup down helper
	var Key = {
	  _pressed: {},
 		
 	  SPACE: 32, // JUMP

	  W: 87, // ^
	  A: 65, //  < 
	  S: 83, //  v
	  D: 68, // > 
	  Q: 81, // Rotate Counter Clockwise 
	  R: 82, // Rotate Clockwise

	  LEFT: 37,
	  UP: 38,
	  RIGHT: 39,
	  DOWN: 40,	  

	  allUp: function() {
	  	return !(this._pressed[37])
	  	&& !(this._pressed[38])
	  	&& !(this._pressed[39])
	  	&& !(this._pressed[40])
	  	&& !(this._pressed[87])
	  	&& !(this._pressed[65])
	  	&& !(this._pressed[83])
	  	&& !(this._pressed[68])
	  },

	  isDown: function(keyCode) {
	    return this._pressed[keyCode];
	  },
	  
	  onKeydown: function(event) {
	    this._pressed[event.keyCode] = true;
	  },
	  
	  onKeyup: function(event) {
	    delete this._pressed[event.keyCode];
	  }
	};