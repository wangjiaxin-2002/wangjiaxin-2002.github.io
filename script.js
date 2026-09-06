const translations = {
  zh: {
    pageTitle: "王家欣｜个人主页",
    pageDescription: "王家欣的个人主页——从真实用户中发现问题，用数据验证判断，再推动方案落地。",
    skip: "跳到主要内容", navLabel: "主导航", languageLabel: "语言切换",
    navApproach: "我的方法", navCases: "案例", navJourney: "经历", navStory: "故事", navContact: "联系我",
    heroKicker: "用户洞察与策略", heroHello: "你好，我是", name: "王家欣",
    heroStatement: "我从真实用户中<span>发现问题</span>，<br />用数据<span>验证判断</span>，再推动方案<span>真正落地</span>。",
    heroSummary: "<strong>北京大学社会政策专业 2027 届应届毕业生</strong>，关注用户、数据与业务之间的连接。正在寻找产品、产品运营、用户运营、业务分析及用户研究等相关机会。",
    viewCases: "查看代表案例", downloadResume: "下载简历", contactMe: "联系我",
    sideNoteLabel: "个人方法关键词", sideNote: "从人的感受出发，<br />让事实成为坐标，<br />让行动抵达结果。",
    strengthLabel: "个人优势", insight: "洞察", empathy: "同理心", action: "行动力",
    approachEyebrow: "我的工作方式", approachTitle: "每一次洞察，<br />都有一条清晰的<span>轨迹</span>。",
    approachNote: "把人的感受、数据的证据与业务的目标放在同一张图上。",
    listenZh: "倾听", listenCopy: "进入真实情境，用访谈、观察与追问理解用户说了什么，以及为什么。", listenTools: "深度访谈 · 用户触达",
    decodeZh: "解码", decodeCopy: "把零散信息结构化，用数据、文本与交叉验证找到规律和机会。", decodeTools: "Python · SPSS · SQL",
    deliverZh: "推动", deliverCopy: "把洞察翻译成团队可执行的方案，协同多方推进并用结果复盘。", deliverTools: "策略建议 · 跨团队协作",
    casesEyebrow: "代表案例", casesTitle: "不止发现问题，<br />更让洞察<span>发生作用</span>。", casesNote: "以下案例仅呈现可公开信息，内部业务细节已做概括处理。",
    case1Meta: "美团 · 用户运营实习", case1Title: "一次套餐优化，如何连接用户、城市与平台？", case1Metric1: "卡用户数环比", case1Metric2: "RPT 环比",
    case2Meta: "清研智库 · 助理分析员", case2Title: "从 60+ 数据源到一份可执行的内容策略", case2Metric1: "目标数据源", case2Metric2: "企业深访",
    case3Meta: "腾讯“耕耘者”计划 · 数据分析组长", case3Title: "让 1.5 万+篇文本说出行为路径的故事", case3Metric1: "文本数据",
    problem: "问题", method: "方法", insightLabel: "洞察", result: "结果",
    case1Problem: "全国协同项目中，套餐供给需要同时兼顾城市落地、平台目标与用户粘性。",
    case1Method: "参与全国统筹，协同相关团队、城市运营商与平台三方，结合用户表现持续调整套餐供给。",
    case1Insight: "增长并非来自单点动作，而是供给匹配、城市执行与平台节奏共同作用的结果。",
    case1Result: "项目实现持卡用户数环比增长 42.2%，RPT 环比增长 2.6%，并为后续运营策略提供支持。",
    case2Problem: "全球智库平台上线前，内容来源分散、标准不一，也缺少对企业用户真实需求的系统理解。",
    case2Method: "拆解 60+ 数据源并输出标准化抓取需求，协同技术团队跑通数据采集到内容入库流程；独立访谈 20+ 企业 B 端用户。",
    case2Insight: "用户在不同工作场景中需要的不是更多内容，而是更可信、更易定位的信息。",
    case2Result: "形成 3000 字专项调研报告并提出多部门需求，为平台顺利上线及内容策略提供依据。",
    case3Problem: "平台积累了大量非结构化文本，难以直接识别基层执行路径中的共性特征与痛点。",
    case3Method: "使用 Python 完成 1.5 万+篇文本清洗与结构化处理，通过 TF-IDF 和 LSA 识别高频词与潜在主题。",
    case3Insight: "量化不同群体的行为差异后，原本分散的执行动作呈现出可比较的路径特征。",
    case3Result: "输出多维度可视化分析报告，定位基层执行路径痛点，为平台规则优化提供数据支持。",
    journeyEyebrow: "经历与成长", journeyTitle: "我的路径并非直线，<br />但始终围绕<span>人与问题</span>。", journeyNote: "从课堂到真实业务，我在不同场景中积累理解问题与推动结果的方法。",
    educationGroup: "教育经历", practiceGroup: "实习与项目", master: "硕士", bachelor: "本科", internship: "实习", project: "项目", research: "调研", viewCase: "查看案例 ↗",
    pkuTitle: "北京大学 · 社会政策硕士", pkuCopy: "主修：大数据挖掘与分析、社会政策调研与评估、中国社会政策。",
    meituanTitle: "美团 · 用户运营实习生", meituanCopy: "用户增长、跨团队项目推进、行业竞对监控与策略支持。",
    qingyanTitle: "清研智库 · 助理分析员", qingyanCopy: "内容生态搭建、B 端用户研究与多部门需求洞察。",
    tencentTitle: "腾讯“耕耘者”计划 · 数据分析组长", tencentCopy: "清洗并分析 1.5 万+篇文本，识别行为路径特征并输出可视化洞察。",
    communityTitle: "上海大学都市社区电话调查项目", communityCopy: "完成陌生用户触达与 36 份高质量样本交付，获“优秀访员”。",
    minzuTitle: "中央民族大学 · 社会学本科", minzuCopy: "连续三年校级一等奖学金，优秀学生干部，保研北京大学社会学系。",
    storyEyebrow: "一次把兴趣变成生意的尝试", storyTitle: "分享一个<br />我的<span>小故事</span>。", storyNote: "从小红书的一条帖子开始，我在校园毕业季完成了一次从流量到成交的实践。",
    storyQuote: "从一条帖子开始，<br />走完一次从<span>流量到成交</span>的闭环。", storyMetricUnit: "单毕业约拍", storyMetricPeriod: "一个季度内", storyWhyTitle: "为什么开始", storyWhyCopy: "2026 年上半年，毕业季临近。我不想让摄影只停留在兴趣里，于是决定成为校园毕业约拍摄影师：看看自己能否把审美、沟通和执行，变成一项真正有人愿意付费的服务。", storyHowTitle: "如何快速行动", storyHowCopy: "时间有限，我集中观察小红书上其他摄影博主的经营模式，拆解从内容呈现、作品展示到咨询承接的路径；再结合自己的能力做取舍，边发布、边回应、边调整。", storyResultTitle: "结果如何", storyResultCopy: "通过小红书发帖，我把内容流量转化为真实预约，在一个季度内完成 40+ 单毕业拍摄，走完了从曝光、咨询到成交与交付的完整链路。", storyTakeaway: "这次个人经营实践让我验证了：我不仅能发现需求，也能快速学习、做出取舍，并把一次尝试推进到可量化的结果。",
    storyGalleryLead: "从定价，到账号定位，再到持续发布——这是我把想法一步步做出来的三个过程切片。", storyPriceTitle: "约拍价目表", storyPriceCopy: "把服务内容与价格讲清楚", storyPriceAlt: "毕业季约拍价目表", storyPriceAria: "查看完整毕业季约拍价目表", storyProfileTitle: "小红书主页名片", storyProfileCopy: "建立清晰的摄影账号定位", storyProfileAlt: "夹心五角星小红书主页名片", storyProfileAria: "查看完整小红书主页名片", storyPostsTitle: "毕业季发帖列表", storyPostsCopy: "用持续内容承接关注与咨询", storyPostsAlt: "小红书毕业季摄影发帖列表", storyPostsAria: "查看完整毕业季摄影发帖列表",
    contactEyebrow: "期待加入你的团队", contactTitle: "如果你正在寻找<br />能理解用户、分析数据并<span>推动结果</span>的人。",
    contactCopy: "我能够承担产品、产品运营、用户运营、业务分析与用户研究相关工作，并以可靠的执行把任务推进到结果。", downloadFullResume: "下载完整简历 ↓", copyEmail: "复制邮箱", copied: "邮箱已复制",
    footerLine: "倾听真实的人，理解复杂的问题。", backTop: "回到顶部 ↑"
  },
  en: {
    pageTitle: "Jiaxin Wang | Personal Homepage",
    pageDescription: "Jiaxin Wang turns real user needs into data-backed decisions and actionable strategies.",
    skip: "Skip to main content", navLabel: "Main navigation", languageLabel: "Language switcher",
    navApproach: "Approach", navCases: "Cases", navJourney: "Journey", navStory: "Story", navContact: "Contact",
    heroKicker: "USER INSIGHT & STRATEGY", heroHello: "Hi, I’m", name: "Jiaxin Wang",
    heroStatement: "I <span>discover problems</span> with real users,<br /><span>validate decisions</span> with data, and turn insight into <span>action</span>.",
    heroSummary: "A <strong>Class of 2027 Social Policy graduate from Peking University</strong>, connecting people, data and business. Open to opportunities in product management, product operations, user operations, business analytics and user research.",
    viewCases: "View selected cases", downloadResume: "Download résumé", contactMe: "Contact me",
    sideNoteLabel: "Personal approach keywords", sideNote: "Start with people.<br />Use evidence as coordinates.<br />Turn insight into impact.",
    strengthLabel: "Core strengths", insight: "Insight", empathy: "Empathy", action: "Action",
    approachEyebrow: "HOW I WORK", approachTitle: "Every insight follows<br />a traceable <span>path</span>.",
    approachNote: "Putting human experience, data evidence and business goals on the same map.",
    listenZh: "UNDERSTAND", listenCopy: "Enter real contexts and use interviews, observation and follow-up questions to understand both what users say and why.", listenTools: "INTERVIEWS · USER OUTREACH",
    decodeZh: "ANALYZE", decodeCopy: "Structure scattered information and use data, text and triangulation to uncover patterns and opportunities.", decodeTools: "PYTHON · SPSS · SQL",
    deliverZh: "ACT", deliverCopy: "Translate insight into executable plans, align stakeholders and evaluate outcomes.", deliverTools: "STRATEGY · COLLABORATION",
    casesEyebrow: "SELECTED WORK", casesTitle: "Finding the problem<br />is only the <span>beginning</span>.", casesNote: "These cases contain public information only. Internal business details have been generalized.",
    case1Meta: "MEITUAN · USER OPERATIONS INTERN", case1Title: "How can one offering connect users, cities and a platform?", case1Metric1: "CARD USERS MoM", case1Metric2: "RPT MoM",
    case2Meta: "QINGYAN THINK TANK · ASSISTANT ANALYST", case2Title: "From 60+ sources to one actionable content strategy", case2Metric1: "DATA SOURCES", case2Metric2: "B2B INTERVIEWS",
    case3Meta: "TENCENT CULTIVATOR PROGRAM · DATA LEAD", case3Title: "Turning 15K+ texts into a story of behavioral paths", case3Metric1: "TEXT RECORDS",
    problem: "PROBLEM", method: "METHOD", insightLabel: "INSIGHT", result: "RESULT",
    case1Problem: "A nationwide initiative needed to balance local execution, platform goals and user retention through the right offering mix.",
    case1Method: "Supported national coordination across internal teams, city operators and the platform, continuously refining supply based on user performance.",
    case1Insight: "Growth came not from a single tactic, but from the interaction between supply fit, local execution and platform rhythm.",
    case1Result: "The initiative delivered 42.2% month-over-month growth in card users and 2.6% growth in RPT, informing subsequent operations strategy.",
    case2Problem: "Before a global think-tank platform launch, content sources were fragmented and inconsistent, while enterprise user needs remained unclear.",
    case2Method: "Mapped 60+ sources into standardized requirements, partnered with engineers on the ingestion pipeline, and independently interviewed 20+ B2B users.",
    case2Insight: "Across work scenarios, users needed not more content, but information that was more credible and easier to locate.",
    case2Result: "Produced a 3,000-word research report and cross-functional requirements that supported the platform launch and content strategy.",
    case3Problem: "A large body of unstructured text made it difficult to identify common patterns and pain points in grassroots implementation paths.",
    case3Method: "Cleaned and structured 15K+ texts with Python, then used TF-IDF and LSA to identify frequent terms and latent themes.",
    case3Insight: "Once behavioral differences were quantified, scattered actions revealed comparable path patterns across user groups.",
    case3Result: "Delivered a multidimensional visual analysis that located execution pain points and informed platform rule optimization.",
    journeyEyebrow: "EXPERIENCE & GROWTH", journeyTitle: "My path isn’t linear,<br />but it starts with <span>people</span>.", journeyNote: "Across classrooms and real business settings, I have built a practical way to understand problems and move work toward results.",
    educationGroup: "Education", practiceGroup: "Internships & Projects", master: "MASTER'S", bachelor: "BACHELOR'S", internship: "INTERNSHIP", project: "PROJECT", research: "RESEARCH", viewCase: "View case ↗",
    pkuTitle: "Peking University · M.A. in Social Policy", pkuCopy: "Core coursework: Data mining and analysis, social policy research and evaluation, and Chinese social policy.",
    meituanTitle: "Meituan · User Operations Intern", meituanCopy: "User growth, cross-functional delivery, competitor monitoring and strategy support.",
    qingyanTitle: "Qingyan Think Tank · Assistant Analyst", qingyanCopy: "Content ecosystem design, B2B user research and cross-functional requirements.",
    tencentTitle: "Tencent Cultivator Program · Data Analysis Lead", tencentCopy: "Cleaned and analyzed 15K+ texts to identify behavioral path patterns and deliver visual insights.",
    communityTitle: "Shanghai Urban Community Survey", communityCopy: "Reached unfamiliar respondents, delivered 36 high-quality samples and received an Outstanding Interviewer award.",
    minzuTitle: "Minzu University of China · B.A. in Sociology", minzuCopy: "First-class scholarship for three consecutive years and recommended admission to Peking University.",
    storyEyebrow: "TURNING AN INTEREST INTO A SMALL BUSINESS", storyTitle: "Let me share<br />a <span>small story</span>.", storyNote: "It began with a Xiaohongshu post and became a hands-on lesson in converting attention into paid bookings during graduation season.",
    storyQuote: "One post at a time,<br />I built a path from <span>traffic to bookings</span>.", storyMetricUnit: "paid shoots", storyMetricPeriod: "within one quarter", storyWhyTitle: "Why I started", storyWhyCopy: "In the first half of 2026, with graduation season approaching, I wanted photography to become more than an interest. I became a campus graduation photographer to see whether I could turn aesthetics, communication and execution into a service people would genuinely pay for.", storyHowTitle: "How I moved fast", storyHowCopy: "With limited time, I studied how other photographers operated on Xiaohongshu, breaking down the path from content and portfolio presentation to inquiry handling. I then made deliberate trade-offs around my own strengths, learning and adjusting as I posted and responded.", storyResultTitle: "What converted", storyResultCopy: "My Xiaohongshu posts turned content traffic into real bookings. Within one quarter, I completed more than 40 graduation shoots and experienced the full journey from exposure and inquiries to conversion and delivery.", storyTakeaway: "This small business experiment showed that I can spot demand, learn quickly, make focused trade-offs and carry an idea through to measurable results.",
    storyGalleryLead: "From pricing and account positioning to consistent publishing, these are three snapshots of how I turned the idea into something real.", storyPriceTitle: "Service & pricing", storyPriceCopy: "Making the offer and value easy to understand", storyPriceAlt: "Graduation photography service and pricing sheet", storyPriceAria: "View the full graduation photography pricing sheet", storyProfileTitle: "Xiaohongshu profile", storyProfileCopy: "Building a clear identity for the photography account", storyProfileAlt: "Jiaxin Wujiaoxing Xiaohongshu profile card", storyProfileAria: "View the full Xiaohongshu profile card", storyPostsTitle: "Graduation post series", storyPostsCopy: "Turning consistent content into attention and inquiries", storyPostsAlt: "Xiaohongshu graduation photography post list", storyPostsAria: "View the full graduation photography post list",
    contactEyebrow: "READY TO JOIN YOUR TEAM", contactTitle: "Looking for someone who can<br />understand users, analyze data and <span>deliver results</span>?",
    contactCopy: "I am ready to take on roles in product management, product operations, user operations, business analytics and user research—and carry work through with reliable execution.", downloadFullResume: "Download full résumé ↓", copyEmail: "Copy email", copied: "Email copied",
    footerLine: "Listen to real people. Understand complex problems.", backTop: "Back to top ↑"
  }
};

const root = document.documentElement;
const metaDescription = document.querySelector('meta[name="description"]');
const langButtons = document.querySelectorAll(".lang-button");

function setLanguage(language) {
  const lang = translations[language] ? language : "zh";
  const copy = translations[lang];
  root.dataset.lang = lang;
  root.lang = lang === "zh" ? "zh-CN" : "en";
  document.title = copy.pageTitle;
  metaDescription.content = copy.pageDescription;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = copy[element.dataset.i18n];
    if (value !== undefined) element.textContent = value;
  });
  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    const value = copy[element.dataset.i18nHtml];
    if (value !== undefined) element.innerHTML = value;
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    const value = copy[element.dataset.i18nAria];
    if (value !== undefined) element.setAttribute("aria-label", value.replace(/<br \/>/g, " "));
  });
  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    const value = copy[element.dataset.i18nAlt];
    if (value !== undefined) element.setAttribute("alt", value);
  });
  langButtons.forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.lang === lang)));
  localStorage.setItem("language", lang);
}

langButtons.forEach((button) => button.addEventListener("click", () => setLanguage(button.dataset.lang)));

document.querySelectorAll(".case-summary").forEach((button) => {
  button.addEventListener("click", () => {
    const panel = document.getElementById(button.getAttribute("aria-controls"));
    const willOpen = button.getAttribute("aria-expanded") !== "true";
    button.setAttribute("aria-expanded", String(willOpen));
    panel.classList.toggle("open", willOpen);
  });
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("visible");
    revealObserver.unobserve(entry.target);
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

const toast = document.querySelector(".toast");
let toastTimer;
document.querySelector(".copy-email").addEventListener("click", async (event) => {
  try {
    await navigator.clipboard.writeText(event.currentTarget.dataset.email);
    toast.textContent = translations[root.dataset.lang].copied;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 1800);
  } catch {
    window.location.href = `mailto:${event.currentTarget.dataset.email}`;
  }
});

document.querySelector("#year").textContent = new Date().getFullYear();
setLanguage(root.dataset.lang || "zh");
