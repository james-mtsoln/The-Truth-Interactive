import { useThree } from '@react-three/fiber';
import { useEffect } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { useStore } from '../store/useStore';

const EARTH_RADIUS = 2;

// Helper to convert lat/lon to 3D position
const latLonToVector3 = (lat: number, lon: number, radius: number) => {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lon + 180) * (Math.PI / 180);

    const x = -(radius * Math.sin(phi) * Math.cos(theta));
    const z = radius * Math.sin(phi) * Math.sin(theta);
    const y = radius * Math.cos(phi);

    return new THREE.Vector3(x, y, z);
};

export const CameraController = () => {
    const { camera } = useThree();
    const { viewMode, selectedTopic } = useStore();

    useEffect(() => {
        // We need to access the OrbitControls instance. 
        // Since we are using <OrbitControls> from drei in the parent, we might need to pass a ref or access it differently.
        // For now, let's assume we can control the camera directly and the controls will sync or be disabled.

        if (viewMode === 'TIMELINE' && selectedTopic) {
            const targetPos = latLonToVector3(selectedTopic.location.lat, selectedTopic.location.lon, EARTH_RADIUS);

            // Calculate a position slightly offset from the target to look at it
            // We want to zoom in close
            const cameraOffset = targetPos.clone().normalize().multiplyScalar(EARTH_RADIUS + 1.5);

            gsap.to(camera.position, {
                x: cameraOffset.x,
                y: cameraOffset.y,
                z: cameraOffset.z,
                duration: 2,
                ease: 'power3.inOut',
                onUpdate: () => camera.lookAt(targetPos) // Keep looking at target
            });

            // If we had access to controls target, we would tween that too
            // controls.target.copy(targetPos);
        } else if (viewMode === 'GLOBE') {
            // Reset camera or just let controls handle it
            gsap.to(camera.position, {
                x: 0,
                y: 0,
                z: 5,
                duration: 2,
                ease: 'power3.inOut'
            });
        }
    }, [viewMode, selectedTopic, camera]);

    return null;
};
