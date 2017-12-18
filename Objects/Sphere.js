
function Sphere(){
	
	var radius = 10;
	var segments = 16;
	var rings = 16;
	
	this.texture = new THREE.MeshLambertMaterial({color: 0xCC0000});

	this.obj = new THREE.Mesh(
		new  THREE.SphereGeometry(radius, segments,	rings),
		this.texture)

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
