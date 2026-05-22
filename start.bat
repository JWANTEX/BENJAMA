@echo off
title Benjama - Baslat
PowerShell -NoProfile -ExecutionPolicy Bypass -Command ^
  "& { Set-Location '%~dp0'; & '%~dp0manage.ps1' }"
