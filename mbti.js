const quickQuestions = [
    { text: "在社交场合中，你通常：", options: [{ text: "主动与他人交流，认识新朋友", dimension: "E" }, { text: "更喜欢和熟悉的人聊天，保持安静", dimension: "I" }] },
    { text: "周末的时候，你更倾向于：", options: [{ text: "和朋友出去玩，参加聚会", dimension: "E" }, { text: "一个人在家看书、追剧或休息", dimension: "I" }] },
    { text: "当你需要做决定时，你更相信：", options: [{ text: "逻辑分析和客观事实", dimension: "T" }, { text: "个人价值观和情感感受", dimension: "F" }] },
    { text: "面对他人的困难时，你通常会：", options: [{ text: "提供解决方案和建议", dimension: "T" }, { text: "给予情感支持和安慰", dimension: "F" }] },
    { text: "你喜欢的工作方式是：", options: [{ text: "有清晰的计划和截止日期", dimension: "J" }, { text: "灵活自由，随机应变", dimension: "P" }] },
    { text: "旅行时，你会：", options: [{ text: "提前做好详细攻略和行程表", dimension: "J" }, { text: "到了再说，随性而动", dimension: "P" }] },
    { text: "在学习新事物时，你更喜欢：", options: [{ text: "具体的例子和实际操作", dimension: "S" }, { text: "理论概念和抽象原理", dimension: "N" }] },
    { text: "与人交流时，你更关注：", options: [{ text: "具体的细节和事实", dimension: "S" }, { text: "整体的想法和可能性", dimension: "N" }] },
    { text: "在团队合作中，你通常：", options: [{ text: "积极发言，表达观点", dimension: "E" }, { text: "多听少说，深思熟虑后再发言", dimension: "I" }] },
    { text: "当你感到疲惫时，你会：", options: [{ text: "和朋友聊天来恢复精力", dimension: "E" }, { text: "独处一会儿，自己充个电", dimension: "I" }] },
    { text: "评价一部电影，你会更看重：", options: [{ text: "剧情逻辑和制作水准", dimension: "T" }, { text: "情感共鸣和人物塑造", dimension: "F" }] },
    { text: "处理冲突时，你倾向于：", options: [{ text: "直接解决问题，追求公平", dimension: "T" }, { text: "维护关系，追求和谐", dimension: "F" }] },
    { text: "你的书桌或房间通常是：", options: [{ text: "井井有条，东西都有固定位置", dimension: "J" }, { text: "有点乱，但知道东西在哪", dimension: "P" }] },
    { text: "面对突如其来的变化，你会：", options: [{ text: "感到不安，希望尽快恢复原状", dimension: "J" }, { text: "感到兴奋，喜欢新的挑战", dimension: "P" }] },
    { text: "给你讲一个故事，你更记得：", options: [{ text: "具体的情节和细节", dimension: "S" }, { text: "故事的主题和寓意", dimension: "N" }] },
    { text: "你对未来的规划更像是：", options: [{ text: "设定明确的目标和步骤", dimension: "S" }, { text: "有一个大概的方向和愿景", dimension: "N" }] }
];

const fullQuestions = [
    { text: "在社交场合中，你通常：", options: [{ text: "主动与他人交流，认识新朋友", dimension: "E" }, { text: "更喜欢和熟悉的人聊天，保持安静", dimension: "I" }] },
    { text: "周末的时候，你更倾向于：", options: [{ text: "和朋友出去玩，参加聚会", dimension: "E" }, { text: "一个人在家看书、追剧或休息", dimension: "I" }] },
    { text: "在团队合作中，你通常：", options: [{ text: "积极发言，表达观点", dimension: "E" }, { text: "多听少说，深思熟虑后再发言", dimension: "I" }] },
    { text: "当你感到疲惫时，你会：", options: [{ text: "和朋友聊天来恢复精力", dimension: "E" }, { text: "独处一会儿，自己充个电", dimension: "I" }] },
    { text: "在陌生环境中，你会：", options: [{ text: "主动出击，快速融入", dimension: "E" }, { text: "观察环境，慢慢适应", dimension: "I" }] },
    { text: "遇到有趣的新话题，你会：", options: [{ text: "迫不及待地分享给别人", dimension: "E" }, { text: "自己先思考消化一下", dimension: "I" }] },
    { text: "在聚会上，你的状态是：", options: [{ text: "在人群中活跃，享受热闹", dimension: "E" }, { text: "找个安静的角落，和熟悉的人聊", dimension: "I" }] },
    { text: "需要做展示时，你会：", options: [{ text: "非常享受在众人面前表达", dimension: "E" }, { text: "感到紧张，但会认真准备", dimension: "I" }] },
    { text: "你的朋友圈特点是：", options: [{ text: "广泛而多元，认识很多人", dimension: "E" }, { text: "小而精，几个深交的好友", dimension: "I" }] },
    { text: "当你在思考问题时：", options: [{ text: "喜欢和他人讨论来理清思路", dimension: "E" }, { text: "喜欢独自思考，自己想明白", dimension: "I" }] },
    { text: "你的能量来源是：", options: [{ text: "与他人的互动和交流", dimension: "E" }, { text: "独处和自我反思", dimension: "I" }] },
    { text: "在热闹的活动后，你会：", options: [{ text: "感到兴奋，意犹未尽", dimension: "E" }, { text: "需要时间独处来恢复", dimension: "I" }] },
    { text: "在学习新事物时，你更喜欢：", options: [{ text: "具体的例子和实际操作", dimension: "S" }, { text: "理论概念和抽象原理", dimension: "N" }] },
    { text: "与人交流时，你更关注：", options: [{ text: "具体的细节和事实", dimension: "S" }, { text: "整体的想法和可能性", dimension: "N" }] },
    { text: "给你讲一个故事，你更记得：", options: [{ text: "具体的情节和细节", dimension: "S" }, { text: "故事的主题和寓意", dimension: "N" }] },
    { text: "你对未来的规划更像是：", options: [{ text: "设定明确的目标和步骤", dimension: "S" }, { text: "有一个大概的方向和愿景", dimension: "N" }] },
    { text: "解决问题时，你更倾向于：", options: [{ text: "采用经验证实的经典方法", dimension: "S" }, { text: "尝试创新的新思路", dimension: "N" }] },
    { text: "你的思维方式更接近：", options: [{ text: "务实，注重现实可行性", dimension: "S" }, { text: "富有想象力，关注未来", dimension: "N" }] },
    { text: "阅读时，你喜欢：", options: [{ text: "具体的故事和实用信息", dimension: "S" }, { text: "抽象的概念和理论探讨", dimension: "N" }] },
    { text: "描述一个事物时，你更会说：", options: [{ text: "它的外观、功能等具体特征", dimension: "S" }, { text: "它代表的意义或象征", dimension: "N" }] },
    { text: "在艺术欣赏上，你喜欢：", options: [{ text: "写实主义，精细描绘", dimension: "S" }, { text: "抽象风格，富有寓意", dimension: "N" }] },
    { text: "对你来说，什么更重要：", options: [{ text: "当下的现实和具体事物", dimension: "S" }, { text: "未来的可能性", dimension: "N" }] },
    { text: "你的关注重点通常是：", options: [{ text: "这里和现在，具体可及的", dimension: "S" }, { text: "那里和那时，概念性的", dimension: "N" }] },
    { text: "你觉得更可信的是：", options: [{ text: "过往的经验和已知的事实", dimension: "S" }, { text: "直觉和灵感", dimension: "N" }] },
    { text: "当你需要做决定时，你更相信：", options: [{ text: "逻辑分析和客观事实", dimension: "T" }, { text: "个人价值观和情感感受", dimension: "F" }] },
    { text: "面对他人的困难时，你通常会：", options: [{ text: "提供解决方案和建议", dimension: "T" }, { text: "给予情感支持和安慰", dimension: "F" }] },
    { text: "评价一部电影，你会更看重：", options: [{ text: "剧情逻辑和制作水准", dimension: "T" }, { text: "情感共鸣和人物塑造", dimension: "F" }] },
    { text: "处理冲突时，你倾向于：", options: [{ text: "直接解决问题，追求公平", dimension: "T" }, { text: "维护关系，追求和谐", dimension: "F" }] },
    { text: "你更在意的是：", options: [{ text: "事情是否正确合理", dimension: "T" }, { text: "他人的感受和情绪", dimension: "F" }] },
    { text: "在争论中，你会：", options: [{ text: "坚持己见，用逻辑说服对方", dimension: "T" }, { text: "考虑对方的感受，避免伤人", dimension: "F" }] },
    { text: "评价一个人时，你更看重：", options: [{ text: "他的能力和成就", dimension: "T" }, { text: "他的品格和为人", dimension: "F" }] },
    { text: "当朋友向你倾诉时，你会：", options: [{ text: "分析问题，给出建议", dimension: "T" }, { text: "倾听理解，给予安慰", dimension: "F" }] },
    { text: "你的决策风格是：", options: [{ text: "理性分析，权衡利弊", dimension: "T" }, { text: "跟随内心，考虑他人", dimension: "F" }] },
    { text: "在团队中，你更看重：", options: [{ text: "效率和结果", dimension: "T" }, { text: "团队氛围和成员感受", dimension: "F" }] },
    { text: "面对批评，你会：", options: [{ text: "理性分析，看是否有道理", dimension: "T" }, { text: "会感到难过，在意他人看法", dimension: "F" }] },
    { text: "你的判断标准更多基于：", options: [{ text: "客观原则和规则", dimension: "T" }, { text: "个人价值观和人情", dimension: "F" }] },
    { text: "你喜欢的工作方式是：", options: [{ text: "有清晰的计划和截止日期", dimension: "J" }, { text: "灵活自由，随机应变", dimension: "P" }] },
    { text: "旅行时，你会：", options: [{ text: "提前做好详细攻略和行程表", dimension: "J" }, { text: "到了再说，随性而动", dimension: "P" }] },
    { text: "你的书桌或房间通常是：", options: [{ text: "井井有条，东西都有固定位置", dimension: "J" }, { text: "有点乱，但知道东西在哪", dimension: "P" }] },
    { text: "面对突如其来的变化，你会：", options: [{ text: "感到不安，希望尽快恢复原状", dimension: "J" }, { text: "感到兴奋，喜欢新的挑战", dimension: "P" }] },
    { text: "面对多项任务，你会：", options: [{ text: "按计划逐一完成", dimension: "J" }, { text: "灵活切换，看心情或紧急程度", dimension: "P" }] },
    { text: "对于截止日期，你会：", options: [{ text: "提前规划，留出充足时间", dimension: "J" }, { text: "在最后时刻冲刺完成", dimension: "P" }] },
    { text: "你的生活方式倾向是：", options: [{ text: "按部就班，有规律", dimension: "J" }, { text: "随性自由，多变化", dimension: "P" }] },
    { text: "当有紧急任务时，你会：", options: [{ text: "立即安排到计划中完成", dimension: "J" }, { text: "看情况，灵活调整", dimension: "P" }] },
    { text: "你喜欢的工作节奏是：", options: [{ text: "稳定可预测", dimension: "J" }, { text: "充满变化和挑战", dimension: "P" }] },
    { text: "面对未知情况，你会：", options: [{ text: "希望提前了解清楚", dimension: "J" }, { text: "喜欢探索和发现", dimension: "P" }] },
    { text: "完成任务的方式是：", options: [{ text: "严格按照计划执行", dimension: "J" }, { text: "灵活调整，有新想法就尝试", dimension: "P" }] },
    { text: "你更偏爱：", options: [{ text: "事情有明确的结果", dimension: "J" }, { text: "过程保持开放和可能", dimension: "P" }] }
];
const personalityTypes = {
    "ISTJ": { name: "物流师", avatar: "🧱⚙️", desc: "踏实可靠的守护者，用责任和秩序构建世界的基石", details: {"🌟 性格特点": "安静、严肃，通过全面性和可靠性获得成功。实际、务实，追求事实。负责任，坚定不移。", "💪 核心优势": "值得信赖、务实肯干、有责任心、有条有理、忠诚可靠、执行力强", "⚠️ 潜在挑战": "有时过于固执、难以接受改变、可能显得过于严肃、灵活性不足", "💼 适合职业": "会计师、律师、医生、工程师、军官、审计师", "🔑 关键词": "责任、秩序、传统、可靠、务实"} },
    "ISFJ": { name: "守卫者", avatar: "🛡️💝", desc: "温暖的守护者，用体贴和细节守护身边的人", details: {"🌟 性格特点": "安静、友好、负责任、认真。坚定不移，谨慎细致。忠诚体贴，会记得关注其他人的细节和兴趣。", "💪 核心优势": "体贴入微、忠诚可靠、细致认真、支持他人、注重细节", "⚠️ 潜在挑战": "过度自我牺牲、难以拒绝他人、容易受伤、可能被忽视自己的需求", "💼 适合职业": "教师、护士、社工、行政人员、人力资源、图书管理员", "🔑 关键词": "服务、忠诚、细节、和谐、温暖"} },
    "INFJ": { name: "提倡者", avatar: "🌟🔮", desc: "深邃的理想主义者，用洞察和信念照亮前路", details: {"🌟 性格特点": "通过坚持不懈的努力和创造性的想法来实现理想。有洞察力、有责任心。坚持自己的价值观，有清晰的计划。", "💪 核心优势": "富有洞察力、有创意、坚持原则、富有同情心、有远见、善于激励他人", "⚠️ 潜在挑战": "完美主义倾向、容易感到疲惫、过于理想主义、可能忽视现实", "💼 适合职业": "心理咨询师、作家、艺术家、教师、非营利组织工作者、人力资源发展", "🔑 关键词": "理想、洞察、创意、意义、愿景"} },
    "INTJ": { name: "建筑师", avatar: "🏗️🎯", desc: "战略性的思想家，用智慧和规划构建未来", details: {"🌟 性格特点": "富有想象力和战略性的思想家。有独创性的思想，对实现自己的想法和目标有极大的动力。能很快看到规律，形成长远视角。", "💪 核心优势": "战略性思维、富有创意、独立自主、逻辑严密、高效、有远见卓识", "⚠️ 潜在挑战": "可能显得傲慢、难以容忍低效、社交方面可能笨拙、过于理性", "💼 适合职业": "科学家、工程师、软件架构师、战略顾问、投资分析师、大学教授", "🔑 关键词": "战略、创新、独立、高效、智慧"} },
    "ISTP": { name: "鉴赏家", avatar: "🔧⚡", desc: "勇敢的实践者，用技能和行动解决实际问题", details: {"🌟 性格特点": "大胆而实际的实验家，精通使用各种形式的工具。容忍度高、行动派。喜欢分析事物的运作原理，迅速找到核心问题。", "💪 核心优势": "实际能力强、灵活适应、解决问题、分析力强、动手能力强、冷静沉着", "⚠️ 潜在挑战": "难以做出长期承诺、可能冒险、缺乏长期规划、可能显得冷漠", "💼 适合职业": "机械师、飞行员、工程师、程序员、急救人员、消防员、系统分析师", "🔑 关键词": "实际、灵活、分析、行动、技能"} },
    "ISFP": { name: "探险家", avatar: "🎨🦋", desc: "自由的艺术家，用美和真诚表达内心的世界", details: {"🌟 性格特点": "有魅力的艺术家，总是时刻准备着探索和体验新事物。安静、友好、敏感、和善。享受当下，忠于自己的价值观。", "💪 核心优势": "富有艺术气息、敏感细腻、灵活适应、善良真诚、富有创造力、真实不做作", "⚠️ 潜在挑战": "过于敏感、难以做出承诺、缺乏规划能力、容易受伤", "💼 适合职业": "艺术家、设计师、摄影师、兽医、理疗师、时尚设计师、插画师", "🔑 关键词": "艺术、自由、真诚、体验、美丽"} },
    "INFP": { name: "调停者", avatar: "🕊️💜", desc: "浪漫的理想主义者，用同情和理解治愈世界", details: {"🌟 性格特点": "诗意而善良的利他主义者，总是热情地为正当理由提供帮助。理想主义，对于自己的价值观和对自己重要的人非常忠诚。", "💪 核心优势": "富有创造力、理想主义、富有同情心、善良真诚、富有想象力、理解他人", "⚠️ 潜在挑战": "过于理想主义、难以处理冲突、容易内疚、可能忽视实际需求", "💼 适合职业": "作家、心理咨询师、艺术家、教师、编辑、非营利组织、社会工作者", "🔑 关键词": "理想、同理、创意、价值、善良"} },
    "INTP": { name: "逻辑学家", avatar: "🔬💡", desc: "好奇的发明家，用逻辑和智慧探索未知", details: {"🌟 性格特点": "具有创造力的发明家，对知识有着止不住的渴望。对于自己感兴趣的任何事物都寻求找到合理的解释。喜欢理论和抽象的事物。", "💪 核心优势": "逻辑思维强、富有创意、独立自主、好奇心强、分析能力强、富有智慧", "⚠️ 潜在挑战": "可能显得情感疏离、社交能力有限、容易忽视细节、可能过于抽象", "💼 适合职业": "科学家、程序员、数学家、研究员、大学教授、数据分析师、哲学家", "🔑 关键词": "逻辑、好奇、分析、创新、智慧"} },
    "ESTP": { name: "企业家", avatar: "🚀🎪", desc: "充满活力的冒险家，用行动和勇气开拓道路", details: {"🌟 性格特点": "聪明、精力充沛善于感知的人，享受生活。灵活、容忍度强，即兴发挥，注重即时满足。理论和概念会让他们感到厌烦。", "💪 核心优势": "充满活力、适应力强、实际可行、风趣幽默、行动果断、善于临场发挥", "⚠️ 潜在挑战": "缺乏耐心、可能冒险、难以长期规划、容易厌倦", "💼 适合职业": "创业者、销售、股票经纪人、警察、消防员、企业家、活动策划", "🔑 关键词": "活力、行动、实际、冒险、热情"} },
    "ESFP": { name: "表演者", avatar: "🎭🌈", desc: "热情的entertainer，用快乐和魅力感染周围", details: {"🌟 性格特点": "精力充沛、热情洋溢的表演者，生活在他们周围永不无聊。外向、友好、接纳、热爱生活、热爱人类。喜欢与人为伍。", "💪 核心优势": "有魅力、友好、有趣、善于社交、乐观、乐于助人", "⚠️ 潜在挑战": "缺乏专注、难以规划、容易厌倦、可能逃避困难", "💼 适合职业": "演员、公关、活动策划、销售、旅游顾问、娱乐行业", "🔑 关键词": "表演、社交、快乐、体验、热情"} },
    "ENFP": { name: "竞选者", avatar: "✨🎨", desc: "热情的自由精神，用创意和可能性激励他人", details: {"🌟 性格特点": "充满热情和创造力的自由精神。热情洋溢、富有想象力。认为人生充满可能性。能很快地将事情和信息联系起来。", "💪 核心优势": "有热情、有创意、有同理心、善于沟通、富有想象力、乐于助人", "⚠️ 潜在挑战": "难以专注、容易分心、过度承诺、可能忽视细节", "💼 适合职业": "记者、作家、公关、心理咨询师、活动策划、创意总监", "🔑 关键词": "热情、创意、可能、社交、自由"} },
    "ENTP": { name: "辩论家", avatar: "⚡💎", desc: "聪明机智的辩论家，用智力和挑战激发思考", details: {"🌟 性格特点": "聪明好奇的思想者，难以抵挡智力挑战的诱惑。反应快、睿智，喜欢激励他人。好辩论，对于解决有挑战性的问题乐此不疲。", "💪 核心优势": "聪明、有创意、善于辩论、适应力强、思维敏捷、富有洞察力", "⚠️ 潜在挑战": "有争议性、难以承诺、容易得罪人、可能忽视他人感受", "💼 适合职业": "律师、创业者、顾问、政治家、风险投资人、记者", "🔑 关键词": "智力、辩论、创新、挑战、智慧"} },
    "ESTJ": { name: "总经理", avatar: "👓📋", desc: "高效的管理者，用秩序和效率带领团队前进", details: {"🌟 性格特点": "出色的管理者，在管理事情或人的方面无与伦比。务实、现实、事实导向。果断，一旦做出决定就会马上行动。善于组织。", "💪 核心优势": "组织能力强、可靠务实、果断高效、责任心强、善于管理、执行力强", "⚠️ 潜在挑战": "过于固执、难以适应变化、缺乏灵活性、可能过于强硬", "💼 适合职业": "管理者、军官、会计师、律师、法官、项目经理、行政主管", "🔑 关键词": "管理、秩序、效率、责任、权威"} },
    "ESFJ": { name: "执政官", avatar: "🤝💖", desc: "热情的照顾者，用服务和支持温暖大家", details: {"🌟 性格特点": "极有同情心，爱社交受欢迎的人，总是热心提供帮助。通过实实在在的行动热心助人。合作意识强，对于建立和谐的环境非常重要。", "💪 核心优势": "富有同情心、忠诚可靠、组织能力强、善于合作、乐于助人、注重和谐", "⚠️ 潜在挑战": "难以处理冲突、容易受伤、缺乏灵活性、可能过于在意他人看法", "💼 适合职业": "教师、护士、社工、人力资源、销售经理、办公室主任、接待员", "🔑 关键词": "服务、社交、和谐、支持、热情"} },
    "ENFJ": { name: "主人公", avatar: "👑🌟", desc: "魅力的领导者，用智慧和热情激发潜力", details: {"🌟 性格特点": "富有魅力鼓舞人心的领导者，有使听众着迷的能力。热情、负责任、善解人意。能看到他人的潜能，并希望能帮助他人实现。", "💪 核心优势": "富有魅力、富有同情心、领导能力强、善于激励、热情开朗、理解他人", "⚠️ 潜在挑战": "过于理想主义、容易感到疲惫、难以接受批评、可能过度投入", "💼 适合职业": "教师、培训师、人力资源、非营利组织领导者、咨询师、公关经理", "🔑 关键词": "领导、激励、和谐、成长、魅力"} },
    "ENTJ": { name: "指挥官", avatar: "🎯💎", desc: "果断的战略家，用远见和魄力引领方向", details: {"🌟 性格特点": "大胆、富有想象力且意志强大的领导者，总能找到或创造解决方法。坦诚、果断，天生的领导者。能很快看到问题，实施和开发全面的系统来解决。", "💪 核心优势": "领导能力强、富有战略思维、高效果断、自信坚定、目标导向、富有远见", "⚠️ 潜在挑战": "可能显得傲慢、难以容忍低效、社交方面可能过于直接、可能忽视他人感受", "💼 适合职业": "CEO、创业者、管理顾问、律师、政治家、投资银行家、军官", "🔑 关键词": "领导、战略、效率、目标、魄力"} }
};

let currentMode = 'full', currentQuestion = 0, scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 }, answers = [];

function initPersonalityGrid() {
    const grid = document.getElementById('personality-grid');
    Object.keys(personalityTypes).forEach(type => {
        const p = personalityTypes[type];
        const card = document.createElement('div');
        card.className = 'personality-card';
        card.innerHTML = `<div class="card-avatar">${p.avatar}</div><div class="card-type">${type}</div><div class="card-name">${p.name}</div><div class="card-desc">${p.desc.substring(0, 25)}...</div>`;
        card.onclick = () => alert(`${type} - ${p.name}\n\n${p.desc}`);
        grid.appendChild(card);
    });
}

function selectMode(mode) {
    currentMode = mode;
    document.getElementById('mode-quick').classList.toggle('selected', mode === 'quick');
    document.getElementById('mode-full').classList.toggle('selected', mode === 'full');
}

function startTest() {
    document.getElementById('start-screen').classList.add('hidden');
    document.getElementById('test-screen').classList.remove('hidden');
    resetState();
    showQuestion();
}

function resetState() {
    currentQuestion = 0;
    scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
    answers = [];
}

function showQuestion() {
    const questions = currentMode === 'quick' ? quickQuestions : fullQuestions;
    const question = questions[currentQuestion];
    document.getElementById('question-text').textContent = `${currentQuestion + 1}. ${question.text}`;
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';
    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.textContent = option.text;
        optionDiv.onclick = () => selectOption(index, option.dimension);
        optionsContainer.appendChild(optionDiv);
    });
    const savedAnswer = answers[currentQuestion];
    if (savedAnswer !== undefined) {
        optionsContainer.children[savedAnswer].classList.add('selected');
    }
    updateProgress();
    updateButtons();
}

function selectOption(index, dimension) {
    if (answers[currentQuestion] !== undefined) {
        const questions = currentMode === 'quick' ? quickQuestions : fullQuestions;
        const prevDimension = questions[currentQuestion].options[answers[currentQuestion]].dimension;
        scores[prevDimension]--;
    }
    const optionsContainer = document.getElementById('options');
    Array.from(optionsContainer.children).forEach((opt, i) => {
        opt.classList.remove('selected');
        if (i === index) opt.classList.add('selected');
    });
    answers[currentQuestion] = index;
    scores[dimension]++;
    updateButtons();
}

function updateProgress() {
    const questions = currentMode === 'quick' ? quickQuestions : fullQuestions;
    const completed = answers.filter(a => a !== undefined).length;
    const remaining = questions.length - completed;
    const progress = (completed / questions.length) * 100;
    document.getElementById('completed-count').textContent = completed;
    document.getElementById('remaining-count').textContent = remaining;
    document.getElementById('progress-fill').style.width = `${progress}%`;
}

function updateButtons() {
    document.getElementById('prev-btn').disabled = currentQuestion === 0;
    const questions = currentMode === 'quick' ? quickQuestions : fullQuestions;
    document.getElementById('next-btn').textContent = currentQuestion === questions.length - 1 ? '查看结果 🎉' : '下一题 ➡️';
}

function nextQuestion() {
    if (answers[currentQuestion] === undefined) {
        alert('请选择一个选项！');
        return;
    }
    const questions = currentMode === 'quick' ? quickQuestions : fullQuestions;
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        showQuestion();
    } else {
        showResult();
    }
}

function prevQuestion() {
    if (currentQuestion > 0) {
        const questions = currentMode === 'quick' ? quickQuestions : fullQuestions;
        if (answers[currentQuestion] !== undefined) {
            const prevDimension = questions[currentQuestion].options[answers[currentQuestion]].dimension;
            scores[prevDimension]--;
        }
        currentQuestion--;
        showQuestion();
    }
}

function calculateType() {
    const type = [scores.E >= scores.I ? 'E' : 'I', scores.S >= scores.N ? 'S' : 'N', scores.T >= scores.F ? 'T' : 'F', scores.J >= scores.P ? 'J' : 'P'];
    return type.join('');
}

function showResult() {
    document.getElementById('test-screen').classList.add('hidden');
    document.getElementById('result-screen').classList.remove('hidden');
    const type = calculateType();
    const personality = personalityTypes[type];
    document.getElementById('result-avatar').textContent = personality.avatar;
    document.getElementById('result-type').textContent = type;
    document.getElementById('result-name').textContent = personality.name;
    document.getElementById('result-desc').textContent = personality.desc;
    const detailsContainer = document.getElementById('result-details');
    detailsContainer.innerHTML = '';
    Object.entries(personality.details).forEach(([label, text]) => {
        const item = document.createElement('div');
        item.className = 'detail-item';
        item.innerHTML = `<div class="detail-label">${label}</div><div class="detail-text">${text}</div>`;
        detailsContainer.appendChild(item);
    });
    const dimensionsContainer = document.getElementById('dimensions');
    dimensionsContainer.innerHTML = '';
    const dimensionPairs = [
        { label: '外向 vs 内向', values: [scores.E, scores.I], letters: ['E', 'I'] },
        { label: '感觉 vs 直觉', values: [scores.S, scores.N], letters: ['S', 'N'] },
        { label: '思考 vs 情感', values: [scores.T, scores.F], letters: ['T', 'F'] },
        { label: '判断 vs 感知', values: [scores.J, scores.P], letters: ['J', 'P'] }
    ];
    dimensionPairs.forEach(pair => {
        const dominantIndex = pair.values[0] >= pair.values[1] ? 0 : 1;
        const div = document.createElement('div');
        div.className = 'dimension';
        div.innerHTML = `<div class="dimension-label">${pair.label}</div><div class="dimension-value">${pair.letters[dominantIndex]}</div><div class="dimension-score">${pair.values[dominantIndex]} vs ${pair.values[1 - dominantIndex]}</div>`;
        dimensionsContainer.appendChild(div);
    });
}

function restartTest() {
    resetState();
    document.getElementById('result-screen').classList.add('hidden');
    document.getElementById('test-screen').classList.remove('hidden');
    showQuestion();
}

function goBackToStart() {
    document.getElementById('result-screen').classList.add('hidden');
    document.getElementById('start-screen').classList.remove('hidden');
}

window.onload = function() {
    initPersonalityGrid();
};
