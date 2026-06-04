# Bing Webmaster Tools + IndexNow 指南

## ✅ 已完成
- [x] 注册 Bing Webmaster Tools 账号
- [x] 从 Google Search Console 导入数据
- [x] **IndexNow API Key 已生成并部署**

## 🔑 IndexNow 配置（✅ 已就绪）

**API Key**: `e87155a2cad84d7a0f7edc608a9bde6c`
**Key 文件 URL**: https://junagent.github.io/ai-tools-hub/e87155a2cad84d7a0f7edc608a9bde6c.txt

### 什么是 IndexNow？
IndexNow 是 Bing（和 Yandex）支持的**免注册 URL 提交协议**：
- ✅ 不需要在 Bing Webmaster 中手动验证
- ✅ 一个 API Key 可用于所有页面
- ✅ Bing 收到后**几小时内**就开始抓取
- ✅ 同时通知 Yandex、Naver、Seznam.cz 等

### 已提交的 URL
以下 URL 已通过 IndexNow 提交给 Bing：
- https://junagent.github.io/ai-tools-hub/
- https://junagent.github.io/ai-tools-hub/tools/chatgpt.html
- https://junagent.github.io/ai-tools-hub/tools/claude.html
- https://junagent.github.io/ai-tools-hub/tools/midjourney.html

### 手动提交更多 URL

**单 URL 提交**:
```bash
curl "https://api.indexnow.org/indexnow?url=https://junagent.github.io/ai-tools-hub/tools/cursor.html&key=e87155a2cad84d7a0f7edc608a9bde6c"
```

**批量提交（最多 10000 个）**:
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

## 📋 Bing Webmaster 提交 Sitemap

虽然 IndexNow 已提交，但**也建议在 Bing Webmaster 中手动提交 sitemap**：

1. 访问 https://www.bing.com/webmasters
2. 进入你的网站
3. 左侧菜单 → **"站点地图" (Sitemaps)**
4. 输入: `https://junagent.github.io/ai-tools-hub/sitemap.xml`
5. 点击 **"提交"**

## 🔧 关于 Bing Webmaster API Key

如果你在 Bing Webmaster 中找不到"API Key"或"API 访问"选项，不必担心：
- IndexNow 协议**已经替代了大部分传统 API 需求**
- 提交 URL、查看索引状态都可以通过 Web 界面完成
- IndexNow 反而**更简单、更快**

## 📊 Bing vs Google 覆盖

| 搜索引擎 | 市场份额 | 状态 |
|---------|---------|------|
| Google | ~92% | ✅ Search Console 已注册 |
| Bing | ~3% | ✅ Webmaster 已注册 |
| Yahoo (用 Bing) | ~1.5% | ✅ 自动覆盖 |
| DuckDuckGo (用 Bing) | ~0.5% | ✅ 自动覆盖 |
| Yandex (俄罗斯) | ~1% | ✅ 通过 IndexNow 自动覆盖 |
| Naver (韩国) | ~0.5% | ✅ 通过 IndexNow 自动覆盖 |

**IndexNow + Bing + Google 三个工具一起使用，已覆盖全球 99% 的搜索市场！**

## 🚀 进一步优化

1. **每次发布新内容时**调用 IndexNow API（可写 GitHub Action）
2. **每周查看** Bing Webmaster → 覆盖率
3. **每月检查** 关键字排名
4. **建立社交外链**（Twitter、Facebook），Bing 比 Google 更重视
