var cat

var isCatLoaded = false;
var texture = new THREE.Texture();
var catMaterial = new THREE.MeshBasicMaterial({color: 0x42c5f4});
var loader = new THREE.OBJLoader( manager );
var manager = new THREE.LoadingManager();

loadCat(function(catObj) {

	cat = catObj;
	scene.add( cat );
	isCatLoaded = true;

});



manager.onProgress = function ( item, loaded, total ) {
	console.log( item, loaded, total );
};

function loadCat(callbackStoreCat){	
		loader.load( 'https://raw.githubusercontent.com/egokick/catDeskBackground/master/cat2.obj', function ( object ) {
		
		object.traverse( function ( child ) {
			if ( child instanceof THREE.Mesh ) {
				child.material.map = texture;			
				child.material = catMaterial;
				
				child.castShadow = true;
				child.receiveShadow = true;

			}
		} );

		object.position.y = 1;
		object.position.z = -300;

		// 
		
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
