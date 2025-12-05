import { useState, useEffect } from 'react';
import { useStore, type Language } from '../store/useStore';
import { payloadAPI, getLocalizedValue } from '../services/payloadService';
import type { Topic, TimelineEvent, MediaOutlet } from '../types/payload-types';
import './PublishView.css';

// Translations
const translations = {
    en: {
        international: 'International',
        usSources: 'US Sources',
        home: 'HOME',
        categories: 'CATEGORIES',
        about: 'ABOUT',
        pricing: 'PRICING',
        searchPlaceholder: 'Search topics...',
        fromNewsDesk: 'FROM THE NEWS DESK',
        articles: 'ARTICLES',
        enhancedVersion: 'ENHANCED VERSION',
        regions: 'REGIONS:',
    },
    es: {
        international: 'Internacional',
        usSources: 'Fuentes EE.UU.',
        home: 'INICIO',
        categories: 'CATEGORÍAS',
        about: 'NOSOTROS',
        pricing: 'PRECIOS',
        searchPlaceholder: 'Buscar temas...',
        fromNewsDesk: 'DESDE EL ESCRITORIO DE NOTICIAS',
        articles: 'ARTÍCULOS',
        enhancedVersion: 'VERSIÓN MEJORADA',
        regions: 'REGIONES:',
    },
    ja: {
        international: '国際ニュース',
        usSources: '米国ソース',
        home: 'ホーム',
        categories: 'カテゴリー',
        about: '私たちについて',
        pricing: '料金',
        searchPlaceholder: 'トピックを検索...',
        fromNewsDesk: 'ニュースデスクから',
        articles: '記事',
        enhancedVersion: '強化版',
        regions: '地域:',
    },
    ko: {
        international: '국제 뉴스',
        usSources: '미국 소스',
        home: '홈',
        categories: '카테고리',
        about: '소개',
        pricing: '가격',
        searchPlaceholder: '주제 검색...',
        fromNewsDesk: '뉴스 데스크에서',
        articles: '기사',
        enhancedVersion: '강화 버전',
        regions: '지역:',
    },
    zh: {
        international: '国际新闻',
        usSources: '美国来源',
        home: '首页',
        categories: '类别',
        about: '关于我们',
        pricing: '定价',
        searchPlaceholder: '搜索主题...',
        fromNewsDesk: '来自新闻台',
        articles: '文章',
        enhancedVersion: '增强版',
        regions: '地区:',
    },
};

export const PublishView = () => {
    const { language, setLanguage } = useStore();
    const [topics, setTopics] = useState<Topic[]>([]);
    const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
    const [timelineEvents, setTimelineEvents] = useState<TimelineEvent[]>([]);
    const [internationalSources, setInternationalSources] = useState<MediaOutlet[]>([]);
    const [usSources, setUsSources] = useState<MediaOutlet[]>([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const t = translations[language];

    // Load topics
    useEffect(() => {
        payloadAPI.getTopics().then((response) => {
            setTopics(response.docs);
            if (response.docs.length > 0) {
                setSelectedTopic(response.docs[0]);
            }
            setIsLoading(false);
        });
    }, []);

    // Load media outlets
    useEffect(() => {
        payloadAPI.getMediaOutlets('international').then(setInternationalSources);
        payloadAPI.getMediaOutlets('us').then(setUsSources);
    }, []);

    // Load timeline events when topic changes
    useEffect(() => {
        if (selectedTopic) {
            payloadAPI.getTimelineEvents(selectedTopic.slug, language).then((events) => {
                setTimelineEvents(events);
            });
        }
    }, [selectedTopic, language]);

    const filteredTopics = topics.filter((topic) =>
        getLocalizedValue(topic.title, language)?.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const languages: Language[] = ['en', 'es', 'zh', 'ja', 'ko'];
    const languageLabels: Record<Language, string> = {
        en: 'EN',
        es: 'ES',
        zh: 'ZH',
        ja: 'JA',
        ko: 'KO',
    };

    const handleTopicSelect = (topic: Topic) => {
        setSelectedTopic(topic);
    };

    return (
        <div className="publish-view">
            {/* Top Header Bar */}
            <header className="publish-header">
                <div className="header-left">
                    <button className="hamburger-menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <div className="language-switches">
                        {languages.filter(l => l !== language).slice(0, 3).map((lang) => (
                            <button
                                key={lang}
                                className="lang-btn"
                                onClick={() => setLanguage(lang)}
                            >
                                {languageLabels[lang]}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="header-center">
                    <h1 className="brand-title">THE TRUTH</h1>
                </div>
                <div className="header-right">
                    <div className="search-container">
                        <input
                            type="text"
                            placeholder={t.searchPlaceholder}
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="search-input"
                        />
                    </div>
                </div>
            </header>

            {/* Navigation */}
            <nav className="main-nav">
                <a href="#home">{t.home}</a>
                <a href="#categories">{t.categories}</a>
                <a href="#about">{t.about}</a>
                <a href="#pricing">{t.pricing}</a>
            </nav>

            {/* Topics Dropdown (if searching) */}
            {searchQuery && filteredTopics.length > 0 && (
                <div className="topics-dropdown">
                    {filteredTopics.map((topic) => (
                        <button
                            key={topic.id}
                            className="topic-option"
                            onClick={() => {
                                handleTopicSelect(topic);
                                setSearchQuery('');
                            }}
                        >
                            {getLocalizedValue(topic.title, language)}
                        </button>
                    ))}
                </div>
            )}

            {/* Main Content Area */}
            <main className="publish-main">
                {/* Left Sidebar - International Sources */}
                <aside className="sidebar sidebar-left">
                    <h3 className="sidebar-title">{t.international}</h3>
                    <ul className="source-list">
                        {internationalSources.map((source) => (
                            <li key={source.id} className="source-item">
                                <span className="source-icon">{source.icon}</span>
                                <span className="source-name">{source.name}</span>
                            </li>
                        ))}
                    </ul>
                </aside>

                {/* Center Content */}
                <article className="main-content">
                    {isLoading ? (
                        <div className="loading">Loading...</div>
                    ) : selectedTopic ? (
                        <>
                            <div className="article-meta">
                                {t.fromNewsDesk} • {timelineEvents.length} {t.articles} • <span className="enhanced">{t.enhancedVersion}</span>
                            </div>

                            <h1 className="article-title">
                                {getLocalizedValue(selectedTopic.title, language)}
                            </h1>

                            <div className="regions-badge">
                                <span className="regions-label">{t.regions}</span>
                                <span className="region-flags">🌍 🌎 🌏</span>
                            </div>

                            <p className="article-summary">
                                {getLocalizedValue(selectedTopic.summary, language)}
                            </p>

                            {/* Featured Image Placeholder */}
                            <div className="featured-image">
                                <div className="image-placeholder">
                                    {selectedTopic.type === 'health' && '💉'}
                                    {selectedTopic.type === 'conflict' && '⚔️'}
                                    {selectedTopic.type === 'environment' && '🌿'}
                                    {selectedTopic.type === 'technology' && '💻'}
                                    {selectedTopic.type === 'economy' && '📈'}
                                    {selectedTopic.type === 'science' && '🔬'}
                                </div>
                            </div>

                            {/* Timeline Events */}
                            <section className="timeline-section">
                                <h2 className="section-title">Timeline</h2>
                                <div className="timeline-list">
                                    {timelineEvents.map((event) => (
                                        <div key={event.id} className="timeline-item">
                                            <div className="timeline-date">
                                                {getLocalizedValue(event.title, language)}
                                            </div>
                                            <div className="timeline-content">
                                                <h3>{getLocalizedValue(event.cardTitle, language)}</h3>
                                                <p>{getLocalizedValue(event.cardDetailedText, language)}</p>
                                                {event.mediaSource && (
                                                    <span className="media-source">— {typeof event.mediaSource === 'string' ? event.mediaSource : event.mediaSource.name}</span>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </>
                    ) : (
                        <div className="no-topic">Select a topic to view</div>
                    )}
                </article>

                {/* Right Sidebar - US Sources */}
                <aside className="sidebar sidebar-right">
                    <h3 className="sidebar-title">{t.usSources}</h3>
                    <ul className="source-list">
                        {usSources.map((source) => (
                            <li key={source.id} className="source-item">
                                <span className="source-icon">{source.icon}</span>
                                <span className="source-name">{source.name}</span>
                            </li>
                        ))}
                    </ul>
                </aside>
            </main>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="mobile-menu-overlay" onClick={() => setIsMenuOpen(false)}>
                    <div className="mobile-menu" onClick={(e) => e.stopPropagation()}>
                        <nav className="mobile-nav">
                            <a href="/">{t.home}</a>
                            <a href="#categories">{t.categories}</a>
                            <a href="#about">{t.about}</a>
                            <a href="#pricing">{t.pricing}</a>
                        </nav>
                        <div className="mobile-topics">
                            <h4>Topics</h4>
                            {topics.map((topic) => (
                                <button
                                    key={topic.id}
                                    className={`mobile-topic-btn ${selectedTopic?.id === topic.id ? 'active' : ''}`}
                                    onClick={() => {
                                        handleTopicSelect(topic);
                                        setIsMenuOpen(false);
                                    }}
                                >
                                    {getLocalizedValue(topic.title, language)}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
