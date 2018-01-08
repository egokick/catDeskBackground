
function Sphere(){
	
	var radius = 10;
	var segments = 16;
	var rings = 16;
	
	this.texture = new THREE.MeshLambertMaterial({morphTargets:
 true, color: 0xCC0000});


	this.geom =new  THREE.CubeGeometry( 100, 25, 25, 1, 1, 1, this.texture, 1 )
	
	this.cubeTarget1 = new  THREE.CubeGeometry( 25, 25, 25, 1, 1, 1, this.texture, 1 )
	
	this.geom.morphTargets[0] =  {name: 'mt1', vertices: this.cubeTarget1.vertices};
	this.geom.computeMorphNormals();

	this.obj = new THREE.Mesh( this.geom, this.texture)

	this.obj.castShadow = true;
	this.obj.receiveShadow = true;

	this.obj.position.z = -300;
	this.move = new Mobility(this.obj);		
	

	//grrrr I want this to be called from sphere.move.update(), how can I do that!?
		// Sphere.move.update.prototype.changeColor = function(){		
		// 	this.texture.color.setHex(gradientColorHEX(i));
		// }

	//also how can I add the properties currently in sphere.move to the root object scope of sphere 
	// without deleting existing properties...

}
