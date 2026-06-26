# 更新日志

本文件记录 RedWX 的所有重要变更。

格式基于 [Keep a Changelog](https://keepachangelog.com/zh-CN/1.1.0/)。

---

## [0.0.3] - 2026-06-26

### 修复

- **Windows 编译环境修复**：安装 Visual Studio Build Tools + Windows 10 SDK，配置 `C:\BuildTools\VC\Auxiliary\Build\vcvars64.bat` MSVC 编译环境，解决 `cargo build --release` 链接失败问题（`build.bat`、`.cargo/config.toml`、`rust-toolchain.toml`）
- **Tauri 配置修复**：`tauri.conf.json` 中 `withGlobalTauri` 改为 `false`，修复全局 Tauri 冲突导致的启动失败

### 优化

- **Release 链接器配置**：移除自定义 `.cargo/config.toml` 中的 `rust-lld` 强制配置，改用系统 MSVC `link.exe`，解决 `export ordinal too large` 链接错误
- **一键打包脚本**：新增 `build.bat`，自动加载 VC 环境并执行 `pnpm run build`，简化 Windows 打包流程

---

## [0.0.2] - 2026-06-26

### 优化

- **Release 体积优化**：`lto = "thin"` → `lto = "fat"`，release 包体积进一步压缩（`src-tauri/Cargo.toml`）
- **注入脚本瘦身**：移除 `style.js` 中非微信读书相关的站点适配 CSS（Twitter / ChatGPT / YouTube / Lark / Excalidraw 等），体积减少约 36%（`src-tauri/src/inject/style.js`）
- **编译警告清理**：修复 `unused variable: enable_find` warning（`src-tauri/src/lib.rs`）

---

## [0.0.1] - 2026-05-30

### 新增

- **跨平台 macOS 风格窗口控制**：Windows 下 `--hide-title-bar` 移除原生标题栏，添加自定义红绿灯窗口控制按钮
- **窗口控制命令**：新增 `minimize_window`、`maximize_window`、`close_window` Tauri 命令
- **CLI 帮助更新**：`--hide-title-bar` 描述更新为跨平台支持
- **文档风格对齐**：中文 README 采用 RedCode 文档风格，新增 CHANGELOG.md
