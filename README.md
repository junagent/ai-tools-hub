# 🤖 AI工具导航站（AI Tools Hub）

> 一个纯静态、SEO友好、面向中文用户的AI工具评测与导航网站。
> 支持 Google AdSense 变现，可一键部署到 GitHub Pages。

## ✨ 功能特性

- **工具详情页** — 12款主流AI工具深度评测（ChatGPT、Claude、Midjourney、HeyGen等）
- **分类浏览** — 按「文案写作 / 图像生成 / 视频制作 / 编程辅助」快速筛选
- **SEO博客** — 4篇原创长文，覆盖高频搜索词（ChatGPT vs Claude、AI绘画指南等）
- **站内搜索** — 前端关键词实时搜索工具+博客
- **Newsletter订阅** — 邮件收集（前端演示，可接Mailchimp/ConvertKit）
- **响应式布局** — 深色主题，手机/平板/桌面全适配
- **SEO完整** — sitemap.xml + robots.txt + 每页 meta 标签

## 📂 目录结构

```
ai-tools-hub/
├── index.html              # 主页
├── sitemap.xml            # 站点地图
├── robots.txt             # 爬虫协议
├── README.md
├── .github/
│   └── workflows/
│       └── deploy.yml     # GitHub Pages 自动部署
├── css/
│   └── style.css         # 全局样式
├── js/
│   ├── tools-data.js      # 工具+博客数据
│   └── main.js           # 搜索/渲染/交互逻辑
├── tools/                 # 工具详情页（12个html）
│   ├── chatgpt.html
│   ├── claude.html
│   └── ...
└── blog/                  # 博客文章（4篇）
    ├── index.html         # 博客主页
    ├── chatgpt-vs-claude-2026.html
    ├── ai-image-tools-guide.html
    ├── ai-coding-tools-comparison.html
    └── ai-tools-for-marketers.html
```

## 🚀 本地预览

无需任何构建工具，直接浏览器打开 `index.html` 即可。

```bash
# 或用任意静态服务器
npx serve .
# 访问 http://localhost:3000
```

## ☁️ 部署到 GitHub Pages

1. 在 GitHub 新建仓库（例如 `ai-tools-hub`）
2. 推送全部代码
3. 进入仓库 **Settings → Pages**
4. Source 选择 **GitHub Actions**
5. 推送 `deploy.yml` 后自动触发部署
6. 访问 `https://你的用户名.github.io/ai-tools-hub/`

### ⚠️ 部署后必做

将项目中所有 `https://yourusername.github.io/ai-tools-hub` 替换为你自己的 GitHub Pages 地址：

```bash
# 批量替换（Mac/Linux）
find . -name "*.html" -exec sed -i '' 's|yourusername\.github\.io/ai-tools-hub|你的用户名.github.io/ai-tools-hub|g' {} +

# Windows PowerShell
Get-ChildItem *.html -Recurse | ForEach-Object {
    (Get-Content $_.FullName) -replace 'yourusername\.github\.io/ai-tools-hub', '你的用户名.github.io/ai-tools-hub' | Set-Content $_.FullName
}
```

## 💰 申请 Google AdSense

1. 网站部署并可公开访问
2. 确保有 **至少4篇原创博客文章**（本项目已包含）
3. 确保有 **工具详情页**（本项目已包含12个）
4. 前往 [Google AdSense](https://www.google.com/adsense) 提交申请
5. 审核通过后，将广告代码粘贴到 `index.html` 对应位置

## ✏️ 添加新工具/新博客

### 添加新工具

1. 在 `js/tools-data.js` 的 `AI_TOOLS` 数组中添加工具对象
2. 复制 `tools/template.html` 为 `tools/新工具名.html`
3. 替换模板中的占位内容

### 添加新博客文章

1. 在 `js/tools-data.js` 的 `BLOG_POSTS` 数组中添加文章对象
2. 参考 `blog/ai-tools-for-marketers.html` 创建新文章 HTML
3. 确保在 `blog/index.html` 中能正确链接

## 🛠️ 技术栈

- 纯 HTML5 + CSS3 + 原生 JavaScript（无框架）
- 无构建步骤，无npm依赖
- 海外访问友好（无国内CDN）

## 📄 许可证

MIT License — 自由修改和商用。
