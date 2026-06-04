# IndexNow 自动化索引

## ✅ 已部署

### IndexNow API Key
- **Key**: `e87155a2cad84d7a0f7edc608a9bde6c`
- **Key 文件**: https://junagent.github.io/ai-tools-hub/e87155a2cad84d7a0f7edc608a9bde6c.txt
- **提交端点**: https://api.indexnow.org/indexnow

### 覆盖的搜索引擎
- ✅ Bing（必应）
- ✅ Yandex（俄罗斯最大）
- ✅ Naver（韩国最大）
- ✅ Seznam.cz（捷克最大）
- ✅ Yahoo（通过 Bing 间接覆盖）

## 🤖 GitHub Action 自动化

工作流文件: `.github/workflows/bing-indexing.yml`

### 触发条件
**自动触发** — 当以下文件变更时 push 到 main 分支：
- `tools/**/*.html`（工具详情页）
- `blog/**/*.html`（博客文章）
- `index.html`（首页）

**手动触发** — GitHub Actions 页面 → 选择 "SEO - IndexNow 自动化索引" → Run workflow
- 可选参数: `submit_all=true` 提交 sitemap 全部 URL

### 工作流程
1. 检测本次 commit 变更的 HTML 文件
2. 构建对应的完整 URL（`https://junagent.github.io/ai-tools-hub/...`）
3. 调用 IndexNow API 批量提交
4. 几小时内 Bing 开始抓取新内容

### 日志示例
```
📍 模式: 提交变更的文件
   变更文件数: 2
  📍 https://junagent.github.io/ai-tools-hub/tools/chatgpt.html
  📍 https://junagent.github.io/ai-tools-hub/blog/new-post.html
📤 提交到 IndexNow...
HTTP Status: 200
✅ 完成
```

## 📊 为什么选择 IndexNow 而非传统 Bing API？

| 特性 | IndexNow | 传统 Bing API |
|------|----------|--------------|
| 注册要求 | 无需 | 需要 Bing Webmaster 验证 |
| API Key | 你自己生成 | Bing 生成 |
| 覆盖范围 | 4+ 搜索引擎 | 仅 Bing |
| 响应时间 | 几小时 | 1-3 天 |
| 提交方式 | 简单 HTTP | 复杂 OAuth/API |
| 配额限制 | 无（合理使用） | 10000/月 |
| 实时性 | 实时推送 | 批处理 |

## 🔧 手动提交（调试用）

### 单 URL 提交
```bash
curl "https://api.indexnow.org/indexnow?url=https://junagent.github.io/ai-tools-hub/tools/cursor.html&key=e87155a2cad84d7a0f7edc608a9bde6c"
```

### 批量提交
```bash
curl -X POST "https://api.indexnow.org/indexnow" \
  -H "Content-Type: application/json; charset=utf-8" \
  -d '{
    "host": "junagent.github.io",
    "key": "e87155a2cad84d7a0f7edc608a9bde6c",
    "keyLocation": "https://junagent.github.io/ai-tools-hub/e87155a2cad84d7a0f7edc608a9bde6c.txt",
    "urlList": [
      "https://junagent.github.io/ai-tools-hub/tools/cursor.html",
      "https://junagent.github.io/ai-tools-hub/tools/runway-gen3.html"
    ]
  }'
```

## 📅 索引时间线

| 阶段 | 时间 |
|------|------|
| **Push 到 main** | 即时 |
| **GitHub Action 触发** | 1-2 分钟 |
| **IndexNow 收到** | 即时 |
| **Bing 开始抓取** | 1-6 小时 |
| **搜索结果出现** | 1-3 天 |

## ⚠️ 注意事项

1. **每天最多提交 1-2 次**同 URL（避免被 Bing 视为垃圾）
2. **Key 文件不能删除**（Bing 会定期验证）
3. **不要公开 Key**（虽然泄漏影响不大，但可能被滥用）
