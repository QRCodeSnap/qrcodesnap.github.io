# AGENTS.md

This file provides guidance to Codex (Codex.ai/code) when working with code in this repository.

## Project Overview

QRCodeSnap 官网门户 (GitHub Pages)，展示 macOS 菜单栏二维码扫描应用的产品页面。使用静态 HTML + CSS + JS，部署到 GitHub Pages。

## Architecture

```
/
├── index.html          # 英文主页
├── cn/index.html       # 中文主页
├── ar/index.html       # 阿拉伯文主页 (RTL)
├── privacy/index.html  # 隐私政策
├── styles.css          # 全局样式 (CSS variables + responsive)
├── script.js           # 轮播图自动播放逻辑
└── img/                # 图片资源
│   ├── main.png        # 主界面截图
│   ├── settings.png    # 设置界面截图
│   ├── pro.png         # 高级功能截图
│   ├── ocr.png         # OCR 功能截图
│   └── app-store-badge.svg
│   └── cn/img/         # 中文版图片
│   └── ar/img/         # 阿拉伯文版图片
```

## Key Points

- 多语言站点：英文 (默认)、中文 (`/cn/`)、阿拉伯文 (`/ar/`)
- 阿拉伯文页面使用 `dir="rtl"` 和 RTL 布局
- 所有页面共享 `styles.css` 和 `script.js`
- 语言子目录页面使用相对路径引用根目录资源：`../styles.css`、`../script.js`
- Google Analytics ID: `G-JLQSBWR8ZF`
- App Store 链接包含 campaign 参数：`ct=portal`

## CSS 样式系统

```css
:root {
    --primary-color: #007aff;     /* Apple 蓝 */
    --text-color: #333;
    --gray-light: #f5f5f7;
    --gray-dark: #6e6e73;
    --gradient-start: #f0f7ff;    /* 新功能区块渐变起点 */
    --gradient-end: #e8f4f8;      /* 新功能区块渐变终点 */
}
```

### 特殊样式类

| 类名 | 用途 |
|------|------|
| `.new-feature` | 新功能区块，渐变背景 |
| `.new-badge` | 渐变标签 (NEW/新功能/ميزة جديدة) |
| `.highlight-text` | 强调文案，主色调 |
| `.privacy-note` | 隐私提示卡片，带锁图标 |
| `.carousel-container` | 图片容器，hover 上浮动画 |
| `.footer-links` | Footer 链接样式 |

## Preview

```bash
npx serve .
# 或
python -m http.server 8000
```

## Deployment

推送到 GitHub 后自动部署到 `https://qrcodesnap.github.io/`