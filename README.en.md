<h4 align="right"><a href="README.md">简体中文</a> | <strong>English</strong></h4>
<p align="center">
    <img src="https://gw.alipayobjects.com/zos/k/fa/logo-modified.png" width="100">
</p>
<h1 align="center">RedWX</h1>
<p align="center"><em>WeRead desktop client, built with Tauri.</em></p>
<div align="center">
    <a href="https://img.shields.io/badge/版本-v0.1.1-blue" target="_blank">
    <img alt="version" src="https://img.shields.io/badge/version-v0.1.1-blue"></a>
    <a href="https://img.shields.io/badge/license-MIT-lightgrey" target="_blank">
    <img alt="license" src="https://img.shields.io/badge/license-MIT-lightgrey"></a>
    <a href="https://img.shields.io/badge/platform-Windows-0078d4" target="_blank">
    <img alt="platform" src="https://img.shields.io/badge/platform-Windows-0078d4"></a>
    <a href="https://tauri.app" target="_blank">
    <img alt="Tauri" src="https://img.shields.io/badge/Tauri-2.x-ffc131"></a>
    <a href="https://rust-lang.org" target="_blank">
    <img alt="Rust" src="https://img.shields.io/badge/Rust-1.85+-ce422b"></a>
</div>

---

## ✨ What is this?

A desktop client for WeRead (weread.qq.com), wrapped as a native window app with Tauri. It keeps the full web reading experience while adding desktop-native window controls, version label, custom drag regions, and other quality-of-life improvements.

---

## 🚀 Why does it exist?

Reading in a browser tab is easy to lose, window management is messy, and the WeRead web version lacks the native window control experience. RedWX packages it as a standalone desktop app — tiny binary, fast startup, and fully based on the official web version so features stay in sync.

---

## ⌨️ Getting Started

Requires Rust `>=1.85` and Node `>=22`. See [Tauri docs](https://tauri.app/start/prerequisites/) for details.

```bash
git clone https://github.com/RedCode/RedWX.git
cd RedWX
pnpm install
pnpm run dev      # local development
pnpm run build    # build the app
```

---

## 📋 Shortcuts

| Action | Shortcut |
|--------|----------|
| Back | <kbd>Ctrl</kbd> + <kbd>←</kbd> |
| Forward | <kbd>Ctrl</kbd> + <kbd>→</kbd> |
| Refresh | <kbd>Ctrl</kbd> + <kbd>r</kbd> |
| Zoom out | <kbd>Ctrl</kbd> + <kbd>-</kbd> |
| Zoom in | <kbd>Ctrl</kbd> + <kbd>=</kbd> |
| Reset zoom | <kbd>Ctrl</kbd> + <kbd>0</kbd> |

---

## 🛠 Tech Stack

| Layer | Tech |
|-------|------|
| Runtime | Tauri 2.x (Rust) |
| Frontend | HTML / CSS / JavaScript |
| Build | pnpm + cargo |
| Platform | Windows |

---

## 📋 Changelog

See [CHANGELOG.md](CHANGELOG.md).

---

## 💙 Credits

- Built by: Xiao Song
- Based on: [Pake](https://github.com/tw93/Pake) by [Tw93](https://github.com/tw93)
- Based on: [Tauri](https://tauri.app) (Rust)
- License: MIT
