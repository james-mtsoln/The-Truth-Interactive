import { useState } from 'react';
import { Html } from '@react-three/drei';
import * as THREE from 'three';
import { pois, type POI } from '../data/pois';

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

export const POIMarkers = () => {
    const [selectedPOI, setSelectedPOI] = useState<POI | null>(null);

    return (
        <group>
            {pois.map((poi) => {
                const position = latLonToVector3(poi.lat, poi.lon, EARTH_RADIUS);

                return (
                    <group key={poi.name} position={position}>
                        {/* Invisible Trigger Mesh */}
                        <mesh
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedPOI(selectedPOI === poi ? null : poi);
                            }}
                            onPointerOver={() => document.body.style.cursor = 'pointer'}
                            onPointerOut={() => document.body.style.cursor = 'auto'}
                            visible={false} // Make it invisible but still clickable
                        >
                            <sphereGeometry args={[0.15, 16, 16]} />
                            <meshBasicMaterial color="red" />
                        </mesh>

                        {/* Visible Marker (Optional, maybe a small glowing dot) */}
                        <mesh>
                            <sphereGeometry args={[0.03, 8, 8]} />
                            <meshBasicMaterial color="#ff4081" />
                        </mesh>

                        {/* Tooltip */}
                        {selectedPOI === poi && (
                            <Html distanceFactor={10}>
                                <div style={{
                                    background: 'rgba(255, 255, 255, 0.9)',
                                    padding: '1rem',
                                    borderRadius: '8px',
                                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                                    width: '200px',
                                    pointerEvents: 'none', // Let clicks pass through if needed, or 'auto' for interactive tooltip
                                    textAlign: 'left',
                                    transform: 'translate3d(-50%, -100%, 0)', // Center above the point
                                    marginTop: '-20px'
                                }}>
                                    <h3 style={{ margin: '0 0 0.5rem 0', color: '#333' }}>{poi.name}</h3>
                                    <p style={{ margin: 0, fontSize: '0.9rem', color: '#666' }}>{poi.description}</p>
                                </div>
                            </Html>
                        )}
                    </group>
                );
            })}
        </group>
    );
};
