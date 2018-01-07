
var cat = {
	obj: {}
	// ,update: new Mobility()
}

var isCatLoaded = false;
var texture = new THREE.Texture();
var catMaterial = new THREE.MeshLambertMaterial({color:
 0x42c5f4});

var loader = new THREE.OBJLoader( manager );
var manager = new THREE.LoadingManager();

loadCat(function(catObj) {

	cat.obj = catObj;

// cat.obj = new THREE.Mesh( cat.obj, catMaterial);

	// how do I add new functions to the root level of the variable "cat" without deleting existing 
	// functions. I want to call cat.update() instead of having to call cat.move.update()... 
	// TODO. read more and figure this out...#
	// I may want to call obj.update for multiple things
	 // e.g. update  movement + perception + thinking at the same time with obj.update rather than 3 separate update calls
	cat.move = new Mobility(cat.obj);	
	scene.add( cat.obj );
	isCatLoaded = true;

document.title = 'Help'
});

manager.onProgress = function ( item, loaded, total ) {
	console.log( item, loaded, total );
};


function loadCat(callbackStoreCat){	
		loader.load( 'cat3.obj', function ( object ) {		

		object.children[0].name = "Cat03"
		loader.load('catWalk01.obj', function(objectMT1) {
			object.scale.set(7, 7, 7)
			// object.children[0].geometry.morphTargets[0] =  {name: 'mt1', vertices: objectMT1.children[0].cubeTarget1.vertices}; 
		})	

		object.traverse( function ( child ) {
			if ( child instanceof THREE.Mesh ) {
				child.material.map = texture;			
				child.material = catMaterial;
				
				child.castShadow = true;
				child.receiveShadow = true;

			}
		} );

		// object = new THREE.Mesh( object, catMaterial);

		object.position.y = -68;
		object.position.z = -300;
		object.scale.set(7, 7, 7)

		callbackStoreCat(object);			

	}, onProgress, onError );
}

var onProgress = function ( xhr ) {
			if ( xhr.lengthComputable ) {
				var percentComplete = xhr.loaded / xhr.total * 100;
				console.log( Math.round(percentComplete, 2) + '% downloaded' );
			}
		};
var onError = function ( xhr ) {
		};

