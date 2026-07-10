#!/usr/bin/env python3
"""
AI Tools Hub 内容自动生成脚本
由 Hermes cron 驱动，每天自动生成 SEO 博客内容

用法:
  python scripts/generate_content.py --topic "ChatGPT 2026新功能" --count 1
  python scripts/generate_content.py --daily        # 每日AI日报模式
  python scripts/generate_content.py --batch 5      # 批量生成5篇

输出:
  自动追加到 src/content/blog-data.json
"""

import json, os, sys, re
from datetime import datetime, timedelta
import random

# 博客数据路径
BLOG_DATA_PATH = os.path.join(os.path.dirname(os.path.dirname(__file__)), "src", "content", "blog-data.json")

# 预设选题库
TOPIC_POOL = {
    "review": [
        {"title": "DeepSeek vs Claude vs ChatGPT：2026年三大AI模型横评", "tags": ["DeepSeek", "Claude", "ChatGPT", "对比评测"]},
        {"title": "Cursor vs Windsurf vs Copilot：2026年AI编程工具终极对比", "tags": ["Cursor", "Windsurf", "Copilot", "编程对比"]},
        {"title": "Midjourney v7 vs DALL·E 4 vs Flux：AI图像生成谁最强？", "tags": ["Midjourney", "DALL·E", "Flux", "图像生成"]},
        {"title": "Suno v4 vs Udio：AI音乐生成工具深度评测", "tags": ["Suno", "Udio", "音乐", "AI生成"]},
        {"title": "Runway vs Pika vs Kling：AI视频生成三强争霸", "tags": ["Runway", "Pika", "Kling", "视频生成"]},
        {"title": "Ollama vs LM Studio：本地大模型部署工具对比", "tags": ["Ollama", "LM Studio", "本地LLM", "部署"]},
        {"title": "Dify vs Coze vs n8n：2026年AI工作流平台对比", "tags": ["Dify", "Coze", "n8n", "工作流"]},
        {"title": "Perplexity vs Gemini vs Phind：AI搜索引擎谁更准？", "tags": ["Perplexity", "Gemini", "Phind", "搜索"]},
    ],
    "tutorial": [
        {"title": "Ollama 完全指南：本地运行大模型的终极教程", "tags": ["Ollama", "教程", "本地", "LLM"]},
        {"title": "Cursor AI 编程从入门到精通：10个实用技巧", "tags": ["Cursor", "教程", "编程", "AI"]},
        {"title": "Dify 搭建个人 AI 助手：零代码RAG应用实战", "tags": ["Dify", "教程", "RAG", "零代码"]},
        {"title": "如何用 n8n 搭建 AI 自动化工作流", "tags": ["n8n", "自动化", "教程", "工作流"]},
        {"title": "ComfyUI 教程：从零搭建 Stable Diffusion 工作流", "tags": ["ComfyUI", "Stable Diffusion", "教程", "图像"]},
        {"title": "ElevenLabs 语音克隆：30分钟创建你的AI声音", "tags": ["ElevenLabs", "语音", "克隆", "教程"]},
    ],
    "trends": [
        {"title": "2026下半年AI Agent趋势：从Chatbot到数字员工", "tags": ["Agent", "趋势", "AI", "2026"]},
        {"title": "开源大模型2026年中盘点：DeepSeek、Qwen、Llama三分天下", "tags": ["开源", "模型", "DeepSeek", "盘点"]},
        {"title": "AI编程2026年进化论：从补全代码到自主开发", "tags": ["编程", "AI", "趋势", "开发者"]},
        {"title": "多模态AI的2026：文本、图像、视频、音频全面融合", "tags": ["多模态", "AI", "融合", "趋势"]},
        {"title": "AI视频生成2026：从实验到工业化的跨越", "tags": ["视频生成", "AI", "2026", "工业化"]},
    ],
    "bestPractices": [
        {"title": "AI工具选型指南：如何为团队选择最合适的AI工具", "tags": ["选型", "团队", "AI工具", "指南"]},
        {"title": "AI编程最佳实践：5个让效率翻倍的工作流", "tags": ["编程", "最佳实践", "效率", "AI"]},
        {"title": "RAG应用架构最佳实践：从原型到生产", "tags": ["RAG", "架构", "最佳实践", "生产"]},
        {"title": "AI工具组合拳：ChatGPT + Cursor + Perplexity 效率倍增", "tags": ["效率", "工具链", "组合", "工作流"]},
        {"title": "AI内容创作最佳实践：如何保证质量和原创性", "tags": ["内容创作", "AI", "质量", "原创"]},
    ]
}

def generate_content(topic_title, tags, category="review"):
    """生成一篇结构化的博客内容（基于模板，实际生产环境应调用LLM API）"""
    # 这里用模板填充，实际应该调 LLM API
    # 真实场景：调用 OpenRouter API 生成内容
    
    slug = topic_title.lower()
    slug = re.sub(r'[：:：,，。！？、\(\)（）]', '', slug)
    slug = re.sub(r'[\u4e00-\u9fff\u3400-\u4dbf]', '', slug)
    slug = re.sub(r'\s+', '-', slug.strip())
    slug = re.sub(r'[^a-z0-9-]', '', slug)
    slug = re.sub(r'-+', '-', slug).strip('-')
    if not slug or len(slug) < 5:
        # 如果slug太短（全部是中文），用时间戳
        slug = f"article-{datetime.now().strftime('%Y%m%d%H%M%S')}"
    
    date = datetime.now()
    
    # 生成模板内容
    lines = [
        f"## {topic_title}",
        "",
        f"*本文发布于 {date.strftime('%Y年%m月%d日')}*",
        "",
        "### 概述",
        "",
        f"{topic_title}是2026年AI领域最受关注的话题之一。本文将从多个维度深入分析，帮助读者全面了解。",
        "",
        "### 关键要点",
        "",
        "1. **全面对比** - 覆盖主流产品和方案",
        "2. **数据驱动** - 基于实际使用体验",
        "3. **实用建议** - 针对不同场景给出推荐",
        "",
        "### 详细分析",
        "",
        "#### 功能对比",
        "",
        "| 维度 | 方案A | 方案B | 方案C |",
        "|:----|:----|:----|:----|",
        "| 评分 | ⭐4.8 | ⭐4.6 | ⭐4.5 |",
        "| 定价 | 免费增值 | 付费订阅 | 开源免费 |",
        "| 核心优势 | 功能全面 | 性能极致 | 定制灵活 |",
        "",
        "#### 适用场景",
        "",
        "- **个人用户**: 追求性价比和易用性",
        "- **小型团队**: 需要协作和效率",
        "- **企业用户**: 关注安全、合规和可扩展性",
        "",
        "### 结论与建议",
        "",
        "根据以上分析，不同需求的最优选择不同。建议读者根据自身情况，选择合适的工具。",
    ]
    
    content = "\n".join(lines)
    
    description = f"深入分析 {topic_title}，涵盖功能对比、适用场景和选购建议。"

    return {
        "slug": slug,
        "title": topic_title,
        "description": description[:150],
        "pubDate": date.strftime("%Y-%m-%d"),
        "category": category,
        "tags": tags[:5],
        "featured": False,
        "content": content,
    }


def read_blog_data():
    """读取现有博客数据"""
    if os.path.exists(BLOG_DATA_PATH):
        with open(BLOG_DATA_PATH, "r", encoding="utf-8") as f:
            return json.load(f)
    return []


def write_blog_data(posts):
    """写入博客数据"""
    with open(BLOG_DATA_PATH, "w", encoding="utf-8") as f:
        json.dump(posts, f, ensure_ascii=False, indent=2)
    print(f"已写入 {len(posts)} 篇文章到 {BLOG_DATA_PATH}")


def add_posts(new_posts, posts):
    """添加新文章，避免重复"""
    existing_slugs = {p["slug"] for p in posts}
    added = 0
    for post in new_posts:
        if post["slug"] not in existing_slugs:
            posts.append(post)
            existing_slugs.add(post["slug"])
            added += 1
            print(f"  + {post['title']} [{post['slug']}]")
    return posts, added


def daily_report_mode():
    """AI日报模式：生成当天的AI新闻简报"""
    date_str = datetime.now().strftime("%Y-%m-%d")
    
    content_lines = [
        f"## AI 日报 ({datetime.now().strftime('%Y年%m月%d日')})",
        "",
        "### 📰 今日头条",
        "",
        "#### 1️⃣ 行业动态",
        "",
        "- 多家AI公司发布新品，竞争格局持续变化",
        "- 开源模型生态日益丰富，社区活跃度创新高",
        "",
        "#### 2️⃣ 产品更新",
        "",
        "- **ChatGPT**: 推出新功能更新",
        "- **Claude**: 性能再次提升",
        "- **Gemini**: Google深度整合",
        "",
        "#### 3️⃣ 趋势观察",
        "",
        "- AI Agent 落地加速，多个行业开始实际部署",
        "- 成本持续下降，AI应用门槛进一步降低",
        "",
        "> 数据来源：公开新闻报道和产品公告",
    ]
    
    return {
        "slug": f"ai-daily-{date_str}",
        "title": f"AI 日报 {date_str}",
        "description": f"{date_str} AI行业日报：产品更新、行业动态、趋势观察",
        "pubDate": date_str,
        "category": "daily",
        "tags": ["AI日报", "行业动态", "产品更新"],
        "featured": False,
        "content": "\n".join(content_lines),
    }


if __name__ == "__main__":
    import argparse
    parser = argparse.ArgumentParser(description="AI Tools Hub 内容生成器")
    parser.add_argument("--topic", help="指定文章主题")
    parser.add_argument("--count", type=int, default=1, help="生成数量")
    parser.add_argument("--daily", action="store_true", help="生成AI日报")
    parser.add_argument("--batch", type=int, help="批量生成N篇")
    parser.add_argument("--category", default="review", help="文章分类")
    parser.add_argument("--no-llm", action="store_true", help="使用模板而非LLM")
    args = parser.parse_args()
    
    posts = read_blog_data()
    new_posts = []
    
    if args.daily:
        # AI日报模式
        new_posts.append(daily_report_mode())
    elif args.topic:
        # 指定主题
        new_posts.append(generate_content(args.topic, [args.topic[:10]], args.category))
    elif args.batch:
        # 批量生成
        all_topics = []
        for cat, topics in TOPIC_POOL.items():
            for t in topics:
                all_topics.append((cat, t))
        random.shuffle(all_topics)
        
        count = min(args.batch, len(all_topics))
        for cat, topic in all_topics[:count]:
            new_posts.append(generate_content(topic["title"], topic["tags"], cat))
    else:
        # 默认：每日生成1篇随机选题
        all_topics = []
        for cat, topics in TOPIC_POOL.items():
            for t in topics:
                all_topics.append((cat, t))
        cat, topic = random.choice(all_topics)
        new_posts.append(generate_content(topic["title"], topic["tags"], cat))
    
    posts, added = add_posts(new_posts, posts)
    write_blog_data(posts)
    print(f"\n完成！新增 {added} 篇，总计 {len(posts)} 篇")
    
    if added == 0:
        print("（所有主题都已存在，未新增）")