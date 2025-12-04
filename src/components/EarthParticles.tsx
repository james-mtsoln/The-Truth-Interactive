import { useMemo, useRef, useEffect, useState } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import { getFibonacciSpherePoints } from '../utils/fibonacciSphere';

const EARTH_RADIUS = 2;
const PARTICLE_COUNT = 4000;
const PARTICLE_SIZE = 0.02;

export const EarthParticles = () => {
    // Load Earth specular map (black water, white land)
    // Using a standard Three.js example texture
    const earthTexture = useLoader(THREE.TextureLoader, 'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_specular_2048.jpg');

    const meshRef = useRef<THREE.InstancedMesh>(null);
    const [dummy] = useState(() => new THREE.Object3D());

    const particles = useMemo(() => {
        const tempParticles: { position: THREE.Vector3; isLand: boolean }[] = [];
        const allPoints = getFibonacciSpherePoints(PARTICLE_COUNT, EARTH_RADIUS);

        // Create a canvas to read texture data
        const canvas = document.createElement('canvas');
        canvas.width = earthTexture.image.width;
        canvas.height = earthTexture.image.height;
        const ctx = canvas.getContext('2d');
        if (!ctx) return [];

        ctx.drawImage(earthTexture.image, 0, 0);
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;

        allPoints.forEach((point) => {
            // Convert 3D position to UV coordinates
            // u = 0.5 + (arctan2(z, x) / (2 * PI))
            // v = 0.5 - (arcsin(y / radius) / PI)

            const u = 0.5 + Math.atan2(point.z, point.x) / (2 * Math.PI);
            const v = 0.5 + Math.asin(point.y / EARTH_RADIUS) / Math.PI; // Inverted v for standard texture mapping

            // Map UV to pixel coordinates
            const x = Math.floor(u * canvas.width);
            const y = Math.floor((1 - v) * canvas.height); // Flip Y because canvas 0,0 is top-left

            const index = (y * canvas.width + x) * 4;
            const r = data[index];

            // Simple threshold: if red channel > 50, it's land
            // The specular map is black for water, white/grey for land
            if (r > 30) {
                tempParticles.push({ position: point, isLand: true });
            } else {
                // Optional: Add some water particles with lower probability or different color
                // For now, let's just keep land for the "continent shape" effect
            }
        });

        return tempParticles;
    }, [earthTexture]);

    useEffect(() => {
        if (meshRef.current) {
            particles.forEach((particle, i) => {
                dummy.position.copy(particle.position);
                dummy.scale.setScalar(1);
                dummy.updateMatrix();
                meshRef.current!.setMatrixAt(i, dummy.matrix);

                // Set color
                // Land: Blue/Purple gradient or solid color
                // We can use setColorAt if we want per-instance color
                const color = new THREE.Color();
                // Gradient based on Y position for visual interest
                color.setHSL(0.6 + (particle.position.y / EARTH_RADIUS) * 0.1, 0.8, 0.6);
                meshRef.current!.setColorAt(i, color);
            });
            meshRef.current.instanceMatrix.needsUpdate = true;
            if (meshRef.current.instanceColor) meshRef.current.instanceColor.needsUpdate = true;
        }
    }, [particles, dummy]);

    useFrame(() => {
        if (meshRef.current) {
            // Slow rotation
            meshRef.current.rotation.y += 0.001;
        }
    });

    return (
        <instancedMesh ref={meshRef} args={[undefined, undefined, particles.length]}>
            <sphereGeometry args={[PARTICLE_SIZE, 8, 8]} />
            <meshBasicMaterial color="#ffffff" transparent opacity={0.8} />
        </instancedMesh>
    );
};
