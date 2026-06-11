import os, re

# 先分析所有工具页面的共同结构
files = [f for f in os.listdir('tools') if f.endswith('.html') and f != 'template.html']
print(f"工具页总数: {len(files)}")

for f in files[:3]:
    path = os.path.join('tools', f)
    with open(path, 'r', encoding='utf-8') as fp:
        content = fp.read()
    h1s = re.findall(r'<h1[^>]*>([^<]+)</h1>', content)
    h2s = re.findall(r'<h2[^>]*>([^<]+)</h2>', content)
    print(f"\n=== {f} ===")
    print(f"  h1: {h1s}")
    print(f"  h2: {h2s[:5]}")
