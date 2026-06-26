# 🍎 Pake

<p align="center">
  <img src="https://gw.alipayobjects.com/zos/k/fa/logo-modified.png" width="100">
</p>

> **一键打包网页为轻量桌面应用，支持 macOS / Windows / Linux。**
> 作者：Red · 基于 [tw93/Pake](https://github.com/tw93/Pake) (Tauri) 二次开发。

[![版本](https://img.shields.io/badge/版本-v0.0.2-blue)](CHANGELOG.md)
[![许可证](https://img.shields.io/badge/许可证-MIT-lightgrey)](LICENSE)
[![平台](https://img.shields.io/badge/平台-macOS%20%7C%20Windows%20%7C%20Linux-0078d4)](https://github.com/tw93/Pake)
[![Tauri](https://img.shields.io/badge/Tauri-2.x-ffc131)](https://tauri.app)
[![Rust](https://img.shields.io/badge/Rust-1.85+-ce422b)](https://rust-lang.org)
[![npm](https://img.shields.io/npm/v/pake-cli?label=npm&color=cb3837)](https://www.npmjs.com/package/pake-cli)

[English](README.en.md) | **简体中文**

---

## ✨ 这是什么？

将任意网页打包成原生桌面应用的命令行工具。输出体积极小（~5MB），启动速度快，支持沉浸式窗口、快捷键、拖拽、样式定制等功能。

---

## 🧩 核心功能

- 🎐 **体积小巧** - 相比 Electron 小近 20 倍
- 🚀 **性能优异** - Rust Tauri 内核，内存占用低
- ⚡ **使用简单** - 一行命令完成打包
- 📦 **功能丰富** - 快捷键、沉浸式窗口、拖拽、样式定制、去广告
- 🍎 **跨平台 macOS 风格** - Windows 下也可启用红绿灯窗口控制按钮

---

## 🚀 快速开始

### 安装 CLI

```bash
pnpm install -g pake-cli
```

### 基础用法

```bash
# 自动获取网站图标
pake https://github.com --name GitHub

# 自定义选项
pake https://weekly.tw93.fun --name Weekly --width 1200 --height 800 --hide-title-bar

# Windows 下启用 macOS 风格窗口控制
pake https://github.com --name GitHub --hide-title-bar
```

> [!TIP]
> 首次打包需安装 Rust 环境，可能较慢，后续构建很快。

---

## 📦 常用包下载

更多应用见 [Release](https://github.com/tw93/Pake/releases)。

| 应用 | Mac | Windows | Linux |
|------|-----|---------|-------|
| WeRead | [下载](https://github.com/tw93/Pake/releases/latest/download/WeRead.dmg) | [下载](https://github.com/tw93/Pake/releases/latest/download/WeRead_x64.msi) | [下载](https://github.com/tw93/Pake/releases/latest/download/WeRead_x86_64.deb) |
| Twitter | [下载](https://github.com/tw93/Pake/releases/latest/download/Twitter.dmg) | [下载](https://github.com/tw93/Pake/releases/latest/download/Twitter_x64.msi) | [下载](https://github.com/tw93/Pake/releases/latest/download/Twitter_x86_64.deb) |
| ChatGPT | [下载](https://github.com/tw93/Pake/releases/latest/download/ChatGPT.dmg) | [下载](https://github.com/tw93/Pake/releases/latest/download/ChatGPT_x64.msi) | [下载](https://github.com/tw93/Pake/releases/latest/download/ChatGPT_x86_64.deb) |
| DeepSeek | [下载](https://github.com/tw93/Pake/releases/latest/download/DeepSeek.dmg) | [下载](https://github.com/tw93/Pake/releases/latest/download/DeepSeek_x64.msi) | [下载](https://github.com/tw93/Pake/releases/latest/download/DeepSeek_x86_64.deb) |
| YouTube | [下载](https://github.com/tw93/Pake/releases/latest/download/YouTube.dmg) | [下载](https://github.com/tw93/Pake/releases/latest/download/YouTube_x64.msi) | [下载](https://github.com/tw93/Pake/releases/latest/download/YouTube_x86_64.deb) |
| Grok | [下载](https://github.com/tw93/Pake/releases/latest/download/Grok.dmg) | [下载](https://github.com/tw93/Pake/releases/latest/download/Grok_x64.msi) | [下载](https://github.com/tw93/Pake/releases/latest/download/Grok_x86_64.deb) |

---

## ⌨️ 快捷键

| Mac | Windows/Linux | 功能 |
|-----|---------------|------|
| <kbd>⌘</kbd> + <kbd>[</kbd> | <kbd>Ctrl</kbd> + <kbd>←</kbd> | 返回上一页 |
| <kbd>⌘</kbd> + <kbd>]</kbd> | <kbd>Ctrl</kbd> + <kbd>→</kbd> | 前进下一页 |
| <kbd>⌘</kbd> + <kbd>r</kbd> | <kbd>Ctrl</kbd> + <kbd>r</kbd> | 刷新页面 |
| <kbd>⌘</kbd> + <kbd>-</kbd> | <kbd>Ctrl</kbd> + <kbd>-</kbd> | 缩小 |
| <kbd>⌘</kbd> + <kbd>=</kbd> | <kbd>Ctrl</kbd> + <kbd>=</kbd> | 放大 |
| <kbd>⌘</kbd> + <kbd>0</kbd> | <kbd>Ctrl</kbd> + <kbd>0</kbd> | 重置缩放 |

---

## 🛠 技术栈

| 层 | 技术 |
|----|------|
| 运行时 | Tauri 2.x (Rust) |
| 前端 | HTML / CSS / JavaScript |
| 打包 | pnpm + Rollup (CLI) |
| 平台 | macOS / Windows / Linux |

---

## 🛠 定制开发

需要 Rust `>=1.85` 和 Node `>=22`，详见 [Tauri 文档](https://tauri.app/start/prerequisites/)。

```bash
git clone https://github.com/tw93/Pake.git
cd Pake
pnpm i
pnpm run dev      # 本地开发
pnpm run build    # 打包应用
```

---

## 📋 文档

| 文档 | 说明 |
|------|------|
| [CLI 使用指南](docs/cli-usage_CN.md) | 完整命令行参数 |
| [在线构建](docs/github-actions-usage_CN.md) | GitHub Actions 构建 |
| [高级用法](docs/advanced-usage_CN.md) | 样式定制、功能增强 |
| [常见问题](docs/faq_CN.md) | 问题解决方案 |

---

## 📋 更新日志

见 [CHANGELOG.md](CHANGELOG.md)。

---

## 💙 致谢

- 原项目：[Pake](https://github.com/tw93/Pake) by [Tw93](https://github.com/tw93)
- 基于：[Tauri](https://tauri.app) (Rust)
- 许可证：MIT
