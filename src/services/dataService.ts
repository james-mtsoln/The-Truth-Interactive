import { type Topic } from '../data/topics';
import { type Language } from '../store/useStore';

export interface TimelineEvent {
    title: string;
    cardTitle: string;
    cardSubtitle: string;
    cardDetailedText: string;
    mediaSource?: string; // e.g., 'CNN', 'BBC', 'NYT'
    mediaSourceIcon?: string; // URL to media icon
    media?: {
        type: 'IMAGE' | 'VIDEO';
        source: {
            url: string;
        };
    };
}

// Mock historical data with multilingual support
const historicalData: Record<string, Record<Language, TimelineEvent[]>> = {
    'climate-change': {
        en: [
            {
                title: "1896",
                cardTitle: "The Greenhouse Effect",
                cardSubtitle: "Svante Arrhenius",
                cardDetailedText: "Svante Arrhenius calculates that doubling atmospheric CO2 would raise global temperatures.",
            },
            {
                title: "1988",
                cardTitle: "IPCC Formed",
                cardSubtitle: "Global Action",
                cardDetailedText: "The Intergovernmental Panel on Climate Change (IPCC) is established by the UN.",
            }
        ],
        es: [
            {
                title: "1896",
                cardTitle: "El Efecto Invernadero",
                cardSubtitle: "Svante Arrhenius",
                cardDetailedText: "Svante Arrhenius calcula que duplicar el CO2 atmosférico elevaría las temperaturas globales.",
            },
            {
                title: "1988",
                cardTitle: "Formación del IPCC",
                cardSubtitle: "Acción Global",
                cardDetailedText: "El Panel Intergubernamental sobre Cambio Climático (IPCC) es establecido por la ONU.",
            }
        ],
        ja: [
            {
                title: "1896",
                cardTitle: "温室効果",
                cardSubtitle: "スヴァンテ・アレニウス",
                cardDetailedText: "スヴァンテ・アレニウスは、大気中のCO2が2倍になると地球温度が上昇することを計算した。",
            },
            {
                title: "1988",
                cardTitle: "IPCC設立",
                cardSubtitle: "グローバルアクション",
                cardDetailedText: "国連により気候変動に関する政府間パネル（IPCC）が設立された。",
            }
        ],
        ko: [
            {
                title: "1896",
                cardTitle: "온실 효과",
                cardSubtitle: "스반테 아레니우스",
                cardDetailedText: "스반테 아레니우스는 대기 중 CO2가 두 배가 되면 지구 온도가 상승한다고 계산했습니다.",
            },
            {
                title: "1988",
                cardTitle: "IPCC 설립",
                cardSubtitle: "글로벌 액션",
                cardDetailedText: "기후변화에 관한 정부간 협의체(IPCC)가 유엔에 의해 설립되었습니다.",
            }
        ],
        zh: [
            {
                title: "1896",
                cardTitle: "温室效应",
                cardSubtitle: "斯万特·阿伦尼乌斯",
                cardDetailedText: "斯万特·阿伦尼乌斯计算出大气中CO2翻倍会导致全球温度上升。",
            },
            {
                title: "1988",
                cardTitle: "IPCC成立",
                cardSubtitle: "全球行动",
                cardDetailedText: "联合国成立了政府间气候变化专门委员会（IPCC）。",
            }
        ]
    },
    'ai-regulation': {
        en: [
            {
                title: "1950",
                cardTitle: "Turing Test",
                cardSubtitle: "Alan Turing",
                cardDetailedText: "Alan Turing proposes the Turing Test as a criterion of intelligence.",
            },
            {
                title: "2017",
                cardTitle: "Asilomar Principles",
                cardSubtitle: "AI Safety",
                cardDetailedText: "A set of 23 principles for the safe development of AI is created.",
            }
        ],
        es: [
            {
                title: "1950",
                cardTitle: "Prueba de Turing",
                cardSubtitle: "Alan Turing",
                cardDetailedText: "Alan Turing propone la Prueba de Turing como criterio de inteligencia.",
            },
            {
                title: "2017",
                cardTitle: "Principios de Asilomar",
                cardSubtitle: "Seguridad de IA",
                cardDetailedText: "Se crea un conjunto de 23 principios para el desarrollo seguro de la IA.",
            }
        ],
        ja: [
            {
                title: "1950",
                cardTitle: "チューリングテスト",
                cardSubtitle: "アラン・チューリング",
                cardDetailedText: "アラン・チューリングが知能の基準としてチューリングテストを提案。",
            },
            {
                title: "2017",
                cardTitle: "アシロマ原則",
                cardSubtitle: "AI安全性",
                cardDetailedText: "AIの安全な開発のための23の原則が作成された。",
            }
        ],
        ko: [
            {
                title: "1950",
                cardTitle: "튜링 테스트",
                cardSubtitle: "앨런 튜링",
                cardDetailedText: "앨런 튜링이 지능의 기준으로 튜링 테스트를 제안했습니다.",
            },
            {
                title: "2017",
                cardTitle: "아실로마 원칙",
                cardSubtitle: "AI 안전",
                cardDetailedText: "AI의 안전한 개발을 위한 23개의 원칙이 만들어졌습니다.",
            }
        ],
        zh: [
            {
                title: "1950",
                cardTitle: "图灵测试",
                cardSubtitle: "艾伦·图灵",
                cardDetailedText: "艾伦·图灵提出图灵测试作为智能的标准。",
            },
            {
                title: "2017",
                cardTitle: "阿西洛马原则",
                cardSubtitle: "AI安全",
                cardDetailedText: "为AI的安全发展创建了一套23项原则。",
            }
        ]
    },
    'global-economy': {
        en: [
            {
                title: "1929",
                cardTitle: "The Great Depression",
                cardSubtitle: "Market Crash",
                cardDetailedText: "The stock market crash of 1929 leads to a decade-long economic downturn.",
            },
            {
                title: "2008",
                cardTitle: "Financial Crisis",
                cardSubtitle: "Global Recession",
                cardDetailedText: "A global financial crisis is triggered by the collapse of the US housing bubble.",
            }
        ],
        es: [
            {
                title: "1929",
                cardTitle: "La Gran Depresión",
                cardSubtitle: "Caída del Mercado",
                cardDetailedText: "La caída del mercado de valores de 1929 conduce a una recesión económica de una década.",
            },
            {
                title: "2008",
                cardTitle: "Crisis Financiera",
                cardSubtitle: "Recesión Global",
                cardDetailedText: "Se desencadena una crisis financiera global por el colapso de la burbuja inmobiliaria de EE.UU.",
            }
        ],
        ja: [
            {
                title: "1929",
                cardTitle: "大恐慌",
                cardSubtitle: "市場崩壊",
                cardDetailedText: "1929年の株式市場の暴落により、10年間の経済不況が始まった。",
            },
            {
                title: "2008",
                cardTitle: "金融危機",
                cardSubtitle: "世界的不況",
                cardDetailedText: "米国の住宅バブル崩壊により世界的な金融危機が引き起こされた。",
            }
        ],
        ko: [
            {
                title: "1929",
                cardTitle: "대공황",
                cardSubtitle: "시장 붕괴",
                cardDetailedText: "1929년 주식시장 붕괴로 10년간의 경제 불황이 시작되었습니다.",
            },
            {
                title: "2008",
                cardTitle: "금융 위기",
                cardSubtitle: "글로벌 불황",
                cardDetailedText: "미국 주택 거품 붕괴로 인해 글로벌 금융 위기가 촉발되었습니다.",
            }
        ],
        zh: [
            {
                title: "1929",
                cardTitle: "大萧条",
                cardSubtitle: "市场崩溃",
                cardDetailedText: "1929年股市 崩盘导致长达十年的经济衰退。",
            },
            {
                title: "2008",
                cardTitle: "金融危机",
                cardSubtitle: "全球衰退",
                cardDetailedText: "美国房地产泡沫破裂引发全球金融危机。",
            }
        ]
    },
    'renewable-energy': {
        en: [
            {
                title: "2010",
                cardTitle: "Solar Breakthrough",
                cardSubtitle: "Cost Reduction",
                cardDetailedText: "Solar panel costs drop by 80%, making renewable energy more accessible.",
            },
            {
                title: "2020",
                cardTitle: "Wind Power Expansion",
                cardSubtitle: "European Leadership",
                cardDetailedText: "Europe leads the world in offshore wind farm development.",
            }
        ],
        es: [
            {
                title: "2010",
                cardTitle: "Avance Solar",
                cardSubtitle: "Reducción de Costos",
                cardDetailedText: "Los costos de paneles solares caen un 80%, haciendo la energía renovable más accesible.",
            },
            {
                title: "2020",
                cardTitle: "Expansión Eólica",
                cardSubtitle: "Liderazgo Europeo",
                cardDetailedText: "Europa lidera el mundo en desarrollo de parques eólicos marinos.",
            }
        ],
        ja: [
            {
                title: "2010",
                cardTitle: "太陽光発電の躍進",
                cardSubtitle: "コスト削減",
                cardDetailedText: "ソーラーパネルのコストが80%削減され、再生可能エネルギーがより身近になった。",
            },
            {
                title: "2020",
                cardTitle: "風力発電の拡大",
                cardSubtitle: "欧州のリーダーシップ",
                cardDetailedText: "欧州が洋上風力発電所の開発で世界をリードしている。",
            }
        ],
        ko: [
            {
                title: "2010",
                cardTitle: "태양광 혁신",
                cardSubtitle: "비용 절감",
                cardDetailedText: "태양광 패널 비용이 80% 감소하여 재생 에너지가 더욱 접근 가능해졌습니다.",
            },
            {
                title: "2020",
                cardTitle: "풍력 확대",
                cardSubtitle: "유럽 리더십",
                cardDetailedText: "유럽이 해상 풍력 발전소 개발에서 세계를 선도하고 있습니다.",
            }
        ],
        zh: [
            {
                title: "2010",
                cardTitle: "太阳能突破",
                cardSubtitle: "成本降低",
                cardDetailedText: "太阳能电池板成本下降80%，使可再生能源更加普及。",
            },
            {
                title: "2020",
                cardTitle: "风电扩张",
                cardSubtitle: "欧洲领导",
                cardDetailedText: "欧洲在海上风电场开发方面引领全球。",
            }
        ]
    },
    'covid-19': {
        en: [
            {
                title: "December 2019",
                cardTitle: "First Cases Reported",
                cardSubtitle: "Wuhan, China",
                cardDetailedText: "First cases of a mysterious pneumonia reported in Wuhan, China. Local health authorities begin investigation into the outbreak.",
                mediaSource: "WHO",
            },
            {
                title: "January 2020",
                cardTitle: "Novel Coronavirus Identified",
                cardSubtitle: "Global Alert",
                cardDetailedText: "Chinese scientists identify the cause as a novel coronavirus (SARS-CoV-2). WHO declares a Public Health Emergency of International Concern.",
                mediaSource: "WHO",
            },
            {
                title: "March 2020",
                cardTitle: "Pandemic Declared",
                cardSubtitle: "Worldwide Lockdowns",
                cardDetailedText: "WHO declares COVID-19 a global pandemic. Countries worldwide implement lockdowns, travel restrictions, and social distancing measures.",
                mediaSource: "WHO",
            },
            {
                title: "April 2020",
                cardTitle: "Global Cases Surge",
                cardSubtitle: "Healthcare Crisis",
                cardDetailedText: "Global confirmed cases exceed 3 million. Healthcare systems face severe strain. PPE shortages become critical worldwide.",
                mediaSource: "Johns Hopkins",
            },
            {
                title: "July 2020",
                cardTitle: "Vaccine Development Race",
                cardSubtitle: "Operation Warp Speed",
                cardDetailedText: "Multiple vaccine candidates enter Phase 3 trials. Unprecedented global collaboration accelerates development timelines.",
                mediaSource: "NIH",
            },
            {
                title: "December 2020",
                cardTitle: "First Vaccines Approved",
                cardSubtitle: "Emergency Authorization",
                cardDetailedText: "Pfizer-BioNTech and Moderna vaccines receive emergency use authorization. Mass vaccination campaigns begin in multiple countries.",
                mediaSource: "FDA",
            },
            {
                title: "March 2021",
                cardTitle: "Global Vaccination Rollout",
                cardSubtitle: "Hope Emerges",
                cardDetailedText: "Over 400 million vaccine doses administered globally. Countries begin easing restrictions as vaccination rates increase.",
                mediaSource: "Our World in Data",
            },
            {
                title: "November 2021",
                cardTitle: "Omicron Variant Detected",
                cardSubtitle: "New Concerns",
                cardDetailedText: "Highly transmissible Omicron variant identified in South Africa. Triggers new wave of infections despite high vaccination rates.",
                mediaSource: "WHO",
            },
            {
                title: "January 2022",
                cardTitle: "Record Case Numbers",
                cardSubtitle: "Omicron Wave Peaks",
                cardDetailedText: "Daily global cases reach record highs above 3 million. However, severe illness rates lower due to vaccinations and variant characteristics.",
                mediaSource: "Johns Hopkins",
            },
            {
                title: "May 2022",
                cardTitle: "Endemic Transition Begins",
                cardSubtitle: "New Normal",
                cardDetailedText: "Many countries shift from pandemic to endemic management. Mask mandates and restrictions gradually lifted worldwide.",
                mediaSource: "CDC",
            },
            {
                title: "May 2023",
                cardTitle: "WHO Ends Emergency Status",
                cardSubtitle: "Pandemic Phase Over",
                cardDetailedText: "WHO declares end to COVID-19 as a global health emergency after over 3 years. Virus transitions to ongoing public health concern.",
                mediaSource: "WHO",
            },
            {
                title: "2024",
                cardTitle: "Long-term Management",
                cardSubtitle: "Lessons Learned",
                cardDetailedText: "Focus shifts to long COVID research, updated vaccines, and pandemic preparedness. Over 6.9 million deaths reported globally.",
                mediaSource: "WHO",
            }
        ],
        es: [
            {
                title: "Diciembre 2019",
                cardTitle: "Primeros Casos Reportados",
                cardSubtitle: "Wuhan, China",
                cardDetailedText: "Se reportan los primeros casos de una neumonía misteriosa en Wuhan, China. Las autoridades sanitarias locales inician la investigación del brote.",
                mediaSource: "OMS",
            },
            {
                title: "Enero 2020",
                cardTitle: "Coronavirus Novel Identificado",
                cardSubtitle: "Alerta Global",
                cardDetailedText: "Científicos chinos identifican la causa como un nuevo coronavirus (SARS-CoV-2). La OMS declara una Emergencia de Salud Pública de Importancia Internacional.",
                mediaSource: "OMS",
            },
            {
                title: "Marzo 2020",
                cardTitle: "Pandemia Declarada",
                cardSubtitle: "Confinamientos Mundiales",
                cardDetailedText: "La OMS declara COVID-19 una pandemia global. Los países implementan confinamientos, restricciones de viaje y medidas de distanciamiento social.",
                mediaSource: "OMS",
            },
            {
                title: "Abril 2020",
                cardTitle: "Aumento de Casos Globales",
                cardSubtitle: "Crisis Sanitaria",
                cardDetailedText: "Los casos confirmados superan los 3 millones a nivel mundial. Los sistemas de salud enfrentan tensión severa. Escasez crítica de EPP.",
                mediaSource: "Johns Hopkins",
            },
            {
                title: "Julio 2020",
                cardTitle: "Carrera por la Vacuna",
                cardSubtitle: "Operación Warp Speed",
                cardDetailedText: "Múltiples candidatos a vacuna entran en ensayos de Fase 3. Colaboración global sin precedentes acelera los plazos de desarrollo.",
                mediaSource: "NIH",
            },
            {
                title: "Diciembre 2020",
                cardTitle: "Primeras Vacunas Aprobadas",
                cardSubtitle: "Autorización de Emergencia",
                cardDetailedText: "Las vacunas Pfizer-BioNTech y Moderna reciben autorización de uso de emergencia. Comienzan campañas de vacunación masiva.",
                mediaSource: "FDA",
            },
            {
                title: "Marzo 2021",
                cardTitle: "Lanzamiento Global de Vacunación",
                cardSubtitle: "Surge la Esperanza",
                cardDetailedText: "Más de 400 millones de dosis administradas globalmente. Los países comienzan a aliviar restricciones a medida que aumentan las tasas de vacunación.",
                mediaSource: "Our World in Data",
            },
            {
                title: "Noviembre 2021",
                cardTitle: "Variante Ómicron Detectada",
                cardSubtitle: "Nuevas Preocupaciones",
                cardDetailedText: "Se identifica la variante Ómicron altamente transmisible en Sudáfrica. Desencadena nueva ola de infecciones.",
                mediaSource: "OMS",
            },
            {
                title: "Enero 2022",
                cardTitle: "Récord de Casos",
                cardSubtitle: "Pico de Ómicron",
                cardDetailedText: "Los casos diarios alcanzan máximos históricos superiores a 3 millones. Sin embargo, tasas de enfermedad grave más bajas debido a vacunación.",
                mediaSource: "Johns Hopkins",
            },
            {
                title: "Mayo 2022",
                cardTitle: "Transición Endémica",
                cardSubtitle: "Nueva Normalidad",
                cardDetailedText: "Muchos países pasan de gestión pandémica a endémica. Se levantan gradualmente los mandatos de mascarillas y restricciones.",
                mediaSource: "CDC",
            },
            {
                title: "Mayo 2023",
                cardTitle: "OMS Termina Estado de Emergencia",
                cardSubtitle: "Fase Pandémica Terminada",
                cardDetailedText: "La OMS declara el fin de COVID-19 como emergencia sanitaria global después de más de 3 años.",
                mediaSource: "OMS",
            },
            {
                title: "2024",
                cardTitle: "Gestión a Largo Plazo",
                cardSubtitle: "Lecciones Aprendidas",
                cardDetailedText: "El enfoque se centra en investigación de COVID largo, vacunas actualizadas y preparación para pandemias. Más de 6.9 millones de muertes reportadas.",
                mediaSource: "OMS",
            }
        ],
        ja: [
            {
                title: "2019年12月",
                cardTitle: "最初の症例報告",
                cardSubtitle: "中国・武漢",
                cardDetailedText: "中国・武漢で謎の肺炎の最初の症例が報告される。地方保健当局がアウトブレイクの調査を開始。",
                mediaSource: "WHO",
            },
            {
                title: "2020年1月",
                cardTitle: "新型コロナウイルス特定",
                cardSubtitle: "世界的警戒",
                cardDetailedText: "中国の科学者が原因を新型コロナウイルス(SARS-CoV-2)と特定。WHOが国際的に懸念される公衆衛生上の緊急事態を宣言。",
                mediaSource: "WHO",
            },
            {
                title: "2020年3月",
                cardTitle: "パンデミック宣言",
                cardSubtitle: "世界的ロックダウン",
                cardDetailedText: "WHOがCOVID-19を世界的パンデミックと宣言。世界中の国々がロックダウン、渡航制限、社会的距離措置を実施。",
                mediaSource: "WHO",
            },
            {
                title: "2020年4月",
                cardTitle: "世界的症例急増",
                cardSubtitle: "医療危機",
                cardDetailedText: "世界の確認症例が300万件を超える。医療システムが深刻な負担に直面。PPE不足が世界中で深刻化。",
                mediaSource: "ジョンズ・ホプキンス",
            },
            {
                title: "2020年7月",
                cardTitle: "ワクチン開発競争",
                cardSubtitle: "オペレーション・ワープ・スピード",
                cardDetailedText: "複数のワクチン候補が第3相試験に入る。前例のない国際協力が開発スケジュールを加速。",
                mediaSource: "NIH",
            },
            {
                title: "2020年12月",
                cardTitle: "最初のワクチン承認",
                cardSubtitle: "緊急使用許可",
                cardDetailedText: "ファイザー・ビオンテックとモデルナのワクチンが緊急使用許可を取得。複数の国で大規模ワクチン接種キャンペーンが開始。",
                mediaSource: "FDA",
            },
            {
                title: "2021年3月",
                cardTitle: "世界的ワクチン展開",
                cardSubtitle: "希望の光",
                cardDetailedText: "世界で4億回以上のワクチン接種が実施される。ワクチン接種率の上昇に伴い、各国が制限を緩和し始める。",
                mediaSource: "Our World in Data",
            },
            {
                title: "2021年11月",
                cardTitle: "オミクロン株検出",
                cardSubtitle: "新たな懸念",
                cardDetailedText: "南アフリカで感染力の高いオミクロン株が特定される。高いワクチン接種率にもかかわらず新たな感染の波を引き起こす。",
                mediaSource: "WHO",
            },
            {
                title: "2022年1月",
                cardTitle: "記録的な症例数",
                cardSubtitle: "オミクロンの波がピーク",
                cardDetailedText: "1日の世界の症例が300万件を超える記録的な高値に達する。しかし、ワクチン接種により重症化率は低下。",
                mediaSource: "ジョンズ・ホプキンス",
            },
            {
                title: "2022年5月",
                cardTitle: "エンデミック移行開始",
                cardSubtitle: "ニューノーマル",
                cardDetailedText: "多くの国がパンデミックからエンデミック管理へ移行。マスク義務と制限が世界中で徐々に解除される。",
                mediaSource: "CDC",
            },
            {
                title: "2023年5月",
                cardTitle: "WHO緊急事態終了宣言",
                cardSubtitle: "パンデミック段階終了",
                cardDetailedText: "WHOが3年以上を経て、COVID-19の世界的保健緊急事態の終了を宣言。ウイルスは継続的な公衆衛生上の懸念に移行。",
                mediaSource: "WHO",
            },
            {
                title: "2024年",
                cardTitle: "長期管理",
                cardSubtitle: "得られた教訓",
                cardDetailedText: "長期COVID研究、更新ワクチン、パンデミック準備に焦点が移る。世界で690万人以上の死亡が報告される。",
                mediaSource: "WHO",
            }
        ],
        ko: [
            {
                title: "2019년 12월",
                cardTitle: "첫 사례 보고",
                cardSubtitle: "중국 우한",
                cardDetailedText: "중국 우한에서 원인 불명의 폐렴 첫 사례가 보고됨. 지역 보건 당국이 발병 조사를 시작.",
                mediaSource: "WHO",
            },
            {
                title: "2020년 1월",
                cardTitle: "신종 코로나바이러스 확인",
                cardSubtitle: "글로벌 경보",
                cardDetailedText: "중국 과학자들이 원인을 신종 코로나바이러스(SARS-CoV-2)로 확인. WHO가 국제적 공중보건 비상사태를 선포.",
                mediaSource: "WHO",
            },
            {
                title: "2020년 3월",
                cardTitle: "팬데믹 선언",
                cardSubtitle: "전 세계 봉쇄",
                cardDetailedText: "WHO가 COVID-19를 글로벌 팬데믹으로 선언. 전 세계 국가들이 봉쇄, 여행 제한 및 사회적 거리두기 조치를 시행.",
                mediaSource: "WHO",
            },
            {
                title: "2020년 4월",
                cardTitle: "글로벌 사례 급증",
                cardSubtitle: "의료 위기",
                cardDetailedText: "전 세계 확진 사례가 300만 건을 초과. 의료 시스템이 심각한 부담에 직면. PPE 부족이 전 세계적으로 심각해짐.",
                mediaSource: "존스 홉킨스",
            },
            {
                title: "2020년 7월",
                cardTitle: "백신 개발 경쟁",
                cardSubtitle: "오퍼레이션 워프 스피드",
                cardDetailedText: "여러 백신 후보가 3상 시험에 진입. 전례 없는 글로벌 협력이 개발 일정을 가속화.",
                mediaSource: "NIH",
            },
            {
                title: "2020년 12월",
                cardTitle: "첫 백신 승인",
                cardSubtitle: "긴급 사용 승인",
                cardDetailedText: "화이자-바이오엔텍과 모더나 백신이 긴급 사용 승인을 받음. 여러 국가에서 대규모 백신 접종 캠페인 시작.",
                mediaSource: "FDA",
            },
            {
                title: "2021년 3월",
                cardTitle: "글로벌 백신 접종 시작",
                cardSubtitle: "희망의 등장",
                cardDetailedText: "전 세계적으로 4억 회 이상의 백신 접종 실시. 백신 접종률이 증가함에 따라 국가들이 제한 조치를 완화하기 시작.",
                mediaSource: "Our World in Data",
            },
            {
                title: "2021년 11월",
                cardTitle: "오미크론 변이 감지",
                cardSubtitle: "새로운 우려",
                cardDetailedText: "남아프리카에서 전파력이 높은 오미크론 변이가 확인됨. 높은 백신 접종률에도 불구하고 새로운 감염 파도를 촉발.",
                mediaSource: "WHO",
            },
            {
                title: "2022년 1월",
                cardTitle: "기록적인 사례 수",
                cardSubtitle: "오미크론 파도 정점",
                cardDetailedText: "일일 전 세계 사례가 300만 건을 넘는 기록적인 수준에 도달. 그러나 백신 접종으로 중증 질환률은 낮아짐.",
                mediaSource: "존스 홉킨스",
            },
            {
                title: "2022년 5월",
                cardTitle: "엔데믹 전환 시작",
                cardSubtitle: "뉴 노멀",
                cardDetailedText: "많은 국가가 팬데믹에서 엔데믹 관리로 전환. 마스크 의무와 제한 조치가 전 세계적으로 점진적으로 해제됨.",
                mediaSource: "CDC",
            },
            {
                title: "2023년 5월",
                cardTitle: "WHO 비상사태 종료",
                cardSubtitle: "팬데믹 단계 종료",
                cardDetailedText: "WHO가 3년 이상 후 COVID-19의 글로벌 보건 비상사태 종료를 선언. 바이러스는 지속적인 공중 보건 우려 사항으로 전환.",
                mediaSource: "WHO",
            },
            {
                title: "2024년",
                cardTitle: "장기 관리",
                cardSubtitle: "얻은 교훈",
                cardDetailedText: "장기 COVID 연구, 업데이트된 백신 및 팬데믹 대비에 초점이 이동. 전 세계적으로 690만 명 이상의 사망자 보고.",
                mediaSource: "WHO",
            }
        ],
        zh: [
            {
                title: "2019年12月",
                cardTitle: "首次报告病例",
                cardSubtitle: "中国武汉",
                cardDetailedText: "中国武汉报告首批神秘肺炎病例。地方卫生部门开始对疫情展开调查。",
                mediaSource: "WHO",
            },
            {
                title: "2020年1月",
                cardTitle: "新型冠状病毒确认",
                cardSubtitle: "全球警报",
                cardDetailedText: "中国科学家确认病因为新型冠状病毒(SARS-CoV-2)。WHO宣布国际关注的突发公共卫生事件。",
                mediaSource: "WHO",
            },
            {
                title: "2020年3月",
                cardTitle: "宣布大流行",
                cardSubtitle: "全球封锁",
                cardDetailedText: "WHO宣布COVID-19为全球大流行。世界各国实施封锁、旅行限制和社交距离措施。",
                mediaSource: "WHO",
            },
            {
                title: "2020年4月",
                cardTitle: "全球病例激增",
                cardSubtitle: "医疗危机",
                cardDetailedText: "全球确诊病例超过300万。医疗系统面临严重压力。个人防护装备短缺成为全球性关键问题。",
                mediaSource: "约翰斯·霍普金斯",
            },
            {
                title: "2020年7月",
                cardTitle: "疫苗开发竞赛",
                cardSubtitle: "曲速行动",
                cardDetailedText: "多个疫苗候选进入第三阶段试验。前所未有的全球合作加速开发时间表。",
                mediaSource: "NIH",
            },
            {
                title: "2020年12月",
                cardTitle: "首批疫苗获批",
                cardSubtitle: "紧急授权",
                cardDetailedText: "辉瑞-BioNTech和Moderna疫苗获得紧急使用授权。多个国家开始大规模疫苗接种活动。",
                mediaSource: "FDA",
            },
            {
                title: "2021年3月",
                cardTitle: "全球疫苗推广",
                cardSubtitle: "希望的曙光",
                cardDetailedText: "全球接种疫苗超过4亿剂。随着疫苗接种率提高,各国开始放松限制措施。",
                mediaSource: "Our World in Data",
            },
            {
                title: "2021年11月",
                cardTitle: "奥密克戎变种检测",
                cardSubtitle: "新的担忧",
                cardDetailedText: "在南非发现高度传播性的奥密克戎变种。尽管疫苗接种率高,仍引发新一波感染。",
                mediaSource: "WHO",
            },
            {
                title: "2022年1月",
                cardTitle: "创纪录病例数",
                cardSubtitle: "奥密克戎浪潮达峰",
                cardDetailedText: "每日全球病例达到创纪录的300万以上。然而,由于疫苗接种,重症率较低。",
                mediaSource: "约翰斯·霍普金斯",
            },
            {
                title: "2022年5月",
                cardTitle: "地方病转型开始",
                cardSubtitle: "新常态",
                cardDetailedText: "许多国家从大流行管理转向地方病管理。口罩令和限制措施在全球范围内逐渐解除。",
                mediaSource: "CDC",
            },
            {
                title: "2023年5月",
                cardTitle: "WHO结束紧急状态",
                cardSubtitle: "大流行阶段结束",
                cardDetailedText: "WHO宣布在3年多后结束COVID-19作为全球卫生紧急事件。病毒转为持续的公共卫生关注。",
                mediaSource: "WHO",
            },
            {
                title: "2024年",
                cardTitle: "长期管理",
                cardSubtitle: "经验教训",
                cardDetailedText: "重点转向长期COVID研究、更新疫苗和大流行准备。全球报告超过690万例死亡。",
                mediaSource: "WHO",
            }
        ]
    },
    'ukraine-conflict': {
        en: [
            {
                title: "2014",
                cardTitle: "Crimea Annexation",
                cardSubtitle: "Conflict Begins",
                cardDetailedText: "Russia annexes Crimea from Ukraine. Pro-Russian separatists seize control of parts of Donbas region, marking the beginning of armed conflict.",
                mediaSource: "BBC",
            },
            {
                title: "2014-2015",
                cardTitle: "Minsk Agreements",
                cardSubtitle: "Ceasefire Attempts",
                cardDetailedText: "Minsk Protocol and Minsk II agreements signed to establish ceasefire. Fighting continues despite agreements.",
                mediaSource: "UN",
            },
            {
                title: "2022-02",
                cardTitle: "Full-Scale Invasion",
                cardSubtitle: "War Escalates",
                cardDetailedText: "Russia launches large-scale invasion of Ukraine on February 24. International community condemns the action and imposes sanctions.",
                mediaSource: "Reuters",
            },
            {
                title: "2022-03",
                cardTitle: "Battle of Kyiv",
                cardSubtitle: "Capital Under Siege",
                cardDetailedText: "Russian forces advance toward Kyiv but face strong resistance. Ukrainian forces successfully defend the capital.",
                mediaSource: "AP News",
            },
            {
                title: "2022-04",
                cardTitle: "Withdrawal from Kyiv Region",
                cardSubtitle: "Strategic Shift",
                cardDetailedText: "Russia withdraws troops from the Kyiv region. Fighting intensifies in eastern and southern Ukraine.",
                mediaSource: "CNN",
            },
            {
                title: "2022-09",
                cardTitle: "Ukraine Counteroffensive",
                cardSubtitle: "Territory Reclaimed",
                cardDetailedText: "Ukrainian forces launch successful counteroffensive in Kharkiv region, reclaiming thousands of square kilometers.",
                mediaSource: "The Guardian",
            },
            {
                title: "2023",
                cardTitle: "Continued Fighting",
                cardSubtitle: "Attritional Warfare",
                cardDetailedText: "Conflict continues with intense fighting along the front line. Western nations provide ongoing military and humanitarian aid to Ukraine.",
                mediaSource: "NATO",
            },
            {
                title: "2024",
                cardTitle: "Ongoing Support",
                cardSubtitle: "International Solidarity",
                cardDetailedText: "International support for Ukraine continues. Diplomatic efforts persist alongside ongoing military operations.",
                mediaSource: "EU",
            }
        ],
        es: [
            {
                title: "2014",
                cardTitle: "Anexión de Crimea",
                cardSubtitle: "Comienza el Conflicto",
                cardDetailedText: "Rusia anexa Crimea de Ucrania. Separatistas prorrusos toman control de partes de la región de Donbás, marcando el inicio del conflicto armado.",
                mediaSource: "BBC",
            },
            {
                title: "2014-2015",
                cardTitle: "Acuerdos de Minsk",
                cardSubtitle: "Intentos de Cese al Fuego",
                cardDetailedText: "Se firman el Protocolo de Minsk y Minsk II para establecer un alto el fuego. Los combates continúan a pesar de los acuerdos.",
                mediaSource: "ONU",
            },
            {
                title: "2022-02",
                cardTitle: "Invasión a Gran Escala",
                cardSubtitle: "Escalada de Guerra",
                cardDetailedText: "Rusia lanza una invasión a gran escala de Ucrania el 24 de febrero. La comunidad internacional condena la acción e impone sanciones.",
                mediaSource: "Reuters",
            },
            {
                title: "2022-03",
                cardTitle: "Batalla de Kiev",
                cardSubtitle: "Capital Sitiada",
                cardDetailedText: "Las fuerzas rusas avanzan hacia Kiev pero enfrentan fuerte resistencia. Las fuerzas ucranianas defienden exitosamente la capital.",
                mediaSource: "AP News",
            },
            {
                title: "2022-04",
                cardTitle: "Retirada de la Región de Kiev",
                cardSubtitle: "Cambio Estratégico",
                cardDetailedText: "Rusia retira tropas de la región de Kiev. Los combates se intensifican en el este y sur de Ucrania.",
                mediaSource: "CNN",
            },
            {
                title: "2022-09",
                cardTitle: "Contraofensiva Ucraniana",
                cardSubtitle: "Territorio Recuperado",
                cardDetailedText: "Las fuerzas ucranianas lanzan una contraofensiva exitosa en la región de Járkov, recuperando miles de kilómetros cuadrados.",
                mediaSource: "The Guardian",
            },
            {
                title: "2023",
                cardTitle: "Combates Continuos",
                cardSubtitle: "Guerra de Desgaste",
                cardDetailedText: "El conflicto continúa con intensos combates a lo largo de la línea del frente. Las naciones occidentales brindan ayuda militar y humanitaria continua.",
                mediaSource: "OTAN",
            },
            {
                title: "2024",
                cardTitle: "Apoyo Continuo",
                cardSubtitle: "Solidaridad Internacional",
                cardDetailedText: "El apoyo internacional a Ucrania continúa. Los esfuerzos diplomáticos persisten junto con las operaciones militares en curso.",
                mediaSource: "UE",
            }
        ],
        ja: [
            {
                title: "2014年",
                cardTitle: "クリミア併合",
                cardSubtitle: "紛争の開始",
                cardDetailedText: "ロシアがウクライナからクリミアを併合。親ロシア派分離主義者がドンバス地域の一部を掌握し、武力紛争の始まりとなる。",
                mediaSource: "BBC",
            },
            {
                title: "2014-2015年",
                cardTitle: "ミンスク合意",
                cardSubtitle: "停戦の試み",
                cardDetailedText: "停戦を確立するためにミンスク議定書とミンスクIIが署名される。合意にもかかわらず戦闘は継続。",
                mediaSource: "国連",
            },
            {
                title: "2022年2月",
                cardTitle: "全面侵攻",
                cardSubtitle: "戦争の激化",
                cardDetailedText: "ロシアが2月24日にウクライナの大規模侵攻を開始。国際社会がこの行動を非難し、制裁を課す。",
                mediaSource: "ロイター",
            },
            {
                title: "2022年3月",
                cardTitle: "キーウの戦い",
                cardSubtitle: "首都包囲",
                cardDetailedText: "ロシア軍がキーウに向けて前進するが、強い抵抗に直面。ウクライナ軍が首都の防衛に成功。",
                mediaSource: "AP通信",
            },
            {
                title: "2022年4月",
                cardTitle: "キーウ地域からの撤退",
                cardSubtitle: "戦略転換",
                cardDetailedText: "ロシアがキーウ地域から軍を撤退。ウクライナ東部と南部で戦闘が激化。",
                mediaSource: "CNN",
            },
            {
                title: "2022年9月",
                cardTitle: "ウクライナ反攻",
                cardSubtitle: "領土奪還",
                cardDetailedText: "ウクライナ軍がハルキウ地域で成功した反攻を開始し、数千平方キロメートルを奪還。",
                mediaSource: "ガーディアン",
            },
            {
                title: "2023年",
                cardTitle: "戦闘継続",
                cardSubtitle: "消耗戦",
                cardDetailedText: "前線に沿って激しい戦闘が続く紛争。西側諸国がウクライナへの軍事・人道支援を継続。",
                mediaSource: "NATO",
            },
            {
                title: "2024年",
                cardTitle: "継続的支援",
                cardSubtitle: "国際連帯",
                cardDetailedText: "ウクライナへの国際支援が継続。進行中の軍事作戦とともに外交努力も続く。",
                mediaSource: "EU",
            }
        ],
        ko: [
            {
                title: "2014년",
                cardTitle: "크림반도 합병",
                cardSubtitle: "분쟁 시작",
                cardDetailedText: "러시아가 우크라이나로부터 크림반도를 합병. 친러 분리주의자들이 돈바스 지역 일부를 장악하며 무력 충돌이 시작됨.",
                mediaSource: "BBC",
            },
            {
                title: "2014-2015년",
                cardTitle: "민스크 협정",
                cardSubtitle: "휴전 시도",
                cardDetailedText: "휴전을 수립하기 위해 민스크 의정서와 민스크 II가 서명됨. 협정에도 불구하고 전투는 계속됨.",
                mediaSource: "UN",
            },
            {
                title: "2022년 2월",
                cardTitle: "전면 침공",
                cardSubtitle: "전쟁 격화",
                cardDetailedText: "러시아가 2월 24일 우크라이나 대규모 침공을 개시. 국제 사회가 이를 규탄하고 제재를 부과.",
                mediaSource: "로이터",
            },
            {
                title: "2022년 3월",
                cardTitle: "키이우 전투",
                cardSubtitle: "수도 포위",
                cardDetailedText: "러시아군이 키이우로 진격하지만 강한 저항에 직면. 우크라이나군이 수도 방어에 성공.",
                mediaSource: "AP 뉴스",
            },
            {
                title: "2022년 4월",
                cardTitle: "키이우 지역 철수",
                cardSubtitle: "전략 전환",
                cardDetailedText: "러시아가 키이우 지역에서 군대를 철수. 우크라이나 동부와 남부에서 전투가 격화됨.",
                mediaSource: "CNN",
            },
            {
                title: "2022년 9월",
                cardTitle: "우크라이나 반격",
                cardSubtitle: "영토 탈환",
                cardDetailedText: "우크라이나군이 하르키우 지역에서 성공적인 반격을 개시하여 수천 평방킬로미터를 탈환.",
                mediaSource: "가디언",
            },
            {
                title: "2023년",
                cardTitle: "전투 지속",
                cardSubtitle: "소모전",
                cardDetailedText: "전선을 따라 격렬한 전투가 계속되는 분쟁. 서방 국가들이 우크라이나에 지속적인 군사 및 인도적 지원 제공.",
                mediaSource: "NATO",
            },
            {
                title: "2024년",
                cardTitle: "지속적인 지원",
                cardSubtitle: "국제 연대",
                cardDetailedText: "우크라이나에 대한 국제적 지원이 계속됨. 진행 중인 군사 작전과 함께 외교적 노력도 지속.",
                mediaSource: "EU",
            }
        ],
        zh: [
            {
                title: "2014年",
                cardTitle: "克里米亚吞并",
                cardSubtitle: "冲突开始",
                cardDetailedText: "俄罗斯吞并乌克兰克里米亚。亲俄分离主义者控制顿巴斯地区部分地区，标志着武装冲突的开始。",
                mediaSource: "BBC",
            },
            {
                title: "2014-2015年",
                cardTitle: "明斯克协议",
                cardSubtitle: "停火尝试",
                cardDetailedText: "签署明斯克议定书和明斯克第二协议以建立停火。尽管有协议，战斗仍在继续。",
                mediaSource: "联合国",
            },
            {
                title: "2022年2月",
                cardTitle: "全面入侵",
                cardSubtitle: "战争升级",
                cardDetailedText: "俄罗斯于2月24日对乌克兰发动大规模入侵。国际社会谴责这一行动并实施制裁。",
                mediaSource: "路透社",
            },
            {
                title: "2022年3月",
                cardTitle: "基辅战役",
                cardSubtitle: "首都围困",
                cardDetailedText: "俄罗斯军队向基辅推进但面临强烈抵抗。乌克兰军队成功保卫首都。",
                mediaSource: "美联社",
            },
            {
                title: "2022年4月",
                cardTitle: "从基辅地区撤退",
                cardSubtitle: "战略转移",
                cardDetailedText: "俄罗斯从基辅地区撤军。乌克兰东部和南部战斗加剧。",
                mediaSource: "CNN",
            },
            {
                title: "2022年9月",
                cardTitle: "乌克兰反攻",
                cardSubtitle: "收复领土",
                cardDetailedText: "乌克兰军队在哈尔科夫地区发动成功反攻，收复数千平方公里领土。",
                mediaSource: "卫报",
            },
            {
                title: "2023年",
                cardTitle: "持续战斗",
                cardSubtitle: "消耗战",
                cardDetailedText: "沿前线的激烈战斗持续。西方国家向乌克兰提供持续的军事和人道主义援助。",
                mediaSource: "北约",
            },
            {
                title: "2024年",
                cardTitle: "持续支持",
                cardSubtitle: "国际团结",
                cardDetailedText: "对乌克兰的国际支持持续。外交努力与正在进行的军事行动并行。",
                mediaSource: "欧盟",
            }
        ]
    },
    'space-exploration': {
        en: [
            {
                title: "1957",
                cardTitle: "Sputnik Launch",
                cardSubtitle: "Space Age Begins",
                cardDetailedText: "Soviet Union launches Sputnik 1, the first artificial satellite, marking the beginning of the space age and triggering the space race.",
                mediaSource: "NASA",
            },
            {
                title: "1969",
                cardTitle: "Moon Landing",
                cardSubtitle: "One Giant Leap",
                cardDetailedText: "Apollo 11 mission successfully lands humans on the Moon. Neil Armstrong becomes the first person to walk on the lunar surface.",
                mediaSource: "NASA",
            },
            {
                title: "1990",
                cardTitle: "Hubble Space Telescope",
                cardSubtitle: "Universe Unveiled",
                cardDetailedText: "NASA launches the Hubble Space Telescope, revolutionizing our understanding of the universe with unprecedented deep-space images.",
                mediaSource: "NASA",
            },
            {
                title: "2012",
                cardTitle: "Curiosity Rover on Mars",
                cardSubtitle: "Red Planet Explorer",
                cardDetailedText: "NASA's Curiosity rover successfully lands on Mars, beginning extensive exploration and analysis of Martian geology and climate.",
                mediaSource: "NASA",
            },
            {
                title: "2020",
                cardTitle: "Perseverance & Ingenuity",
                cardSubtitle: "Mars Sample Return",
                cardDetailedText: "NASA's Perseverance rover and Ingenuity helicopter land on Mars. Ingenuity becomes the first aircraft to achieve powered flight on another planet.",
                mediaSource: "NASA",
            },
            {
                title: "2022",
                cardTitle: "James Webb Telescope",
                cardSubtitle: "New Era of Discovery",
                cardDetailedText: "James Webb Space Telescope begins operations, providing the deepest and sharpest infrared images of the distant universe ever captured.",
                mediaSource: "NASA",
            },
            {
                title: "2024",
                cardTitle: "Artemis Program",
                cardSubtitle: "Return to Moon",
                cardDetailedText: "NASA's Artemis program advances with plans to establish a sustainable human presence on the Moon and prepare for Mars missions.",
                mediaSource: "NASA",
            }
        ],
        es: [
            {
                title: "1957",
                cardTitle: "Lanzamiento del Sputnik",
                cardSubtitle: "Comienza la Era Espacial",
                cardDetailedText: "La Unión Soviética lanza el Sputnik 1, el primer satélite artificial, marcando el comienzo de la era espacial y desencadenando la carrera espacial.",
                mediaSource: "NASA",
            },
            {
                title: "1969",
                cardTitle: "Alunizaje",
                cardSubtitle: "Un Gran Salto",
                cardDetailedText: "La misión Apolo 11 aterriza exitosamente humanos en la Luna. Neil Armstrong se convierte en la primera persona en caminar sobre la superficie lunar.",
                mediaSource: "NASA",
            },
            {
                title: "1990",
                cardTitle: "Telescopio Espacial Hubble",
                cardSubtitle: "Universo Revelado",
                cardDetailedText: "NASA lanza el Telescopio Espacial Hubble, revolucionando nuestra comprensión del universo con imágenes del espacio profundo sin precedentes.",
                mediaSource: "NASA",
            },
            {
                title: "2012",
                cardTitle: "Curiosity en Marte",
                cardSubtitle: "Explorador del Planeta Rojo",
                cardDetailedText: "El rover Curiosity de NASA aterriza exitosamente en Marte, comenzando una extensa exploración y análisis de la geología y clima marcianos.",
                mediaSource: "NASA",
            },
            {
                title: "2020",
                cardTitle: "Perseverance e Ingenuity",
                cardSubtitle: "Retorno de Muestras de Marte",
                cardDetailedText: "El rover Perseverance y el helicóptero Ingenuity de NASA aterrizan en Marte. Ingenuity se convierte en la primera aeronave  en lograr vuelo motorizado en otro planeta.",
                mediaSource: "NASA",
            },
            {
                title: "2022",
                cardTitle: "Telescopio James Webb",
                cardSubtitle: "Nueva Era de Descubrimiento",
                cardDetailedText: "El Telescopio Espacial James Webb comienza operaciones, proporcionando las imágenes infrarrojas más profundas y nítidas del universo distante jamás capturadas.",
                mediaSource: "NASA",
            },
            {
                title: "2024",
                cardTitle: "Programa Artemis",
                cardSubtitle: "Regreso a la Luna",
                cardDetailedText: "El programa Artemis de NASA avanza con planes para establecer una presencia humana sostenible en la Luna y prepararse para misiones a Marte.",
                mediaSource: "NASA",
            }
        ],
        ja: [
            {
                title: "1957年",
                cardTitle: "スプートニク打ち上げ",
                cardSubtitle: "宇宙時代の幕開け",
                cardDetailedText: "ソビエト連邦が初の人工衛星スプートニク1号を打ち上げ、宇宙時代の始まりと宇宙開発競争の引き金となる。",
                mediaSource: "NASA",
            },
            {
                title: "1969年",
                cardTitle: "月面着陸",
                cardSubtitle: "偉大な一歩",
                cardDetailedText: "アポロ11号ミッションが人類の月面着陸に成功。ニール・アームストロングが月面を歩いた最初の人物となる。",
                mediaSource: "NASA",
            },
            {
                title: "1990年",
                cardTitle: "ハッブル宇宙望遠鏡",
                cardSubtitle: "宇宙の解明",
                cardDetailedText: "NASAがハッブル宇宙望遠鏡を打ち上げ、前例のない深宇宙画像で宇宙の理解を革命的に変える。",
                mediaSource: "NASA",
            },
            {
                title: "2012年",
                cardTitle: "キュリオシティ火星探査機",
                cardSubtitle: "赤い惑星の探査者",
                cardDetailedText: "NASAのキュリオシティ探査機が火星に着陸成功。火星の地質と気候の広範な探査と分析を開始。",
                mediaSource: "NASA",
            },
            {
                title: "2020年",
                cardTitle: "パーサヴィアランスとインジェニュイティ",
                cardSubtitle: "火星サンプルリターン",
                cardDetailedText: "NASAのパーサヴィアランス探査機とインジェニュイティヘリコプターが火星に着陸。インジェニュイティが他の惑星で動力飛行を達成した初の航空機となる。",
                mediaSource: "NASA",
            },
            {
                title: "2022年",
                cardTitle: "ジェイムズ・ウェッブ望遠鏡",
                cardSubtitle: "発見の新時代",
                cardDetailedText: "ジェイムズ・ウェッブ宇宙望遠鏡が運用を開始し、これまでに捉えられた中で最も深く鮮明な遠方宇宙の赤外線画像を提供。",
                mediaSource: "NASA",
            },
            {
                title: "2024年",
                cardTitle: "アルテミス計画",
                cardSubtitle: "月への帰還",
                cardDetailedText: "NASAのアルテミス計画が、月に持続可能な人間の存在を確立し、火星ミッションの準備を進める計画とともに前進。",
                mediaSource: "NASA",
            }
        ],
        ko: [
            {
                title: "1957년",
                cardTitle: "스푸트니크 발사",
                cardSubtitle: "우주 시대 시작",
                cardDetailedText: "소련이 최초의 인공위성 스푸트니크 1호를 발사하여 우주 시대의 시작을 알리고 우주 경쟁을 촉발함.",
                mediaSource: "NASA",
            },
            {
                title: "1969년",
                cardTitle: "달 착륙",
                cardSubtitle: "위대한 도약",
                cardDetailedText: "아폴로 11호 임무가 인류의 달 착륙에 성공. 닐 암스트롱이 달 표면을 걷는 최초의 인물이 됨.",
                mediaSource: "NASA",
            },
            {
                title: "1990년",
                cardTitle: "허블 우주 망원경",
                cardSubtitle: "우주의 베일을 벗기다",
                cardDetailedText: "NASA가 허블 우주 망원경을 발사하여 전례 없는 심우주 이미지로 우주에 대한 이해를 혁명적으로 변화시킴.",
                mediaSource: "NASA",
            },
            {
                title: "2012년",
                cardTitle: "큐리오시티 화성 탐사선",
                cardSubtitle: "붉은 행성 탐험가",
                cardDetailedText: "NASA의 큐리오시티 탐사선이 화성에 성공적으로 착륙하여 화성 지질과 기후에 대한 광범위한 탐사 및 분석 시작.",
                mediaSource: "NASA",
            },
            {
                title: "2020년",
                cardTitle: "퍼서비어런스와 인제뉴어티",
                cardSubtitle: "화성 샘플 반환",
                cardDetailedText: "NASA의 퍼서비어런스 탐사선과 인제뉴어티 헬리콥터가 화성에 착륙. 인제뉴어티가 다른 행성에서 동력 비행을 달성한 최초의 항공기가 됨.",
                mediaSource: "NASA",
            },
            {
                title: "2022년",
                cardTitle: "제임스 웹 망원경",
                cardSubtitle: "발견의 새 시대",
                cardDetailedText: "제임스 웹 우주 망원경이 운영을 시작하여 지금까지 포착된 가장 깊고 선명한 원거리 우주의 적외선 이미지를 제공.",
                mediaSource: "NASA",
            },
            {
                title: "2024년",
                cardTitle: "아르테미스 프로그램",
                cardSubtitle: "달로의 귀환",
                cardDetailedText: "NASA의 아르테미스 프로그램이 달에 지속 가능한 인간 존재를 확립하고 화성 임무를 준비하는 계획과 함께 진행됨.",
                mediaSource: "NASA",
            }
        ],
        zh: [
            {
                title: "1957年",
                cardTitle: "斯普特尼克发射",
                cardSubtitle: "太空时代开始",
                cardDetailedText: "苏联发射第一颗人造卫星斯普特尼克1号，标志着太空时代的开始并引发太空竞赛。",
                mediaSource: "NASA",
            },
            {
                title: "1969年",
                cardTitle: "登月",
                cardSubtitle: "伟大的一步",
                cardDetailedText: "阿波罗11号任务成功实现人类登月。尼尔·阿姆斯特朗成为在月球表面行走的第一人。",
                mediaSource: "NASA",
            },
            {
                title: "1990年",
                cardTitle: "哈勃太空望远镜",
                cardSubtitle: "揭开宇宙面纱",
                cardDetailedText: "NASA发射哈勃太空望远镜，通过前所未有的深空图像革命性地改变了我们对宇宙的理解。",
                mediaSource: "NASA",
            },
            {
                title: "2012年",
                cardTitle: "好奇号火星探测器",
                cardSubtitle: "红色星球探险家",
                cardDetailedText: "NASA的好奇号探测器成功登陆火星，开始对火星地质和气候进行广泛的探索和分析。",
                mediaSource: "NASA",
            },
            {
                title: "2020年",
                cardTitle: "毅力号和机智号",
                cardSubtitle: "火星样本返回",
                cardDetailedText: "NASA的毅力号探测器和机智号直升机登陆火星。机智号成为在另一个星球上实现动力飞行的第一架航空器。",
                mediaSource: "NASA",
            },
            {
                title: "2022年",
                cardTitle: "詹姆斯·韦伯望远镜",
                cardSubtitle: "发现新时代",
                cardDetailedText: "詹姆斯·韦伯太空望远镜开始运行，提供有史以来捕获的最深、最清晰的遥远宇宙红外图像。",
                mediaSource: "NASA",
            },
            {
                title: "2024年",
                cardTitle: "阿尔忒弥斯计划",
                cardSubtitle: "重返月球",
                cardDetailedText: "NASA的阿尔忒弥斯计划推进，计划在月球上建立可持续的人类存在并为火星任务做准备。",
                mediaSource: "NASA",
            }
        ]
    },
    'cybersecurity': {
        en: [
            {
                title: "2013",
                cardTitle: "Snowden Revelations",
                cardSubtitle: "Mass Surveillance Exposed",
                cardDetailedText: "Edward Snowden reveals extensive global surveillance programs by NSA and intelligence agencies, sparking worldwide debate on privacy and security.",
                mediaSource: "The Guardian",
            },
            {
                title: "2017",
                cardTitle: "WannaCry Ransomware",
                cardSubtitle: "Global Cyberattack",
                cardDetailedText: "WannaCry ransomware attack affects over 200,000 computers across 150 countries, highlighting vulnerabilities in outdated systems.",
                mediaSource: "BBC",
            },
            {
                title: "2017",
                cardTitle: "Equifax Data Breach",
                cardSubtitle: "Massive Information Leak",
                cardDetailedText: "Equifax breach exposes personal data of 147 million people, one of the largest cybersecurity breaches in history.",
                mediaSource: "CNN",
            },
            {
                title: "2020",
                cardTitle: "SolarWinds Attack",
                cardSubtitle: "Supply Chain Compromise",
                cardDetailedText: "Sophisticated cyberattack compromises SolarWinds software, affecting numerous government agencies and major corporations worldwide.",
                mediaSource: "Reuters",
            },
            {
                title: "2021",
                cardTitle: "Colonial Pipeline Ransomware",
                cardSubtitle: "Critical Infrastructure Target",
                cardDetailedText: "Ransomware attack forces shutdown of major US fuel pipeline, highlighting vulnerability of critical infrastructure to cyber threats.",
                mediaSource: "CNN",
            },
            {
                title: "2023",
                cardTitle: "AI-Powered Threats",
                cardSubtitle: "New Cybersecurity Challenges",
                cardDetailedText: "Rise of AI-powered cyberattacks and deepfakes creates new challenges for cybersecurity professionals and organizations.",
                mediaSource: "MIT Technology Review",
            },
            {
                title: "2024",
                cardTitle: "Quantum Encryption Race",
                cardSubtitle: "Future of Security",
                cardDetailedText: "Nations and corporations race to develop quantum-resistant encryption as quantum computing threatens current security standards.",
                mediaSource: "Wired",
            }
        ],
        es: [
            {
                title: "2013",
                cardTitle: "Revelaciones de Snowden",
                cardSubtitle: "Vigilancia Masiva Expuesta",
                cardDetailedText: "Edward Snowden revela extensos programas de vigilancia global de la NSA y agencias de inteligencia, desencadenando debate mundial sobre privacidad y seguridad.",
                mediaSource: "The Guardian",
            },
            {
                title: "2017",
                cardTitle: "Ransomware WannaCry",
                cardSubtitle: "Ciberataque Global",
                cardDetailedText: "El ataque de ransomware WannaCry afecta a más de 200,000 computadoras en 150 países, destacando vulnerabilidades en sistemas obsoletos.",
                mediaSource: "BBC",
            },
            {
                title: "2017",
                cardTitle: "Violación de Datos de Equifax",
                cardSubtitle: "Filtración Masiva de Información",
                cardDetailedText: "La violación de Equifax expone datos personales de 147 millones de personas, una de las mayores brechas de ciberseguridad en la historia.",
                mediaSource: "CNN",
            },
            {
                title: "2020",
                cardTitle: "Ataque SolarWinds",
                cardSubtitle: "Compromiso de Cadena de Suministro",
                cardDetailedText: "Un sofisticado ciberataque compromete el software SolarWinds, afectando a numerosas agencias gubernamentales y grandes corporaciones mundialmente.",
                mediaSource: "Reuters",
            },
            {
                title: "2021",
                cardTitle: "Ransomware Colonial Pipeline",
                cardSubtitle: "Objetivo de Infraestructura Crítica",
                cardDetailedText: "Un ataque de ransomware obliga al cierre de un importante oleoducto de combustible de EE.UU., destacando la vulnerabilidad de la infraestructura crítica.",
                mediaSource: "CNN",
            },
            {
                title: "2023",
                cardTitle: "Amenazas Impulsadas por IA",
                cardSubtitle: "Nuevos Desafíos de Ciberseguridad",
                cardDetailedText: "El aumento de ciberataques y deepfakes impulsados por IA crea nuevos desafíos para profesionales y organizaciones de ciberseguridad.",
                mediaSource: "MIT Technology Review",
            },
            {
                title: "2024",
                cardTitle: "Carrera de Encriptación Cuántica",
                cardSubtitle: "Futuro de la Seguridad",
                cardDetailedText: "Naciones y corporaciones compiten para desarrollar encriptación resistente a la computación cuántica mientras esta amenaza los estándares de seguridad actuales.",
                mediaSource: "Wired",
            }
        ],
        ja: [
            {
                title: "2013年",
                cardTitle: "スノーデンの暴露",
                cardSubtitle: "大規模監視の露呈",
                cardDetailedText: "エドワード・スノーデンがNSAと諜報機関による広範なグローバル監視プログラムを暴露し、プライバシーとセキュリティに関する世界的な議論を引き起こす。",
                mediaSource: "ガーディアン",
            },
            {
                title: "2017年",
                cardTitle: "WannaCryランサムウェア",
                cardSubtitle: "グローバルサイバー攻撃",
                cardDetailedText: "WannaCryランサムウェア攻撃が150カ国で20万台以上のコンピュータに影響を及ぼし、古いシステムの脆弱性を浮き彫りにする。",
                mediaSource: "BBC",
            },
            {
                title: "2017年",
                cardTitle: "Equifaxデータ侵害",
                cardSubtitle: "大規模情報流出",
                cardDetailedText: "Equifaxの侵害により1億4700万人の個人データが流出し、史上最大級のサイバーセキュリティ侵害の一つとなる。",
                mediaSource: "CNN",
            },
            {
                title: "2020年",
                cardTitle: "SolarWinds攻撃",
                cardSubtitle: "サプライチェーン侵害",
                cardDetailedText: "高度なサイバー攻撃がSolarWindsソフトウェアを侵害し、世界中の多数の政府機関と大企業に影響を与える。",
                mediaSource: "ロイター",
            },
            {
                title: "2021年",
                cardTitle: "Colonial Pipelineランサムウェア",
                cardSubtitle: "重要インフラの標的",
                cardDetailedText: "ランサムウェア攻撃により米国の主要燃料パイプラインが停止を余儀なくされ、重要インフラのサイバー脅威への脆弱性が浮き彫りになる。",
                mediaSource: "CNN",
            },
            {
                title: "2023年",
                cardTitle: "AI駆動の脅威",
                cardSubtitle: "新たなサイバーセキュリティの課題",
                cardDetailedText: "AI駆動のサイバー攻撃とディープフェイクの増加により、サイバーセキュリティ専門家と組織に新たな課題が生まれる。",
                mediaSource: "MITテクノロジーレビュー",
            },
            {
                title: "2024年",
                cardTitle: "量子暗号化競争",
                cardSubtitle: "セキュリティの未来",
                cardDetailedText: "量子コンピューティングが現在のセキュリティ標準を脅かす中、国家と企業が量子耐性暗号化の開発を競う。",
                mediaSource: "Wired",
            }
        ],
        ko: [
            {
                title: "2013년",
                cardTitle: "스노든 폭로",
                cardSubtitle: "대규모 감시 폭로",
                cardDetailedText: "에드워드 스노든이 NSA와 정보 기관의 광범위한 글로벌 감시 프로그램을 폭로하여 개인정보 보호와 보안에 대한 전 세계적 논쟁을 촉발함.",
                mediaSource: "가디언",
            },
            {
                title: "2017년",
                cardTitle: "WannaCry 랜섬웨어",
                cardSubtitle: "글로벌 사이버 공격",
                cardDetailedText: "WannaCry 랜섬웨어 공격이 150개국의 20만 대 이상의 컴퓨터에 영향을 미쳐 구식 시스템의 취약성을 부각시킴.",
                mediaSource: "BBC",
            },
            {
                title: "2017년",
                cardTitle: "Equifax 데이터 침해",
                cardSubtitle: "대규모 정보 유출",
                cardDetailedText: "Equifax 침해로 1억 4천7백만 명의 개인 데이터가 노출되어 역사상 최대 규모의 사이버 보안 침해 중 하나가 됨.",
                mediaSource: "CNN",
            },
            {
                title: "2020년",
                cardTitle: "SolarWinds 공격",
                cardSubtitle: "공급망 침해",
                cardDetailedText: "정교한 사이버 공격이 SolarWinds 소프트웨어를 침해하여 전 세계 수많은 정부 기관 및 대기업에 영향을 미침.",
                mediaSource: "로이터",
            },
            {
                title: "2021년",
                cardTitle: "Colonial Pipeline 랜섬웨어",
                cardSubtitle: "중요 인프라 표적",
                cardDetailedText: "랜섬웨어 공격으로 미국 주요 연료 파이프라인이 강제 폐쇄되어 중요 인프라의 사이버 위협에 대한 취약성을 강조함.",
                mediaSource: "CNN",
            },
            {
                title: "2023년",
                cardTitle: "AI 기반 위협",
                cardSubtitle: "새로운 사이버 보안 과제",
                cardDetailedText: "AI 기반 사이버 공격과 딥페이크의 증가로 사이버 보안 전문가와 조직에 새로운 과제가 발생함.",
                mediaSource: "MIT 테크놀로지 리뷰",
            },
            {
                title: "2024년",
                cardTitle: "양자 암호화 경쟁",
                cardSubtitle: "보안의 미래",
                cardDetailedText: "양자 컴퓨팅이 현재 보안 표준을 위협함에 따라 국가와 기업이 양자 저항 암호화 개발을 경쟁함.",
                mediaSource: "와이어드",
            }
        ],
        zh: [
            {
                title: "2013年",
                cardTitle: "斯诺登揭露",
                cardSubtitle: "大规模监控曝光",
                cardDetailedText: "爱德华·斯诺登揭露NSA和情报机构的广泛全球监控计划，引发全球关于隐私和安全的辩论。",
                mediaSource: "卫报",
            },
            {
                title: "2017年",
                cardTitle: "WannaCry勒索软件",
                cardSubtitle: "全球网络攻击",
                cardDetailedText: "WannaCry勒索软件攻击影响了150个国家的超过20万台计算机，突显了过时系统的脆弱性。",
                mediaSource: "BBC",
            },
            {
                title: "2017年",
                cardTitle: "Equifax数据泄露",
                cardSubtitle: "大规模信息泄露",
                cardDetailedText: "Equifax泄露事件暴露了1.47亿人的个人数据,成为历史上最大的网络安全泄露事件之一。",
                mediaSource: "CNN",
            },
            {
                title: "2020年",
                cardTitle: "SolarWinds攻击",
                cardSubtitle: "供应链入侵",
                cardDetailedText: "复杂的网络攻击入侵SolarWinds软件，影响全球众多政府机构和大型企业。",
                mediaSource: "路透社",
            },
            {
                title: "2021年",
                cardTitle: "Colonial Pipeline勒索软件",
                cardSubtitle: "关键基础设施目标",
                cardDetailedText: "勒索软件攻击迫使美国主要燃料管道关闭，突显了关键基础设施对网络威胁的脆弱性。",
                mediaSource: "CNN",
            },
            {
                title: "2023年",
                cardTitle: "AI驱动威胁",
                cardSubtitle: "新的网络安全挑战",
                cardDetailedText: "AI驱动的网络攻击和深度伪造的兴起为网络安全专业人员和组织带来新的挑战。",
                mediaSource: "MIT科技评论",
            },
            {
                title: "2024年",
                cardTitle: "量子加密竞赛",
                cardSubtitle: "安全的未来",
                cardDetailedText: "随着量子计算威胁当前安全标准，各国和企业竞相开发抗量子加密技术。",
                mediaSource: "连线",
            }
        ]
    }
};

// Mock news API fetch - simplified without template literals in non-English for now
const fetchNewsData = async (_topic: Topic, language: Language): Promise<TimelineEvent[]> => {
    await new Promise(resolve => setTimeout(resolve, 1000));

    const newsTranslations: Record<Language, TimelineEvent[]> = {
        en: [
            {
                title: "2023",
                cardTitle: "Recent Developments",
                cardSubtitle: "Breaking News",
                cardDetailedText: "Latest updates show significant progress in international cooperation.",
                mediaSource: "CNN",
            },
            {
                title: "2024",
                cardTitle: "Future Outlook",
                cardSubtitle: "Predictions",
                cardDetailedText: "Experts predict this will continue to be a dominant theme in global discourse.",
                mediaSource: "BBC",
            }
        ],
        es: [
            {
                title: "2023",
                cardTitle: "Desarrollos Recientes",
                cardSubtitle: "Noticias de Última Hora",
                cardDetailedText: "Las últimas actualizaciones muestran un progreso significativo en la cooperación internacional.",
                mediaSource: "El País",
            },
            {
                title: "2024",
                cardTitle: "Perspectivas Futuras",
                cardSubtitle: "Predicciones",
                cardDetailedText: "Los expertos predicen que seguirá siendo un tema dominante en el discurso global.",
                mediaSource: "BBC Mundo",
            }
        ],
        ja: [
            {
                title: "2023",
                cardTitle: "最近の動向",
                cardSubtitle: "速報ニュース",
                cardDetailedText: "最新情報は、国際協力における大きな進展を示しています。",
                mediaSource: "NHK",
            },
            {
                title: "2024",
                cardTitle: "将来の見通し",
                cardSubtitle: "予測",
                cardDetailedText: "専門家は、世界的な議論の主要テーマであり続けると予測しています。",
                mediaSource: "朝日新聞",
            }
        ],
        ko: [
            {
                title: "2023",
                cardTitle: "최근 발전",
                cardSubtitle: "속보",
                cardDetailedText: "최신 업데이트는 국제 협력의 상당한 진전을 보여줍니다.",
                mediaSource: "KBS",
            },
            {
                title: "2024",
                cardTitle: "미래 전망",
                cardSubtitle: "예측",
                cardDetailedText: "전문가들은 글로벌 담론의 지배적 주제로 남을 것으로 예측합니다.",
                mediaSource: "조선일보",
            }
        ],
        zh: [
            {
                title: "2023",
                cardTitle: "最新发展",
                cardSubtitle: "突发新闻",
                cardDetailedText: "最新更新显示国际合作取得了重大进展。",
                mediaSource: "新华社",
            },
            {
                title: "2024",
                cardTitle: "未来展望",
                cardSubtitle: "预测",
                cardDetailedText: "专家预测将继续成为全球讨论的主要主题。",
                mediaSource: "人民日报",
            }
        ]
    };

    return newsTranslations[language];
};

export const getTopicData = async (topic: Topic, language: Language): Promise<TimelineEvent[]> => {
    const history = historicalData[topic.id]?.[language] || [];
    const news = await fetchNewsData(topic, language);

    return [...history, ...news].sort((a, b) => parseInt(a.title) - parseInt(b.title));
};
