import { useState } from 'react';
import { type TimelineEvent } from '../services/dataService';

interface CustomTimelineProps {
    items: TimelineEvent[];
}

export const CustomTimeline = ({ items }: CustomTimelineProps) => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    if (!items || items.length === 0) {
        return <div style={{ padding: '2rem', textAlign: 'center' }}>No timeline data available</div>;
    }

    const selectedItem = items[selectedIndex];

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            width: '100%',
            padding: '2rem',
            gap: '2rem',
        }}>
            {/* Timeline Track */}
            <div style={{
                position: 'relative',
                width: '100%',
                padding: '2rem 0',
            }}>
                {/* Background Line */}
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '0',
                    right: '0',
                    height: '2px',
                    background: 'linear-gradient(to right, #ff4081, #f48fb1)',
                    transform: 'translateY(-50%)',
                }} />

                {/* Timeline Points */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    position: 'relative',
                }}>
                    {items.map((item, index) => (
                        <div
                            key={index}
                            onClick={() => setSelectedIndex(index)}
                            style={{
                                cursor: 'pointer',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: '0.5rem',
                                flex: 1,
                                position: 'relative',
                            }}
                        >
                            {/* Point */}
                            <div style={{
                                width: selectedIndex === index ? '20px' : '14px',
                                height: selectedIndex === index ? '20px' : '14px',
                                borderRadius: '50%',
                                background: selectedIndex === index ? '#ff4081' : '#fff',
                                border: `3px solid ${selectedIndex === index ? '#ff4081' : '#ccc'}`,
                                transition: 'all 0.3s ease',
                                boxShadow: selectedIndex === index ? '0 0 20px rgba(255, 64, 129, 0.5)' : 'none',
                            }} />

                            {/* Year Label */}
                            <div style={{
                                fontSize: '0.9rem',
                                fontWeight: selectedIndex === index ? 700 : 400,
                                color: selectedIndex === index ? '#ff4081' : '#666',
                                transition: 'all 0.3s ease',
                                whiteSpace: 'nowrap',
                            }}>
                                {item.title}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Content Card */}
            <div style={{
                flex: 1,
                background: 'white',
                borderRadius: '12px',
                padding: '2rem',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                border: '1px solid #eee',
                overflow: 'auto',
            }}>
                <h3 style={{
                    fontSize: '1.8rem',
                    fontWeight: 600,
                    color: '#ff4081',
                    margin: '0 0 0.5rem 0',
                }}>
                    {selectedItem.cardTitle}
                </h3>

                <p style={{
                    fontSize: '1.1rem',
                    color: '#666',
                    margin: '0 0 1.5rem 0',
                    fontStyle: 'italic',
                }}>
                    {selectedItem.cardSubtitle}
                </p>

                <p style={{
                    fontSize: '1rem',
                    color: '#333',
                    lineHeight: '1.6',
                    margin: 0,
                }}>
                    {selectedItem.cardDetailedText}
                </p>
            </div>

            {/* Navigation Buttons */}
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '1rem',
            }}>
                <button
                    onClick={() => setSelectedIndex(Math.max(0, selectedIndex - 1))}
                    disabled={selectedIndex === 0}
                    style={{
                        padding: '0.8rem 2rem',
                        background: selectedIndex === 0 ? '#ccc' : '#ff4081',
                        color: 'white',
                        border: 'none',
                        borderRadius: '6px',
                        cursor: selectedIndex === 0 ? 'not-allowed' : 'pointer',
                        fontSize: '1rem',
                        fontWeight: 500,
                        transition: 'all 0.3s ease',
                        opacity: selectedIndex === 0 ? 0.5 : 1,
                    }}
                >
                    ← Previous
                </button>

                <button
                    onClick={() => setSelectedIndex(Math.min(items.length - 1, selectedIndex + 1))}
                    disabled={selectedIndex === items.length - 1}
                    style={{
                        padding: '0.8rem 2rem',
                        background: selectedIndex === items.length - 1 ? '#ccc' : '#ff4081',
                        color: 'white',
                        border: 'none',
                        borderRadius: '6px',
                        cursor: selectedIndex === items.length - 1 ? 'not-allowed' : 'pointer',
                        fontSize: '1rem',
                        fontWeight: 500,
                        transition: 'all 0.3s ease',
                        opacity: selectedIndex === items.length - 1 ? 0.5 : 1,
                    }}
                >
                    Next →
                </button>
            </div>
        </div>
    );
};
