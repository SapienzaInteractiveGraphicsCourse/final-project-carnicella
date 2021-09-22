import * as cam from '../Cameraconfig/camera.js';

// CREAZIONE POSIZIONE GEOMETRIE 
function createMeshPosition(mesh, level) {
    switch (level) {
        case 8:
            mesh.position.x = Math.random() * 80 - 70;
            mesh.position.y = Math.random() * 80 - 70;
            mesh.position.z = Math.random() * 80 - 70;
            mesh.rotation.x = Math.random() * 2 * Math.PI;
            mesh.rotation.y = Math.random() * 2 * Math.PI;
            mesh.rotation.z = Math.random() * 2 * Math.PI;
            break;
        case 13:
            mesh.position.x = Math.random() * 80 - 65;
            mesh.position.y = Math.random() * 80 - 65;
            mesh.position.z = Math.random() * 80 - 65;
            mesh.rotation.x = Math.random() * 2 * Math.PI;
            mesh.rotation.y = Math.random() * 2 * Math.PI;
            mesh.rotation.z = Math.random() * 2 * Math.PI;
            break;
        case 21:
            mesh.position.x = Math.random() * 80 - 57;
            mesh.position.y = Math.random() * 80 - 57;
            mesh.position.z = Math.random() * 80 - 57;
            mesh.rotation.x = Math.random() * 2 * Math.PI;
            mesh.rotation.y = Math.random() * 2 * Math.PI;
            mesh.rotation.z = Math.random() * 2 * Math.PI;
            break;
        case 34:
            mesh.position.x = Math.random() * 80 - 50;
            mesh.position.y = Math.random() * 80 - 50;
            mesh.position.z = Math.random() * 80 - 50;
            mesh.rotation.x = Math.random() * 2 * Math.PI;
            mesh.rotation.y = Math.random() * 2 * Math.PI;
            mesh.rotation.z = Math.random() * 2 * Math.PI;
            break;
        default:
            mesh.position.x = Math.random() * 80 - 40;
            mesh.position.y = Math.random() * 80 - 40;
            mesh.position.z = Math.random() * 80 - 40;
            mesh.rotation.x = Math.random() * 2 * Math.PI;
            mesh.rotation.y = Math.random() * 2 * Math.PI;
            mesh.rotation.z = Math.random() * 2 * Math.PI;
            break;
    }
    return mesh;
}

// CREAZIONE POSIZIONE MENU
function createMenuPosition(mesh) {
    mesh.position.x = 0;
    mesh.position.y = 0;
    mesh.position.z = 60;
    return mesh;
}

// CREAZIONE POSIZIONE PLAY ON MENU
function createMenuPlayPosition(mesh) {
    mesh.position.x = 6;
    mesh.position.y = -6.5;
    mesh.position.z = 60.2;
    mesh.rotation.x = 0;
    mesh.rotation.y = 0;
    mesh.rotation.z = -6.15;
    return mesh;
}

// CREAZIONE POSIZIONE INIZIZALE ASSET
function setUpAssInitPosition(ass, level, scene) {
    ass.position.x = Math.random() * 50 - 50;
    console.log(ass.position.x);
    ass.position.y = Math.random() * 50 - 50;
    console.log(ass.position.y);
    ass.position.z = Math.random() * 50 - 50;
    return ass;
}

// CREAZIONE POSIZIONE INIZIALE CAMERA
function setUpCameraInitPosition() {
    var camera = cam.getCamera();
    camera.position.z = 110;
    camera.position.y = 0;
    camera.position.x = 0;
    camera.rotation.x = 0;
    camera.rotation.y = 0;
    camera.rotation.z = 0;
    return camera;
}

export { createMeshPosition, createMenuPosition, createMenuPlayPosition, setUpAssInitPosition, setUpCameraInitPosition };

