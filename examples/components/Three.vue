<template>
	<div id="three-page">
		
	</div>
</template>

<script>
import * as THREE from 'three'
export default{
	mounted(){
			var cWidth = 1000
			var cHeight = 600
			var scene = new THREE.Scene();
			var camera = new THREE.PerspectiveCamera( 50,cWidth/cHeight,0.1, 2000 );
			
			var renderer = new THREE.WebGLRenderer();
			renderer.setSize( cWidth, cHeight );
			document.querySelector('#three-page').appendChild( renderer.domElement );

			// 粒子
			var starsGeometry = new THREE.Geometry();
			
			for ( var i = 0; i < 10000; i ++ ) {
				
				var star = new THREE.Vector3();
				star.x = THREE.Math.randFloatSpread( 2000 );
				star.y = THREE.Math.randFloatSpread( 2000 );
				star.z = THREE.Math.randFloatSpread( 2000 );

				starsGeometry.vertices.push( star );

			}

			var starsMaterial = new THREE.PointsMaterial( { color: 0x888888 } );

			var starField = new THREE.Points( starsGeometry, starsMaterial );

			scene.add( starField );
			
			renderer.render( scene, camera );

	}
}
</script>