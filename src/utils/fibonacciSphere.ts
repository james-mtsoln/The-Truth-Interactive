import * as THREE from 'three';

export const getFibonacciSpherePoints = (samples: number, radius: number): THREE.Vector3[] => {
    const points: THREE.Vector3[] = [];
    const phi = Math.PI * (3 - Math.sqrt(5)); // Golden angle

    for (let i = 0; i < samples; i++) {
        const y = 1 - (i / (samples - 1)) * 2; // y goes from 1 to -1
        const radiusAtY = Math.sqrt(1 - y * y); // Radius at y

        const theta = phi * i; // Golden angle increment

        const x = Math.cos(theta) * radiusAtY;
        const z = Math.sin(theta) * radiusAtY;

        points.push(new THREE.Vector3(x * radius, y * radius, z * radius));
    }

    return points;
};
