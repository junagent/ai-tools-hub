// js/tools-data.js - AI工具数据库
const TOOLS_DATA = [
    {
        id: "chatgpt",
        name: "ChatGPT",
        icon: "💬",
        tag: "AI对话",
        category: "chat",
        description: "OpenAI开发的知名AI对话助手，支持文字、图片、语音多模态交互，可用于写作、编程、翻译、分析等各类任务。",
        price: "免费 + Plus $20/月",
        rating: 4.8,
        url: "https://chat.openai.com",
        featured: true,
        pros: ["强大的逻辑推理能力", "支持插件扩展", "多模态输入支持", "活跃的开发者社区"],
        cons: ["免费版有使用限制", "偶尔服务器繁忙", "数据隐私存在争议"],
        bestFor: ["内容创作", "编程辅助", "学习研究", "日常问答"],
        alternatives: ["claude", "gemini", "perplexity"]
    },
    {
        id: "claude",
        name: "Claude",
        icon: "🤖",
        tag: "AI对话",
        category: "chat",
        description: "Anthropic公司开发的AI助手，以安全性、可控性和长上下文窗口著称，擅长长文档分析和精确写作。",
        price: "免费 + Pro $20/月",
        rating: 4.7,
        url: "https://claude.ai",
        featured: true,
        pros: ["200K超长上下文", "更安全的输出", "擅长分析和写作", "引用来源可追溯"],
        cons: ["创意写作不如GPT-4", "部分地区访问受限"],
        bestFor: ["长文档分析", "学术研究", "内容审核", "代码审查"],
        alternatives: ["chatgpt", "gemini"]
    },
    {
        id: "midjourney",
        name: "Midjourney",
        icon: "🎨",
        tag: "AI绘画",
        category: "image",
        description: "知名的AI图像生成工具，以高质量、艺术感强的输出著称，广泛应用于创意设计、概念艺术和营销素材制作。",
        price: "$10/月起",
        rating: 4.6,
        url: "https://midjourney.com",
        featured: true,
        pros: ["画质业界顶尖", "艺术风格丰富", "社区活跃", "版本迭代快"],
        cons: ["需要Discord使用", "无免费试用", "付费才能商用"],
        bestFor: ["概念设计", "艺术创作", "广告素材", "游戏美术"],
        alternatives: ["dalle", "stable-diffusion", "leonardo"]
    },
    {
        id: "github-copilot",
        name: "GitHub Copilot",
        icon: "💻",
        tag: "AI编程",
        category: "code",
        description: "GitHub推出的AI编程助手，深度集成VS Code等主流 IDE，提供智能代码补全、生成和重构建议。",
        price: "$10/月（学生免费）",
        rating: 4.5,
        url: "https://github.com/features/copilot",
        featured: true,
        pros: ["IDE深度集成", "支持多种编程语言", "学生免费", "GitHub生态联动"],
        cons: ["需要订阅付费", "偶尔生成有bug的代码", "依赖网络连接"],
        bestFor: ["软件开发", "代码学习", "快速原型", "重构优化"],
        alternatives: ["cursor", "codeium", "tabnine"]
    },
    {
        id: "cursor",
        name: "Cursor",
        icon: "⚡",
        tag: "AI编程",
        category: "code",
        description: "基于VS Code的AI增强代码编辑器，集成了强大的AI对话、代码生成和智能重构功能，被誉为"最懂程序员的AI工具"。",
        price: "免费 + Pro $20/月",
        rating: 4.7,
        url: "https://cursor.sh",
        featured: true,
        pros: ["基于VS Code，易上手", "AI对话式编程", "代码库级上下文理解", "免费版够用"],
        cons: ["需要联网使用AI功能", "部分高级功能需付费"],
        bestFor: ["全栈开发", "代码重构", "学习新技术", "快速迭代"],
        alternatives: ["github-copilot", "codeium"]
    },
    {
        id: "runway-gen3",
        name: "Runway Gen-3",
        icon: "🎬",
        tag: "AI视频",
        category: "video",
        description: "Runway推出的新一代AI视频生成模型，支持文本生成视频、图片转视频、视频风格迁移等功能，画质和连贯性大幅提升。",
        price: "$35/月起",
        rating: 4.4,
        url: "https://runwayml.com",
        featured: true,
        pros: ["画质业界领先", "多种视频AI功能", "风格控制精细", "API可集成"],
        cons: ["价格较高", "生成速度中等", "免费额度有限"],
        bestFor: ["短视频创作", "广告制作", "概念视频", "视觉效果"],
        alternatives: ["pika", "gen-2", "sora"]
    },
    {
        id: "elevenlabs",
        name: "ElevenLabs",
        icon: "🎵",
        tag: "AI音频",
        category: "audio",
        description: "知名的AI语音合成平台，提供高度自然的多语言TTS（文本转语音）和语音克隆功能，广泛应用于有声书、视频配音和虚拟助手。",
        price: "免费 + $11/月起",
        rating: 4.5,
        url: "https://elevenlabs.io",
        featured: false,
        pros: ["语音自然度极高", "支持29+语言", "语音克隆功能强大", "API接入方便"],
        cons: ["付费版才支持商用", "克隆语音需谨慎使用", "免费版额度有限"],
        bestFor: ["视频配音", "有声书制作", "虚拟主播", "客服语音"],
        alternatives: ["azure-tts", "google-tts", "amazon-polly"]
    },
    {
        id: "jasper",
        name: "Jasper AI",
        icon: "✍️",
        tag: "AI写作",
        category: "writing",
        description: "面向企业和营销团队的AI写作工具，擅长生成广告文案、博客文章、社交媒体内容和邮件营销文案，支持Brand Voice定制。",
        price: "$49/月起",
        rating: 4.2,
        url: "https://jasper.ai",
        featured: false,
        pros: ["营销模板丰富", "支持Brand Voice", "多语言输出", "团队协作功能"],
        cons: ["价格较高", "创意写作不如GPT-4", "学习曲线存在"],
        bestFor: ["营销文案", "企业博客", "社交媒体", "邮件营销"],
        alternatives: ["copyai", "writesonic", "chatgpt"]
    },
    {
        id: "semrush-ai",
        name: "Semrush AI Writing Assistant",
        icon: "📈",
        tag: "营销工具",
        category: "marketing",
        description: "Semrush推出的AI写作助手，集成SEO优化建议，帮助创作符合搜索引擎排名要求的高质量内容，适合内容营销和SEO团队。",
        price: "包含在Semrush订阅中（$129.95/月）",
        rating: 4.1,
        url: "https://semrush.com",
        featured: false,
        pros: ["深度SEO集成", "实时优化建议", "关键词研究联动", "内容评分系统"],
        cons: ["Semrush订阅价格高", "适合SEO专业人士", "学习成本较高"],
        bestFor: ["SEO内容创作", "博客优化", "竞品分析", "关键词策略"],
        alternatives: ["surfer-seo", "clearscope", "fasewriter"]
    },
    {
        id: "leonardo",
        name: "Leonardo.Ai",
        icon: "🖼️",
        tag: "AI绘画",
        category: "image",
        description: "新兴的AI图像生成平台，提供丰富的模型选择、精细的编辑工具和友好的免费额度，适合个人创作者和小型团队。",
        price: "免费 + $10/月起",
        rating: 4.3,
        url: "https://leonardo.ai",
        featured: false,
        pros: ["免费额度 generous", "模型选择丰富", "编辑工具强大", "社区画廊可参考"],
        cons: ["画质略逊于Midjourney", "界面相对复杂", "高级功能需付费"],
        bestFor: ["概念设计", "游戏美术", "社交媒体配图", "个人创作"],
        alternatives: ["midjourney", "stable-diffusion", "dalle"]
    },
    {
        id: "perplexity",
        name: "Perplexity AI",
        icon: "🔍",
        tag: "AI搜索",
        category: "chat",
        description: "AI驱动的搜索引擎，结合大模型对话能力和实时网络搜索，提供带引用的准确答案，是传统搜索引擎的AI升级版。",
        price: "免费 + Pro $20/月",
        rating: 4.4,
        url: "https://perplexity.ai",
        featured: false,
        pros: ["答案带引用来源", "实时网络信息", "界面简洁易用", "支持追问式搜索"],
        cons: ["深度研究能力有限", "部分高级功能需付费", "中文内容覆盖较少"],
        bestFor: ["快速调研", "事实核查", "学习新领域", "替代搜索引擎"],
        alternatives: ["chatgpt", "gemini", "you-com"]
    },
    // ========== 新增工具 2026-05-20 ==========
    {
        id: "gemini",
        name: "Google Gemini",
        icon: "💎",
        tag: "AI对话",
        category: "chat",
        description: "谷歌推出的多模态AI助手，深度集成Google搜索和Google Workspace，支持文本、图片、音频、视频多模态输入，Gemini 2.0 Flash响应速度极快。",
        price: "免费 + Advanced $19.99/月",
        rating: 4.6,
        url: "https://gemini.google.com",
        featured: true,
        pros: ["与Google生态深度集成", "响应速度极快", "支持超长上下文", "多模态能力强"],
        cons: ["对话深度不如Claude", "中文理解略逊", "Advanced版价格较高"],
        bestFor: ["Google生态用户", "快速问答", "多模态分析", "学生学习"],
        alternatives: ["chatgpt", "claude", "perplexity"]
    },
    {
        id: "copilot-microsoft",
        name: "Microsoft Copilot",
        icon: "🪟",
        tag: "AI对话",
        category: "chat",
        description: "微软基于OpenAI模型打造的AI助手，深度集成Windows、Office、Edge浏览器，支持联网搜索和图片生成（DALL-E 3），个人和企业用户均可使用。",
        price: "免费 + Pro $20/月",
        rating: 4.4,
        url: "https://copilot.microsoft.com",
        featured: false,
        pros: ["深度集成Windows/Office", "支持DALL-E 3图片生成", "联网搜索能力强", "企业版安全可靠"],
        cons: ["对话质量略逊于ChatGPT", "需要微软账号", "Pro版性价比一般"],
        bestFor: ["Windows用户", "Office办公", "企业应用", "日常辅助"],
        alternatives: ["chatgpt", "gemini", "claude"]
    },
    {
        id: "ideogram-v2",
        name: "Ideogram v2",
        icon: "🖼️",
        tag: "AI绘画",
        category: "image",
        description: "专注于文字渲染的AI图像生成工具，v2版本在画质和文字准确性上大幅提升，是唯一能稳定生成准确文字的AI绘画工具，适合海报、Logo设计场景。",
        price: "免费 + $20/月",
        rating: 4.5,
        url: "https://ideogram.ai",
        featured: true,
        pros: ["文字渲染业界最强", "画质提升明显", "操作简单", "免费额度充足"],
        cons: ["艺术风格略逊Midjourney", "高级功能需付费", "社区功能较少"],
        bestFor: ["海报设计", "Logo概念", "带文字的图片", "社交媒体图"],
        alternatives: ["midjourney", "dalle", "leonardo"]
    },
    {
        id: "adobe-firefly",
        name: "Adobe Firefly",
        icon: "🔥",
        tag: "AI绘画",
        category: "image",
        description: "Adobe推出的商用安全AI图像处理套件，深度集成Photoshop、Illustrator等Creative Cloud软件，所有生成内容可商用，无版权风险。",
        price: "免费 + $4.99/月起",
        rating: 4.3,
        url: "https://www.adobe.com/products/firefly.html",
        featured: false,
        pros: ["100%商用安全", "深度集成Adobe生态", "与工作流无缝衔接", "版权清晰"],
        cons: ["需Adobe账号", "独立版功能有限", "画质略逊独立AI工具"],
        bestFor: ["商业设计", "Adobe用户", "需要商用的场景", "专业修图"],
        alternatives: ["midjourney", "ideogram-v2", "leonardo"]
    },
    {
        id: "stable-diffusion-xl",
        name: "Stable Diffusion XL",
        icon: "🎨",
        tag: "AI绘画",
        category: "image",
        description: "Stability AI推出的开源AI绘画模型，SDXL在画质和提示词理解上大幅提升。支持本地部署，完全免费，无版权限制，是技术用户和需要完全控制权的创作者的首选。",
        price: "免费（本地部署）",
        rating: 4.4,
        url: "https://stability.ai",
        featured: false,
        pros: ["完全免费开源", "可本地部署", "无版权限制", "社区插件丰富"],
        cons: ["需要一定技术门槛", "部署硬件要求高", "出图需调参"],
        bestFor: ["技术用户", "需要完全控制权", "批量生成", "研究学习"],
        alternatives: ["midjourney", "leonardo", "ideogram-v2"]
    },
    {
        id: "sora",
        name: "OpenAI Sora",
        icon: "🎬",
        tag: "AI视频",
        category: "video",
        description: "OpenAI推出的文本生成视频模型，支持最长60秒高质量视频生成，物理模拟和世界模型能力强，画面连贯性和真实感处于行业顶尖水平。仅限ChatGPT Plus/Pro用户使用。",
        price: "ChatGPT Plus $20/月含",
        rating: 4.7,
        url: "https://openai.com/sora",
        featured: true,
        pros: ["最长60秒生成", "画质业界顶尖", "世界模型能力强", "支持中文提示词"],
        cons: ["仅限Plus/Pro用户", "排队时间较长", "编辑功能较弱"],
        bestFor: ["概念视频", "创意短片", "广告创意", "视觉实验"],
        alternatives: ["runway-gen3", "pika", "kling"]
    },
    {
        id: "kling",
        name: "可灵AI (Kling)",
        icon: "🇨🇳",
        tag: "AI视频",
        category: "video",
        description: "快手推出的AI视频生成模型，支持文生视频和图生视频，对中文提示词理解优秀，免费额度 generous，是国内用户最友好的AI视频工具之一。",
        price: "免费 + ¥60/月起",
        rating: 4.5,
        url: "https://kling.ai",
        featured: true,
        pros: ["原生中文支持", "免费额度多", "国内访问快", "图生视频效果好"],
        cons: ["最长10秒限制", "画质略逊Sora", "海外知名度较低"],
        bestFor: ["中文创作者", "短视频制作", "国内用户", "图生视频"],
        alternatives: ["runway-gen3", "sora", "pika"]
    },
    {
        id: "pika",
        name: "Pika Labs",
        icon: "⚡",
        tag: "AI视频",
        category: "video",
        description: "新兴AI视频生成工具，支持文生视频、图生视频、视频局部编辑（Inpainting），操作简便，社区活跃，适合快速制作短视频素材和创意实验。",
        price: "免费 + $10/月",
        rating: 4.2,
        url: "https://pika.art",
        featured: false,
        pros: ["免费版可用", "视频编辑功能独特", "操作简单", "社区活跃"],
        cons: ["视频时长较短", "画质不如顶级工具", "生成速度中等"],
        bestFor: ["短视频素材", "视频局部编辑", "创意实验", "社交媒体内容"],
        alternatives: ["runway-gen3", "sora", "kling"]
    },
    {
        id: "sunoo",
        name: "Suno AI",
        icon: "🎵",
        tag: "AI音乐",
        category: "audio",
        description: "领先的AI音乐生成工具，支持通过文字描述生成完整歌曲（含旋律、编曲、人声），支持多种风格和语言，是制作背景音乐和创意歌曲的强大工具。",
        price: "免费 + $10/月",
        rating: 4.6,
        url: "https://suno.com",
        featured: true,
        pros: ["生成完整歌曲", "多种音乐风格", "支持中文歌词", "旋律质量高"],
        cons: ["免费版有水印", "人声偶尔不清晰", "高级编辑功能有限"],
        bestFor: ["背景音乐制作", "创意歌曲", "自媒体配乐", "音乐实验"],
        alternatives: ["udio", "elevenlabs"]
    },
    {
        id: "murf-ai",
        name: "Murf AI",
        icon: "🎙️",
        tag: "AI配音",
        category: "audio",
        description: "专业级AI语音合成和配音工具，提供120+语言和口音，支持情感调节、语速控制、停顿编辑，广泛应用于企业培训、有声书、视频配音等商业场景。",
        price: "$19/月起",
        rating: 4.3,
        url: "https://murf.ai",
        featured: false,
        pros: ["120+语言口音", "情感调节精细", "商业授权清晰", "视频时间轴同步"],
        cons: ["免费版功能有限", "价格较高", "中文情感不如英文自然"],
        bestFor: ["企业培训视频", "有声书配音", "广告配音", "多语言内容"],
        alternatives: ["elevenlabs", "azure-tts", "google-tts"]
    },
  {
        id: "notion-ai",
        name: "Notion AI",
        icon: "📝",
        tag: "效率工具",
        category: "productivity",
        description: "Notion集成的AI助手，可在笔记、文档、知识库中直接调用AI进行写作、总结、翻译和问答，无缝融入工作流，是知识管理和内容创作的得力助手。",
        price: "$10/月（加Notion订阅）",
        rating: 4.3,
        url: "https://notion.so",
        featured: false,
        pros: ["与Notion深度集成", "支持多种AI任务", "上下文理解强", "团队协作友好"],
        cons: ["需要Notion付费版", "AI功能需额外付费", "大文档处理慢"],
        bestFor: ["知识管理", "团队协作文档", "会议纪要", "内容规划"],
        alternatives: ["mem", "reflect", "logseq"]
    },
    {
        id: "canva-ai",
        name: "Canva AI (Magic Studio)",
        icon: "🎨",
        tag: "设计工具",
        category: "productivity",
        description: "Canva集成的AI设计套件（Magic Studio），包含AI图片生成、智能抠图、一键翻译、Magic Resize等功能，让非设计师也能快速制作专业级设计。",
        price: "免费 + Pro ¥59/月",
        rating: 4.5,
        url: "https://www.canva.com",
        featured: true,
        pros: ["模板库极丰富", "AI功能覆盖全面", "操作简单易上手", "支持中文"],
        cons: ["Pro版价格较高", "高级AI功能需付费", "印刷质量有限"],
        bestFor: ["社交媒体图", "演示文稿", "海报传单", "快速设计"],
        alternatives: ["adobe-firefly", "leonardo", "midjourney"]
    },
    {
        id: "semrush-ai-writing",
        name: "Semrush SEO Writing Assistant",
        icon: "📈",
        tag: "营销工具",
        category: "marketing",
        description: "Semrush推出的AI写作助手，集成SEO优化建议，帮助创作符合搜索引擎排名要求的高质量内容，实时内容评分系统帮助用户持续优化，是内容营销和SEO团队的利器。",
        price: "包含在Semrush订阅中（$139.95/月）",
        rating: 4.1,
        url: "https://semrush.com",
        featured: false,
        pros: ["深度SEO集成", "实时优化建议", "关键词研究联动", "内容评分系统"],
        cons: ["Semrush订阅价格高", "适合SEO专业人士", "学习成本较高"],
        bestFor: ["SEO内容创作", "博客优化", "竞品分析", "关键词策略"],
        alternatives: ["surfer-seo", "clearscope", "jasper"]
    },
    {
        id: "hubspot-ai",
        name: "HubSpot AI",
        icon: "🤝",
        tag: "营销工具",
        category: "marketing",
        description: "HubSpot CRM集成的AI营销助手，覆盖邮件营销、内容创作、客户分析、聊天机器人等全链路营销场景，帮助企业提升营销效率和客户转化率。",
        price: "免费版 + 付费版按需",
        rating: 4.2,
        url: "https://hubspot.com",
        featured: false,
        pros: ["与CRM深度集成", "覆盖全营销链路", "免费版功能丰富", "数据驱动决策"],
        cons: ["高级功能价格高", "学习曲线较陡", "适合有一定规模的企业"],
        bestFor: ["邮件营销", "客户管理", "内容营销", "销售自动化"],
        alternatives: ["jasper", "semrush-ai-writing", "copyai"]
    },
    {
        id: "replit-ai",
        name: "Replit AI",
        icon: "🌐",
        tag: "AI编程",
        category: "code",
        description: "在线IDE Replit集成的AI编程助手，支持自然语言描述生成完整应用，内置部署功能，是零基础用户学习编程和快速原型开发的最佳平台。",
        price: "免费 + Core $20/月",
        rating: 4.6,
        url: "https://replit.com",
        featured: true,
        pros: ["零基础可上手", "自然语言生成应用", "内置部署托管", "协作功能强大"],
        cons: ["免费版运行时间有限", "复杂项目需付费", "服务器在国外"],
        bestFor: ["快速原型", "学习编程", "全栈项目", "团队协作"],
        alternatives: ["cursor", "github-copilot", "codeium"]
    }
];

// 博客文章数据
const BLOG_POSTS = [
    {
        id: "free-ai-tools-2026",
        title: "2026年最值得使用的免费AI工具大全（实测推荐）",
        date: "2026-05-20",
        summary: "精选16款真正免费好用的AI工具，覆盖对话、绘画、编程、写作、视频、音频六大领域，零成本提升工作效率。",
        category: "资源汇总",
        tags: ["免费AI工具", "ChatGPT", "AI绘画", "AI编程"],
        image: "💎"
    },
    {
        id: "ai-video-tools-guide",
        title: "2026年AI视频生成工具完全指南：Runway、Sora、Pika谁更强？",
        date: "2026-05-20",
        summary: "全面评测Runway Gen-3、Sora、可灵AI、Pika等主流AI视频工具，从画质、价格、中文支持多维度对比。",
        category: "选购指南",
        tags: ["AI视频", "Runway", "Sora", "可灵AI"],
        image: "🎬"
    },
    {
        id: "ai-beginners-guide",
        title: "AI初学者完全入门指南：从零开始掌握AI工具",
        date: "2026-05-20",
        summary: "零基础AI入门教程，从注册到提示词技巧，手把手教你掌握ChatGPT、AI绘画等主流工具。",
        category: "入门教程",
        tags: ["AI入门", "ChatGPT教程", "新手指南"],
        image: "🚀"
    },
    {
        id: "chatgpt-vs-claude-2026",
        title: "ChatGPT vs Claude 2026：哪个AI对话助手更适合你？",
        date: "2026-05-19",
        summary: "深度对比ChatGPT和Claude在推理、写作、编程、价格等方面的表现，帮你选出最适合的AI助手。",
        category: "评测对比",
        tags: ["ChatGPT", "Claude", "AI对话"],
        image: "📊"
    },
    {
        id: "ai-image-tools-guide",
        title: "2026年最佳AI绘画工具完全指南",
        date: "2026-05-17",
        summary: "从Midjourney到Leonardo，全面评测12款AI绘画工具，涵盖画质、价格、易用性等多维度对比。",
        category: "选购指南",
        tags: ["AI绘画", "Midjourney", "Stable Diffusion"],
        image: "🎨"
    },
    {
        id: "ai-coding-tools-comparison",
        title: "AI编程工具横评：Copilot、Cursor、Codeium谁更强？",
        date: "2026-05-15",
        summary: "实测对比三款主流AI编程助手，从代码质量、IDE集成、价格等角度给出选购建议。",
        category: "工具评测",
        tags: ["AI编程", "GitHub Copilot", "Cursor"],
        image: "💻"
    },
    {
        id: "ai-tools-for-marketers",
        title: "营销人必备：10款提升ROI的AI工具",
        date: "2026-05-18",
        summary: "精选10款适合营销团队的AI工具，覆盖内容创作、SEO优化、数据分析、广告投放等核心场景。",
        category: "应用场景",
        tags: ["营销AI", "内容创作", "SEO"],
        image: "📈"
    },
    {
        id: "ai-writing-tools-comparison-2026",
        title: "2026年最佳AI写作工具对比：Jasper vs Copy.ai vs Notion AI",
        date: "2026-05-20",
        summary: "深度对比三款顶级AI写作工具，从功能、价格、适用场景全面评测，帮你选出最合适的AI写作助手。",
        category: "评测对比",
        tags: ["AI写作", "Jasper", "Copy.ai", "Notion AI"],
        image: "✍️"
    },
    {
        id: "make-money-with-ai-tools",
        title: "如何用AI工具每月多挣5000元：10个实战变现方法",
        date: "2026-05-20",
        summary: "分享10个用AI工具赚钱的真实方法，包括AI写作接单、AI绘图变现、AI视频制作等，附详细操作步骤和收入预期。",
        category: "实战指南",
        tags: ["AI变现", "副业", "赚钱"],
        image: "💰"
    },
    {
        id: "midjourney-v7-complete-guide",
        title: "Midjourney v7完全使用指南：从入门到精通",
        date: "2026-05-20",
        summary: "详细讲解Midjourney v7的使用方法，包括Prompt技巧、参数设置、风格控制和商业应用，配合大量实例帮你快速上手AI绘图。",
        category: "使用教程",
        tags: ["Midjourney", "AI绘画", "Prompt技巧"],
        image: "🎨"
    },
    {
        id: "top-10-ai-productivity-tools-2026",
        title: "2026年AI效率工具Top 10：让你工作效率翻倍",
        date: "2026-05-20",
        summary: "精选2026年提升工作效率最显著的10款AI工具，涵盖会议记录、邮件管理、项目协作、文档处理等场景。",
        category: "工具推荐",
        tags: ["效率工具", "AI助手", "生产力"],
        image: "⚡"
    },
    {
        id: "elevenlabs-vs-murf-ai-voice-comparison",
        title: "AI语音克隆技术2026：ElevenLabs vs Murf.ai全面对比",
        date: "2026-05-20",
        summary: "深度对比ElevenLabs和Murf.ai两款顶级AI语音工具，分析音质、语言支持、克隆效果、定价和使用场景。",
        category: "评测对比",
        tags: ["AI语音", "ElevenLabs", "Murf.ai", "语音克隆"],
        image: "🎙️"
    },
    {
        id: "best-ai-tools-2026",
        title: "2026年最值得使用的AI工具Top 30完整榜单",
        date: "2026-05-24",
        summary: "2026年最全面的AI工具排行榜，涵盖对话、写作、绘画、编程、视频、效率30个顶级AI工具，附详细评分和使用场景推荐。",
        category: "年度榜单",
        tags: ["AI工具榜单", "最佳AI工具", "2026推荐"],
        image: "🏆"
    },
    {
        id: "ai-tools-for-students",
        title: "学生必备AI工具大全：提升学习效率的10款神器",
        date: "2026-05-24",
        summary: "精选10款学生必备AI工具，覆盖论文写作、数学解题、语言学习、阅读理解全场景，免费工具为主，附详细使用技巧。",
        category: "学习指南",
        tags: ["学生AI工具", "学习效率", "ChatGPT学习"],
        image: "🎓"
    },
    {
        id: "chatgpt-prompts-guide",
        title: "ChatGPT提示词完全指南：100个高效Prompt模板",
        date: "2026-05-24",
        summary: "收录100个经过验证的ChatGPT提示词模板，覆盖写作、编程、分析、创意等场景，从入门到高级技巧全面讲解。",
        category: "使用技巧",
        tags: ["ChatGPT提示词", "Prompt技巧", "AI使用技巧"],
        image: "💡"
    }
];

// 分类数据（count 由 JS 动态计算）
const CATEGORIES_BASE = {
    writing: { name: "AI写作", icon: "✍️" },
    image: { name: "AI绘画", icon: "🎨" },
    video: { name: "AI视频", icon: "🎬" },
    code: { name: "AI编程", icon: "💻" },
    chat: { name: "AI对话", icon: "💬" },
    audio: { name: "AI音频", icon: "🎵" },
    productivity: { name: "效率工具", icon: "⚡" },
    marketing: { name: "营销工具", icon: "📈" }
};
// 动态计算每个分类的工具数量
const CATEGORIES = {};
Object.entries(CATEGORIES_BASE).forEach(([key, val]) => {
    CATEGORIES[key] = { ...val, count: TOOLS_DATA.filter(t => t.category === key).length };
});

// 工具 FAQ 数据
const TOOLS_FAQ = {
    "chatgpt": [
        { q: "ChatGPT免费版够用吗？", a: "免费版可访问GPT-4o mini，支持基本对话、写作和问答，日常使用完全够用。Plus版（$20/月）可用GPT-4o，速度更快，有更多高级功能如联网搜索、图像生成和代码执行。" },
        { q: "ChatGPT支持中文吗？", a: "是的，ChatGPT对中文支持非常好，可以用中文提问并获得流利的中文回答，也支持中英文混合对话。" },
        { q: "ChatGPT能联网搜索实时信息吗？", a: "ChatGPT Plus用户可以使用联网搜索功能获取实时信息。免费版的训练数据有截止日期，无法获取最新信息。" }
    ],
    "claude": [
        { q: "Claude和ChatGPT哪个更好？", a: "各有所长：Claude在长文档分析、严谨写作和代码理解方面表现出色；ChatGPT在多模态（图片/语音）支持、插件生态和创意写作方面更强。两者免费版均可使用，建议根据具体场景选择。" },
        { q: "Claude的上下文窗口有多大？", a: "Claude 3系列支持高达200K token的上下文窗口，可以一次性处理约15万字的长文档，远超大多数竞品，非常适合阅读分析长篇报告和代码库。" },
        { q: "Claude是否有中文版？", a: "Claude没有独立的中文版，但支持中文对话，可以直接用中文提问并获得高质量的中文回答。" }
    ],
    "midjourney": [
        { q: "Midjourney需要付费才能使用吗？", a: "是的，Midjourney目前没有永久免费计划，最低套餐约$10/月（200张图）。新用户可能有短暂的免费试用额度。" },
        { q: "Midjourney生成的图片可以商用吗？", a: "付费用户生成的图片可以商业使用，但归属权问题较复杂。企业版（$60/月）用户拥有完整版权。具体条款请查阅官方服务协议。" },
        { q: "Midjourney怎么用？需要Discord吗？", a: "目前Midjourney已上线独立网站（midjourney.com），可以直接在网页操作，无需再通过Discord。直接注册账号即可开始生成图片。" }
    ],
    "github-copilot": [
        { q: "GitHub Copilot支持哪些编程语言？", a: "GitHub Copilot支持几乎所有主流编程语言，包括Python、JavaScript、TypeScript、Java、C#、C++、Go、Ruby、PHP等，在Python和JavaScript上表现最为出色。" },
        { q: "学生可以免费使用GitHub Copilot吗？", a: "是的！通过GitHub Education验证的在校学生可以免费使用GitHub Copilot Individual版本，申请地址：education.github.com。" },
        { q: "GitHub Copilot和Cursor有什么区别？", a: "GitHub Copilot是IDE插件，集成在现有编辑器（VS Code/JetBrains等）中；Cursor是基于VS Code的独立编辑器，AI能力更深度集成，支持跨文件对话和整个代码库的理解。" }
    ],
    "cursor": [
        { q: "Cursor和VS Code有什么关系？", a: "Cursor是基于VS Code构建的独立编辑器，界面和快捷键与VS Code完全相同，支持所有VS Code扩展，但内置了更强大的AI功能，如代码库级别的上下文理解和AI对话。" },
        { q: "Cursor免费版有什么限制？", a: "免费版每月有2000次代码补全和50次高级AI请求（使用GPT-4/Claude）。对于轻度用户完全够用，重度使用建议升级Pro（$20/月）。" },
        { q: "Cursor可以用于移动开发吗？", a: "可以。Cursor支持React Native、Flutter、Swift、Kotlin等移动开发技术栈，AI能力对移动开发场景同样有效。" }
    ],
    "runway-gen3": [
        { q: "Runway Gen-3可以生成多长的视频？", a: "Runway Gen-3 Alpha支持生成5秒或10秒的视频片段，可通过延伸功能拼接成更长的视频。相比前代，Gen-3在物理一致性和运动流畅度上有显著提升。" },
        { q: "Runway的免费额度够用吗？", a: "免费版每月提供125个credits，可生成约12-25个视频片段，够用于尝鲜和轻度使用。专业用途建议订阅Standard（$15/月）或Pro（$35/月）。" },
        { q: "Runway和Sora相比哪个更好？", a: "各有优势：Sora在视觉质量和物理模拟上更强，但仅限ChatGPT Plus/Pro用户；Runway更易上手，功能更全面（含视频编辑工具），且免费版可用。" }
    ],
    "notion-ai": [
        { q: "Notion AI是单独订阅还是包含在Notion中？", a: "Notion AI需要额外订阅，费用约$8-10/成员/月（叠加在Notion订阅之上）。Notion免费版用户可免费体验有限次数的AI功能。" },
        { q: "Notion AI能做什么？", a: "Notion AI可以帮助写作和改写文档、总结会议记录、将要点扩写成完整文章、翻译内容、生成行动项，以及基于你的Notion知识库回答问题（Q&A功能）。" },
        { q: "Notion AI和直接用ChatGPT有什么区别？", a: "Notion AI的核心优势是无缝集成——可以直接在笔记中调用，能访问你的Notion知识库内容。ChatGPT功能更强大，但需要单独切换工具，适合独立的复杂任务。" }
    ],
    "elevenlabs": [
        { q: "ElevenLabs可以克隆自己的声音吗？", a: "可以。ElevenLabs提供声音克隆功能，上传1分钟以上的清晰录音即可克隆，付费版克隆效果更接近原声。免费版也提供基础克隆功能。" },
        { q: "ElevenLabs生成的语音可以商用吗？", a: "付费版（Starter $11/月及以上）生成的语音可商业使用。免费版仅供个人非商业用途。" },
        { q: "ElevenLabs支持中文吗？", a: "支持中文，且中文语音效果较好。支持普通话，可以生成自然流畅的中文配音，适合视频配音和播客制作。" }
    ],
    "jasper": [
        { q: "Jasper AI适合中文内容创作吗？", a: "Jasper主要针对英文内容优化，虽然支持中文，但中文输出质量不如英文。如果主要创作中文内容，可以考虑其他更专注中文的写作工具。" },
        { q: "Jasper AI有免费试用吗？", a: "Jasper提供7天免费试用，无需信用卡。正式订阅从$49/月起（Creator方案），包含无限字数和一个用户座位。" },
        { q: "Jasper的Brand Voice功能是什么？", a: "Brand Voice是Jasper的核心功能之一，可以上传品牌文档、风格指南，让AI学习并始终保持一致的品牌语调，适合需要统一内容风格的企业和团队。" }
    ],
    "perplexity": [
        { q: "Perplexity和Google搜索的区别是什么？", a: "Perplexity以对话形式提供答案，会综合多个来源给出摘要，并标注引用来源，而不是列出网页链接。更适合获取信息概述，而非精确查找特定网页。" },
        { q: "Perplexity的答案可信吗？", a: "Perplexity会在答案中显示参考来源，透明度较高。但AI摘要可能存在误差，对于重要信息建议点击原始来源核实。Pro版使用更强大的模型，准确性更高。" },
        { q: "Perplexity免费版够用吗？", a: "免费版提供基本搜索功能，每天有有限次数的高级搜索（使用GPT-4等强模型）。日常信息查询完全够用，如需大量研究使用，可考虑Pro版（$20/月）。" }
    ],
    "gemini": [
        { q: "Gemini和Google搜索有什么关系？", a: "Gemini深度整合了Google搜索能力，可以访问实时网络信息。在Google Workspace中，Gemini可直接读写Gmail、Google Docs、Sheets等文件，是深度Google生态用户的最佳AI助手。" },
        { q: "Gemini 2.0 Flash有多快？", a: "Gemini 2.0 Flash是目前最快的顶级AI模型之一，响应速度比GPT-4o快约2-3倍，非常适合需要快速响应的场景，免费版即可使用。" },
        { q: "Gemini能替代ChatGPT吗？", a: "对于Google生态用户，Gemini是非常好的选择甚至更优；对于代码生成和插件扩展需求，ChatGPT目前生态更成熟。建议两者配合使用。" }
    ],
    "copilot-microsoft": [
        { q: "Microsoft Copilot是免费的吗？", a: "是的，Microsoft Copilot有免费版本，集成在Edge浏览器、Windows 11和Bing中，支持联网搜索和DALL-E图片生成。Pro版（$20/月）提供更快的响应和更多功能。" },
        { q: "Copilot和ChatGPT有什么区别？", a: "Microsoft Copilot是微软基于OpenAI模型（GPT-4）构建的，特点是深度集成Windows和Office，免费版就可联网搜索，界面更适合办公场景。ChatGPT是OpenAI官方产品，API生态更丰富。" },
        { q: "Office中的Copilot和Microsoft Copilot是同一个东西吗？", a: "不完全是。Microsoft Copilot（免费）集成在Windows/Edge/Bing中。Microsoft 365 Copilot（企业版，$30/人/月）集成在Word、Excel、PowerPoint等Office应用中，功能更强大。" }
    ],
    "ideogram-v2": [
        { q: "Ideogram v2在文字生成方面比其他AI好在哪里？", a: "Ideogram v2是目前文字渲染最准确的AI绘画工具，能够稳定生成拼写正确、排版美观的英文文字。其他AI工具（如Midjourney、SDXL）在文字生成方面经常出现拼写错误。" },
        { q: "Ideogram可以生成中文文字吗？", a: "Ideogram v2对中文支持有限，偶尔可以生成简单的中文字符，但稳定性不如英文。如需大量中文文字设计，建议用AI生成图像后在PS等软件中添加文字。" },
        { q: "Ideogram免费版每天能生成多少张图？", a: "免费版每天提供约10次高质量生成机会（使用Ideogram 2.0模型）和无限量的低速生成。对于轻度使用完全够用。" }
    ],
    "adobe-firefly": [
        { q: "Adobe Firefly生成的图片可以免费商用吗？", a: "是的，这是Firefly最大的优势之一。Firefly只使用Adobe Stock等合法授权内容训练，生成内容标有'Content Credentials'标签，可安全商业使用，无版权风险。" },
        { q: "不订阅Creative Cloud可以用Adobe Firefly吗？", a: "可以。firefly.adobe.com提供独立访问，免费版每月25个生成积分。购买Firefly Premium（$4.99/月）可获得更多积分，不需要完整CC订阅。" },
        { q: "Adobe Firefly和Photoshop AI有什么关系？", a: "Photoshop中的'创成式填充'、'创成式扩展'等AI功能都是由Adobe Firefly驱动的，两者使用相同的模型。通过firefly.adobe.com可以独立使用这些功能。" }
    ],
    "stable-diffusion-xl": [
        { q: "运行Stable Diffusion XL需要什么配置？", a: "SDXL对硬件要求较高，推荐NVIDIA GPU 8GB+显存（RTX 3070及以上）。16GB显存可以流畅运行。也可使用ComfyUI的CPU模式，但速度较慢。云端方案可用Google Colab免费体验。" },
        { q: "Stable Diffusion XL生成的图片有版权吗？", a: "作为开源模型，SDXL生成的图片版权归属较为清晰——你拥有自己生成的图片，可以商业使用，但需遵守CreativeML OpenRAIL+M许可证中关于不得用于非法内容的条款。" },
        { q: "SDXL和Midjourney哪个图质更好？", a: "通过精心调参，SDXL可以生成与Midjourney媲美的高质量图片，且完全免费和可本地化。但入门门槛更高，需要学习提示词和参数。Midjourney开箱即用体验更好。" }
    ],
    "sora": [
        { q: "如何使用OpenAI Sora？", a: "Sora目前已向ChatGPT Plus（$20/月）和Pro（$200/月）用户开放，登录chat.openai.com后可在左侧菜单找到Sora入口。Plus用户有使用量限制，Pro用户可无限使用。" },
        { q: "Sora能生成多长的视频？", a: "Sora目前支持生成最长20秒（Plus用户）到60秒（Pro用户）的视频，分辨率最高1080p。支持多种宽高比，包括16:9、9:16竖屏和1:1方形。" },
        { q: "Sora生成的视频质量如何？", a: "Sora是目前业界最高水平之一，在物理模拟真实感和场景连贯性上尤为出色。但偶有细节错误（如手指、文字），且生成时间较长（数分钟）。" }
    ],
    "kling": [
        { q: "可灵AI是免费的吗？", a: "可灵AI提供免费额度，每天赠送灵感值（约可生成2-3个视频），充值后可生成更多。会员套餐从¥60/月起，性价比较高，是目前国内最易上手的AI视频工具之一。" },
        { q: "可灵AI可以生成多长的视频？", a: "可灵AI支持生成5秒和10秒的视频，支持文生视频和图生视频，画面分辨率最高1080p，可以在应用内直接拼接成更长的视频序列。" },
        { q: "可灵AI适合中文提示词吗？", a: "非常适合！可灵AI对中文提示词的理解明显优于Runway、Sora等国外工具，是国内用户的首选。可以用日常自然的中文描述来生成视频，无需翻译。" }
    ],
    "pika": [
        { q: "Pika Labs免费版每月可以生成多少视频？", a: "Pika免费版每月提供约150个积分，可生成约20-30个视频片段。付费版（$8/月起）提供更多积分和更长的视频长度。" },
        { q: "Pika的视频编辑功能有哪些？", a: "Pika支持Inpainting（局部修改视频内容）、视频扩展（延长时长）、字幕生成、画幅调整等功能，在生成后编辑方面比Runway更简单易用。" },
        { q: "Pika适合做什么类型的视频？", a: "Pika特别适合制作短视频素材、产品展示视频、社交媒体内容和创意短片。对于需要精确控制镜头的专业视频制作，Runway可能更合适。" }
    ],
    "sunoo": [
        { q: "Suno AI生成的音乐可以商用吗？", a: "Pro用户（$10/月）生成的音乐可以商业使用，版权归用户所有。免费版生成的音乐仅供个人非商业用途，且由Suno保留版权。" },
        { q: "Suno AI能生成中文歌曲吗？", a: "可以。在歌词中写入中文，Suno可以生成普通话演唱的歌曲，效果不错。也支持中英混合歌词，是制作中文背景音乐的有效工具。" },
        { q: "Suno AI免费版每天能生成多少首歌？", a: "免费版每天提供50个积分，每首歌消耗10积分，即每天可免费生成约5首歌（每首有两个版本可选）。" }
    ],
    "murf-ai": [
        { q: "Murf AI支持中文语音合成吗？", a: "Murf AI目前主要支持英语、西班牙语、法语等语言，中文支持有限。如需高质量中文TTS，可考虑ElevenLabs（支持中文）或微软Azure TTS。" },
        { q: "Murf AI的声音听起来自然吗？", a: "Murf AI的语音质量在商业TTS工具中属于顶级水平，特别是英语发音非常自然，支持情感调节、停顿编辑，很多用户反映难以与真人声音区分。" },
        { q: "Murf AI和ElevenLabs哪个更好？", a: "ElevenLabs在情感表达和声音克隆方面更强，语音更有感情色彩；Murf AI在商业配音场景更专业，有丰富的配乐库和视频时间轴编辑功能，适合企业培训视频制作。" }
    ],
    "canva-ai": [
        { q: "Canva AI的Magic Studio需要付费吗？", a: "部分AI功能免费可用（如AI图片生成有有限次数），但Magic Expand、Background Remover等高级功能需要Canva Pro（约¥59/月）。教育账户和非营利组织可免费使用Pro。" },
        { q: "Canva AI生成的设计可以商用吗？", a: "是的，使用Canva Pro素材和AI生成内容制作的设计可商业使用，但需遵守Canva的内容许可协议。某些免费素材可能有商用限制，下载前注意查看授权说明。" },
        { q: "Canva AI适合没有设计经验的人吗？", a: "非常适合！Canva AI是专为非设计师设计的，通过AI辅助+模板，即使没有设计基础也能快速制作专业水平的海报、PPT、社交媒体图文等。" }
    ],
    "semrush-ai": [
        { q: "Semrush AI写作助手对SEO有什么帮助？", a: "Semrush AI可以实时分析文章SEO分数，给出关键词密度、标题结构、内容长度等优化建议，并对比竞争对手文章，帮助创作更容易在Google排名靠前的内容。" },
        { q: "Semrush AI需要单独订阅吗？", a: "Semrush AI Writing Assistant包含在Semrush Pro（$129.95/月）及以上套餐中，也可以单独购买内容营销平台（约$200/月起）。有7天免费试用。" },
        { q: "Semrush适合个人博主吗？", a: "价格对个人用户较高。个人博主可考虑Semrush的免费额度（每天10次搜索），或选择更实惠的替代品如Ubersuggest、Ahrefs Starter等。" }
    ],
    "semrush-ai-writing": [
        { q: "Semrush SEO Writing Assistant和普通AI写作工具有什么区别？", a: "最大区别是实时SEO评分系统——边写作边给出优化建议，包括关键词使用、可读性评分、语调分析，还能对比TOP 10竞争对手的文章结构，帮你写出更有排名可能的内容。" },
        { q: "如何使用Semrush写作助手？", a: "可通过Semrush平台内的内容营销工具包使用，也有Google Docs和WordPress插件，可以在熟悉的写作环境中直接使用SEO优化功能。" },
        { q: "Semrush写作助手可以替代普通AI写作工具吗？", a: "侧重点不同。Jasper/Copy.ai等工具擅长快速生成内容；Semrush写作助手的核心价值是SEO优化指导，更适合已有内容框架后的优化和完善阶段。" }
    ],
    "hubspot-ai": [
        { q: "HubSpot AI适合小企业吗？", a: "HubSpot提供功能完整的免费CRM，内置部分AI功能。对于小企业，免费版即可满足基本需求。随着业务增长可升级付费版，AI功能更强大。" },
        { q: "HubSpot AI能自动发邮件吗？", a: "是的，HubSpot AI可以根据客户行为触发自动化邮件序列，还能通过AI生成和优化邮件内容，提升打开率和点击率。付费版营销自动化功能更完整。" },
        { q: "HubSpot和Salesforce相比哪个更好？", a: "HubSpot对中小企业更友好，界面简洁，上手快，有免费版；Salesforce功能更强大，更适合大型企业，但定制化和实施成本较高。两者AI功能都在快速迭代中。" }
    ],
    "replit-ai": [
        { q: "Replit AI适合零基础学编程吗？", a: "非常适合！Replit AI可以根据自然语言描述生成完整应用，内置环境无需配置，零基础用户可以直接看到代码运行效果，是学习编程的绝佳入门工具。" },
        { q: "Replit能部署真实的网站吗？", a: "可以。Replit项目运行后会获得一个replit.app域名，可以分享给任何人访问，相当于自动部署。付费版支持自定义域名和更好的性能。" },
        { q: "Replit AI和GitHub Copilot哪个更适合初学者？", a: "Replit AI更适合初学者——提供从生成代码到运行部署的一站式体验，无需搭建环境。GitHub Copilot更适合已有开发环境的程序员，提升编码效率而非从零构建。" }
    ],
    "leonardo": [
        { q: "Leonardo.Ai免费版每天可以生成多少张图？", a: "免费版每天提供150个Tokens，每张图消耗2-11个Tokens，约可生成15-75张图，是免费额度最慷慨的AI绘画工具之一。" },
        { q: "Leonardo.Ai有哪些特色功能？", a: "Leonardo.Ai的特色包括：丰富的社区开源模型、Motion（图转视频）功能、Canvas编辑器（类似Photoshop）、Real-time Generation（实时预览生成）等，功能全面且更新频繁。" },
        { q: "Leonardo.Ai适合商业使用吗？", a: "付费用户生成的图片可商业使用。免费版有使用量限制，商业项目建议订阅Apprentice（$10/月）或更高级别。" }
    ]
};

// 渲染工具FAQ区块 + FAQPage JSON-LD
function renderToolFAQ(toolId) {
    const faqs = TOOLS_FAQ[toolId];
    if (!faqs || faqs.length === 0) return;

    // 找到替代方案容器的父级，在其后追加FAQ
    const toolMain = document.querySelector('.tool-main');
    if (!toolMain) return;

    const section = document.createElement('div');
    section.innerHTML = '<h2>❓ 常见问题</h2>';

    const dl = document.createElement('div');
    dl.style.cssText = 'margin-top:12px;';
    faqs.forEach(item => {
        const block = document.createElement('div');
        block.style.cssText = 'margin-bottom:20px;border-left:3px solid var(--primary);padding-left:16px;';
        block.innerHTML = `<h3 style="font-size:1em;margin-bottom:6px;color:var(--text);">${item.q}</h3><p style="color:var(--text-muted);line-height:1.7;margin:0;">${item.a}</p>`;
        dl.appendChild(block);
    });
    section.appendChild(dl);
    toolMain.appendChild(section);

    // 注入 FAQPage JSON-LD
    const faqLd = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': faqs.map(f => ({
            '@type': 'Question',
            'name': f.q,
            'acceptedAnswer': { '@type': 'Answer', 'text': f.a }
        }))
    };
    const s = document.createElement('script');
    s.type = 'application/ld+json';
    s.textContent = JSON.stringify(faqLd);
    document.head.appendChild(s);
}

// 公共 OG/Twitter meta + JSON-LD 注入函数（工具详情页调用）
function setToolOGMeta(tool) {
    const url = 'https://junagent.github.io/ai-tools-hub/tools/' + tool.id + '.html';
    const setMeta = (prop, content) => {
        let el = document.querySelector('meta[property="' + prop + '"]');
        if (!el) { el = document.createElement('meta'); el.setAttribute('property', prop); document.head.appendChild(el); }
        el.setAttribute('content', content);
    };
    const setName = (name, content) => {
        let el = document.querySelector('meta[name="' + name + '"]');
        if (!el) { el = document.createElement('meta'); el.setAttribute('name', name); document.head.appendChild(el); }
        el.setAttribute('content', content);
    };
    setMeta('og:type', 'article');
    setMeta('og:title', tool.name + ' - AI工具评测 | AI工具导航');
    setMeta('og:description', tool.description);
    setMeta('og:url', url);
    setMeta('og:site_name', 'AI工具导航');
    setMeta('og:locale', 'zh_CN');
    setName('twitter:card', 'summary');
    setName('twitter:title', tool.name + ' - AI工具评测 | AI工具导航');
    setName('twitter:description', tool.description);

    // 注入 SoftwareApplication JSON-LD
    const ratingVal = tool.rating.toFixed(1);
    const priceLow = tool.price.includes('免费') ? '0' : tool.price.replace(/[^0-9.]/g, '').split('.')[0] || '0';
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        'name': tool.name,
        'description': tool.description,
        'url': url,
        'applicationCategory': 'AIApplication',
        'operatingSystem': 'Web',
        'offers': {
            '@type': 'Offer',
            'price': priceLow,
            'priceCurrency': 'USD',
            'description': tool.price
        },
        'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': ratingVal,
            'bestRating': '5',
            'worstRating': '1',
            'ratingCount': '500'
        }
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(jsonLd, null, 2);
    document.head.appendChild(script);
}
