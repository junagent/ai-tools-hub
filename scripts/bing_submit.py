#!/usr/bin/env python3
"""
Bing URL Submission API 集成脚本
用于自动提交新 URL 到 Bing 索引

使用方法:
1. 在 Bing Webmaster Tools 获取 API Key
   - 访问 https://www.bing.com/webmasters
   - 设置 → API 访问 → 生成 API Key
2. 设置环境变量 BING_API_KEY
3. 运行: python3 bing_submit.py <url1> <url2> ...
   或: python3 bing_submit.py --sitemap
"""

import os
import sys
import json
import urllib.request
import urllib.error
from urllib.parse import urlparse

# ========== 配置 ==========
SITE_URL = "https://junagent.github.io/ai-tools-hub/"
SITEMAP_URL = "https://junagent.github.io/ai-tools-hub/sitemap.xml"
API_KEY = os.environ.get("BING_API_KEY", "")

API_ENDPOINT = "https://ssl.bing.com/webmaster/api.svc/json/SubmitUrlbatch"


def submit_urls(urls: list) -> dict:
    """提交 URL 列表到 Bing"""
    if not API_KEY:
        print("❌ 错误: 未设置 BING_API_KEY 环境变量")
        print("   设置方法: export BING_API_KEY='your-api-key'")
        print("   或在 PowerShell: $env:BING_API_KEY='your-api-key'")
        sys.exit(1)
    
    if not urls:
        print("⚠️ 没有 URL 需要提交")
        return {}
    
    print(f"📤 提交 {len(urls)} 个 URL 到 Bing...")
    
    # 准备请求
    data = json.dumps({
        "siteUrl": SITE_URL,
        "urlList": urls
    }).encode("utf-8")
    
    url = f"{API_ENDPOINT}?apikey={API_KEY}"
    
    req = urllib.request.Request(
        url,
        data=data,
        headers={"Content-Type": "application/json; charset=utf-8"},
        method="POST"
    )
    
    try:
        with urllib.request.urlopen(req, timeout=30) as response:
            result = json.loads(response.read().decode("utf-8"))
            print(f"✅ 提交成功!")
            print(f"   响应: {json.dumps(result, indent=2, ensure_ascii=False)}")
            return result
    except urllib.error.HTTPError as e:
        print(f"❌ HTTP 错误: {e.code} {e.reason}")
        print(f"   响应: {e.read().decode('utf-8', errors='replace')}")
        return {}
    except Exception as e:
        print(f"❌ 请求失败: {e}")
        return {}


def fetch_sitemap_urls() -> list:
    """从 sitemap.xml 获取所有 URL"""
    print(f"📥 读取 sitemap: {SITEMAP_URL}")
    
    try:
        with urllib.request.urlopen(SITEMAP_URL, timeout=30) as response:
            content = response.read().decode("utf-8")
        
        # 简单解析 XML 提取 <loc> 标签
        import re
        urls = re.findall(r'<loc>(.*?)</loc>', content)
        print(f"   找到 {len(urls)} 个 URL")
        return urls
    except Exception as e:
        print(f"❌ 读取 sitemap 失败: {e}")
        return []


def main():
    print("=" * 60)
    print("🔍 Bing URL Submission API")
    print(f"   站点: {SITE_URL}")
    print("=" * 60)
    
    if "--sitemap" in sys.argv:
        # 提交所有 sitemap 中的 URL
        urls = fetch_sitemap_urls()
        if urls:
            submit_urls(urls)
    elif len(sys.argv) > 1:
        # 提交命令行传入的 URL
        urls = [arg for arg in sys.argv[1:] if arg.startswith("http")]
        submit_urls(urls)
    else:
        # 默认提交主要页面
        default_urls = [
            SITE_URL,
            f"{SITE_URL}blog/",
            f"{SITE_URL}tools/chatgpt.html",
            f"{SITE_URL}tools/claude.html",
            f"{SITE_URL}tools/midjourney.html",
            f"{SITE_URL}tools/github-copilot.html",
        ]
        print("📋 使用默认 URL 列表（使用 --all 提交 sitemap 中所有 URL）")
        submit_urls(default_urls)


if __name__ == "__main__":
    main()
