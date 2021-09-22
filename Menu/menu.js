import * as THREE from '../three.js-master/build/three.module.js';
import * as material from '../Meshproperty/material.js';
import * as position from '../Meshproperty/position.js';

// CREAZIONE MENU
function createMenu(level) {
    var geometry = new THREE.PlaneGeometry(50, 50);
    var mat = material.createMaterialLevel(level);
    var mesh = new THREE.Mesh(geometry, mat);
    mesh = position.createMenuPosition(mesh);
    return mesh;
}

// CREAZIONE LUCE MENU
function createMenuLight() {
    var light = new THREE.PointLight(0xFFFFFF, 1, 500);
    light.position.set(0, 0, 65);
    return light;
}

// CREAZIONE MENU PLAY
function createMenuPlay() {
    var menuplay = new THREE.PlaneGeometry(8, 3);
    var mat = material.createMaterial(9999);
    var mesh = new THREE.Mesh(menuplay, mat);
    mesh = position.createMenuPlayPosition(mesh);
    return mesh;
}

export { createMenu, createMenuLight, createMenuPlay };

