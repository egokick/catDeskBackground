
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
var hunger = 100
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
	cat.hunger = hunger;

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
				  	
		  		 geo.computeMorphNormals();
		  		 mat = new THREE.MeshLambertMaterial({color:  0x42c5f4, morphTargets: true }); 
				catObj = new THREE.Mesh( geo, mat );	
				catObj.geometry.verticesNeedUpdate = true;

				model(catObj);

	
})

		}
	);
}

var onProgress = function ( xhr ) {
			if ( xhr.lengthComputable ) {
				var percentComplete = xhr.loaded / xhr.total * 100;
				console.log( Math.round(percentComplete, 2) + '% downloaded' );
			}
		};
var onError = function ( xhr ) {
		};

