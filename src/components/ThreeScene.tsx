import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Suspense, useRef, useEffect } from 'react';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { EarthParticles } from './EarthParticles';
import { Hotspots } from './Hotspots';
import { CameraController } from './CameraController';
import { useStore } from '../store/useStore';
import type { OrbitControls as OrbitControlsImpl } from 'three-stdlib';

const SceneContent = () => {
    const controlsRef = useRef<OrbitControlsImpl>(null);
    const { viewMode } = useStore();

    useEffect(() => {
        if (controlsRef.current) {
            if (viewMode === 'TIMELINE') {
                controlsRef.current.enabled = false;
            } else {
                controlsRef.current.enabled = true;
            }
        }
    }, [viewMode]);

    return (
        <>
            <PerspectiveCamera makeDefault position={[0, 0, 5]} />

            <OrbitControls
                ref={controlsRef}
                enableDamping
                dampingFactor={0.05}
                enableZoom={true}
                enablePan={false}
                rotateSpeed={0.5}
            />

            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />

            <Suspense fallback={null}>
                <EarthParticles />
                <Hotspots />
            </Suspense>

            <CameraController />

            <EffectComposer>
                <Bloom luminanceThreshold={0.5} luminanceSmoothing={0.9} height={300} intensity={1.5} />
            </EffectComposer>
        </>
    );
};

export const ThreeScene = () => {
    return (
        <Canvas>
            <color attach="background" args={['#f0f0f0']} />
            <SceneContent />
        </Canvas>
    );
};
