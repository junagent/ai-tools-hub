---
version: alpha
name: AIToolsHub
description: Dark-mode-first AI工具导航站 — Linear 暗黑底色 + 品牌紫蓝渐变 accent
colors:
  primary: "#5e6ad2"
  primary-hover: "#828fff"
  secondary: "#f7f8f8"
  accent-warm: "#ff6b2c"
  bg: "#08090a"
  bg-card: "#191a1b"
  bg-elevated: "#0f1011"
  bg-hero: "#08090a"
  text: "#f7f8f8"
  text-secondary: "#d0d6e0"
  text-tertiary: "#8a8f98"
  text-muted: "#62666d"
  border: "rgba(255,255,255,0.08)"
  border-subtle: "rgba(255,255,255,0.05)"
  border-strong: "#23252a"
  success-green: "#10b981"
typography:
  h1:
    fontFamily: Inter
    fontSize: "2.5rem"
    fontWeight: 510
    lineHeight: 1.0
    letterSpacing: "-1.056px"
  h3:
    fontFamily: Inter
    fontSize: "1.25rem"
    fontWeight: 590
    lineHeight: 1.33
    letterSpacing: "-0.24px"
  body:
    fontFamily: Inter
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
  body-md:
    fontFamily: Inter
    fontSize: "1rem"
    fontWeight: 510
    lineHeight: 1.5
  caption:
    fontFamily: Inter
    fontSize: "0.81rem"
    fontWeight: 510
    lineHeight: 1.5
    letterSpacing: "-0.13px"
rounded:
  sm: 6px
  md: 8px
  lg: 12px
  xl: 22px
  pill: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  section: 100px
---

## Overview

AI工具导航的暗黑主题设计系统。灵感来源于 Linear 的暗色优先哲学 — 信息从黑暗中浮现，如同星光。配合品牌紫蓝渐变 accent，传达 AI 工具导航的专业和前沿感。light 模式下恢复 Apple 风格浅色配色。

## Colors

- Brand Indigo (#5e6ad2): 品牌主色、CTA 按钮、Logo SVG
- Accent Violet (#7170ff): 交互态（hover、active、链接）
- Primary Text (#f7f8f8): 主文本，非纯白，减少视觉疲劳
- Secondary Text (#d0d6e0): 副标题、描述内容
- Tertiary (#8a8f98): 元数据、标签、占位符
- Marketing Black (#08090a): 暗色模式主背景
- Level 3 Surface (#191a1b): 卡片、上浮面

## Typography

- 所有 Inter 文本启用 font-feature-settings: cv01, ss03
- Display 尺寸使用负 letter-spacing
- 三档字重：400（阅读）、510（UI）、590（标题）

## Do's and Don'ts

- 暗色模式边框使用 rgba(255,255,255,0.05~0.08) 而非实色
- Brand Indigo 仅用于 CTA 和品牌元素
- 不使用纯白 #ffffff 作为主文本
- 最大字重不超过 590
