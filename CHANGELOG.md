# RedWX 更新日志

本文件记录 RedWX 的所有重要变更。

格式基于 [Keep a Changelog](https://keepachangelog.com/zh-CN/1.1.0/)。

---

## [0.1.1] - 2026-07-03

### 修复

- **构建环境修复**：
  - `rust-toolchain.toml` 中 `components` 字段替代默认组件导致 rustc/cargo 缺失，改 channel 为 `stable` 恢复完整工具链
  - 多核编译触发 pagefile 溢出（error 1455），`build.bat` 添加 `CARGO_BUILD_JOBS=4` 限流
  - USTC 镜像缓存损坏导致 195 个编译假错（semver/quote/strsim 等基础 crate），清空 registry 缓存后恢复镜像（`~/.cargo/config.toml`、`rust-toolchain.toml`、`build.bat`）
- **调试浮层残留**：`event.js` 的 `redwx-debug` div 默认可见且 `debug()` 写入 DOM，导致右下角持续显示 `getCurrentWindow: ok`，改为 `display:none` + 仅 `console.log`，消除运行时视觉干扰（`src-tauri/src/inject/event.js`）

### 变更

- **应用图标替换**：将 Windows 打包图标从 `weekly_*.ico` 切换为 📖 书本 emoji 生成的 `book_256.ico` / `book_32.ico`，更新 `tauri.windows.conf.json` 的 icon 与 resources 字段（`src-tauri/tauri.windows.conf.json`、`src-tauri/png/book_*.ico`）

---

## [0.1.0] - 2026-06-27

### 重构

- **Windows-only 重构**：移除所有 macOS/Linux 平台代码和配置文件，统一为 Windows 单一平台（`src-tauri/src/app/window.rs`、`src-tauri/src/app/config.rs`、`src-tauri/src/app/setup.rs`、`src-tauri/src/lib.rs`）
- **配置结构简化**：`PlatformSpecific<T>` 扁平成直接字段，`pake.json` 移除 `macos`/`linux` 分支，`user_agent` 和 `system_tray` 改为单值（`src-tauri/src/app/config.rs`、`src-tauri/pake.json`）
- **平台分支清理**：移除 `window.rs` 中 macOS title bar / Linux fullscreen / proxy 分支，统一 Windows browser args 和 scale-factor-aware 窗口尺寸（`src-tauri/src/app/window.rs`）
- **冗余文件清理**：移除 `src/app/menu.rs`、`src-tauri/tauri.linux.conf.json`、`src-tauri/tauri.macos.conf.json`、`src-tauri/Info.plist`、`src-tauri/entitlements.plist`、`tests/unit/new-window-macos.test.js`

### 修复

- **交通灯按钮无响应**：`tauri.conf.json` 中 `withGlobalTauri` 误改为 `false` 导致 `window.__TAURI__` 未注入，恢复为 `true` 后交通灯关闭/最小化/最大化恢复正常（`src-tauri/tauri.conf.json`）
- **窗口无法拖拽**：`style.js` 的样式注入逻辑包在 `DOMContentLoaded` 内，若脚本执行时 DOM 已就绪则不会触发，重构为 `injectPakeStyles()` + `document.readyState` 判断，确保拖拽区域和交通灯按钮始终注入（`src-tauri/src/inject/style.js`）
- **窗口控制 API 空指针崩溃**：`event.js` 中 `appWindow` 未判空直接调用 `startDragging()` 等，触发 `TypeError: Cannot read properties of null`，补全空值保护（`src-tauri/src/inject/event.js`）
- **调试 alert 残留阻断执行**：移除 `event.js` 中所有调试 `alert()`，避免弹窗阻断事件循环（`src-tauri/src/inject/event.js`）

### 新增

- **版本号显示**：交通灯右侧新增 `v0.1.0` 版本标签，来源 `window.pakeConfig.version`（`src-tauri/src/inject/style.js`）

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
