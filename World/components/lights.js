import { AmbientLight, DirectionalLight, HemisphereLight } from 'three';

// .rotation and .scale have NO effect on lights

function createLights() {
    // parameters color and intensity for all light objects

    // AmbientLight usually set to less intensity than its paired DirectionalLight
    // const ambientLight = new AmbientLight('white', 2);

    const ambientLight = new HemisphereLight(
        'white', // bright sky color
        'darkslategrey', // dim ground color
        5, // intensity
    );

    // Create a directional light
    const mainLight = new DirectionalLight('white', 8);

    // move the light right, up, and towards us
    mainLight.position.set(10, 10, 10);

    return { ambientLight, mainLight };
}

export { createLights };