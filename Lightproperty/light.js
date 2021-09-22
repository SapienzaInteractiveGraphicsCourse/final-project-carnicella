import * as THREE from '../three.js-master/build/three.module.js';

//CREAZIONE LUCI
function createLight(ii) {
    switch (ii) {
        case 1:
            var light = new THREE.PointLight(0xFFFFFF, 1, 50);
            light.position.set(0, 0, 15);
            break;
        case 2:
            var light = new THREE.PointLight(0xFFFFFF, 1, 50);
            light.position.set(15, 0, 0);
            break;
        case 3:
            var light = new THREE.PointLight(0xFFFFFF, 1, 50);
            light.position.set(0, 0, 15);
            break;
        case 4:
            var light = new THREE.PointLight(0xFFFFFF, 1, 50);
            light.position.set(0, 25, 0);
            break;
        case 5:
            var light = new THREE.PointLight(0xFFFFFF, 1, 50);
            light.position.set(25, 0, 0);
            break;
        case 6:
            var light = new THREE.PointLight(0xFFFFFF, 1, 50);
            light.position.set(0, 0, 25);
            break;
        case 7:
            var light = new THREE.PointLight(0xFFFFFF, 1, 50);
            light.position.set(0, 0, 35);
            break;
        case 8:
            var light = new THREE.PointLight(0xFFFFFF, 1, 50);
            light.position.set(0, 35, 0);
            break;
        case 9:
            var light = new THREE.PointLight(0xFFFFFF, 1, 50);
            light.position.set(35, 0, 0);
            break;
    }
    return light;
}


//CREAZIONE LUCI
function createMultipleLight(scene, l, level) {
    switch (l) {
        case 5:
            for (let ii = 1; ii <= 5; ii++) {
                scene[level].add(createLight(ii));
            }
            break;
        case 8:
            for (let ii = 1; ii <= 5; ii++) {
                scene[level].add(createLight(ii));
            }
            break;
        case 13:
            for (let ii = 1; ii <= 4; ii++) {
                scene[level].add(createLight(ii));
            }
            break;
        case 21:
            for (let ii = 1; ii <= 4; ii++) {
                scene[level].add(createLight(ii));
            }
            break;
        case 34:
            for (let ii = 1; ii <= 3; ii++) {
                scene[level].add(createLight(ii));
            }
            break;
        case 55:
            for (let ii = 1; ii <= 3; ii++) {
                scene[level].add(createLight(ii));
            }
            break;
        case 89:
            for (let ii = 1; ii <= 2; ii++) {
                scene[level].add(createLight(ii));
            }
            break;
        case 144:
            for (let ii = 1; ii <= 1; ii++) {
                scene[level].add(createLight(ii));
            }
            break;
        case 233:
            for (let ii = 1; ii <= 1; ii++) {
                scene[level].add(createLight(ii));
            }
            break;
        case 337:
            for (let ii = 1; ii <= 1; ii++) {
                scene[level].add(createLight(ii));
            }
            break;
    }
    return scene;
}

// CREAZIONE LUCE ASSET
function createAssetLight(assPos) {
    var light = new THREE.PointLight(0xFFFFFF, 1, 50);
    console.log("abc", assPos[0]);
    light.position.set(assPos[0], assPos[1], assPos[2]);
    return light;
}

export { createLight, createMultipleLight, createAssetLight };