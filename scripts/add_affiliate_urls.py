#!/usr/bin/env python3
"""
向 tools.json 添加 affiliateUrl 字段
为有联盟计划的工具添加推广链接
"""
import json, os, re

TOOLS_PATH = os.path.join(os.path.dirname(os.path.dirname(__file__)), "src", "content", "tools.json")

# 已知有联盟/推荐计划的工具
# 格式: {id: (affiliate_url, program_name)}
AFFILIATE_MAP = {
    # 编程工具
    "cursor": ("https://cursor.sh/?ref=aitoolshub", "Cursor 联盟计划"),
    "bolt": ("https://bolt.new/?ref=aitoolshub", "Bolt.new 联盟计划"),
    "replit": ("https://replit.com/?ref=aitoolshub", "Replit 推荐"),
    "coderabbit": ("https://coderabbit.ai/?ref=aitoolshub", "CodeRabbit 推荐"),

    # 生产力
    "notion-ai": ("https://affiliate.notion.so/aitoolshub", "Notion Affiliate"),
    "linear": ("https://linear.app/?ref=aitoolshub", "Linear 推荐"),
    "superhuman": ("https://superhuman.com/?ref=aitoolshub", "Superhuman 推荐"),
    "motion": ("https://motion.app/?ref=aitoolshub", "Motion 推荐"),
    
    # 图像/设计
    "midjourney": ("https://midjourney.com/?ref=aitoolshub", "Midjourney 推荐"),
    "adobe-firefly": ("https://firefly.adobe.com/?ref=aitoolshub", "Adobe 推荐"),
    "canva-ai": ("https://canva.7eqq.net/aitoolshub", "Canva Affiliate"),
    "gamma": ("https://gamma.app/?ref=aitoolshub", "Gamma 推荐"),

    # 音频
    "elevenlabs": ("https://elevenlabs.io/?ref=aitoolshub", "ElevenLabs 推荐"),
    "suno": ("https://suno.ai/?ref=aitoolshub", "Suno 推荐"),

    # 视频
    "heygen": ("https://heygen.com/?ref=aitoolshub", "HeyGen 推荐"),
    "synthesia": ("https://synthesia.io/?ref=aitoolshub", "Synthesia 推荐"),
    "invideo": ("https://invideo.io/?ref=aitoolshub", "InVideo 推荐"),

    # 商业
    "hubspot-ai": ("https://hubspot.sjv.io/aitoolshub", "HubSpot Affiliate"),
    "zapier-ai": ("https://zapier.com/?ref=aitoolshub", "Zapier 推荐"),

    # 开发工具
    "vercel-ai-sdk": ("https://vercel.com/?ref=aitoolshub", "Vercel 推荐"),
    "langfuse": ("https://langfuse.com/?ref=aitoolshub", "Langfuse 推荐"),

    # 写作
    "jasper": ("https://jasper.ai/?ref=aitoolshub", "Jasper 推荐"),
    "copy-ai": ("https://copy.ai/?ref=aitoolshub", "Copy.ai 推荐"),
    "writesonic": ("https://writesonic.com/?ref=aitoolshub", "Writesonic 推荐"),
    "rytr": ("https://rytr.me/?ref=aitoolshub", "Rytr 推荐"),

    # 分析
    "hex": ("https://hex.tech/?ref=aitoolshub", "Hex 推荐"),
    
    # 教育
    "duolingo": ("https://duolingo.com/?ref=aitoolshub", "Duolingo 推荐"),

    # 3D
    "meshy": ("https://meshy.ai/?ref=aitoolshub", "Meshy 推荐"),
}

def add_affiliate_urls():
    with open(TOOLS_PATH, "r", encoding="utf-8") as f:
        tools = json.load(f)
    
    added = 0
    for tool in tools:
        tool_id = tool["id"]
        if tool_id in AFFILIATE_MAP:
            url, program = AFFILIATE_MAP[tool_id]
            tool["affiliateUrl"] = url
            added += 1
            print(f"  ✓ {tool['name']}: {program}")
        else:
            tool["affiliateUrl"] = None
    
    with open(TOOLS_PATH, "w", encoding="utf-8") as f:
        json.dump(tools, f, ensure_ascii=False, indent=2)
    
    print(f"\n完成！共 {added}/{len(tools)} 个工具已添加联盟链接")

if __name__ == "__main__":
    add_affiliate_urls()
