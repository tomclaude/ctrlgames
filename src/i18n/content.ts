export const LOCALES = ["en", "zh-Hant", "ja", "ko"] as const;
export type Locale = (typeof LOCALES)[number];

export const LOCALE_PATHS: Record<Locale, string> = {
  en: "/",
  "zh-Hant": "/zh-Hant",
  ja: "/ja",
  ko: "/ko",
};

export const LOCALE_LABELS: Record<Locale, string> = {
  en: "EN",
  "zh-Hant": "繁體",
  ja: "日本語",
  ko: "한국어",
};

export const HREFLANG: Record<Locale, string> = {
  en: "en",
  "zh-Hant": "zh-Hant",
  ja: "ja",
  ko: "ko",
};

export const COMPANY = {
  name: "CTRL Games Limited",
  email: "info@ctrl-games.com",
  parent: "CTRL GROUP LIMITED",
  ticker: "NASDAQ: MCTR",
  copyright: "© 2013–2026 CTRL GAMES LIMITED. ALL RIGHTS RESERVED.",
};

export interface Dict {
  htmlLang: string;
  meta: { title: string; description: string; ogTitle: string; ogDescription: string };
  nav: { studio: string; games: string; team: string; careers: string; contact: string; cta: string };
  hero: { badge: string; title: string; lead: string; ctaWork: string; ctaStory: string };
  studio: { heading: string; body: string; imageAlt: string };
  games: { eyebrow: string; heading: string; items: { title: string; tag: string; copy: string }[] };
  team: {
    heading: string;
    founder: { name: string; bio: string };
    members: { name: string; role: string }[];
  };
  careers: {
    eyebrow: string;
    heading: string;
    body: string;
    cta: string;
    roles: { role: string; detail: string }[];
  };
  footer: {
    heading: string;
    hqLabel: string;
    address: string[];
    irLabel: string;
    irText: string;
    privacy: string;
    terms: string;
  };
}

export const CONTENT: Record<Locale, Dict> = {
  en: {
    htmlLang: "en",
    meta: {
      title: "CTRL Games Limited — Hong Kong Video Game Studio",
      description:
        "CTRL Games is an industry-leading Hong Kong video game studio, crafting awesome games since 2013. Meet our creative minds, our founder and our games in development.",
      ogTitle: "CTRL Games Limited — Hong Kong Video Game Studio",
      ogDescription:
        "Industry-leading Hong Kong video game studio, in the business of awesome games since 2013. Subsidiary of CTRL GROUP LIMITED (NASDAQ: MCTR).",
    },
    nav: {
      studio: "Studio",
      games: "Games",
      team: "Team",
      careers: "Careers",
      contact: "Contact",
      cta: "Join the studio",
    },
    hero: {
      badge: "Established 2013 • Hong Kong",
      title: "Crafting the next generation of interactive play.",
      lead: "Industry-leading digital experiences forged in the heart of Hung Hom. We operate at the intersection of high-fidelity engineering and creative soul.",
      ctaWork: "View our work",
      ctaStory: "Our Story",
    },
    studio: {
      heading: "The Business of Awesome",
      body: "CTRL GAMES is an industry-leading company that has been in the business of awesome video games since 2013. Located in Hong Kong since our founding, we've been working hard to make an impact on gamers and the gaming industry. Read on to learn more about our team of creative minds, and our founder.",
      imageAlt: "Interior of the CTRL Games studio in Hong Kong with neon teal lighting",
    },
    games: {
      eyebrow: "In development",
      heading: "Our Projects",
      items: [
        {
          title: "Dragon Dragoon",
          tag: "Strategy • Fantasy",
          copy: "While this is one of our earliest works, it is also one of our most successful and popular games. This game touches upon many elements and themes that have since become strong themes throughout all of our work. Whether you think you're more into strategy and tactical games, or prefer action and fantasy, we encourage all of our gamers to check out Dragon Dragoon in order to truly enjoy the full CTRL Games experience.",
        },
        {
          title: "Kingdom Crash",
          tag: "Action • Magic",
          copy: "Take your game to the next level with Kingdom Crash — one of our exciting and most popular. Our team of artists, designers, developers and engineers worked tirelessly in order to make this project come to life. Don't miss out on a colossal, epic experience. Hours of gameplay await to usher you into a new world of danger and magic.",
        },
        {
          title: "Battle Stage",
          tag: "Narrative • Action",
          copy: "Taking a pivot turn from our earlier games, we came together to develop and release Battle Stage. It's one of our most popular, and by far the favorite among our team. It focuses on telling a fascinating story to our gamers through incredible imagery, action, interaction and animation.",
        },
      ],
    },
    team: {
      heading: "Creative Minds",
      founder: {
        name: "K — Founder",
        bio: "Leading the vision of CTRL Games since 2013, focusing on sustainable growth and uncompromising game quality.",
      },
      members: [
        { name: "T — Lead Engineer", role: "Systems Architecture" },
        { name: "B — Creative Director", role: "Narrative & World" },
        { name: "Y — Art Lead", role: "Visual Excellence" },
      ],
    },
    careers: {
      eyebrow: "Careers",
      heading: "Interested in joining the studio?",
      body: "We're always looking for engineers, artists and designers who care about the craft. If you want to help build the next generation of CTRL Games titles from Hong Kong, we'd love to hear from you — send us your portfolio or CV and tell us what you'd like to work on.",
      cta: "Apply via email",
      roles: [
        { role: "Gameplay Engineer", detail: "Unreal / Unity • Hong Kong or remote" },
        { role: "Technical Artist", detail: "Shaders, pipelines & tooling • Hong Kong" },
        { role: "Game Designer", detail: "Systems & progression • Hong Kong" },
        { role: "Open Application", detail: "Tell us what you'd build with us" },
      ],
    },
    footer: {
      heading: "Let's build something enduring.",
      hqLabel: "Headquarters",
      address: ["Flat F, 12/F, Kaiser Estate Phase 1,", "41 Man Yue St., HungHom,", "Hong Kong"],
      irLabel: "Investor Relations",
      irText: "CTRL Games Limited is a subsidiary of",
      privacy: "Privacy Policy",
      terms: "Terms of Use",
    },
  },

  "zh-Hant": {
    htmlLang: "zh-Hant",
    meta: {
      title: "CTRL Games Limited — 香港電子遊戲開發公司",
      description:
        "CTRL Games 是一家領先業界的香港電子遊戲開發公司，自 2013 年起專注打造精彩遊戲。認識我們的創作團隊、創辦人與開發中的作品。",
      ogTitle: "CTRL Games Limited — 香港電子遊戲開發公司",
      ogDescription:
        "領先業界的香港電子遊戲開發公司，自 2013 年起投入精彩遊戲的製作。CTRL GROUP LIMITED（NASDAQ: MCTR）旗下子公司。",
    },
    nav: { studio: "工作室", games: "遊戲", team: "團隊", careers: "招聘", contact: "聯絡我們", cta: "加入我們" },
    hero: {
      badge: "成立於 2013 年 • 香港",
      title: "打造新世代的互動遊戲體驗。",
      lead: "源自香港核心地帶的業界領先數位體驗。我們在高精度工程技術與創意靈魂的交會之處運作。",
      ctaWork: "查看作品",
      ctaStory: "我們的故事",
    },
    studio: {
      heading: "精彩遊戲的事業",
      body: "CTRL GAMES 是一家領先業界的公司，自 2013 年起投身於精彩電子遊戲的事業。自創立以來一直立足香港，我們持續努力為玩家與遊戲產業帶來影響力。歡迎繼續了解我們的創作團隊與創辦人。",
      imageAlt: "CTRL Games 香港工作室內部，霓虹藍綠色燈光",
    },
    games: {
      eyebrow: "開發中",
      heading: "我們的專案",
      items: [
        {
          title: "Dragon Dragoon",
          tag: "策略 • 奇幻",
          copy: "這是我們最早期的作品之一，同時也是最成功、最受歡迎的遊戲之一。遊戲中觸及的許多元素與主題，日後成為我們所有作品的核心風格。無論你偏好策略與戰術，還是動作與奇幻，我們都鼓勵所有玩家親自體驗 Dragon Dragoon，感受完整的 CTRL Games 世界。",
        },
        {
          title: "Kingdom Crash",
          tag: "動作 • 魔法",
          copy: "以 Kingdom Crash 將你的遊戲體驗提升到全新層次——我們最令人興奮、也最受歡迎的作品之一。美術、設計、開發與工程團隊不眠不休地讓這個專案成真。別錯過這場宏大而史詩級的冒險，數十小時的遊玩內容將帶你踏入充滿危險與魔法的新世界。",
        },
        {
          title: "Battle Stage",
          tag: "敘事 • 動作",
          copy: "有別於早期作品，我們攜手打造並推出了 Battle Stage。它是我們最受歡迎的作品之一，也是團隊心中的最愛。這款遊戲透過震撼的畫面、動作、互動與動畫，向玩家訴說一個引人入勝的故事。",
        },
      ],
    },
    team: {
      heading: "創意團隊",
      founder: {
        name: "創辦人 — K",
        bio: "自 2013 年起領導 CTRL Games 的願景，專注於穩健成長與毫不妥協的遊戲品質。",
      },
      members: [
        { name: "首席工程師 — T", role: "系統架構" },
        { name: "創意總監 — B", role: "敘事與世界觀" },
        { name: "美術總監 — Y", role: "視覺呈現" },
      ],
    },
    careers: {
      eyebrow: "招聘",
      heading: "有興趣加入我們的團隊嗎？",
      body: "我們一直在尋找重視工藝的工程師、美術與設計師。如果你希望在香港與我們一起打造新世代的 CTRL Games 作品，歡迎將你的作品集或履歷寄給我們，並告訴我們你想投入的方向。",
      cta: "以電郵應徵",
      roles: [
        { role: "遊戲程式工程師", detail: "Unreal / Unity • 香港或遠端" },
        { role: "技術美術", detail: "著色器、流程與工具 • 香港" },
        { role: "遊戲設計師", detail: "系統與成長設計 • 香港" },
        { role: "自薦應徵", detail: "告訴我們你想與我們打造什麼" },
      ],
    },
    footer: {
      heading: "一起打造長遠的作品。",
      hqLabel: "總部",
      address: ["香港紅磡萬譽街 41 號", "凱旋工商中心第一期", "12 樓 F 室"],
      irLabel: "投資者關係",
      irText: "CTRL Games Limited 為以下公司之子公司：",
      privacy: "私隱政策",
      terms: "使用條款",
    },
  },

  ja: {
    htmlLang: "ja",
    meta: {
      title: "CTRL Games Limited — 香港のゲームスタジオ",
      description:
        "CTRL Games は 2013 年創業、香港を拠点とする業界をリードするビデオゲームスタジオです。クリエイティブなチーム、創業者、開発中のタイトルをご紹介します。",
      ogTitle: "CTRL Games Limited — 香港のゲームスタジオ",
      ogDescription:
        "2013 年から素晴らしいゲームを作り続ける、香港発の業界をリードするゲームスタジオ。CTRL GROUP LIMITED（NASDAQ: MCTR）の子会社です。",
    },
    nav: {
      studio: "スタジオ",
      games: "ゲーム",
      team: "チーム",
      careers: "採用情報",
      contact: "お問い合わせ",
      cta: "採用情報を見る",
    },
    hero: {
      badge: "2013 年設立 • 香港",
      title: "次世代のインタラクティブ体験をつくる。",
      lead: "紅磡（ハンホム）の中心で生まれる、業界をリードするデジタル体験。高精度なエンジニアリングとクリエイティブな魂が交わる場所で私たちは活動しています。",
      ctaWork: "作品を見る",
      ctaStory: "私たちの歩み",
    },
    studio: {
      heading: "素晴らしいゲームという仕事",
      body: "CTRL GAMES は 2013 年から素晴らしいビデオゲームを作り続けてきた、業界をリードする企業です。創業以来、香港を拠点にゲーマーとゲーム業界へインパクトを与えるべく取り組んできました。クリエイティブなチームと創業者について、ぜひご覧ください。",
      imageAlt: "ティールのネオンに照らされた香港の CTRL Games スタジオ内観",
    },
    games: {
      eyebrow: "開発中",
      heading: "プロジェクト",
      items: [
        {
          title: "Dragon Dragoon",
          tag: "ストラテジー • ファンタジー",
          copy: "私たちの最初期の作品でありながら、もっとも成功し人気を集めたタイトルのひとつです。この作品で扱った多くの要素とテーマは、その後のすべての作品に受け継がれています。ストラテジーや戦術が好きな方も、アクションやファンタジーを好む方も、CTRL Games の世界を余すことなく味わうために、ぜひ Dragon Dragoon をプレイしてみてください。",
        },
        {
          title: "Kingdom Crash",
          tag: "アクション • マジック",
          copy: "Kingdom Crash でゲーム体験を次のレベルへ。もっともエキサイティングで人気の高いタイトルのひとつです。アーティスト、デザイナー、開発者、エンジニアが一丸となってこのプロジェクトを形にしました。危険と魔法に満ちた新たな世界へ誘う、壮大で膨大なプレイ体験をお見逃しなく。",
        },
        {
          title: "Battle Stage",
          tag: "ナラティブ • アクション",
          copy: "これまでの作品から方向を転換し、チーム一丸で開発・リリースしたのが Battle Stage です。もっとも人気があり、チーム内でも一番のお気に入り。圧倒的な映像、アクション、インタラクション、アニメーションを通じて、魅力的な物語をプレイヤーに届けます。",
        },
      ],
    },
    team: {
      heading: "クリエイティブなチーム",
      founder: {
        name: "K — 創業者",
        bio: "2013 年から CTRL Games のビジョンを牽引し、持続的な成長と妥協のないゲーム品質を追求しています。",
      },
      members: [
        { name: "T — リードエンジニア", role: "システムアーキテクチャ" },
        { name: "B — クリエイティブディレクター", role: "ナラティブと世界観" },
        { name: "Y — アートリード", role: "ビジュアルクオリティ" },
      ],
    },
    careers: {
      eyebrow: "採用情報",
      heading: "スタジオへの参加にご興味はありますか？",
      body: "私たちは、ものづくりに真剣なエンジニア・アーティスト・デザイナーをいつでも探しています。香港から次世代の CTRL Games タイトルを一緒に作りたい方は、ポートフォリオまたは履歴書と、取り組みたい内容をお送りください。",
      cta: "メールで応募する",
      roles: [
        { role: "ゲームプレイエンジニア", detail: "Unreal / Unity • 香港またはリモート" },
        { role: "テクニカルアーティスト", detail: "シェーダー・パイプライン・ツール • 香港" },
        { role: "ゲームデザイナー", detail: "システムと成長設計 • 香港" },
        { role: "オープン応募", detail: "一緒に作りたいものを教えてください" },
      ],
    },
    footer: {
      heading: "長く残るものを、一緒に。",
      hqLabel: "本社",
      address: ["香港 紅磡 萬譽街 41 號", "Kaiser Estate Phase 1", "12/F, Flat F"],
      irLabel: "投資家情報",
      irText: "CTRL Games Limited は次の企業の子会社です：",
      privacy: "プライバシーポリシー",
      terms: "利用規約",
    },
  },

  ko: {
    htmlLang: "ko",
    meta: {
      title: "CTRL Games Limited — 홍콩 비디오 게임 스튜디오",
      description:
        "CTRL Games는 2013년부터 멋진 게임을 만들어 온 홍콩의 선도적인 비디오 게임 스튜디오입니다. 창작 팀과 창업자, 개발 중인 프로젝트를 만나보세요.",
      ogTitle: "CTRL Games Limited — 홍콩 비디오 게임 스튜디오",
      ogDescription:
        "2013년부터 멋진 게임을 만들어 온 홍콩의 선도적인 게임 스튜디오. CTRL GROUP LIMITED(NASDAQ: MCTR)의 자회사입니다.",
    },
    nav: { studio: "스튜디오", games: "게임", team: "팀", careers: "채용", contact: "연락처", cta: "합류하기" },
    hero: {
      badge: "2013년 설립 • 홍콩",
      title: "차세대 인터랙티브 경험을 만듭니다.",
      lead: "훙함의 중심에서 탄생한 업계 선도적인 디지털 경험. 우리는 정교한 엔지니어링과 창의적인 감각이 만나는 지점에서 일합니다.",
      ctaWork: "작품 보기",
      ctaStory: "우리의 이야기",
    },
    studio: {
      heading: "멋진 게임을 만드는 일",
      body: "CTRL GAMES는 2013년부터 멋진 비디오 게임을 만들어 온 업계 선도 기업입니다. 창립 이후 홍콩에 자리 잡고 게이머와 게임 산업에 의미 있는 영향을 주기 위해 노력해 왔습니다. 우리의 창작 팀과 창업자에 대해 더 알아보세요.",
      imageAlt: "청록색 네온 조명이 비치는 홍콩 CTRL Games 스튜디오 내부",
    },
    games: {
      eyebrow: "개발 중",
      heading: "진행 중인 프로젝트",
      items: [
        {
          title: "Dragon Dragoon",
          tag: "전략 • 판타지",
          copy: "가장 초기 작품 중 하나이면서도 가장 성공적이고 인기 있는 게임입니다. 이 게임이 다룬 여러 요소와 주제는 이후 우리 모든 작품의 중심 테마가 되었습니다. 전략과 전술을 좋아하든, 액션과 판타지를 선호하든, CTRL Games의 경험을 온전히 즐기고 싶다면 Dragon Dragoon을 꼭 플레이해 보시길 권합니다.",
        },
        {
          title: "Kingdom Crash",
          tag: "액션 • 마법",
          copy: "Kingdom Crash와 함께 게임 경험을 한 단계 끌어올리세요. 가장 흥미롭고 인기 있는 작품 중 하나입니다. 아티스트, 디자이너, 개발자, 엔지니어 팀이 쉼 없이 매달려 이 프로젝트를 완성했습니다. 위험과 마법이 가득한 새로운 세계로 이끄는 장대한 모험을 놓치지 마세요.",
        },
        {
          title: "Battle Stage",
          tag: "내러티브 • 액션",
          copy: "이전 작품들과는 방향을 달리해 팀이 함께 개발하고 선보인 작품이 Battle Stage입니다. 가장 인기 있는 게임이자 팀원들이 가장 사랑하는 작품이기도 합니다. 뛰어난 영상미와 액션, 상호작용, 애니메이션을 통해 매혹적인 이야기를 전합니다.",
        },
      ],
    },
    team: {
      heading: "창작하는 사람들",
      founder: {
        name: "K — 창업자",
        bio: "2013년부터 CTRL Games의 비전을 이끌며 지속 가능한 성장과 타협 없는 게임 품질에 집중하고 있습니다.",
      },
      members: [
        { name: "T — 리드 엔지니어", role: "시스템 아키텍처" },
        { name: "B — 크리에이티브 디렉터", role: "내러티브와 세계관" },
        { name: "Y — 아트 리드", role: "비주얼 완성도" },
      ],
    },
    careers: {
      eyebrow: "채용",
      heading: "스튜디오에 합류하고 싶으신가요?",
      body: "우리는 언제나 완성도를 중요하게 생각하는 엔지니어, 아티스트, 디자이너를 찾고 있습니다. 홍콩에서 차세대 CTRL Games 타이틀을 함께 만들고 싶다면 포트폴리오나 이력서와 함께 어떤 일을 하고 싶은지 알려주세요.",
      cta: "이메일로 지원하기",
      roles: [
        { role: "게임플레이 엔지니어", detail: "Unreal / Unity • 홍콩 또는 원격" },
        { role: "테크니컬 아티스트", detail: "셰이더, 파이프라인, 툴 • 홍콩" },
        { role: "게임 디자이너", detail: "시스템 및 성장 설계 • 홍콩" },
        { role: "상시 지원", detail: "함께 만들고 싶은 것을 알려주세요" },
      ],
    },
    footer: {
      heading: "오래 남을 것을 함께 만들어요.",
      hqLabel: "본사",
      address: ["홍콩 훙함 만위가 41번지", "Kaiser Estate Phase 1", "12/F, Flat F"],
      irLabel: "투자자 정보",
      irText: "CTRL Games Limited는 다음 회사의 자회사입니다:",
      privacy: "개인정보 처리방침",
      terms: "이용약관",
    },
  },
};

export function localeHead(locale: Locale) {
  const d = CONTENT[locale];
  const path = LOCALE_PATHS[locale];
  return {
    meta: [
      { title: d.meta.title },
      { name: "description", content: d.meta.description },
      { property: "og:title", content: d.meta.ogTitle },
      { property: "og:description", content: d.meta.ogDescription },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: COMPANY.name },
      { property: "og:locale", content: locale.replace("-", "_") },
      { property: "og:url", content: path },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: d.meta.ogTitle },
      { name: "twitter:description", content: d.meta.ogDescription },
    ],
    links: [
      { rel: "canonical", href: path },
      ...LOCALES.map((l) => ({
        rel: "alternate",
        hrefLang: HREFLANG[l],
        href: LOCALE_PATHS[l],
      })),
      { rel: "alternate", hrefLang: "x-default", href: "/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: COMPANY.name,
          email: COMPANY.email,
          foundingDate: "2013",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Flat F, 12/F, Kaiser Estate Phase 1, 41 Man Yue St.",
            addressLocality: "Hung Hom",
            addressRegion: "Hong Kong",
            addressCountry: "HK",
          },
          parentOrganization: {
            "@type": "Organization",
            name: COMPANY.parent,
            tickerSymbol: "MCTR",
          },
        }),
      },
    ],
  };
}
