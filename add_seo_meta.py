#!/usr/bin/env python3
"""
批量给所有页面补全：
1. 英文 meta title/description (og:locale:alternate + 双语 title/desc)
2. hreflang 标签
3. GA4 + GSC 预留代码位
"""
import os, re
from pathlib import Path

ROOT = Path('.')

# 英文 meta 映射
EN_META = {
    'index.html': {
        'title': 'AI Tools Navigation - Best AI Tools Reviews & Tutorials',
        'desc': 'Most comprehensive AI tools directory with in-depth reviews of ChatGPT, Claude, Midjourney and more. Daily updates.',
        'keywords': 'AI Tools, AI Navigation, AI Reviews, ChatGPT Tutorial, AI Writing, AI Art, Artificial Intelligence',
    },
    'blog/index.html': {
        'title': 'AI Tools Blog - Reviews, Tutorials & Industry News',
        'desc': 'AI tools deep reviews, tutorials, industry trends and buying guides. Updated daily to master the latest AI trends.',
    },
    'blog/ai-ppt-tools-comparison-2026.html': {
        'title': '2026 AI Presentation Tools Comparison: Gamma vs Tome vs Beautiful.ai',
        'desc': 'Gamma, Tome, Beautiful.ai, Canva AI... How to choose AI PPT tools in 2026? Deep comparison across 5 dimensions with 3 real test cases.',
    },
    'blog/ai-meeting-tools-comparison-2026.html': {
        'title': '2026 AI Meeting Tools Comparison: Fireflies vs Otter vs tl;dv',
        'desc': 'Fireflies.ai, Otter.ai, tl;dv, Fathom, Notta... How to choose AI meeting tools in 2026? Deep comparison across 5 dimensions with 3 scenarios.',
    },
    'blog/domestic-ai-tools-2026.html': {
        'title': '2026 Domestic AI Tools Guide: No VPN, No Foreign Currency, Native Chinese',
        'desc': 'Still using VPN for ChatGPT? 30+ domestic AI tools in 2026, native Chinese support, WeChat/Alipay payment. Covering chat, art, code, video, office.',
    },
    'blog/ai-translation-tools-comparison-2026.html': {
        'title': '2026 AI Translation Tools Comparison: DeepL vs Caiyun vs Tencent',
        'desc': 'DeepL, Caiyun, Tencent, Youdao, Baidu, Google Translate... How to choose AI translation tools in 2026? Deep comparison across 5 dimensions with 6 scenarios.',
    },
    'blog/ai-code-review-tools-comparison-2026.html': {
        'title': '2026 AI Code Review Tools Comparison: CodeRabbit vs Graphite vs Copilot',
        'desc': 'CodeRabbit, Graphite, GitHub Copilot, DeepSource, SonarQube... How to choose AI code review tools in 2026? Deep comparison with 5-language benchmarks.',
    },
    # 旧文章也补充英文 meta
    'blog/chatgpt-alternatives-free.html': {
        'title': '2026 ChatGPT Free Alternatives: 10 Tools Tested & Compared',
        'desc': 'ChatGPT too expensive? Tested 10 free AI chat tools including Claude, Gemini, Perplexity. Detailed feature and quota comparison.',
    },
    'blog/ai-art-tools-comparison-ultimate.html': {
        'title': '2026 AI Art Tools Ultimate Comparison: Midjourney vs Stable Diffusion vs DALL-E',
        'desc': 'From quality, price, Chinese support, learning curve - deep comparison of 6 mainstream AI art tools to find your best fit.',
    },
    'blog/ai-video-tools-comparison-2026.html': {
        'title': '2026 AI Video Tools Comparison: Runway Gen-3 vs Pika vs Kling',
        'desc': 'Runway Gen-3, Pika, Kling, Sora... How to choose AI video tools in 2026? Deep comparison across 4 dimensions.',
    },
    'blog/ai-music-tools-comparison-2026.html': {
        'title': '2026 AI Music Tools Comparison: Suno vs Udio vs ElevenLabs',
        'desc': 'Suno v5, Udio, ElevenLabs, Stable Audio... How to choose AI music tools in 2026? Deep comparison across quality, price, copyright, Chinese support.',
    },
}

def update_file(filepath, en_meta):
    """更新单个HTML文件"""
    content = filepath.read_text(encoding='utf-8')
    original = content
    
    # 1. 在 </head> 前插入 hreflang + 英文 meta + GA/GSC 预留
    head_end = content.find('</head>')
    if head_end == -1:
        return False
    
    # 构建要插入的内容
    canonical = ""
    m = re.search(r'<link rel="canonical" href="([^"]+)"', content)
    if m:
        canonical = m.group(1)
    
    en_title = en_meta.get('title', '')
    en_desc = en_meta.get('desc', '')
    
    insert = f'''    <!-- hreflang & English SEO meta -->
    <link rel="alternate" hreflang="en" href="{canonical.replace('/zh-CN', '/en') if '/zh-CN' in canonical else canonical + '?lang=en'}">
    <link rel="alternate" hreflang="zh-CN" href="{canonical}">
    <link rel="alternate" hreflang="x-default" href="{canonical}">
    <meta property="og:locale" content="zh_CN">
    <meta property="og:locale:alternate" content="en_US">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="{en_title}">
    <meta name="twitter:description" content="{en_desc}">
    <!-- GA4 placeholder - replace G-XXXXXXXXXX with your Measurement ID -->
    <!-- <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){{dataLayer.push(arguments);}}
      gtag('js', new Date());
      gtag('config', 'G-XXXXXXXXXX');
    </script> -->
    <!-- GSC verification placeholder -->
    <!-- <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" /> -->'''
    
    content = content[:head_end] + '\n' + insert + '\n' + content[head_end:]
    
    # 2. 给现有 title/description 加上英文对应（可选，主要靠 hreflang 跳转）
    # 这里不修改原中文 title/desc，保持原样，靠 hreflang 让 Google 抓取对应语言版本
    
    if content != original:
        filepath.write_text(content, encoding='utf-8')
        return True
    return False

def main():
    # 首页
    update_file(ROOT / 'index.html', EN_META.get('index.html', {}))
    
    # 博客列表页
    update_file(ROOT / 'blog' / 'index.html', EN_META.get('blog/index.html', {}))
    
    # 文章页
    blog_dir = ROOT / 'blog'
    for f in blog_dir.glob('*.html'):
        if f.name == 'index.html':
            continue
        en_meta = EN_META.get(f.name, {})
        if en_meta:
            update_file(f, en_meta)
        else:
            # 没有预设英文 meta 的，也加 hreflang + GA/GSC 预留
            update_file(f, {})
    
    print("完成：所有页面已添加 hreflang、英文 meta 预留、GA4/GSC 占位符")

if __name__ == '__main__':
    main()
