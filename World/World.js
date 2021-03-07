import { createCamera } from './components/camera.js';
import { createCube } from './components/cube.js';
import { createLights } from './components/lights.js';
import { createScene } from './components/scene.js';

import { createRenderer } from './systems/renderer.js';
// import { Resizer } from './systems/Resizer.js';
import { Loop } from './systems/Loop.js';
import { createControls } from './systems/controls.js';
import { createMeshGroup } from './components/meshGroup.js';

let scene;
let camera;
let renderer;
let loop;

class World {
    constructor(container) {
        camera = createCamera();
        scene = createScene();
        renderer = createRenderer();
        loop = new Loop(camera, scene, renderer);
        container.append(renderer.domElement);
        const controls = createControls(camera, renderer.domElement);
        const meshGroup = createMeshGroup();
        const { ambientLight, mainLight } = createLights();
        // disabled mesh rotation
        // updatables.push(cube);

        loop.updatables.push(controls, meshGroup);
        scene.add(ambientLight, mainLight, meshGroup);

        // const resizer = new Resizer(container, camera, renderer);

    }

    render() {
        // draw a single frame
        renderer.render(scene, camera);
    }

    start() {
        loop.start();
    }
    stop() {
        loop.stop();
    }
}

export { World };