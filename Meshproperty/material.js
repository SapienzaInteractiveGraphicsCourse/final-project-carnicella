import * as THREE from '../three.js-master/build/three.module.js';

//  CREAZIONE MATERIALI
function createMaterial(level) {
    switch (level) {
        case 5:
            var i = Math.floor(Math.random() * 5);
            var material = new THREE.MeshLambertMaterial({ color: lev9[i] });
            break;
        case 8:
            var i = Math.floor(Math.random() * 5);
            var material = new THREE.MeshLambertMaterial({ color: lev9[i] });
            break;
        case 13:
            var i = Math.floor(Math.random() * 3);
            var material = tapes[i];
            break;
        case 21:
            var i = Math.floor(Math.random() * 5);
            var material = tiles[i];
            break;
        case 34:
            var i = Math.floor(Math.random() * 3);
            var material = tapes[i];
            break;
        case 55:
            var i = Math.floor(Math.random() * 5);
            var material = fabrics[i];
            break;
        case 89:
            var i = Math.floor(Math.random() * 5);
            var material = tiles[i];
            break;
        case 144:
            var i = Math.floor(Math.random() * 5);
            var material = PMs[i];
            break;
        case 233:
            var i = Math.floor(Math.random() * 5);
            var material = fabrics[i];
            break;
        case 337:
            var i = Math.floor(Math.random() * 5);
            var material = PMs[i];
            break;
        case 9999:
            var material = play1;
            break;
    }
    return material;
}

//  CREAZIONE MATERIALI MENU (LIVELLI)
function createMaterialLevel(level) {
    switch (level) {
        case 0:
            var material = menu0;
            break;
        case 1:
            var material = menu1;
            break;
        case 2:
            var material = menu2;
            break;
        case 3:
            var material = menu3;
            break;
        case 4:
            var material = menu4;
            break;
        case 5:
            var material = menu5;
            break;
        case 6:
            var material = menu6;
            break;
        case 7:
            var material = menu7;
            break;
        case 8:
            var material = menu8;
            break;
        case 9:
            var material = menu9;
            break;
        case 10:
            var material = menu10;
            break;
    }
    return material;
}
export { createMaterial, createMaterialLevel }

var lev9 = ['#004b96', '#ffcd00', '#d8281b', '#ececec', '#6b4b35'];

const textureLoader = new THREE.TextureLoader();

const m0 = textureLoader.load("../Texture/menu.jpg");
const m1 = textureLoader.load("../Texture/2.png");
const m2 = textureLoader.load("../Texture/3.png");
const m3 = textureLoader.load("../Texture/4.png");
const m4 = textureLoader.load("../Texture/5.png");
const m5 = textureLoader.load("../Texture/6.png");
const m6 = textureLoader.load("../Texture/7.png");
const m7 = textureLoader.load("../Texture/8.png");
const m8 = textureLoader.load("../Texture/9.png");
const m9 = textureLoader.load("../Texture/10.png");
const m10 = textureLoader.load("../Texture/YOUWIN.png");

var menu0 = new THREE.MeshStandardMaterial(
    {
        map: m0
    }
);
var menu1 = new THREE.MeshStandardMaterial(
    {
        map: m1
    }
);
var menu2 = new THREE.MeshStandardMaterial(
    {
        map: m2
    }
);
var menu3 = new THREE.MeshStandardMaterial(
    {
        map: m3
    }
);
var menu4 = new THREE.MeshStandardMaterial(
    {
        map: m4
    }
);
var menu5 = new THREE.MeshStandardMaterial(
    {
        map: m5
    }
);
var menu6 = new THREE.MeshStandardMaterial(
    {
        map: m6
    }
);
var menu7 = new THREE.MeshStandardMaterial(
    {
        map: m7
    }
);
var menu8 = new THREE.MeshStandardMaterial(
    {
        map: m8
    }
);
var menu9 = new THREE.MeshStandardMaterial(
    {
        map: m9
    }
);
var menu10 = new THREE.MeshStandardMaterial(
    {
        map: m10
    }
);

const play = textureLoader.load("../Texture/play.png");

var play1 = new THREE.MeshStandardMaterial(
    {
        map: play
    }
);


const fabric_C_1 = textureLoader.load("../Texture/Level/Fabric1/Fabric1_Color.jpg");
const fabric_N_1 = textureLoader.load("../Texture/Level/Fabric1/Fabric1_Normal.jpg");
const fabric_R_1 = textureLoader.load("../Texture/Level/Fabric1/Fabric1_Roughness.jpg");
const fabric_O_1 = textureLoader.load("../Texture/Level/Fabric1/Fabric1_AmbientOcclusion.jpg");

const fabric_C_2 = textureLoader.load("../Texture/Level/Fabric2/Fabric2_Color.jpg");
const fabric_N_2 = textureLoader.load("../Texture/Level/Fabric2/Fabric2_Normal.jpg");
const fabric_R_2 = textureLoader.load("../Texture/Level/Fabric2/Fabric2_Roughness.jpg");
const fabric_O_2 = textureLoader.load("../Texture/Level/Fabric2/Fabric2_AmbientOcclusion.jpg");

const fabric_C_3 = textureLoader.load("../Texture/Level/Fabric3/Fabric3_Color.jpg");
const fabric_N_3 = textureLoader.load("../Texture/Level/Fabric3/Fabric3_Normal.jpg");
const fabric_R_3 = textureLoader.load("../Texture/Level/Fabric3/Fabric3_Roughness.jpg");
const fabric_O_3 = textureLoader.load("../Texture/Level/Fabric3/Fabric3_AmbientOcclusion.jpg");

const fabric_C_4 = textureLoader.load("../Texture/Level/Fabric4/Fabric4_Color.jpg");
const fabric_N_4 = textureLoader.load("../Texture/Level/Fabric4/Fabric4_Normal.jpg");
const fabric_R_4 = textureLoader.load("../Texture/Level/Fabric4/Fabric4_Roughness.jpg");
const fabric_O_4 = textureLoader.load("../Texture/Level/Fabric4/Fabric4_AmbientOcclusion.jpg");

const fabric_C_5 = textureLoader.load("../Texture/Level/Fabric5/Fabric5_Color.jpg");
const fabric_N_5 = textureLoader.load("../Texture/Level/Fabric5/Fabric5_Normal.jpg");
const fabric_R_5 = textureLoader.load("../Texture/Level/Fabric5/Fabric5_Roughness.jpg");
const fabric_O_5 = textureLoader.load("../Texture/Level/Fabric5/Fabric5_AmbientOcclusion.jpg");

var f1 = new THREE.MeshStandardMaterial(
    {
        map: fabric_C_1,
        normalMap: fabric_N_1,
        roughnessMap: fabric_R_1,
        roughness: 0.5,
        aoMap: fabric_O_1
    }
);

var f2 = new THREE.MeshStandardMaterial(
    {
        map: fabric_C_2,
        normalMap: fabric_N_2,
        roughnessMap: fabric_R_2,
        roughness: 0.5,
        aoMap: fabric_O_2
    }
);

var f3 = new THREE.MeshStandardMaterial(
    {
        map: fabric_C_3,
        normalMap: fabric_N_3,
        roughnessMap: fabric_R_3,
        roughness: 0.5,
        aoMap: fabric_O_3
    }
);

var f4 = new THREE.MeshStandardMaterial(
    {
        map: fabric_C_4,
        normalMap: fabric_N_4,
        roughnessMap: fabric_R_4,
        roughness: 0.5,
        aoMap: fabric_O_4
    }
);

var f5 = new THREE.MeshStandardMaterial(
    {
        map: fabric_C_5,
        normalMap: fabric_N_5,
        roughnessMap: fabric_R_5,
        roughness: 0.5,
        aoMap: fabric_O_5
    }
);

var fabrics = [f1, f2, f3, f4, f5];

const PM_C_1 = textureLoader.load("../Texture/Level/PM1/PM1_Color.jpg");
const PM_N_1 = textureLoader.load("../Texture/Level/PM1/PM1_Normal.jpg");
const PM_R_1 = textureLoader.load("../Texture/Level/PM1/PM1_Roughness.jpg");
const PM_M_1 = textureLoader.load("../Texture/Level/PM1/PM1_Metalness.jpg");


const PM_C_2 = textureLoader.load("../Texture/Level/PM2/PM2_Color.jpg");
const PM_N_2 = textureLoader.load("../Texture/Level/PM2/PM2_Normal.jpg");
const PM_R_2 = textureLoader.load("../Texture/Level/PM2/PM2_Roughness.jpg");
const PM_M_2 = textureLoader.load("../Texture/Level/PM2/PM2_Metalness.jpg");

const PM_C_3 = textureLoader.load("../Texture/Level/PM3/PM3_Color.jpg");
const PM_N_3 = textureLoader.load("../Texture/Level/PM3/PM3_Normal.jpg");
const PM_R_3 = textureLoader.load("../Texture/Level/PM3/PM3_Roughness.jpg");
const PM_M_3 = textureLoader.load("../Texture/Level/PM3/PM3_Metalness.jpg");

const PM_C_4 = textureLoader.load("../Texture/Level/PM4/PM4_Color.jpg");
const PM_N_4 = textureLoader.load("../Texture/Level/PM4/PM4_Normal.jpg");
const PM_R_4 = textureLoader.load("../Texture/Level/PM4/PM4_Roughness.jpg");
const PM_M_4 = textureLoader.load("../Texture/Level/PM4/PM4_Metalness.jpg");

const PM_C_5 = textureLoader.load("../Texture/Level/PM5/PM5_Color.jpg");
const PM_N_5 = textureLoader.load("../Texture/Level/PM5/PM5_Normal.jpg");
const PM_R_5 = textureLoader.load("../Texture/Level/PM5/PM5_Roughness.jpg");
const PM_M_5 = textureLoader.load("../Texture/Level/PM5/PM5_Metalness.jpg");

var pm1 = new THREE.MeshStandardMaterial(
    {
        map: PM_C_1,
        normalMap: PM_N_1,
        roughnessMap: PM_R_1,
        roughness: 0.5,
        metalnessMap: PM_M_1,
        metalness: 0.2
    }
);

var pm2 = new THREE.MeshStandardMaterial(
    {
        map: PM_C_2,
        normalMap: PM_N_2,
        roughnessMap: PM_R_2,
        roughness: 0.5,
        metalnessMap: PM_M_2,
        metalness: 0.2
    }
);

var pm3 = new THREE.MeshStandardMaterial(
    {
        map: PM_C_3,
        normalMap: PM_N_3,
        roughnessMap: PM_R_3,
        roughness: 0.5,
        metalnessMap: PM_M_3,
        metalness: 0.2
    }
);

var pm4 = new THREE.MeshStandardMaterial(
    {
        map: PM_C_4,
        normalMap: PM_N_4,
        roughnessMap: PM_R_4,
        roughness: 0.5,
        metalnessMap: PM_M_4,
        metalness: 0.2
    }
);

var pm5 = new THREE.MeshStandardMaterial(
    {
        map: PM_C_5,
        normalMap: PM_N_5,
        roughnessMap: PM_R_5,
        roughness: 0.5,
        metalnessMap: PM_M_5,
        metalness: 0.2
    }
);

var PMs = [pm1, pm2, pm3, pm4, pm5];

const tape_C_1 = textureLoader.load("../Texture/Level/Tape1/Tape1_Color.jpg");
const tape_N_1 = textureLoader.load("../Texture/Level/Tape1/Tape1_Normal.jpg");
const tape_R_1 = textureLoader.load("../Texture/Level/Tape1/Tape1_Roughness.jpg");


const tape_C_2 = textureLoader.load("../Texture/Level/Tape2/Tape2_Color.jpg");
const tape_N_2 = textureLoader.load("../Texture/Level/Tape2/Tape2_Normal.jpg");
const tape_R_2 = textureLoader.load("../Texture/Level/Tape2/Tape2_Roughness.jpg");


const tape_C_3 = textureLoader.load("../Texture/Level/Tape3/Tape3_Color.jpg");
const tape_N_3 = textureLoader.load("../Texture/Level/Tape3/Tape3_Normal.jpg");
const tape_R_3 = textureLoader.load("../Texture/Level/Tape3/Tape3_Roughness.jpg");

var t1 = new THREE.MeshStandardMaterial(
    {
        map: tape_C_1,
        normalMap: tape_N_1,
        roughnessMap: tape_R_1,
        roughness: 0.5
    }
);

var t2 = new THREE.MeshStandardMaterial(
    {
        map: tape_C_2,
        normalMap: tape_N_2,
        roughnessMap: tape_R_2,
        roughness: 0.5
    }
);

var t3 = new THREE.MeshStandardMaterial(
    {
        map: tape_C_3,
        normalMap: tape_N_3,
        roughnessMap: tape_R_3,
        roughness: 0.5
    }
);

var tapes = [t1, t2, t3];

const tiles_C_1 = textureLoader.load("../Texture/Level/Tiles1/Tiles1_Color.jpg");
const tiles_N_1 = textureLoader.load("../Texture/Level/Tiles1/Tiles1_Normal.jpg");
const tiles_R_1 = textureLoader.load("../Texture/Level/Tiles1/Tiles1_Roughness.jpg");

const tiles_C_2 = textureLoader.load("../Texture/Level/Tiles2/Tiles2_Color.jpg");
const tiles_N_2 = textureLoader.load("../Texture/Level/Tiles2/Tiles2_Normal.jpg");
const tiles_R_2 = textureLoader.load("../Texture/Level/Tiles2/Tiles2_Roughness.jpg");

const tiles_C_3 = textureLoader.load("../Texture/Level/Tiles3/Tiles3_Color.jpg");
const tiles_N_3 = textureLoader.load("../Texture/Level/Tiles3/Tiles3_Normal.jpg");
const tiles_R_3 = textureLoader.load("../Texture/Level/Tiles3/Tiles3_Roughness.jpg");

const tiles_C_4 = textureLoader.load("../Texture/Level/Tiles4/Tiles4_Color.jpg");
const tiles_N_4 = textureLoader.load("../Texture/Level/Tiles4/Tiles4_Normal.jpg");
const tiles_R_4 = textureLoader.load("../Texture/Level/Tiles4/Tiles4_Roughness.jpg");

const tiles_C_5 = textureLoader.load("../Texture/Level/Tiles5/Tiles5_Color.jpg");
const tiles_N_5 = textureLoader.load("../Texture/Level/Tiles5/Tiles5_Normal.jpg");
const tiles_R_5 = textureLoader.load("../Texture/Level/Tiles5/Tiles5_Roughness.jpg");

var tl1 = new THREE.MeshStandardMaterial(
    {
        map: tiles_C_1,
        normalMap: tiles_N_1,
        roughnessMap: tiles_R_1,
        roughness: 0.5
    }
);

var tl2 = new THREE.MeshStandardMaterial(
    {
        map: tiles_C_2,
        normalMap: tiles_N_2,
        roughnessMap: tiles_R_2,
        roughness: 0.5
    }
);

var tl3 = new THREE.MeshStandardMaterial(
    {
        map: tiles_C_3,
        normalMap: tiles_N_3,
        roughnessMap: tiles_R_3,
        roughness: 0.5
    }
);

var tl4 = new THREE.MeshStandardMaterial(
    {
        map: tiles_C_4,
        normalMap: tiles_N_4,
        roughnessMap: tiles_R_4,
        roughness: 0.5
    }
);

var tl5 = new THREE.MeshStandardMaterial(
    {
        map: tiles_C_5,
        normalMap: tiles_N_5,
        roughnessMap: tiles_R_5,
        roughness: 0.5
    }
);

var tiles = [tl1, tl2, tl3, tl4, tl5];