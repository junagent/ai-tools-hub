# Bing Webmaster API Key 获取详细步骤

## ⚠️ 重要提示

**API Key 是私密凭据，绝对不要直接告诉我或分享给任何 AI/平台。**

你应该：
1. ✅ 自己访问 Bing Webmaster 获取
2. ✅ 直接复制到 GitHub Secrets 设置
3. ❌ **不要**通过聊天窗口发送给我

## 📋 详细步骤（带界面说明）

### 步骤 1：访问 Bing Webmaster

打开浏览器（**你本地的浏览器**，不是 AI 控制的浏览器）访问：

```
https://www.bing.com/webmasters
```

### 步骤 2：登录

点击页面右上角的 **"Sign In"** 按钮。

- 如果你已注册过，会显示 **"Sign in"**
- 点击后会跳转到 Microsoft 账号登录页面
- 用你注册时使用的 Microsoft 账号登录
- 完成 2FA 验证（如果开启了）

### 步骤 3：进入 API 访问设置

登录后，使用以下任一方式进入设置：

**方法 A**: 直接访问
```
https://www.bing.com/webmasters/settings/apiaccess
```

**方法 B**: 手动导航
1. 登录后会自动跳转到 Dashboard
2. 找到页面右上角的 **⚙️ 齿轮图标**（设置）
3. 点击 **"API Access"** 或 **"API 访问"**

### 步骤 4：生成 API Key

在 API Access 页面：

1. 你会看到 "**API Key**" 区域
2. 初始状态可能是 "**No API key generated**"
3. 点击 **"Generate"** 或 **"生成"** 按钮
4. 系统会生成一个 32-64 字符的 API Key
5. 点击 **"复制"** 按钮（📋 图标）复制到剪贴板

**API Key 格式示例**：
```
A1B2C3D4E5F6G7H8I9J0K1L2M3N4O5P6Q7R8S9T0
```
（**这是示例，请使用你自己的真实 Key**）

### 步骤 5：保存到 GitHub Secrets

> ⚠️ **关键安全原则**：不要把 API Key 写入代码、commit 到 Git、或分享到任何公开的地方。

1. 打开新标签页访问：
   ```
   https://github.com/junagent/ai-tools-hub/settings/secrets/actions
   ```

2. 点击 **"New repository secret"** 按钮

3. 填写：
   - **Name**: `BING_API_KEY`（必须完全一致）
   - **Secret**: 粘贴刚才复制的 API Key

4. 点击 **"Add secret"** 按钮

### 步骤 6：测试

1. 进入 https://github.com/junagent/ai-tools-hub/actions
2. 找到 "**SEO - 通知 Bing 索引新内容**" workflow
3. 点击 → 点击右侧 **"Run workflow"** 按钮
4. 选择：
   - Branch: `main`
   - 提交 sitemap 中所有 URL: ✅ 勾选（首次）
5. 点击绿色 **"Run workflow"** 按钮

6. 等待 30 秒到 1 分钟，刷新页面查看运行结果

## ✅ 成功标志

如果一切正常，你会在 GitHub Actions 日志中看到类似输出：

```
🔍 Bing URL Submission API
   站点: https://junagent.github.io/ai-tools-hub/
📥 读取 sitemap: https://junagent.github.io/ai-tools-hub/sitemap.xml
   找到 49 个 URL
📤 提交 49 个 URL 到 Bing...
✅ 提交成功!
```

## 🔧 故障排查

### 问题 1：API Key 无效

**错误信息**: `403 Forbidden` 或 `Invalid API Key`

**解决方案**:
1. 确认 Key 完整复制（无空格、无换行）
2. 在 Bing Webmaster 中重新生成
3. 重新设置到 GitHub Secrets

### 问题 2：GitHub Actions 显示 `BING_API_KEY not set`

**解决方案**:
1. 检查 Secret 名称是否完全为 `BING_API_KEY`（大小写敏感）
2. 重新设置一次
3. 重新运行 workflow

### 问题 3：sitemap 读取失败

**错误信息**: `读取 sitemap 失败`

**解决方案**:
1. 确认网站可访问: https://junagent.github.io/ai-tools-hub/sitemap.xml
2. 检查 robots.txt 是否允许爬虫

## 📞 需要帮助？

如果你在过程中遇到任何问题：
1. **不要把 API Key 发送给我**
2. 把错误信息（隐藏 Key 的部分）告诉我
3. 截图错误页面（**记得先遮挡 API Key**）
4. 我会帮你分析问题
