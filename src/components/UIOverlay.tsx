import { useProgress } from '@react-three/drei';
import { useEffect, useState } from 'react';
import { useStore } from '../store/useStore';

export const UIOverlay = () => {
    const { active, progress } = useProgress();
    const [isLoaded, setIsLoaded] = useState(false);
    const { viewMode } = useStore();

    useEffect(() => {
        if (!active && progress === 100) {
            // Add a small delay for smoother transition
            const timer = setTimeout(() => setIsLoaded(true), 500);
            return () => clearTimeout(timer);
        }
    }, [active, progress]);

    // Hide overlay when in timeline or mindmap view
    if (viewMode === 'TIMELINE' || viewMode === 'MINDMAP') {
        return null;
    }

    return (
        <div
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 10,
            }}
        >
            {/* Brand text in top left corner */}
            <div
                style={{
                    position: 'absolute',
                    top: '2rem',
                    left: '2rem',
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 100,
                    fontSize: '2rem',
                    color: '#333',
                    letterSpacing: '0.2rem',
                    opacity: isLoaded ? 1 : 0,
                    transition: 'opacity 1s ease-out',
                }}
            >
                The Truth
            </div>

            <div
                style={{
                    transition: 'opacity 1s ease-out, transform 1s ease-out',
                    opacity: isLoaded ? 0 : 1,
                    transform: isLoaded ? 'scale(1.1)' : 'scale(1)',
                    textAlign: 'center',
                    color: '#333',
                }}
            >
                <h1 style={{
                    fontSize: '4rem',
                    fontWeight: 100,
                    letterSpacing: '0.5rem',
                    marginBottom: '1rem',
                    fontFamily: "'Poppins', sans-serif"
                }}>
                    EXPLORE
                </h1>
                <h1 style={{
                    fontSize: '4rem',
                    fontWeight: 100,
                    letterSpacing: '0.5rem',
                    color: '#ff4081',
                    fontFamily: "'Poppins', sans-serif"
                }}>
                    DISCOVER
                </h1>
                <h1 style={{
                    fontSize: '4rem',
                    fontWeight: 100,
                    letterSpacing: '0.5rem',
                    marginTop: '1rem',
                    fontFamily: "'Poppins', sans-serif"
                }}>
                    THE TRUTH
                </h1>
            </div>

            {/* Loading Bar (Optional) */}
            {!isLoaded && (
                <div style={{
                    position: 'absolute',
                    bottom: '50px',
                    width: '200px',
                    height: '2px',
                    background: '#ddd',
                    borderRadius: '2px',
                    overflow: 'hidden'
                }}>
                    <div style={{
                        width: `${progress}%`,
                        height: '100%',
                        background: '#333',
                        transition: 'width 0.2s ease-out'
                    }} />
                </div>
            )}
        </div>
    );
};
