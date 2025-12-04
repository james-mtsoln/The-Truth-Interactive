import { useStore } from '../store/useStore';

const languages = [
    { code: 'en' as const, name: 'English', flag: '🇺🇸' },
    { code: 'es' as const, name: 'Español', flag: '🇪🇸' },
    { code: 'ja' as const, name: '日本語', flag: '🇯🇵' },
    { code: 'ko' as const, name: '한국어', flag: '🇰🇷' },
    { code: 'zh' as const, name: '中文', flag: '🇨🇳' },
];

export const LanguageSelector = () => {
    const { language, setLanguage, viewMode } = useStore();

    // Hide in timeline view
    if (viewMode === 'TIMELINE') {
        return null;
    }

    return (
        <div style={{
            position: 'absolute',
            top: '2rem',
            right: '2rem',
            zIndex: 30,
            background: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(10px)',
            borderRadius: '12px',
            padding: '0.5rem',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            display: 'flex',
            gap: '0.5rem',
        }}>
            {languages.map((lang) => (
                <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    style={{
                        padding: '0.6rem 1rem',
                        background: language === lang.code ? '#ff4081' : 'transparent',
                        color: language === lang.code ? 'white' : '#333',
                        border: 'none',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        fontSize: '0.9rem',
                        fontWeight: language === lang.code ? 600 : 400,
                        transition: 'all 0.3s ease',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                    }}
                    onMouseEnter={(e) => {
                        if (language !== lang.code) {
                            e.currentTarget.style.background = 'rgba(255, 64, 129, 0.1)';
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
                </button>
            ))}
        </div>
    );
};
