import { DirectionalLight } from 'three';

function createLights() {
    // Create a directional light
    const light = new DirectionalLight('white', 8);

    // move the light right, up, and towards us
    light.position.set(-12, 10, 12);

    return light;
}

export { createLights };