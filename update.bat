@echo off
title Benjama - Guncelle
PowerShell -NoProfile -ExecutionPolicy Bypass -Command ^
  "& { Set-Location '%~dp0'; Write-Host '[>>] Bagimliliklar guncelleniyor...' -ForegroundColor Cyan; if (Test-Path '.git') { Write-Host '[>>] git pull...' -ForegroundColor Cyan; git pull } else { Write-Host '[!!] .git bulunamadi, git pull atlandi.' -ForegroundColor Yellow }; bun install; if ($LASTEXITCODE -eq 0) { Write-Host '[OK] Guncelleme tamamlandi.' -ForegroundColor Green } else { Write-Host '[XX] bun install basarisiz.' -ForegroundColor Red }; Read-Host 'Cikis icin Enter' }"
