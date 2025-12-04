import { useStore } from '../store/useStore';
import { useEffect, useState, useRef } from 'react';
import { useQuery } from '@tanstack/react-query';
import { payloadAPI, getLocalizedValue } from '../services/payloadService';

export const TimelineView = () => {
    const { viewMode, selectedTopic, setViewMode, language } = useStore();
    const [isVisible, setIsVisible] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [zoomLevel, setZoomLevel] = useState(1);
    const timelineRef = useRef<HTMLDivElement>(null);

    const { data: timelineItems, isLoading } = useQuery({
        queryKey: ['topicData', selectedTopic?.slug, language],
        queryFn: async () => {
            if (!selectedTopic) return [];
            const events = await payloadAPI.getTimelineEvents(selectedTopic.slug, language);
            // Map Payload events to display format, extracting localized values
            return events.map(event => ({
                title: getLocalizedValue(event.title, language),
                cardTitle: getLocalizedValue(event.cardTitle, language),
                cardSubtitle: getLocalizedValue(event.cardSubtitle, language),
                cardDetailedText: getLocalizedValue(event.cardDetailedText, language),
                mediaSource: typeof event.mediaSource === 'string' ? event.mediaSource : event.mediaSource?.name,
                media: event.media,
            }));
        },
        enabled: !!selectedTopic,
    });

    useEffect(() => {
        if (viewMode === 'TIMELINE') {
            setTimeout(() => setIsVisible(true), 1000);
        } else {
            setIsVisible(false);
            setSelectedIndex(0);
        }
    }, [viewMode]);

    // Scroll to selected item
    useEffect(() => {
        if (timelineRef.current && timelineItems && timelineItems.length > 0) {
            const itemWidth = 200 * zoomLevel;
            const targetScroll = selectedIndex * itemWidth - (timelineRef.current.offsetWidth / 2) + (itemWidth / 2);
            timelineRef.current.scrollTo({ left: targetScroll, behavior: 'smooth' });
        }
    }, [selectedIndex, zoomLevel, timelineItems]);

    if (!selectedTopic) return null;

    const currentItem = timelineItems && timelineItems[selectedIndex] ? timelineItems[selectedIndex] : null;

    const handlePrevious = () => {
        if (selectedIndex > 0) {
            setSelectedIndex(selectedIndex - 1);
        }
    };

    const handleNext = () => {
        if (timelineItems && selectedIndex < timelineItems.length - 1) {
            setSelectedIndex(selectedIndex + 1);
        }
    };

    const jumpToStart = () => setSelectedIndex(0);
    const jumpToEnd = () => timelineItems && setSelectedIndex(timelineItems.length - 1);

    return (
        <div
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: '#0a0a0a',
                transition: 'opacity 1s ease-in-out',
                opacity: isVisible ? 1 : 0,
                pointerEvents: isVisible ? 'auto' : 'none',
                zIndex: 20,
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            {/* Header Bar */}
            <div style={{
                padding: '1rem 2rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                background: '#000',
                borderBottom: '1px solid #222',
            }}>
                <h2 style={{
                    fontSize: '1.2rem',
                    fontWeight: 400,
                    margin: 0,
                    color: 'white',
                    fontFamily: "'Poppins', sans-serif"
                }}>
                    {selectedTopic.title[language]}
                </h2>
                <button
                    onClick={() => setViewMode('GLOBE')}
                    style={{
                        padding: '0.6rem 1.2rem',
                        background: '#ff4081',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = '#e91e63'}
                    onMouseLeave={(e) => e.currentTarget.style.background = '#ff4081'}
                >
                    ← Back
                </button>
            </div>

            {/* Content Area */}
            <div style={{
                flex: 1,
                overflow: 'auto',
                padding: '3rem 2rem',
                background: '#0a0a0a',
            }}>
                {isLoading ? (
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100%',
                        color: '#666',
                        fontSize: '1.5rem',
                        fontWeight: 300,
                    }}>
                        Loading timeline data...
                    </div>
                ) : currentItem ? (
                    <div style={{
                        maxWidth: '1000px',
                        margin: '0 auto',
                        color: 'white',
                    }}>
                        {/* Date Badge & Source */}
                        <div style={{
                            marginBottom: '2rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem',
                            flexWrap: 'wrap',
                        }}>
                            <span style={{
                                display: 'inline-block',
                                padding: '0.5rem 1.2rem',
                                background: 'linear-gradient(135deg, #ff4081, #e91e63)',
                                borderRadius: '25px',
                                fontSize: '1rem',
                                fontWeight: 600,
                                color: 'white',
                                boxShadow: '0 4px 15px rgba(255, 64, 129, 0.4)',
                            }}>
                                {currentItem.title}
                            </span>
                            {currentItem.mediaSource && (
                                <span style={{
                                    padding: '0.4rem 1rem',
                                    background: 'rgba(255, 64, 129, 0.2)',
                                    border: '1px solid #ff4081',
                                    borderRadius: '20px',
                                    color: '#ff4081',
                                    fontSize: '0.85rem',
                                    fontWeight: 600,
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.5px',
                                }}>
                                    {currentItem.mediaSource}
                                </span>
                            )}
                        </div>

                        {/* Title */}
                        <h1 style={{
                            fontSize: '3rem',
                            fontWeight: 100,
                            margin: '0 0 1.5rem 0',
                            lineHeight: '1.2',
                            fontFamily: "'Poppins', sans-serif",
                            color: 'white',
                        }}>
                            {currentItem.cardTitle}
                        </h1>

                        {/* Subtitle */}
                        <p style={{
                            fontSize: '1.3rem',
                            color: '#aaa',
                            margin: '0 0 3rem 0',
                            fontStyle: 'italic',
                            fontWeight: 300,
                        }}>
                            {currentItem.cardSubtitle}
                        </p>

                        {/* Detailed content */}
                        <div style={{
                            fontSize: '1.15rem',
                            lineHeight: '1.9',
                            color: '#ddd',
                            fontWeight: 300,
                        }}>
                            {currentItem.cardDetailedText}
                        </div>
                    </div>
                ) : null}
            </div>

            {/* Timeline Navigation Bar - Fixed Height */}
            <div style={{
                height: '220px',
                background: '#000',
                borderTop: '2px solid #222',
                padding: '1rem 0',
                overflow: 'hidden',
                position: 'relative',
            }}>
                {/* Navigation Controls */}
                <div style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    right: '1rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    zIndex: 10,
                }}>
                    {/* Left Controls - Navigation */}
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                        <button
                            onClick={jumpToStart}
                            disabled={selectedIndex === 0}
                            style={{
                                width: '40px',
                                height: '32px',
                                background: selectedIndex === 0 ? '#222' : '#333',
                                color: selectedIndex === 0 ? '#666' : 'white',
                                border: '1px solid #444',
                                borderRadius: '4px',
                                cursor: selectedIndex === 0 ? 'not-allowed' : 'pointer',
                                fontSize: '1.2rem',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                transition: 'all 0.2s ease',
                            }}
                            onMouseEnter={(e) => {
                                if (selectedIndex !== 0) e.currentTarget.style.background = '#444';
                            }}
                            onMouseLeave={(e) => {
                                if (selectedIndex !== 0) e.currentTarget.style.background = '#333';
                            }}
                        >
                            ⏮
                        </button>
                        <button
                            onClick={handlePrevious}
                            disabled={selectedIndex === 0}
                            style={{
                                width: '40px',
                                height: '32px',
                                background: selectedIndex === 0 ? '#222' : '#333',
                                color: selectedIndex === 0 ? '#666' : 'white',
                                border: '1px solid #444',
                                borderRadius: '4px',
                                cursor: selectedIndex === 0 ? 'not-allowed' : 'pointer',
                                fontSize: '1.2rem',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                transition: 'all 0.2s ease',
                            }}
                            onMouseEnter={(e) => {
                                if (selectedIndex !== 0) e.currentTarget.style.background = '#444';
                            }}
                            onMouseLeave={(e) => {
                                if (selectedIndex !== 0) e.currentTarget.style.background = '#333';
                            }}
                        >
                            ◀
                        </button>
                        <button
                            onClick={handleNext}
                            disabled={!timelineItems || selectedIndex === timelineItems.length - 1}
                            style={{
                                width: '40px',
                                height: '32px',
                                background: (!timelineItems || selectedIndex === timelineItems.length - 1) ? '#222' : '#333',
                                color: (!timelineItems || selectedIndex === timelineItems.length - 1) ? '#666' : 'white',
                                border: '1px solid #444',
                                borderRadius: '4px',
                                cursor: (!timelineItems || selectedIndex === timelineItems.length - 1) ? 'not-allowed' : 'pointer',
                                fontSize: '1.2rem',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                transition: 'all 0.2s ease',
                            }}
                            onMouseEnter={(e) => {
                                if (timelineItems && selectedIndex !== timelineItems.length - 1) e.currentTarget.style.background = '#444';
                            }}
                            onMouseLeave={(e) => {
                                if (timelineItems && selectedIndex !== timelineItems.length - 1) e.currentTarget.style.background = '#333';
                            }}
                        >
                            ▶
                        </button>
                        <button
                            onClick={jumpToEnd}
                            disabled={!timelineItems || selectedIndex === timelineItems.length - 1}
                            style={{
                                width: '40px',
                                height: '32px',
                                background: (!timelineItems || selectedIndex === timelineItems.length - 1) ? '#222' : '#333',
                                color: (!timelineItems || selectedIndex === timelineItems.length - 1) ? '#666' : 'white',
                                border: '1px solid #444',
                                borderRadius: '4px',
                                cursor: (!timelineItems || selectedIndex === timelineItems.length - 1) ? 'not-allowed' : 'pointer',
                                fontSize: '1.2rem',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                transition: 'all 0.2s ease',
                            }}
                            onMouseEnter={(e) => {
                                if (timelineItems && selectedIndex !== timelineItems.length - 1) e.currentTarget.style.background = '#444';
                            }}
                            onMouseLeave={(e) => {
                                if (timelineItems && selectedIndex !== timelineItems.length - 1) e.currentTarget.style.background = '#333';
                            }}
                        >
                            ⏭
                        </button>
                    </div>

                    {/* Right Controls - Zoom */}
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                        <button
                            onClick={() => setZoomLevel(Math.max(0.5, zoomLevel - 0.25))}
                            style={{
                                width: '32px',
                                height: '32px',
                                background: zoomLevel > 0.5 ? '#333' : '#222',
                                color: zoomLevel > 0.5 ? 'white' : '#666',
                                border: '1px solid #444',
                                borderRadius: '4px',
                                cursor: zoomLevel > 0.5 ? 'pointer' : 'not-allowed',
                                fontSize: '1.2rem',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                transition: 'all 0.2s ease',
                            }}
                            onMouseEnter={(e) => {
                                if (zoomLevel > 0.5) e.currentTarget.style.background = '#444';
                            }}
                            onMouseLeave={(e) => {
                                if (zoomLevel > 0.5) e.currentTarget.style.background = '#333';
                            }}
                        >
                            −
                        </button>
                        <div style={{
                            padding: '0 0.8rem',
                            background: '#1a1a1a',
                            border: '1px solid #444',
                            borderRadius: '4px',
                            display: 'flex',
                            alignItems: 'center',
                            fontSize: '0.75rem',
                            color: '#aaa',
                            minWidth: '60px',
                            justifyContent: 'center',
                        }}>
                            {Math.round(zoomLevel * 100)}%
                        </div>
                        <button
                            onClick={() => setZoomLevel(Math.min(2, zoomLevel + 0.25))}
                            style={{
                                width: '32px',
                                height: '32px',
                                background: zoomLevel < 2 ? '#333' : '#222',
                                color: zoomLevel < 2 ? 'white' : '#666',
                                border: '1px solid #444',
                                borderRadius: '4px',
                                cursor: zoomLevel < 2 ? 'pointer' : 'not-allowed',
                                fontSize: '1.2rem',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                transition: 'all 0.2s ease',
                            }}
                            onMouseEnter={(e) => {
                                if (zoomLevel < 2) e.currentTarget.style.background = '#444';
                            }}
                            onMouseLeave={(e) => {
                                if (zoomLevel < 2) e.currentTarget.style.background = '#333';
                            }}
                        >
                            +
                        </button>
                    </div>
                </div>

                {isLoading ? (
                    <div style={{ textAlign: 'center', color: '#666', padding: '4rem 0' }}>
                        Loading...
                    </div>
                ) : (
                    <div
                        ref={timelineRef}
                        style={{
                            height: '100%',
                            overflowX: 'auto',
                            overflowY: 'hidden',
                            paddingTop: '3.5rem',
                            paddingBottom: '1rem',
                            paddingLeft: '2rem',
                            paddingRight: '2rem',
                        }}
                    >
                        {/* Timeline Container */}
                        <div style={{
                            position: 'relative',
                            minWidth: `${timelineItems && timelineItems.length * 200 * zoomLevel}px`,
                            height: '140px',
                        }}>
                            {/* Horizontal Timeline Line */}
                            <div style={{
                                position: 'absolute',
                                top: '105px',
                                left: '0',
                                right: '0',
                                height: '3px',
                                background: 'linear-gradient(90deg, #222 0%, #ff4081 50%, #222 100%)',
                            }} />

                            {/* Timeline Items */}
                            {timelineItems?.map((item, index) => {
                                const isSelected = selectedIndex === index;
                                const cardWidth = 180 * zoomLevel;
                                const leftPosition = index * 200 * zoomLevel;

                                return (
                                    <div
                                        key={index}
                                        style={{
                                            position: 'absolute',
                                            left: `${leftPosition}px`,
                                            top: 0,
                                            width: `${cardWidth}px`,
                                            cursor: 'pointer',
                                            zIndex: isSelected ? 5 : 1,
                                        }}
                                        onClick={() => setSelectedIndex(index)}
                                    >
                                        {/* Content Card */}
                                        <div
                                            style={{
                                                width: '100%',
                                                background: isSelected ? 'rgba(255, 64, 129, 0.2)' : 'rgba(17, 17, 17, 0.95)',
                                                border: `2px solid ${isSelected ? '#ff4081' : '#333'}`,
                                                borderRadius: '6px',
                                                padding: `${0.5 * zoomLevel}rem`,
                                                marginBottom: '8px',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                gap: `${0.25 * zoomLevel}rem`,
                                                transition: 'all 0.3s ease',
                                                transform: isSelected ? 'scale(1.05)' : 'scale(1)',
                                                boxShadow: isSelected ? '0 4px 20px rgba(255, 64, 129, 0.5)' : '0 2px 8px rgba(0, 0, 0, 0.3)',
                                                backdropFilter: 'blur(10px)',
                                                minHeight: `${60 * zoomLevel}px`,
                                            }}
                                            onMouseEnter={(e) => {
                                                if (!isSelected) {
                                                    e.currentTarget.style.borderColor = '#666';
                                                    e.currentTarget.style.background = 'rgba(26, 26, 26, 0.95)';
                                                }
                                            }}
                                            onMouseLeave={(e) => {
                                                if (!isSelected) {
                                                    e.currentTarget.style.borderColor = '#333';
                                                    e.currentTarget.style.background = 'rgba(17, 17, 17, 0.95)';
                                                }
                                            }}
                                        >
                                            {/* Title */}
                                            <div style={{
                                                fontSize: `${0.65 * zoomLevel}rem`,
                                                color: isSelected ? '#fff' : '#ccc',
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis',
                                                display: '-webkit-box',
                                                WebkitLineClamp: 2,
                                                WebkitBoxOrient: 'vertical',
                                                lineHeight: '1.3',
                                                fontWeight: 500,
                                            }}>
                                                {item.cardTitle}
                                            </div>

                                            {/* Media Source Badge */}
                                            {item.mediaSource && (
                                                <div style={{
                                                    fontSize: `${0.55 * zoomLevel}rem`,
                                                    color: isSelected ? '#fff' : '#ff4081',
                                                    fontWeight: 600,
                                                    background: isSelected ? '#ff4081' : 'rgba(255, 64, 129, 0.25)',
                                                    padding: `${0.2 * zoomLevel}rem ${0.4 * zoomLevel}rem`,
                                                    borderRadius: '3px',
                                                    textAlign: 'center',
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '0.3px',
                                                    alignSelf: 'flex-start',
                                                }}>
                                                    {item.mediaSource}
                                                </div>
                                            )}
                                        </div>

                                        {/* Timeline Marker (Dot) */}
                                        <div style={{
                                            position: 'absolute',
                                            top: '95px',
                                            left: '50%',
                                            transform: 'translateX(-50%)',
                                            width: isSelected ? `${16 * zoomLevel}px` : `${10 * zoomLevel}px`,
                                            height: isSelected ? `${16 * zoomLevel}px` : `${10 * zoomLevel}px`,
                                            borderRadius: '50%',
                                            background: isSelected ? '#ff4081' : '#888',
                                            border: isSelected ? '3px solid #fff' : '2px solid #444',
                                            boxShadow: isSelected ? '0 0 20px rgba(255, 64, 129, 0.8)' : 'none',
                                            transition: 'all 0.3s ease',
                                            zIndex: 2,
                                        }} />

                                        {/* Year Label below timeline */}
                                        <div style={{
                                            position: 'absolute',
                                            top: '115px',
                                            left: '50%',
                                            transform: 'translateX(-50%)',
                                            fontSize: `${0.7 * zoomLevel}rem`,
                                            color: isSelected ? '#fff' : '#888',
                                            fontWeight: isSelected ? 700 : 500,
                                            whiteSpace: 'nowrap',
                                        }}>
                                            {item.title}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
