import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// note: we can limit the amount of rotation, pan, et cetera
// we may need to for the car - the undercarriage may not be important, et cetera

function createControls(camera, canvas) {
    const controls = new OrbitControls(camera, canvas);

    // damping and auto rotation require
    // the controls to be updated each frame

    // this.controls.autoRotate = true;
    controls.enableDamping = true;

    controls.tick = () => controls.update();
    return controls;
}

export { createControls }