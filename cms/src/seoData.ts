// SEO Data Helper - Comprehensive multilingual SEO metadata for all topics
// This file contains SEO metadata and helper functions for use in the seed script
import type { Language } from './seedData'

// Helper function to auto-generate SEO metadata from topic data
export function generateTopicSEO(slug: string, title: string, summary: string, type: string, locale: Language | 'en' = 'en') {
    const typeKeywords: Record<string, Record<Language | 'en', string>> = {
        environment: {
            en: 'environmental policy, sustainability, conservation, green technology',
            es: 'política ambiental, sostenibilidad, conservación, tecnología verde',
            ja: '環境政策, 持続可能性, 保全, グリーンテクノロジー',
            ko: '환경 정책, 지속 가능성, 보존, 녹색 기술',
            zh: '环境政策, 可持续发展, 保护, 绿色技术',
        },
        technology: {
            en: 'technology news, innovation, digital transformation, tech policy',
            es: 'noticias tecnológicas, innovación, transformación digital, política tecnológica',
            ja: 'テクノロジーニュース, イノベーション, デジタル変革, 技術政策',
            ko: '기술 뉴스, 혁신, 디지털 전환, 기술 정책',
            zh: '科技新闻, 创新, 数字化转型, 技术政策',
        },
        economy: {
            en: 'economic news, financial markets, global trade, monetary policy',
            es: 'noticias económicas, mercados financieros, comercio global, política monetaria',
            ja: '経済ニュース, 金融市場, グローバル貿易, 金融政策',
            ko: '경제 뉴스, 금융 시장, 글로벌 무역, 통화 정책',
            zh: '经济新闻, 金融市场, 全球贸易, 货币政策',
        },
        health: {
            en: 'health news, public health, medical research, healthcare policy',
            es: 'noticias de salud, salud pública, investigación médica, política sanitaria',
            ja: '健康ニュース, 公衆衛生, 医学研究, 医療政策',
            ko: '건강 뉴스, 공중 보건, 의학 연구, 의료 정책',
            zh: '健康新闻, 公共卫生, 医学研究, 医疗政策',
        },
        conflict: {
            en: 'international conflict, geopolitics, peace efforts, humanitarian crisis',
            es: 'conflicto internacional, geopolítica, esfuerzos de paz, crisis humanitaria',
            ja: '国際紛争, 地政学, 平和活動, 人道危機',
            ko: '국제 분쟁, 지정학, 평화 노력, 인도적 위기',
            zh: '国际冲突, 地缘政治, 和平努力, 人道危机',
        },
        science: {
            en: 'scientific research, space exploration, discoveries, breakthrough technology',
            es: 'investigación científica, exploración espacial, descubrimientos, tecnología innovadora',
            ja: '科学研究, 宇宙探査, 発見, 画期的技術',
            ko: '과학 연구, 우주 탐사, 발견, 획기적인 기술',
            zh: '科学研究, 太空探索, 发现, 突破性技术',
        },
    };

    const keywords = `${title.toLowerCase()}, ${typeKeywords[type]?.[locale] || typeKeywords[type]?.en || ''}`;

    const authorNames: Record<Language | 'en', string> = {
        en: 'The Truth Editorial Team',
        es: 'Equipo Editorial de The Truth',
        ja: 'The Truth 編集チーム',
        ko: 'The Truth 편집팀',
        zh: 'The Truth 编辑团队',
    };

    return {
        metaTitle: `${title} | The Truth`,
        metaDescription: summary.length > 160 ? summary.substring(0, 157) + '...' : summary,
        keywords: keywords.substring(0, 200),
        openGraph: {
            ogTitle: title,
            ogDescription: summary.length > 200 ? summary.substring(0, 197) + '...' : summary,
            ogType: 'article',
        },
        twitter: {
            twitterCard: 'summary_large_image',
            twitterTitle: title,
            twitterDescription: summary.length > 200 ? summary.substring(0, 197) + '...' : summary,
        },
        structuredData: {
            schemaType: 'NewsArticle',
            author: authorNames[locale],
            publisher: 'The Truth',
        },
    };
}

// Manual SEO data for key topics (will be used as examples, others will be auto-generated)
export const manualTopicSEO: Record<string, Record<Language | 'en', any>> = {
    'climate-change': {
        en: {
            metaTitle: 'Climate Change: Global Action & Carbon Reduction | The Truth',
            metaDescription: 'Latest news and comprehensive coverage on climate change, global warming, carbon emissions reduction, and international environmental efforts to combat climate crisis.',
            keywords: 'climate change, global warming, carbon emissions, environmental policy, climate action, sustainability, renewable energy, Paris Agreement',
            openGraph: {
                ogTitle: 'Climate Change: Global Efforts to Combat Environmental Crisis',
                ogDescription: 'Comprehensive coverage of climate change developments, carbon reduction initiatives, and international climate action.',
                ogType: 'article',
            },
            twitter: {
                twitterCard: 'summary_large_image',
                twitterTitle: 'Climate Change News & Global Climate Action',
                twitterDescription: 'Latest updates on climate change and environmental efforts worldwide.',
            },
            structuredData: {
                schemaType: 'NewsArticle',
                author: 'The Truth Editorial Team',
                publisher: 'The Truth',
            },
        },
        es: {
            metaTitle: 'Cambio Climático: Acción Global y Reducción de Carbono',
            metaDescription: 'Últimas noticias y cobertura completa sobre el cambio climático, calentamiento global, reducción de emisiones de carbono y esfuerzos ambientales internacionales.',
            keywords: 'cambio climático, calentamiento global, emisiones de carbono, política ambiental, acción climática, sostenibilidad',
            openGraph: {
                ogTitle: 'Cambio Climático: Esfuerzos Globales Contra la Crisis Ambiental',
                ogDescription: 'Cobertura completa de desarrollos sobre cambio climático e iniciativas de reducción de carbono.',
            },
            twitter: {
                twitterTitle: 'Noticias sobre Cambio Climático y Acción Global',
                twitterDescription: 'Últimas actualizaciones sobre cambio climático y esfuerzos ambientales mundiales.',
            },
            structuredData: {
                author: 'Equipo Editorial de The Truth',
            },
        },
        ja: {
            metaTitle: '気候変動: グローバル対策と炭素削減 | The Truth',
            metaDescription: '気候変動、地球温暖化、炭素排出削減、国際的な環境保護活動に関する最新ニュースと包括的な報道。',
            keywords: '気候変動, 地球温暖化, 炭素排出, 環境政策, 気候アクション, 持続可能性, 再生可能エネルギー',
            openGraph: {
                ogTitle: '気候変動: 環境危機に対するグローバルな取り組み',
                ogDescription: '気候変動の動向、炭素削減イニシアチブ、国際的な気候対策の包括的報道。',
            },
            twitter: {
                twitterTitle: '気候変動ニュースとグローバル気候アクション',
                twitterDescription: '気候変動と環境保護活動に関する最新情報。',
            },
            structuredData: {
                author: 'The Truth 編集チーム',
            },
        },
        ko: {
            metaTitle: '기후 변화: 글로벌 행동과 탄소 감축 | The Truth',
            metaDescription: '기후 변화, 지구 온난화, 탄소 배출 감축, 국제 환경 노력에 대한 최신 뉴스 및 종합 보도.',
            keywords: '기후 변화, 지구 온난화, 탄소 배출, 환경 정책, 기후 행동, 지속 가능성, 재생 에너지',
            openGraph: {
                ogTitle: '기후 변화: 환경 위기에 맞선 글로벌 노력',
                ogDescription: '기후 변화 동향, 탄소 감축 이니셔티브, 국제 기후 행동에 대한 종합 보도.',
            },
            twitter: {
                twitterTitle: '기후 변화 뉴스 및 글로벌 기후 행동',
                twitterDescription: '전 세계 기후 변화 및 환경 노력에 대한 최신 정보.',
            },
            structuredData: {
                author: 'The Truth 편집팀',
            },
        },
        zh: {
            metaTitle: '气候变化：全球行动与碳减排 | The Truth',
            metaDescription: '气候变化、全球变暖、碳排放减少和国际环境保护努力的最新新闻和全面报道。',
            keywords: '气候变化, 全球变暖, 碳排放, 环境政策, 气候行动, 可持续发展, 可再生能源',
            openGraph: {
                ogTitle: '气候变化：应对环境危机的全球努力',
                ogDescription: '气候变化动态、碳减排举措和国际气候行动的全面报道。',
            },
            twitter: {
                twitterTitle: '气候变化新闻与全球气候行动',
                twitterDescription: '全球气候变化和环境保护工作的最新消息。',
            },
            structuredData: {
                author: 'The Truth 编辑团队',
            },
        },
    },
    'ai-regulation': {
        en: {
            metaTitle: 'AI Regulation: Safety, Ethics & Global Policy | The Truth',
            metaDescription: 'Comprehensive coverage of AI regulation debates, artificial intelligence safety measures, ethical frameworks, and government policies worldwide on AI technology governance.',
            keywords: 'AI regulation, artificial intelligence, AI ethics, AI safety, technology policy, machine learning governance, AI legislation',
            openGraph: {
                ogTitle: 'AI Regulation: Global Debate on AI Safety and Ethics',
                ogDescription: 'Latest developments in AI regulation, safety measures, and ethical frameworks for artificial intelligence.',
                ogType: 'article',
            },
            twitter: {
                twitterCard: 'summary_large_image',
                twitterTitle: 'AI Regulation News & Global Policy Developments',
                twitterDescription: 'Updates on AI safety regulations and ethical governance worldwide.',
            },
            structuredData: {
                schemaType: 'NewsArticle',
                author: 'The Truth Technology Team',
                publisher: 'The Truth',
            },
        },
        es: {
            metaTitle: 'Regulación de IA: Seguridad, Ética y Políticas Globales',
            metaDescription: 'Cobertura completa de debates sobre regulación de IA, medidas de seguridad de inteligencia artificial, marcos éticos y políticas gubernamentales.',
            keywords: 'regulación IA, inteligencia artificial, ética IA, seguridad IA, política tecnológica, gobernanza de aprendizaje automático',
            openGraph: {
                ogTitle: 'Regulación de IA: Debate Global sobre Seguridad y Ética de IA',
                ogDescription: 'Últimos desarrollos en regulación de IA, medidas de seguridad y marcos éticos.',
            },
            twitter: {
                twitterTitle: 'Noticias de Regulación de IA y Desarrollos Políticos',
                twitterDescription: 'Actualizaciones sobre regulaciones de seguridad de IA y gobernanza ética.',
            },
            structuredData: {
                author: 'Equipo de Tecnología de The Truth',
            },
        },
        ja: {
            metaTitle: 'AI規制：安全性、倫理とグローバル政策 | The Truth',
            metaDescription: 'AI規制論争、人工知能の安全対策、倫理的枠組み、世界中のAI技術ガバナンスに関する政府政策の包括的報道。',
            keywords: 'AI規制, 人工知能, AI倫理, AI安全性, 技術政策, 機械学習ガバナンス, AI法制化',
            openGraph: {
                ogTitle: 'AI規制：AI安全性と倫理に関するグローバルな議論',
                ogDescription: 'AI規制、安全対策、人工知能の倫理的枠組みに関する最新動向。',
            },
            twitter: {
                twitterTitle: 'AI規制ニュースとグローバル政策動向',
                twitterDescription: 'AI安全規制と倫理的ガバナンスに関する最新情報。',
            },
            structuredData: {
                author: 'The Truth テクノロジーチーム',
            },
        },
        ko: {
            metaTitle: 'AI 규제: 안전, 윤리 및 글로벌 정책 | The Truth',
            metaDescription: 'AI 규제 논의, 인공지능 안전 조치, 윤리적 프레임워크, AI 기술 거버넌스에 대한 세계 정부 정책의 종합 보도.',
            keywords: 'AI 규제, 인공지능, AI 윤리, AI 안전, 기술 정책, 머신러닝 거버넌스, AI 입법',
            openGraph: {
                ogTitle: 'AI 규제: AI 안전과 윤리에 관한 글로벌 논의',
                ogDescription: 'AI 규제, 안전 조치, 인공지능 윤리적 프레임워크의 최신 동향.',
            },
            twitter: {
                twitterTitle: 'AI 규제 뉴스 및 글로벌 정책 개발',
                twitterDescription: 'AI 안전 규제 및 윤리적 거버넌스에 관한 업데이트.',
            },
            structuredData: {
                author: 'The Truth 기술팀',
            },
        },
        zh: {
            metaTitle: 'AI监管：安全、伦理与全球政策 | The Truth',
            metaDescription: '全面报道AI监管辩论、人工智能安全措施、伦理框架以及全球AI技术治理的政府政策。',
            keywords: 'AI监管, 人工智能, AI伦理, AI安全, 技术政策, 机器学习治理, AI立法',
            openGraph: {
                ogTitle: 'AI监管：关于AI安全和伦理的全球辩论',
                ogDescription: 'AI监管、安全措施和人工智能伦理框架的最新发展。',
            },
            twitter: {
                twitterTitle: 'AI监管新闻与全球政策发展',
                twitterDescription: '关于AI安全法规和伦理治理的更新。',
            },
            structuredData: {
                author: 'The Truth 技术团队',
            },
        },
    },
};

// Function to get SEO data for a topic (manual if available, auto-generated otherwise)
export function getTopicSEO(slug: string, title: Record<string, string>, summary: Record<string, string>, type: string, locale: Language | 'en' = 'en') {
    // Check if we have manual SEO data for this topic and locale
    if (manualTopicSEO[slug]?.[locale]) {
        return manualTopicSEO[slug][locale];
    }

    // Otherwise, auto-generate from topic data
    return generateTopicSEO(slug, title[locale] || title.en, summary[locale] || summary.en, type, locale);
}
