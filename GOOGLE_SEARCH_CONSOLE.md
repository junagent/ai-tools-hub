# Google Search Console 注册指南

## 快速开始

### ✅ 已完成（自动化）
- [x] Google 验证文件已就绪: `googlec3b980dff8153f25.html`
- [x] sitemap.xml 已升级（49 个 URL + 图片扩展）
- [x] robots.txt 已优化（添加 Crawl-delay + Sitemap）

### 📋 你需要做的步骤

1. **访问 Google Search Console**
   - URL: https://search.google.com/search-console
   - 用 Google 账号登录（建议 `164005568@qq.com` 对应的账号）

2. **添加资源（Property）**
   - 选择 "网址前缀" 类型
   - 输入: `https://junagent.github.io/ai-tools-hub/`

3. **验证所有权**
   - 选择 "HTML 文件" 验证
   - Google 会自动检测已上传的 `googlec3b980dff8153f25.html`
   - 点击 "验证"

4. **提交 Sitemap**
   - 左侧菜单 → "Sitemap"（站点地图）
   - 输入: `https://junagent.github.io/ai-tools-hub/sitemap.xml`
   - 点击 "提交"

5. **请求编入索引（加速收录）**
   - 顶部搜索框输入 URL
   - 建议优先请求的页面:
     - `https://junagent.github.io/ai-tools-hub/`（首页）
     - 6 个 featured 工具页（chatgpt, claude, midjourney 等）
     - 5 篇最重要的博客文章

## 预期时间线

| 阶段 | 时间 | 状态 |
|------|------|------|
| 提交 sitemap | 即时 | ⏳ 待完成 |
| Google 首次抓取 | 1-3 天 | - |
| 首次索引 | 3-7 天 | - |
| 搜索结果出现 | 1-2 周 | - |
| 完整索引所有页面 | 2-4 周 | - |

## SEO 关键指标

- **Sitemap URL 数**: 49 (4 静态页 + 26 工具 + 18 博客 + 1 首页)
- **图片 Sitemap**: ✅ 已启用（Google Images 索引）
- **robots.txt**: ✅ 已优化
- **canonical**: ✅ 已添加
- **hreflang**: ✅ 已添加（zh-CN, x-default）
- **Open Graph**: ✅ 已添加
- **Twitter Card**: ✅ 已添加
- **JSON-LD**: ✅ 3 种类型（WebSite, Organization, ItemList）

## 监控建议

- **每周检查一次** Search Console → 覆盖率
- **每月检查一次** 搜索效果（点击、印象、平均排名）
- **重要更新后** 手动请求编入索引

## 进一步优化（按 ROI 排序）

1. 🔴 完善工具详情页的 FAQ Schema（提高富媒体展示）
2. 🔴 在 V2EX/掘金/知乎发软文引流
3. 🟡 工具详情页添加 BreadcrumbList Schema
4. 🟡 优化博客文章（添加目录、相关文章推荐）
5. 🟢 多语言支持（中英双语）
