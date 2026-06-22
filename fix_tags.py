import os, re

tag_map = {
    'AI对话': 'tag.AI对话',
    'AI绘画': 'tag.AI绘画', 
    'AI视频': 'tag.AI视频',
    'AI编程': 'tag.AI编程',
    'AI音频': 'tag.AI音频',
    'AI搜索': 'tag.AI搜索',
    'AI配音': 'tag.AI配音',
    'AI音乐': 'tag.AI音乐',
    'chat': 'tag.chat',
    'writing': 'tag.writing',
    'image': 'tag.image',
    'video': 'tag.video',
    'code': 'tag.code',
    'audio': 'tag.audio',
    'marketing': 'tag.marketing',
    'productivity': 'tag.productivity',
    'design': 'tag.design',
}

for f in os.listdir('tools'):
    if not f.endswith('.html') or f == 'template.html':
        continue
    path = os.path.join('tools', f)
    with open(path, 'r', encoding='utf-8') as fp:
        content = fp.read()
    original = content
    for zh, key in tag_map.items():
        content = content.replace(f'<span class="tag">{zh}</span>', f'<span class="tag" data-i18n="{key}">{zh}</span>')
        content = content.replace(f'<span class="tag">{zh.lower()}</span>', f'<span class="tag" data-i18n="{key}">{zh}</span>')
    if content != original:
        with open(path, 'w', encoding='utf-8') as fp:
            fp.write(content)
        print(f'Updated {f}')
