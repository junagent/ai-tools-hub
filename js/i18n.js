const I18N = (() => {
  let lang = localStorage.getItem('ai-tools-lang') || 'zh';

  const dict = {
    zh: {
      'nav.home': '首页',
      'nav.tools': '工具库',
      'nav.categories': '分类',
      'nav.blog': '博客',
      'nav.about': '关于',
      'hero.title': '发现最好的AI工具',
      'hero.subtitle': '精选 AI 工具深度评测与对比，帮你找到最适合的 AI 助手',
      'blog.title': '📝 AI工具博客',
      'blog.subtitle': '深度评测 · 使用教程 · 行业动态',
      'hero.tools': '工具评测',
      'hero.categories': '工具分类',
      'hero.articles': '深度文章',
      'hero.visits': '月访问量',
      'section.hot': '🔥 热门AI工具',
      'section.categories': '📂 工具分类',
      'section.latest': '📝 最新评测',
      'section.newsletter': '📬 订阅AI周报',
      'newsletter.sub': '每周精选AI工具推荐和行业动态，免费订阅',
      'newsletter.placeholder': '输入你的邮箱...',
      'newsletter.button': '订阅',
      'footer.desc': '最全面的AI工具评测与导航站，帮助你发现最适合的AI助手，提升工作效率。',
      'footer.quick': '快速链接',
      'footer.hot': '热门分类',
      'footer.links': '友情链接',
      'footer.lang': 'English',
      'cat.writing': 'AI写作',
      'cat.writing.desc': 'ChatGPT、Claude、Jasper 等',
      'cat.image': 'AI绘画',
      'cat.image.desc': 'Midjourney、DALL-E、Leonardo 等',
      'cat.video': 'AI视频',
      'cat.video.desc': 'Runway、Sora、Kling、Pika 等',
      'cat.code': 'AI编程',
      'cat.code.desc': 'Copilot、Cursor、Replit 等',
      'cat.chat': 'AI对话',
      'cat.chat.desc': 'ChatGPT、Gemini、Perplexity 等',
      'cat.audio': 'AI音频',
      'cat.audio.desc': 'ElevenLabs、Murf、Suno 等',
      'cat.productivity': '效率工具',
      'cat.productivity.desc': 'Notion AI、Canva AI 等',
      'cat.marketing': '营销工具',
      'cat.marketing.desc': 'Semrush、HubSpot AI 等',
      'tag.AI写作': 'AI写作',
      'tag.AI绘画': 'AI绘画',
      'tag.AI视频': 'AI视频',
      'tag.AI编程': 'AI编程',
      'tag.AI音频': 'AI音频',
      'tag.AI搜索': 'AI搜索',
      'tag.AI对话': 'AI对话',
      'tag.AI配音': 'AI配音',
      'tag.AI音乐': 'AI音乐',
      'tag.chat': 'Chat',
      'tag.writing': 'Writing',
      'tag.image': 'Image',
      'tag.video': 'Video',
      'tag.code': 'Code',
      'tag.audio': 'Audio',
      'tag.marketing': 'Marketing',
      'tag.productivity': 'Productivity',
      'tag.design': 'Design',
      'btn.all': '查看全部工具 →',
      'btn.blog': '查看全部文章 →',
      'tool.visit': '访问官网 →',
      'tool.visit_short': '访问官网',
      'tool.alternatives': '替代方案',
      'tool.faq': '❓ 常见问题',
      'tool.pros': '✅ 优点',
      'tool.cons': '⚠️ 缺点',
      'tool.intro': '📝 工具介绍',
      'tool.scenarios': '🎯 适合场景',
      'tool.scores': '📊 详细评分',
      'tool.pricing': '价格',
      'tool.rating': '评分',
      'tool.category': '分类',
      'score.ease': '易用性',
      'score.func': '功能性',
      'score.price': '性价比',
      'score.quality': '输出质量',
      'score.support': '客户支持',
    },
    en: {
      'nav.home': 'Home',
      'nav.tools': 'Tools',
      'nav.categories': 'Categories',
      'nav.blog': 'Blog',
      'nav.about': 'About',
      'hero.title': 'Discover the Best AI Tools',
      'hero.subtitle': 'In-depth reviews and comparisons to help you find the best AI assistants',
      'blog.title': '📝 AI Tools Blog',
      'blog.subtitle': 'In-depth reviews, tutorials, and industry news',
      'hero.tools': 'Tool Reviews',
      'hero.categories': 'Categories',
      'hero.articles': 'Articles',
      'hero.visits': 'Monthly Visits',
      'section.hot': '🔥 Popular AI Tools',
      'section.categories': '📂 Categories',
      'section.latest': '📝 Latest Reviews',
      'section.newsletter': '📬 Subscribe',
      'newsletter.sub': 'Weekly AI tools and industry insights. Free forever.',
      'newsletter.placeholder': 'Enter your email...',
      'newsletter.button': 'Subscribe',
      'footer.desc': 'The most comprehensive AI tools directory with reviews and comparisons to boost your productivity.',
      'footer.quick': 'Quick Links',
      'footer.hot': 'Hot Categories',
      'footer.links': 'Links',
      'footer.lang': '中文',
      'cat.writing': 'AI Writing',
      'cat.writing.desc': 'ChatGPT, Claude, Jasper, etc.',
      'cat.image': 'AI Image',
      'cat.image.desc': 'Midjourney, DALL-E, Leonardo, etc.',
      'cat.video': 'AI Video',
      'cat.video.desc': 'Runway, Sora, Kling, Pika, etc.',
      'cat.code': 'AI Coding',
      'cat.code.desc': 'Copilot, Cursor, Replit, etc.',
      'cat.chat': 'AI Chat',
      'cat.chat.desc': 'ChatGPT, Gemini, Perplexity, etc.',
      'cat.audio': 'AI Audio',
      'cat.audio.desc': 'ElevenLabs, Murf, Suno, etc.',
      'cat.productivity': 'Productivity',
      'cat.productivity.desc': 'Notion AI, Canva AI, etc.',
      'cat.marketing': 'Marketing',
      'cat.marketing.desc': 'Semrush, HubSpot AI, etc.',
      'tag.AI写作': 'AI Writing',
      'tag.AI绘画': 'AI Image',
      'tag.AI视频': 'AI Video',
      'tag.AI编程': 'AI Coding',
      'tag.AI音频': 'AI Audio',
      'tag.AI搜索': 'AI Search',
      'tag.AI对话': 'AI Chat',
      'tag.AI配音': 'AI Voiceover',
      'tag.AI音乐': 'AI Music',
      'tag.chat': 'Chat',
      'tag.writing': 'Writing',
      'tag.image': 'Image',
      'tag.video': 'Video',
      'tag.code': 'Code',
      'tag.audio': 'Audio',
      'tag.marketing': 'Marketing',
      'tag.productivity': 'Productivity',
      'tag.design': 'Design',
      'btn.all': 'View all tools →',
      'btn.blog': 'View all articles →',
      'tool.visit': 'Visit Official Site →',
      'tool.visit_short': 'Visit Site',
      'tool.alternatives': 'Alternatives',
      'tool.faq': '❓ FAQ',
      'tool.pros': '✅ Pros',
      'tool.cons': '⚠️ Cons',
      'tool.intro': '📝 Introduction',
      'tool.scenarios': '🎯 Best For',
      'tool.scores': '📊 Detailed Scores',
      'tool.pricing': 'Pricing',
      'tool.rating': 'Rating',
      'tool.category': 'Category',
      'score.ease': 'Ease of Use',
      'score.func': 'Functionality',
      'score.price': 'Value for Money',
      'score.quality': 'Output Quality',
      'score.support': 'Support',
    },
  };

  function update() {
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[lang] && dict[lang][key]) {
        el.textContent = dict[lang][key];
      }
    });
    const langBtn = document.getElementById('lang-toggle');
    if (langBtn && dict[lang]['footer.lang']) {
      langBtn.textContent = dict[lang]['footer.lang'];
      langBtn.setAttribute('aria-label', lang === 'zh' ? 'Switch to English' : '切换到中文');
    }
  }

  function setLang(next) {
    lang = next;
    localStorage.setItem('ai-tools-lang', next);
    update();
    const url = new URL(window.location);
    url.searchParams.set('lang', next);
    window.history.replaceState({}, '', url);
  }

  function init() {
    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get('lang');
    if (urlLang === 'en' || urlLang === 'zh') {
      lang = urlLang;
      localStorage.setItem('ai-tools-lang', lang);
    }
    update();
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('#lang-toggle');
      if (!btn) return;
      e.preventDefault();
      setLang(lang === 'zh' ? 'en' : 'zh');
    });
  }

  return { init, setLang, getLang: () => lang };
})();

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', I18N.init);
} else {
  I18N.init();
}
