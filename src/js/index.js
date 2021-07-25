//import * as THREE from './node_modules/three/three.module.js';
//import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
	alpha: true // remove canvas bg color
});

//tamano de render en pantalla

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

var dae, //grafico
	loader = new THREE.ColladaLoader();


const loadCollada = (collada) => {
	dae = collada.scene;
	scene.add(dae);
};


loader.load('src/dae/casa.dae');

const renderCasa = () => {
	requestAnimationFrame(renderCasa);
	renderer.render(scene, camera);
}

renderCasa();

alert("todoien");