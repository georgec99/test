
import * as THREE from '../../libs/three/three.module.js';
import * as THREE from '../../libs/VRButton.js';
import * as THREE from '../../libs/three/jsm/OrbitControls.js';

//Setup

// A three.js project must contain a scene and camera.

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

