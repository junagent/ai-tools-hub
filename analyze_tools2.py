import os, re

# 分析所有工具页面的静态文本
files = [f for f in os.listdir('tools') if f.endswith('.html') and f != 'template.html']
print(f"工具页总数: {len(files)}")

# 采样一个完整页面
with open('tools/chatgpt.html', 'r', encoding='utf-8') as fp:
    content = fp.read()

# 提取导航链接文本
nav_links = re.findall(r'<a href="[^"]*"[^>]*>([^<]+)</a>', content)
print("导航/链接文本:")
for t in nav_links:
    if t.strip():
        print(f"  '{t.strip()}'")

# 提取 button 文本
buttons = re.findall(r'<a[^>]*class="btn"[^>]*>([^<]+)</a>', content)
print("\n按钮文本:")
for t in buttons:
    print(f"  '{t.strip()}'")

# 提取 span 标签
tags = re.findall(r'<span class="tag">([^<]+)</span>', content)
print("\n标签:")
for t in tags:
    print(f"  '{t.strip()}'")

# 提取侧边栏字段
sidebar_labels = re.findall(r'class="label">([^<]+)</span>', content)
print("\n侧边栏标签:")
for t in sidebar_labels:
    print(f"  '{t.strip()}'")

# 提取常见问题标题
faq = re.findall(r'<h2[^>]*>❓([^<]+)</h2>', content)
print("\nFAQ标题:")
for t in faq:
    print(f"  '{t.strip()}'")
