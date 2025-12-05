import { useStore } from '../store/useStore';
import { useState, useRef, useEffect } from 'react';

const languages = [
    { code: 'en' as const, name: 'English', flag: '🇺🇸' },
    { code: 'es' as const, name: 'Español', flag: '🇪🇸' },
    { code: 'ja' as const, name: '日本語', flag: '🇯🇵' },
    { code: 'ko' as const, name: '한국어', flag: '🇰🇷' },
    { code: 'zh' as const, name: '中文', flag: '🇨🇳' },
];

export const LanguageSelector = () => {
    const { language, setLanguage, viewMode } = useStore();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const currentLanguage = languages.find(lang => lang.code === language) || languages[0];

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    // Hide in timeline or mindmap view
    if (viewMode === 'TIMELINE' || viewMode === 'MINDMAP') {
        return null;
    }

    const handleLanguageSelect = (langCode: typeof language) => {
        setLanguage(langCode);
        setIsOpen(false);
    };

    return (
        <div
            ref={dropdownRef}
            style={{
                position: 'absolute',
                bottom: '2rem',
                right: '2rem',
                zIndex: 30,
            }}
        >
            {/* Dropdown Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    padding: '0.7rem 1.2rem',
                    background: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(10px)',
                    color: '#333',
                    border: '1px solid rgba(0, 0, 0, 0.1)',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.7rem',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    transition: 'all 0.3s ease',
                    minWidth: '140px',
                    justifyContent: 'space-between',
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.15)';
                    e.currentTarget.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
                    e.currentTarget.style.transform = 'translateY(0)';
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ fontSize: '1.2rem' }}>{currentLanguage.flag}</span>
                    <span style={{
                        display: window.innerWidth > 480 ? 'inline' : 'none'
                    }}>
                        {currentLanguage.name}
                    </span>
                </div>
                <span style={{
                    fontSize: '0.7rem',
                    transition: 'transform 0.3s ease',
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                }}>
                    ▼
                </span>
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <div
                    style={{
                        position: 'absolute',
                        bottom: 'calc(100% + 0.5rem)',
                        right: '0',
                        background: 'rgba(255, 255, 255, 0.98)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: '12px',
                        boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                        overflow: 'hidden',
                        minWidth: '180px',
                        border: '1px solid rgba(0, 0, 0, 0.1)',
                        animation: 'fadeInUp 0.2s ease',
                    }}
                >
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => handleLanguageSelect(lang.code)}
                            style={{
                                width: '100%',
                                padding: '0.8rem 1rem',
                                background: language === lang.code ? 'rgba(255, 64, 129, 0.1)' : 'transparent',
                                color: language === lang.code ? '#ff4081' : '#333',
                                border: 'none',
                                borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
                                cursor: 'pointer',
                                fontSize: '0.9rem',
                                fontWeight: language === lang.code ? 600 : 400,
                                transition: 'all 0.2s ease',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.7rem',
                                textAlign: 'left',
                            }}
                            onMouseEnter={(e) => {
                                if (language !== lang.code) {
                                    e.currentTarget.style.background = 'rgba(255, 64, 129, 0.05)';
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (language !== lang.code) {
                                    e.currentTarget.style.background = 'transparent';
                                }
                            }}
                        >
                            <span style={{ fontSize: '1.2rem' }}>{lang.flag}</span>
                            <span>{lang.name}</span>
                            {language === lang.code && (
                                <span style={{
                                    marginLeft: 'auto',
                                    color: '#ff4081',
                                    fontSize: '1rem',
                                }}>
                                    ✓
                                </span>
                            )}
                        </button>
                    ))}
                </div>
            )}

            {/* Add CSS animation */}
            <style>
                {`
                    @keyframes fadeInUp {
                        from {
                            opacity: 0;
                            transform: translateY(8px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }

                    @media (max-width: 768px) {
                        /* Mobile adjustments handled inline with window.innerWidth check */
                    }
                `}
            </style>
        </div>
    );
};
