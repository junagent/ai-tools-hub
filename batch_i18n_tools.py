#!/usr/bin/env python3
"""
批量给 26 个工具详情页加 i18n 标记 + 同步补全 i18n.js 词典
"""
import os, re, json
from pathlib import Path

TOOLS_DIR = Path('tools')
I18N_JS = Path('js/i18n.js')

# ==================== 1. 读取现有 i18n.js 词典 ====================
def load_i18n_dict():
    text = I18N_JS.read_text(encoding='utf-8')
    # 简单提取 zh/en dict 字符串，用于追加
    return text

# ==================== 2. 需要新增的词典 key-value ====================
NEW_ZH = {
    # 共用 UI
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
    # 侧边栏评分维度
    'score.ease': '易用性',
    'score.func': '功能性',
    'score.price': '性价比',
    'score.quality': '输出质量',
    'score.support': '客户支持',
}

NEW_EN = {
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
}

# 收集工具页独有的标签（如 "AI对话", "AI绘画" 等）
def collect_tool_tags():
    tag_set = set()
    for f in TOOLS_DIR.glob('*.html'):
        if f.name == 'template.html':
            continue
        content = f.read_text(encoding='utf-8')
        tags = re.findall(r'<span class="tag">([^<]+)</span>', content)
        tag_set.update(tags)
    return tag_set

# ==================== 3. 处理单个工具页 ====================
def process_tool_page(html_path):
    content = html_path.read_text(encoding='utf-8')
    original = content

    # 3.1 插入 i18n.js（在第一个 <script 前插入，或在 </head> 前）
    if 'i18n.js' not in content:
        # 找 </head> 位置
        content = content.replace('</head>', '    <script src="../js/i18n.js"></script>\n</head>')

    # 3.2 html lang 在 i18n.js 里动态设置，这里保持 zh-CN 即可

    # 3.3 给 h2 标题加 data-i18n（通用 5 个 section）
    h2_map = {
        '📝 工具介绍': 'tool.intro',
        '✅ 优点': 'tool.pros',
        '⚠️ 缺点': 'tool.cons',
        '🎯 适合场景': 'tool.scenarios',
        '📊 详细评分': 'tool.scores',
        '❓ 常见问题': 'tool.faq',
    }
    for zh, key in h2_map.items():
        # <h2 data-animate>📝 工具介绍</h2> 或 <h2>📝 工具介绍</h2>
        pattern = rf'(<h2[^>]*>){re.escape(zh)}(</h2>)'
        repl = rf'\1{zh}\2'  # 占位，最后统一替换为带 data-i18n
        # 直接替换为带标记的
        content = re.sub(rf'(<h2[^>]*>){re.escape(zh)}(</h2>)', rf'\1{zh}\2', content)
        # 再加上 data-i18n
        content = content.replace(f'>{zh}</h2>', f' data-i18n="{key}">{zh}</h2>')

    # 3.4 导航链接（首页、工具库、分类、博客）——已在首页处理，工具页的 nav 也可加
    nav_map = {
        '首页': 'nav.home',
        '工具库': 'nav.tools',
        '分类': 'nav.categories',
        '博客': 'nav.blog',
    }
    for zh, key in nav_map.items():
        content = content.replace(f'>{zh}</a>', f' data-i18n="{key}">{zh}</a>')

    # 3.5 访问官网按钮（两种样式）
    content = content.replace('访问官网 →', '访问官网 →')
    content = content.replace('>访问官网 →</a>', ' data-i18n="tool.visit">访问官网 →</a>')
    content = content.replace('>访问官网</a>', ' data-i18n="tool.visit_short">访问官网</a>')

    # 3.6 标签：把 <span class="tag">AI对话</span> 变成 data-i18n
    # 这里比较复杂：标签内容是动态的，先对已知标签做映射
    # 我们在处理完所有页面后统一生成 tag.xxx key

    # 3.7 替代方案标题
    content = content.replace('>替代方案<', ' data-i18n="tool.alternatives">替代方案<')
    # 可能是 h2/h3
    content = re.sub(r'(<h[23][^>]*>)替代方案(</h[23]>)', r'\1替代方案\2', content)
    content = content.replace('>替代方案</h2>', ' data-i18n="tool.alternatives">替代方案</h2>')
    content = content.replace('>替代方案</h3>', ' data-i18n="tool.alternatives">替代方案</h3>')

    # 3.8 侧边栏标签：价格、评分、分类 —— 这些是 JS 渲染的，静态模板里只有 class="label" 占位
    # 先标记模板里的固定文本
    content = content.replace('class="label">价格', 'class="label" data-i18n="tool.pricing">价格')
    content = content.replace('class="label">评分', 'class="label" data-i18n="tool.rating">评分')
    content = content.replace('class="label">分类', 'class="label" data-i18n="tool.category">分类')

    # 3.9 评分维度在 JS 里动态生成，这里不处理

    if content != original:
        html_path.write_text(content, encoding='utf-8')
        return True
    return False

# ==================== 4. 主流程 ====================
def main():
    files = [f for f in TOOLS_DIR.glob('*.html') if f.name != 'template.html']
    print(f"处理 {len(files)} 个工具页...")

    changed = 0
    for f in files:
        if process_tool_page(f):
            changed += 1
            print(f"  ✓ {f.name}")
        else:
            print(f"  - {f.name} (无变化)")

    print(f"\n完成：{changed} 个文件已修改")

    # 5. 更新 i18n.js 词典
    update_i18n_js()

def update_i18n_js():
    text = I18N_JS.read_text(encoding='utf-8')

    # 在 zh dict 的 'btn.blog' 后追加新 key
    for k, v in NEW_ZH.items():
        if f"'{k}'" not in text:
            # 找到 zh dict 末尾 'btn.blog': '查看全部文章 →', 后面插入
            marker = "'btn.blog': '查看全部文章 →',"
            insert = f"\n      '{k}': '{v}',"
            text = text.replace(marker, marker + insert)

    # en dict 同理
    for k, v in NEW_EN.items():
        if f"'{k}'" not in text:
            marker = "'btn.blog': 'View all articles →',"
            insert = f"\n      '{k}': '{v}',"
            text = text.replace(marker, marker + insert)

    # 收集工具标签并生成 tag.xxx key
    tags = collect_tool_tags()
    for tag in sorted(tags):
        key = f"tag.{tag}"
        if f"'{key}'" not in text:
            # tag 翻译映射（简单启发式：已知中文标签）
            tag_en_map = {
                'AI对话': 'AI Chat',
                'AI绘画': 'AI Image',
                'AI视频': 'AI Video',
                'AI编程': 'AI Coding',
                'AI音频': 'AI Audio',
                '效率工具': 'Productivity',
                '营销工具': 'Marketing',
                'chat': 'Chat',
                'writing': 'Writing',
                'image': 'Image',
                'video': 'Video',
                'code': 'Code',
                'audio': 'Audio',
            }
            zh_val = tag
            en_val = tag_en_map.get(tag, tag.title())
            # 插入 zh
            marker = "'cat.marketing.desc': 'Semrush、HubSpot AI 等',"
            insert_zh = f"\n      '{key}': '{zh_val}',"
            text = text.replace(marker, marker + insert_zh)
            # 插入 en
            marker_en = "'cat.marketing.desc': 'Semrush, HubSpot AI, etc.',"
            insert_en = f"\n      '{key}': '{en_val}',"
            text = text.replace(marker_en, marker_en + insert_en)

    I18N_JS.write_text(text, encoding='utf-8')
    print("i18n.js 词典已更新")

if __name__ == '__main__':
    main()
