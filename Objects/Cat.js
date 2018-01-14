
var cat = {
	obj: {}
	// ,update: new Mobility()
}

var isCatLoaded = false;
var texture = new THREE.Texture();
var catMaterial = new THREE.MeshLambertMaterial({color:
 0x42c5f4, morphTargets: true });

var loader = new THREE.JSONLoader( manager );
var manager = new THREE.LoadingManager();
manager.onProgress = function ( item, loaded, total ) {
	console.log( item, loaded, total );
};

loadJSONModel('cat03.js' , function(model) {
	
	model.scale.set(7,7,7)	
	model.position.y = -68;
	model.position.z = -300;
	model.scale.set(7, 7, 7)
	model.material.map = texture;			
	model.material = catMaterial;			
	model.geometry.computeMorphNormals();	
	model.castShadow = true;
	model.receiveShadow = true;

	cat.obj = model;
	cat.obj.name = "cat"

	cat.move = new Mobility(cat.obj);	
	scene.add( cat.obj );
	isCatLoaded = true;

});

function loadJSONModel(url, model){	

		loader.load( url, function ( geometry, materials ) {									

var catObj
			var mat
		 loader.load('cat02.js', function(geometryA, materialsA){			
		 		// console.log(geometryA.vertices)
		 		// console.log(geometry.vertices)

			var mt1 = new THREE.Geometry();
			mt1.vertices = geometryA.vertices
			// mt1.faces = geometryA.faces

			var geo = new THREE.Geometry();
			geo.vertices = geometry.vertices
			geo.faces = geometry.faces
				
			  geo.morphTargets[0] = {name: 'mt1', vertices: geometryA.vertices};			 
				  	
		  	setTimeout(function() {
		  		 geo.computeMorphNormals();
		  		 mat = new THREE.MeshLambertMaterial({color:  0x42c5f4, morphTargets: true }); 
				catObj = new THREE.Mesh( geo, mat );	
				catObj.geometry.verticesNeedUpdate = true;

				model(catObj);

		  	},1000);

	
})

		}
	);
}

// loadJSONModel('catWalk01.js' , function(model1) {
// 				geometry.morphTargets[0] = {name: 'mt1', vertices: model1.geometry.vertices};

// 	})

	// function ( catObj ) {		

		// catObj.catObjren[0].name = "Cat03"
		// loader.load('catWaqlk01.obj', function(catObjMT1) {
		// 	catObj.scale.set(7, 7, 7)
		// 	// catObj.catObjren[0].geometry.morphTargets[0] =  {name: 'mt1', vertices: catObjMT1.catObjren[0].cubeTarget1.vertices}; 
		// })	

		// catObj.traverse( function ( catObj ) {
		// 	if ( catObj instanceof THREE.Mesh ) {
		// 		catObj.material.map = texture;			
		// 		catObj.material = catMaterial;
				
		// 		catObj.castShadow = true;
		// 		catObj.receiveShadow = true;

		// 	}
		// } );
		// catObj = new THREE.Mesh( catObj, catMaterial);


// cat.obj = new THREE.Mesh( cat.obj, catMaterial);

	// how do I add new functions to the root level of the variable "cat" without deleting existing 
	// functions. I want to call cat.update() instead of having to call cat.move.update()... 
	// TODO. read more and figure this out...#
	// I may want to call obj.update for multiple things
	 // e.g. update  movement + perception + thinking at the same time with obj.update rather than 3 separate update calls

var onProgress = function ( xhr ) {
			if ( xhr.lengthComputable ) {
				var percentComplete = xhr.loaded / xhr.total * 100;
				console.log( Math.round(percentComplete, 2) + '% downloaded' );
			}
		};
var onError = function ( xhr ) {
		};

