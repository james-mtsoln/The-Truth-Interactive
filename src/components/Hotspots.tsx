import { useRef, useState, useMemo, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';
import { type Topic } from '../types/payload-types';
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

export const Hotspots = () => {
    const [hoveredTopic, setHoveredTopic] = useState<Topic | null>(null);
    const [topics, setTopics] = useState<Topic[]>([]);
    const pointsRef = useRef<THREE.Points>(null);
    const { setViewMode, setSelectedTopic, viewMode, language } = useStore();

    // Load topics from Payload service
    useEffect(() => {
        import('../services/payloadService').then(({ payloadAPI }) => {
            payloadAPI.getTopics().then((response) => {
                setTopics(response.docs);
            });
        });
    }, []);

    // Generate geometry for hotspots
    const { positions, colors } = useMemo(() => {
        const positions = new Float32Array(topics.length * 3);
        const colors = new Float32Array(topics.length * 3);
        const color = new THREE.Color();

        topics.forEach((topic, i) => {
            const pos = latLonToVector3(topic.location.lat, topic.location.lon, EARTH_RADIUS + 0.05); // Slightly above surface
            positions[i * 3] = pos.x;
            positions[i * 3 + 1] = pos.y;
            positions[i * 3 + 2] = pos.z;

            // Default color (Orange/Red for hotspots)
            color.setHex(0xff4500);
            colors[i * 3] = color.r;
            colors[i * 3 + 1] = color.g;
            colors[i * 3 + 2] = color.b;
        });

        return { positions, colors };
    }, [topics]);

    useFrame((state) => {
        if (pointsRef.current) {
            // Pulse effect
            const time = state.clock.getElapsedTime();
            const scale = 1 + Math.sin(time * 3) * 0.1;
            pointsRef.current.scale.setScalar(scale);
        }
    });

    const handleTopicClick = (topic: Topic) => {
        setSelectedTopic(topic);
        setViewMode('TIMELINE');

        // We will handle the camera animation in a separate controller or effect
        // But we can emit an event or just rely on the store change
    };

    // Hide hotspots completely when in timeline view
    if (viewMode === 'TIMELINE') {
        return null;
    }

    return (
        <group>
            {/* The glowing dots */}
            <points ref={pointsRef}>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        count={topics.length}
                        array={positions}
                        itemSize={3}
                        args={[positions, 3]}
                    />
                    <bufferAttribute
                        attach="attributes-color"
                        count={topics.length}
                        array={colors}
                        itemSize={3}
                        args={[colors, 3]}
                    />
                </bufferGeometry>
                <pointsMaterial
                    size={0.15}
                    vertexColors
                    transparent
                    opacity={0.8}
                    sizeAttenuation
                    depthWrite={false}
                    blending={THREE.AdditiveBlending}
                />
            </points>

            {/* Interactive Invisible Triggers & Labels */}
            {topics.map((topic) => {
                const position = latLonToVector3(topic.location.lat, topic.location.lon, EARTH_RADIUS);
                const isHovered = hoveredTopic?.id === topic.id;

                return (
                    <group key={topic.id} position={position}>
                        {/* Invisible Hitbox */}
                        <mesh
                            visible={false}
                            onPointerOver={(e) => {
                                e.stopPropagation();
                                document.body.style.cursor = 'pointer';
                                setHoveredTopic(topic);
                            }}
                            onPointerOut={() => {
                                document.body.style.cursor = 'auto';
                                setHoveredTopic(null);
                            }}
                            onClick={(e) => {
                                e.stopPropagation();
                                handleTopicClick(topic);
                            }}
                        >
                            <sphereGeometry args={[0.2, 16, 16]} />
                            <meshBasicMaterial color="red" />
                        </mesh>

                        {/* Label */}
                        <Html
                            distanceFactor={10}
                            zIndexRange={[100, 0]}
                            style={{
                                transition: 'all 0.3s',
                                opacity: isHovered ? 1 : 0.7,
                                transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                                pointerEvents: 'none',
                            }}
                        >
                            <div style={{
                                background: 'rgba(0, 0, 0, 0.6)',
                                padding: '4px 8px',
                                borderRadius: '4px',
                                border: `1px solid ${isHovered ? '#ff4500' : 'rgba(255, 255, 255, 0.3)'}`,
                                backdropFilter: 'blur(4px)',
                                color: 'white',
                                fontSize: '0.8rem',
                                whiteSpace: 'nowrap',
                                fontFamily: "'Poppins', sans-serif",
                                fontWeight: 100,
                                textTransform: 'uppercase',
                                letterSpacing: '1px',
                            }}>
                                {topic.title[language]}
                            </div>
                        </Html>
                    </group>
                );
            })}
        </group>
    );
};
