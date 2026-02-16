@echo off
chcp 65001 >nul
echo ======================================
echo     浮标 BUOY - 网站启动脚本
echo ======================================
echo.
echo 正在启动网站...
echo.

cd /d "%~dp0"
call npm run dev

pause
