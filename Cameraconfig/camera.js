import * as THREE from '../three.js-master/build/three.module.js';

const windowHalf = new THREE.Vector2(window.innerWidth / 2, window.innerHeight / 2);
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / innerHeight, 0.1, 500);
const mouse = new THREE.Vector2();
const target = new THREE.Vector2();

function onMouseMove(event) {
    //mouse.x = (event.clientX - window.innerWidth / 2);
    //mouse.y = (event.clientY - window.innerHeight / 2);
}

function onMouseWheel(event) {
    camera.position.z += event.deltaY * 0.1;
}

// CREAZIONE LUCE SU CAMERA
function createPointLightCamera(camera) {
    var pointLight = new THREE.PointLight(0xFFFFFF, 1, 100);
    pointLight.position.set(1, 1, 2);
    camera.add(pointLight);
    return camera;
}

function getCamera() {
    return camera;
}

function getMouse() {
    return mouse;
}

function getTarget() {
    return target;
}

export { getCamera, getMouse, getTarget, createPointLightCamera, onMouseWheel, onMouseMove };