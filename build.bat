@echo off
chcp 65001 >nul
setlocal enabledelayedexpansion

title RedWX 一键打包

echo.
echo ========================================
echo        RedWX 一键打包脚本
echo ========================================
echo.

set "PROJECT_DIR=%~dp0"
cd /d "%PROJECT_DIR%"

:: 检查 pnpm
where pnpm >nul 2>nul
if errorlevel 1 (
    echo [错误] 未找到 pnpm，请先安装 pnpm
    echo       安装命令: npm install -g pnpm
    pause
    exit /b 1
)

:: 检查 node_modules
if not exist "node_modules" (
    echo [1/3] 安装依赖中...
    call pnpm install
    if errorlevel 1 (
        echo [错误] 依赖安装失败
        pause
        exit /b 1
    )
) else (
    echo [1/3] 依赖已安装，跳过
)

:: 构建前端
echo.
echo [2/3] 构建前端资源...
call pnpm run cli:build
if errorlevel 1 (
    echo [错误] 前端构建失败
    pause
    exit /b 1
)

:: 构建 Tauri 应用
echo.
echo [3/3] 构建 Tauri 应用...
call "C:\BuildTools\VC\Auxiliary\Build\vcvars64.bat"
call pnpm run build
if errorlevel 1 (
    echo [错误] Tauri 构建失败
    pause
    exit /b 1
)

echo.
echo ========================================
echo        构建完成！
echo ========================================
echo.
echo 输出目录: src-tauri\target\release\bundle\nsis\
echo.
pause
