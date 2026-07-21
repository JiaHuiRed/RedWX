@echo off
setlocal enabledelayedexpansion

title RedWX build
echo.
echo ========================================
echo        RedWX build script
echo ========================================
echo.

set "PROJECT_DIR=%~dp0"
cd /d "%PROJECT_DIR%"

:: Check pnpm
where pnpm >nul 2>nul
if errorlevel 1 (
    echo [ERROR] pnpm not found. Install it first
    echo       Install: npm install -g pnpm
    pause
    exit /b 1
)

:: Check node_modules
if not exist "node_modules" (
    echo [1/3] Installing dependencies...
    set PNPM_IGNORE_SCRIPTS=false
    call pnpm install
    if errorlevel 1 (
        echo [ERROR] install failed
        pause
        exit /b 1
    )
) else (
    echo [1/3] Dependencies ready, skip
)

:: Build frontend
echo.
echo [2/3] Building frontend...
call pnpm run cli:build
if errorlevel 1 (
    echo [ERROR] frontend build failed
    pause
    exit /b 1
)

:: Close running RedWX
taskkill /F /IM red-wx.exe >nul 2>nul

:: Build Tauri app (exe only, skip installer bundling to avoid WiX timeout)
echo.
echo [3/3] Building Tauri app...

:: Limit Rust compiler parallelism to avoid pagefile exhaustion (1455)
set CARGO_BUILD_JOBS=4

call pnpm run build --no-bundle
if errorlevel 1 (
    echo [ERROR] Tauri build failed
    pause
    exit /b 1
)

echo.
echo ========================================
echo        Build done!
echo ========================================
echo.
echo Output: src-tauri\target\release\
echo.
pause
