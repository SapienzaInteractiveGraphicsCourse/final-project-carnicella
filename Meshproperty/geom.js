import * as THREE from '../three.js-master/build/three.module.js';
import * as material from './material.js';
import * as position from './position.js';


// CREAZIONE GEOMETRIE 
// ( 6 possibili geometrie /sfera/box/cerchio/cono/cilindro/toroide/ )
function createGeometry(level) {
    const i = Math.floor(Math.random() * 6);
    switch (i) {
        case 0:
            var geometry = new THREE.Mesh(new THREE.SphereGeometry(Math.random() * 2 + 1, 64, 32), material.createMaterial(level));
            geometry = position.createMeshPosition(geometry, level);
            return geometry;
            break;
        case 1:
            var geometry = new THREE.BoxGeometry(Math.random() * 5 + 1, Math.random() * 5 + 1, Math.random() * 5 + 1);
            var mat = material.createMaterial(level);
            var mesh = new THREE.Mesh(geometry, mat);
            mesh = position.createMeshPosition(mesh, level);
            return mesh;
            break;
        case 2:
            var geometry = new THREE.CircleGeometry(Math.random() * 1 + 1, 50);
            var mat = material.createMaterial(level);
            var mesh = new THREE.Mesh(geometry, mat);
            mesh = position.createMeshPosition(mesh, level);
            return mesh;
            break;
        case 3:
            var geometry = new THREE.ConeGeometry(Math.random() * 3 + 1, Math.random() * 5 + 1, Math.random() * 7 + 1);
            var mat = material.createMaterial(level);
            var mesh = new THREE.Mesh(geometry, mat);
            mesh = position.createMeshPosition(mesh, level);
            return mesh;
            break;
        case 4:
            var geometry = new THREE.CylinderGeometry(Math.random() * 2 + 1, Math.random() * 2 + 1, Math.random() * 5 + 1, Math.random() * 8 + 1);
            var mat = material.createMaterial(level);
            var mesh = new THREE.Mesh(geometry, mat);
            mesh = position.createMeshPosition(mesh, level);
            return mesh;
            break;
        case 5:
            var geometry = new THREE.TorusGeometry(2, 0.5, 50, 20);
            var mat = material.createMaterial(level);
            var mesh = new THREE.Mesh(geometry, mat);
            mesh = position.createMeshPosition(mesh, level);
            return mesh;
            break;
    }

}

export { createGeometry };
