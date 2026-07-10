#!/usr/bin/env python3
"""修复博客数据：中文slug转英文、清理格式"""
import json, os, re
from datetime import datetime

BLOG_PATH = os.path.join(os.path.dirname(os.path.dirname(__file__)), "src", "content", "blog-data.json")

# 手动中文→英文映射
SLUG_MAP = {
    "cursor-ai-编程从入门到精通10个实用技巧": "cursor-ai-beginners-guide",
    "suno-v4-vs-udioai音乐生成工具深度评测": "suno-v4-vs-udio-review",
    "多模态ai的2026文本图像视频音频全面融合": "multimodal-ai-2026-trends",
}

def fix_slug(slug):
    """修复中文slug"""
    if slug in SLUG_MAP:
        return SLUG_MAP[slug]
    # 移除中文字符
    cleaned = re.sub(r'[\u4e00-\u9fff\u3400-\u4dbf]', '', slug)
    cleaned = re.sub(r'-+', '-', cleaned).strip('-')
    if cleaned and len(cleaned) > 3:
        return cleaned
    return slug

def main():
    with open(BLOG_PATH, "r", encoding="utf-8") as f:
        posts = json.load(f)
    
    changed = 0
    for post in posts:
        new_slug = fix_slug(post["slug"])
        if new_slug != post["slug"]:
            print(f"  {post['slug']}  →  {new_slug}")
            post["slug"] = new_slug
            post["slug"] = post["slug"].lower()
            changed += 1
    
    with open(BLOG_PATH, "w", encoding="utf-8") as f:
        json.dump(posts, f, ensure_ascii=False, indent=2)
    
    print(f"\n修复 {changed} 个slug，共 {len(posts)} 篇文章")

if __name__ == "__main__":
    main()