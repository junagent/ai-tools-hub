# SEO 完整指南

## 🎯 搜索引擎覆盖状态

| 搜索引擎 | 市场份额 | 注册状态 | 提交方式 |
|---------|---------|---------|---------|
| **Google** | 92% | ✅ 已注册 | 手动提交 sitemap |
| **Bing** | 3% | ✅ 已注册 + 已导入 Google 数据 | 手动 + 自动（API） |
| **Yahoo** | 1.5% | ✅ 自动通过 Bing 覆盖 | - |
| **DuckDuckGo** | 0.5% | ✅ 自动通过 Bing 覆盖 | - |
| **Yandex** | 1% | ❌ 未注册 | 可选 |
| **百度** | 1% (中国) | ❌ 未注册 | 需要 ICP 备案 |

**总覆盖**: ~97% 搜索市场

## 📁 文件结构

```
.github/workflows/
  bing-indexing.yml          # 自动通知 Bing 新内容
scripts/
  bing_submit.py             # Bing URL Submission API 客户端
GOOGLE_SEARCH_CONSOLE.md     # Google 注册指南
BING_WEBMASTER.md            # Bing 注册指南
SEO_GUIDE.md                 # 本文件
sitemap.xml                  # 站点地图（49 个 URL）
robots.txt                   # 爬虫指令
```

## ⚙️ Bing API Key 设置

要让 GitHub Actions 自动通知 Bing 索引，需要先设置 API Key：

### 步骤 1: 获取 Bing API Key

1. 访问 https://www.bing.com/webmasters
2. 登录后进入 **设置** (右上角齿轮图标)
3. 选择 **API 访问**
4. 点击 **生成 API Key**
5. 复制生成的密钥

### 步骤 2: 添加到 GitHub Secrets

1. 打开你的 GitHub 仓库
2. 进入 **Settings** → **Secrets and variables** → **Actions**
3. 点击 **New repository secret**
4. Name: `BING_API_KEY`
5. Secret: 粘贴刚才复制的密钥
6. 点击 **Add secret**

### 步骤 3: 测试

手动触发工作流：
1. 进入仓库的 **Actions** 标签
2. 选择 "**SEO - 通知 Bing 索引新内容**"
3. 点击 **Run workflow**
4. 选择 "提交 sitemap 中所有 URL" = true
5. 点击 **Run workflow**

## 🚀 自动化工作流

设置完成后，每次你推送 `tools/*.html`、`blog/*.html` 或 `index.html` 的修改时，GitHub Actions 会自动：

1. 检测哪些 HTML 文件有变更
2. 调用 Bing URL Submission API
3. 提交新 URL 给 Bing 索引
4. 你会在 Actions 日志中看到提交结果

## 📊 监控建议

### 每周检查
- Google Search Console → 覆盖率
- Bing Webmaster Tools → 站点活动

### 每月检查
- 搜索查询表现（点击、印象、排名）
- 反向链接数量变化
- 关键字排名变化

### 每季度审计
- Bing Site Scan
- Google Mobile Usability
- Lighthouse 性能回归测试

## 🎯 持续优化方向

### 短期（1-2 周）
- [ ] 设置 Bing API Key
- [ ] 测试 GitHub Actions 自动提交
- [ ] 手动请求 Google 索引主要页面

### 中期（1-2 月）
- [ ] 工具详情页添加 FAQ Schema
- [ ] 完善面包屑导航 Schema
- [ ] 发布首批外链内容（V2EX、知乎、掘金）

### 长期（3-6 月）
- [ ] 多语言支持（English 版）
- [ ] 工具对比功能
- [ ] 用户评论/评分系统
- [ ] Newsletter 集成
