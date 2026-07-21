# 📖 RedWX

 <p align="center">
   <img src="docs/logo.svg" alt="RedWX" width="120">
 </p>

 > _微信读书桌面客户端，基于 Tauri 二次开发。_

 [![版本](https://img.shields.io/badge/版本-v0.2.0-blue)](CHANGELOG.md)
 [![许可证](https://img.shields.io/badge/许可证-MIT-lightgrey)](LICENSE)
[![平台](https://badgen.net/badge/平台/Windows%2010%2F11/green)](https://github.com/JiaHuiRed/RedWX)
 [![Tauri](https://img.shields.io/badge/Tauri-2.x-ffc131)](https://tauri.app)
 [![Rust](https://img.shields.io/badge/Rust-1.85+-ce422b)](https://rust-lang.org)

[English](README.en.md) | **简体中文**

---

## ✨ 这是什么？

微信读书网页版的桌面客户端，将 weread.qq.com 封装为原生窗口应用。保留网页全部阅读功能，同时提供交通灯窗口控制、版本标签、自定义拖拽区域等桌面端体验优化。

---

## 🚀 为什么有它？

浏览器标签页里读书容易误关、窗口管理混乱，且微信读书网页版缺少原生客户端的窗口控制体验。RedWX 用 Tauri 将其打包为独立桌面应用，体积极小、启动快速，且完全基于官方网页版，功能同步更新。

---

## ⌨️ 快速开始

需要 Rust `>=1.85` 和 Node `>=22`，详见 [Tauri 文档](https://tauri.app/start/prerequisites/)。

```bash
git clone https://github.com/RedCode/RedWX.git
cd RedWX
pnpm install
pnpm run dev      # 本地开发
pnpm run build    # 打包应用
```

---

## 📋 快捷键

| 功能 | 快捷键 |
|------|--------|
| 返回上一页 | <kbd>Ctrl</kbd> + <kbd>←</kbd> |
| 前进下一页 | <kbd>Ctrl</kbd> + <kbd>→</kbd> |
| 刷新页面 | <kbd>Ctrl</kbd> + <kbd>r</kbd> |
| 缩小 | <kbd>Ctrl</kbd> + <kbd>-</kbd> |
| 放大 | <kbd>Ctrl</kbd> + <kbd>=</kbd> |
| 重置缩放 | <kbd>Ctrl</kbd> + <kbd>0</kbd> |

---

## 🛠 技术栈

| 层 | 技术 |
|----|------|
| 运行时 | Tauri 2.x (Rust) |
| 前端 | HTML / CSS / JavaScript |
| 构建 | pnpm + cargo |
| 平台 | Windows |

---

## 📋 更新日志

见 [CHANGELOG.md](CHANGELOG.md)。

---

## 💙 致谢

- 构建者：小宋
- 基于：[Pake](https://github.com/tw93/Pake) by [Tw93](https://github.com/tw93)
- 基于：[Tauri](https://tauri.app) (Rust)
- 许可证：MIT
