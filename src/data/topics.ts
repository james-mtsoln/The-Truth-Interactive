import { type Language } from '../store/useStore';

export interface Topic {
    id: string;
    title: Record<Language, string>;
    lat: number;
    lon: number;
    summary: Record<Language, string>;
    type: string;
}

export const topics: Topic[] = [
    {
        id: 'climate-change',
        title: {
            en: 'CLIMATE CHANGE',
            es: 'CAMBIO CLIMÁTICO',
            ja: '気候変動',
            ko: '기후 변화',
            zh: '气候变化',
        },
        lat: 51.5074,
        lon: -0.1278,
        summary: {
            en: 'Global efforts to combat climate change and reduce carbon emissions',
            es: 'Esfuerzos globales para combatir el cambio climático y reducir las emisiones de carbono',
            ja: '気候変動と闘い、炭素排出を削減するための世界的な取り組み',
            ko: '기후 변화에 맞서고 탄소 배출을 줄이기 위한 글로벌 노력',
            zh: '应对气候变化和减少碳排放的全球努力',
        },
        type: 'environment',
    },
    {
        id: 'ai-regulation',
        title: {
            en: 'AI REGULATION',
            es: 'REGULACIÓN DE IA',
            ja: 'AI規制',
            ko: 'AI 규제',
            zh: 'AI监管',
        },
        lat: 40.7128,
        lon: -74.0060,
        summary: {
            en: 'Governments worldwide debating safety and ethics of AI',
            es: 'Gobiernos de todo el mundo debaten la seguridad y la ética de la IA',
            ja: '世界中の政府がAIの安全性と倫理について議論',
            ko: '전 세계 정부가 AI의 안전성과 윤리에 대해 논의',
            zh: '全球政府讨论人工智能的安全性和伦理',
        },
        type: 'technology',
    },
    {
        id: 'global-economy',
        title: {
            en: 'GLOBAL ECONOMY',
            es: 'ECONOMÍA GLOBAL',
            ja: '世界経済',
            ko: '세계 경제',
            zh: '全球经济',
        },
        lat: 35.6762,
        lon: 139.6503,
        summary: {
            en: 'Economic trends and financial markets across the world',
            es: 'Tendencias económicas y mercados financieros en todo el mundo',
            ja: '世界の経済動向と金融市場',
            ko: '전 세계의 경제 동향 및 금융 시장',
            zh: '全球经济趋势和金融市场',
        },
        type: 'economy',
    },
    {
        id: 'renewable-energy',
        title: {
            en: 'RENEWABLE ENERGY',
            es: 'ENERGÍA RENOVABLE',
            ja: '再生可能エネルギー',
            ko: '재생 에너지',
            zh: '可再生能源',
        },
        lat: -33.8688,
        lon: 151.2093,
        summary: {
            en: 'Solar and wind adoption accelerating across Europe',
            es: 'La adopción solar y eólica se acelera en Europa',
            ja: 'ヨーロッパで太陽光と風力の採用が加速',
            ko: '유럽 전역에서 태양광 및 풍력 채택 가속화',
            zh: '欧洲太阳能和风能采用加速',
        },
        type: 'environment',
    },
    {
        id: 'covid-19',
        title: {
            en: 'COVID-19 PANDEMIC',
            es: 'PANDEMIA DE COVID-19',
            ja: 'COVID-19パンデミック',
            ko: 'COVID-19 팬데믹',
            zh: 'COVID-19疫情',
        },
        lat: 30.5728,
        lon: 114.3055,
        summary: {
            en: 'Global pandemic response, vaccines, and public health measures',
            es: 'Respuesta pandémica global, vacunas y medidas de salud pública',
            ja: '世界的なパンデミック対応、ワクチン、公衆衛生対策',
            ko: '글로벌 팬데믹 대응, 백신 및 공중 보건 조치',
            zh: '全球疫情应对、疫苗和公共卫生措施',
        },
        type: 'health',
    },
    {
        id: 'ukraine-conflict',
        title: {
            en: 'UKRAINE CONFLICT',
            es: 'CONFLICTO DE UCRANIA',
            ja: 'ウクライナ紛争',
            ko: '우크라이나 분쟁',
            zh: '乌克兰冲突',
        },
        lat: 50.4501,
        lon: 30.5234,
        summary: {
            en: 'Ongoing conflict and international response',
            es: 'Conflicto en curso y respuesta internacional',
            ja: '進行中の紛争と国際的対応',
            ko: '진행 중인 분쟁과 국제적 대응',
            zh: '持续冲突和国际反应',
        },
        type: 'conflict',
    },
    {
        id: 'space-exploration',
        title: {
            en: 'SPACE EXPLORATION',
            es: 'EXPLORACIÓN ESPACIAL',
            ja: '宇宙探査',
            ko: '우주 탐사',
            zh: '太空探索',
        },
        lat: 28.5728,
        lon: -80.6490,
        summary: {
            en: 'Historic missions to Mars, Moon, and beyond',
            es: 'Misiones históricas a Marte, la Luna y más allá',
            ja: '火星、月、そしてその先への歴史的なミッション',
            ko: '화성, 달 그리고 그 너머로의 역사적인 임무',
            zh: '前往火星、月球及更远地方的历史性任务',
        },
        type: 'science',
    },
    {
        id: 'cybersecurity',
        title: {
            en: 'CYBERSECURITY',
            es: 'CIBERSEGURIDAD',
            ja: 'サイバーセキュリティ',
            ko: '사이버 보안',
            zh: '网络安全',
        },
        lat: 37.7749,
        lon: -122.4194,
        summary: {
            en: 'Digital threats, data breaches, and protection measures',
            es: 'Amenazas digitales, violaciones de datos y medidas de protección',
            ja: 'デジタル脅威、データ侵害、保護対策',
            ko: '디지털 위협, 데이터 침해 및 보호 조치',
            zh: '数字威胁、数据泄露和保护措施',
        },
        type: 'technology',
    },
    {
        id: 'wang-fuk-court-fire',
        title: {
            en: 'WANG FUK COURT FIRE',
            es: 'INCENDIO DE WANG FUK COURT',
            ja: 'ワンフクコート火災',
            ko: '왕푹코트 화재',
            zh: '宏福苑火災',
        },
        lat: 22.3193,
        lon: 114.1694,
        summary: {
            en: 'Deadly residential fire in Hong Kong public housing estate',
            es: 'Incendio mortal en complejo habitacional público de Hong Kong',
            ja: '香港公営住宅での致命的な火災',
            ko: '홍콩 공공 주택 단지의 치명적인 화재',
            zh: '香港公共屋邨致命火災',
        },
        type: 'conflict',
    },
];
