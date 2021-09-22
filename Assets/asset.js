import * as THREE from '../three.js-master/build/three.module.js';

// CARICAMNETO ASSET
function load(scene, loader, domEvents) {

    loader.load('../Assets/scene.gltf', function (gltf) {
        console.log(gltf);
        var ass = gltf.scene;
        scene.add(ass);
        domEvents.addEventListener(ass, 'click', event => {
        })
    }, function (xhr) {
        console.log((xhr.loaded / xhr.total * 100) + "% loaded");
    }, undefined, function (error) {
        console.error(error);
    });
    return scene;
}

// SETUP ANIMATION MIXER
function createClipActionMixer(ass, mixer) {
    return new THREE.AnimationMixer(ass);
}

// CREAZIONE DEL CLIP ACTION 
function createClipAction(mixer, clip) {
    return mixer.clipAction(clip);
}

// CREAZIONE ANIMATION CLIP
function createAnimationClip(ass, camera) {

    // POSIZIONE
    const positionKF = new THREE.VectorKeyframeTrack('.position', [0, 1, 2], [ass.position.x, ass.position.y, ass.position.z, ass.position.x, ass.position.y, ass.position.z+5, camera.position.x, camera.position.y + 25, camera.position.z]);

    // SCALA
    const scaleKF = new THREE.VectorKeyframeTrack('.scale', [0, 1, 2], [1, 1, 1, 4, 7, 9, 12, 13, 14]);

    // ROTAZIONE
    const xAxis = new THREE.Vector3(1, 0, 0);
    const qInitial = new THREE.Quaternion().setFromAxisAngle(xAxis, 0);
    const qFinal = new THREE.Quaternion().setFromAxisAngle(xAxis, Math.PI);
    const quaternionKF = new THREE.QuaternionKeyframeTrack('.quaternion', [0, 1, 2], [qInitial.x, qInitial.y, qInitial.z, qInitial.w, qFinal.x, qFinal.y, qFinal.z, qFinal.w, qInitial.x, qInitial.y, qInitial.z, qInitial.w]);

    // CREAZIONE DELLA SEQUENZA DI CON LE TRACCE 
    return new THREE.AnimationClip('Action', 1.89, [scaleKF, positionKF, quaternionKF]);
}

function createGeometryAnimation(ass) {

    // POSITION
    var positionKF = getPositionKFCase(ass, Math.floor(Math.random() * 4));

    // SCALE
    var scaleKF = getScaleKFCase(Math.floor(Math.random() * 2));

    //ROTATION
    var quaternionKF = getRotationKFCase(Math.floor(Math.random() * 2));

    // CREAZIONE DELLA SEQUENZA DI CON LE TRACCE 
    return new THREE.AnimationClip('ActionGeom', 3, [scaleKF, quaternionKF]);
}
export { load, createClipActionMixer, createClipAction, createAnimationClip, createGeometryAnimation };

function getRotationKFCase(c) {
    var xAxis = null;
    var qInitial = null;
    var qFinal = null;
    var quaternionKF = null;
    switch (0) {
        case 0:
            // ROTAZIONE avanti dietro
            xAxis = new THREE.Vector3(1, 0, 0);
            qInitial = new THREE.Quaternion().setFromAxisAngle(xAxis, 0);
            qFinal = new THREE.Quaternion().setFromAxisAngle(xAxis, Math.PI);

            break;
        case 1:
            // ROTAZIONE no
            xAxis = new THREE.Vector3(1, 0, 0);
            qInitial = new THREE.Quaternion().setFromAxisAngle(xAxis, 0);
            qFinal = new THREE.Quaternion().setFromAxisAngle(xAxis, 0);
            break;
    }
    quaternionKF = new THREE.QuaternionKeyframeTrack('.quaternion', [0, 1, 2],
        [qInitial.x, qInitial.y, qInitial.z, qInitial.w, qFinal.x, qFinal.y, qFinal.z, qFinal.w, qInitial.x, qInitial.y, qInitial.z, qInitial.w]);
    return quaternionKF;
}

function getScaleKFCase(c) {
    var scaleKF = null;
    switch (0) {
        case 0:
            // SCALA minima 
            scaleKF = new THREE.VectorKeyframeTrack('.scale', [0, 1, 2], [1, 1, 1, 1.4, 1.4, 1.4, 1, 1, 1]);
            break;
        case 1:
            // SCALA no 
            scaleKF = new THREE.VectorKeyframeTrack('.scale', [0, 1, 2], [1, 1, 1, 1, 1, 1, 1, 1, 1]);
            break;
    }
    return scaleKF;
}

function getPositionKFCase(ass, c) {
    var positionKF = null;
    switch (c) {
        case 0:
            // POSIZIONE x+5
            positionKF = new THREE.VectorKeyframeTrack('.position', [0, 1, 2], [ass.position.x, ass.position.y, ass.position.z, ass.position.x + 5, ass.position.y, ass.position.z, ass.position.x, ass.position.y, ass.position.z]);
            break;
        case 1:
            // POSIZIONE y+5
            positionKF = new THREE.VectorKeyframeTrack('.position', [0, 1, 2], [ass.position.x, ass.position.y, ass.position.z, ass.position.x, ass.position.y + 5, ass.position.z, ass.position.x, ass.position.y, ass.position.z]);
            break;
        case 2:
            // POSIZIONE z+5
            positionKF = new THREE.VectorKeyframeTrack('.position', [0, 1, 2], [ass.position.x, ass.position.y, ass.position.z, ass.position.x, ass.position.y, ass.position.z + 5, ass.position.x, ass.position.y, ass.position.z]);
            break;
        case 3:
            // POSIZIONE fissa
            positionKF = new THREE.VectorKeyframeTrack('.position', [0, 1, 2], [ass.position.x, ass.position.y, ass.position.z, ass.position.x, ass.position.y, ass.position.z, ass.position.x, ass.position.y, ass.position.z]);
            break;
    }
    return positionKF;
}
