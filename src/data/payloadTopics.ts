/**
 * Mock Payload CMS Data - Topics
 * 
 * This file contains topic data structured exactly as Payload CMS would return it.
 * When you're ready to integrate with a real Payload backend, simply update the
 * API service to fetch from your Payload instance instead of using this mock data.
 */

import type { Topic } from '../types/payload-types';

const currentTimestamp = new Date().toISOString();

export const payloadTopics: Topic[] = [
    {
        id: '1',
        slug: 'climate-change',
        title: {
            en: 'CLIMATE CHANGE',
            es: 'CAMBIO CLIMÁTICO',
            ja: '気候変動',
            ko: '기후 변화',
            zh: '气候变化',
        },
        summary: {
            en: 'Global efforts to combat climate change and reduce carbon emissions',
            es: 'Esfuerzos globales para combatir el cambio climático y reducir las emisiones de carbono',
            ja: '気候変動と闘い、炭素排出を削減するための世界的な取り組み',
            ko: '기후 변화에 맞서고 탄소 배출을 줄이기 위한 글로벌 노력',
            zh: '应对气候变化和减少碳排放的全球努力',
        },
        location: {
            lat: 51.5074,
            lon: -0.1278,
        },
        type: 'environment',
        _status: 'published',
        createdAt: currentTimestamp,
        updatedAt: currentTimestamp,
    },
    {
        id: '2',
        slug: 'ai-regulation',
        title: {
            en: 'AI REGULATION',
            es: 'REGULACIÓN DE IA',
            ja: 'AI規制',
            ko: 'AI 규제',
            zh: 'AI监管',
        },
        summary: {
            en: 'Governments worldwide debating safety and ethics of AI',
            es: 'Gobiernos de todo el mundo debaten la seguridad y la ética de la IA',
            ja: '世界中の政府がAIの安全性と倫理について議論',
            ko: '전 세계 정부가 AI의 안전성과 윤리에 대해 논의',
            zh: '全球政府讨论人工智能的安全性和伦理',
        },
        location: {
            lat: 40.7128,
            lon: -74.0060,
        },
        type: 'technology',
        _status: 'published',
        createdAt: currentTimestamp,
        updatedAt: currentTimestamp,
    },
    {
        id: '3',
        slug: 'global-economy',
        title: {
            en: 'GLOBAL ECONOMY',
            es: 'ECONOMÍA GLOBAL',
            ja: '世界経済',
            ko: '세계 경제',
            zh: '全球经济',
        },
        summary: {
            en: 'Economic trends and financial markets across the world',
            es: 'Tendencias económicas y mercados financieros en todo el mundo',
            ja: '世界の経済動向と金融市場',
            ko: '전 세계의 경제 동향 및 금융 시장',
            zh: '全球经济趋势和金融市场',
        },
        location: {
            lat: 35.6762,
            lon: 139.6503,
        },
        type: 'economy',
        _status: 'published',
        createdAt: currentTimestamp,
        updatedAt: currentTimestamp,
    },
    {
        id: '4',
        slug: 'renewable-energy',
        title: {
            en: 'RENEWABLE ENERGY',
            es: 'ENERGÍA RENOVABLE',
            ja: '再生可能エネルギー',
            ko: '재생 에너지',
            zh: '可再生能源',
        },
        summary: {
            en: 'Solar and wind adoption accelerating across Europe',
            es: 'La adopción solar y eólica se acelera en Europa',
            ja: 'ヨーロッパで太陽光と風力の採用が加速',
            ko: '유럽 전역에서 태양광 및 풍력 채택 가속화',
            zh: '欧洲太阳能和风能采用加速',
        },
        location: {
            lat: -33.8688,
            lon: 151.2093,
        },
        type: 'environment',
        _status: 'published',
        createdAt: currentTimestamp,
        updatedAt: currentTimestamp,
    },
    {
        id: '5',
        slug: 'covid-19',
        title: {
            en: 'COVID-19 PANDEMIC',
            es: 'PANDEMIA DE COVID-19',
            ja: 'COVID-19パンデミック',
            ko: 'COVID-19 팬데믹',
            zh: 'COVID-19疫情',
        },
        summary: {
            en: 'Global pandemic response, vaccines, and public health measures',
            es: 'Respuesta pandémica global, vacunas y medidas de salud pública',
            ja: '世界的なパンデミック対応、ワクチン、公衆衛生対策',
            ko: '글로벌 팬데믹 대응, 백신 및 공중 보건 조치',
            zh: '全球疫情应对、疫苗和公共卫生措施',
        },
        location: {
            lat: 30.5728,
            lon: 114.3055,
        },
        type: 'health',
        _status: 'published',
        createdAt: currentTimestamp,
        updatedAt: currentTimestamp,
    },
    {
        id: '6',
        slug: 'ukraine-conflict',
        title: {
            en: 'UKRAINE CONFLICT',
            es: 'CONFLICTO DE UCRANIA',
            ja: 'ウクライナ紛争',
            ko: '우크라이나 분쟁',
            zh: '乌克兰冲突',
        },
        summary: {
            en: 'Ongoing conflict and international response',
            es: 'Conflicto en curso y respuesta internacional',
            ja: '進行中の紛争と国際的対応',
            ko: '진행 중인 분쟁과 국제적 대응',
            zh: '持续冲突和国际反应',
        },
        location: {
            lat: 50.4501,
            lon: 30.5234,
        },
        type: 'conflict',
        _status: 'published',
        createdAt: currentTimestamp,
        updatedAt: currentTimestamp,
    },
    {
        id: '7',
        slug: 'space-exploration',
        title: {
            en: 'SPACE EXPLORATION',
            es: 'EXPLORACIÓN ESPACIAL',
            ja: '宇宙探査',
            ko: '우주 탐사',
            zh: '太空探索',
        },
        summary: {
            en: 'Historic missions to Mars, Moon, and beyond',
            es: 'Misiones históricas a Marte, la Luna y más allá',
            ja: '火星、月、そしてその先への歴史的なミッション',
            ko: '화성, 달 그리고 그 너머로의 역사적인 임무',
            zh: '前往火星、月球及更远地方的历史性任务',
        },
        location: {
            lat: 28.5728,
            lon: -80.6490,
        },
        type: 'science',
        _status: 'published',
        createdAt: currentTimestamp,
        updatedAt: currentTimestamp,
    },
    {
        id: '8',
        slug: 'cybersecurity',
        title: {
            en: 'CYBERSECURITY',
            es: 'CIBERSEGURIDAD',
            ja: 'サイバーセキュリティ',
            ko: '사이버 보안',
            zh: '网络安全',
        },
        summary: {
            en: 'Digital threats, data breaches, and protection measures',
            es: 'Amenazas digitales, violaciones de datos y medidas de protección',
            ja: 'デジタル脅威、データ侵害、保護対策',
            ko: '디지털 위협, 데이터 침해 및 보호 조치',
            zh: '数字威胁、数据泄露和保护措施',
        },
        location: {
            lat: 37.7749,
            lon: -122.4194,
        },
        type: 'technology',
        _status: 'published',
        createdAt: currentTimestamp,
        updatedAt: currentTimestamp,
    },
];
