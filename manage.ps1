# ============================================================
#  Benjama ARK Website — Proje Yöneticisi
# ============================================================
param([switch]$StopOnly)

$Host.UI.RawUI.WindowTitle = "Benjama Manager"
$ProjectRoot  = $PSScriptRoot
$PidFile      = Join-Path $ProjectRoot ".dev.pid"
$LogFile      = Join-Path $ProjectRoot ".dev.log"
$ConfigFile   = Join-Path $ProjectRoot ".manager.cfg"
$DefaultPort  = 3000

# ── Config okuma/yazma ──────────────────────────────────────
function Get-Port {
    if (Test-Path $ConfigFile) {
        $val = Get-Content $ConfigFile | Where-Object { $_ -match '^PORT=' } | Select-Object -First 1
        if ($val -match '^PORT=(\d+)$') { return [int]$Matches[1] }
    }
    return $DefaultPort
}

function Set-Port ($port) {
    $lines = @()
    if (Test-Path $ConfigFile) {
        $lines = Get-Content $ConfigFile | Where-Object { $_ -notmatch '^PORT=' }
    }
    $lines += "PORT=$port"
    $lines | Set-Content $ConfigFile -Force
}

# ── Port kullanımda mı? ──────────────────────────────────────
function Test-PortInUse ($port) {
    $conn = [System.Net.Sockets.TcpClient]::new()
    try {
        $conn.Connect("127.0.0.1", $port)
        $conn.Close()
        return $true
    } catch {
        return $false
    }
}

# ── Boş port bul ────────────────────────────────────────────
function Find-FreePort ($startPort) {
    $p = $startPort
    while (Test-PortInUse $p) { $p++ }
    return $p
}

# ── Renk yardımcıları ───────────────────────────────────────
function Write-Header {
    Clear-Host
    Write-Host ""
    Write-Host "  ╔══════════════════════════════════════════╗" -ForegroundColor Cyan
    Write-Host "  ║       BENJAMA ARK WEBSITE MANAGER        ║" -ForegroundColor Cyan
    Write-Host "  ╚══════════════════════════════════════════╝" -ForegroundColor Cyan
    Write-Host ""
}

function Write-Ok   ($msg) { Write-Host "  [OK] $msg"    -ForegroundColor Green  }
function Write-Info ($msg) { Write-Host "  [>>] $msg"    -ForegroundColor Cyan   }
function Write-Warn ($msg) { Write-Host "  [!!] $msg"    -ForegroundColor Yellow }
function Write-Err  ($msg) { Write-Host "  [XX] $msg"    -ForegroundColor Red    }

# ── Bun kontrolü / kurulumu ─────────────────────────────────
function Ensure-Bun {
    if (Get-Command bun -ErrorAction SilentlyContinue) {
        $v = bun --version 2>&1
        Write-Ok "Bun $v bulundu."
        return $true
    }

    Write-Warn "Bun bulunamadı. Kuruluyor..."
    try {
        irm bun.sh/install.ps1 | iex
    } catch {
        Write-Err "Bun kurulumu başarısız: $_"
        return $false
    }

    # PATH yenileme (aynı oturum)
    $env:PATH = [System.Environment]::GetEnvironmentVariable("PATH","User") +
                ";" + [System.Environment]::GetEnvironmentVariable("PATH","Machine")

    if (Get-Command bun -ErrorAction SilentlyContinue) {
        Write-Ok "Bun kuruldu."
        return $true
    }

    Write-Err "Bun kurulduktan sonra terminali kapatıp tekrar açın, ardından manage.ps1'i yeniden çalıştırın."
    return $false
}

# ── Bağımlılık kurulumu ─────────────────────────────────────
function Install-Deps {
    Write-Header
    Write-Info "Bağımlılıklar kuruluyor (bun install)..."
    Set-Location $ProjectRoot
    bun install
    if ($LASTEXITCODE -eq 0) {
        Write-Ok "Bağımlılıklar kuruldu."
    } else {
        Write-Err "bun install başarısız oldu (çıkış kodu: $LASTEXITCODE)."
    }
    Pause
}

# ── Geliştirme sunucusu başlat ──────────────────────────────
function Start-Dev {
    Write-Header

    if (Test-Path $PidFile) {
        $existingPid = Get-Content $PidFile -ErrorAction SilentlyContinue
        $proc = Get-Process -Id $existingPid -ErrorAction SilentlyContinue
        if ($proc) {
            Write-Warn "Sunucu zaten çalışıyor (PID: $existingPid)."
            Pause; return
        }
        Remove-Item $PidFile -Force
    }

    if (-not (Test-Path (Join-Path $ProjectRoot "node_modules"))) {
        Write-Warn "node_modules bulunamadı. Önce bağımlılıklar kuruluyor..."
        Set-Location $ProjectRoot
        bun install
    }

    $port = Get-Port

    # Port kullanımdaysa otomatik alternatif öner
    if (Test-PortInUse $port) {
        $free = Find-FreePort ($port + 1)
        Write-Warn "Port $port kullanımda!"
        Write-Host "  Seçenekler:"
        Write-Host "    [1] Boş port $free kullan"
        Write-Host "    [2] Farklı port gir"
        Write-Host "    [3] İptal"
        $ans = Read-Host "  Seçiminiz"
        switch ($ans) {
            "1" { $port = $free; Set-Port $port; Write-Ok "Port $port olarak güncellendi." }
            "2" {
                $custom = Read-Host "  Yeni port numarası"
                if ($custom -match '^\d+$' -and [int]$custom -gt 0 -and [int]$custom -lt 65536) {
                    $port = [int]$custom
                    if (Test-PortInUse $port) {
                        Write-Err "Port $port de kullanımda. Başlatma iptal edildi."
                        Pause; return
                    }
                    Set-Port $port
                    Write-Ok "Port $port olarak güncellendi."
                } else {
                    Write-Err "Geçersiz port."; Pause; return
                }
            }
            default { Write-Warn "İptal edildi."; Pause; return }
        }
    }

    Write-Info "Geliştirme sunucusu başlatılıyor (port: $port)..."
    Set-Location $ProjectRoot

    $env:PORT = $port
    $proc = Start-Process -FilePath "bun" `
                          -ArgumentList "run dev --port $port" `
                          -WorkingDirectory $ProjectRoot `
                          -RedirectStandardOutput $LogFile `
                          -RedirectStandardError  "$LogFile.err" `
                          -PassThru `
                          -WindowStyle Hidden

    $proc.Id | Out-File $PidFile -Force
    Write-Ok "Sunucu başlatıldı (PID: $($proc.Id))"
    Write-Info "Adres : http://localhost:$port"
    Write-Info "Log   : $LogFile"
    Write-Host ""
    Write-Host "  Tarayıcıda açmak için Enter'a basın..." -ForegroundColor DarkCyan
    $null = Read-Host
    Start-Process "http://localhost:$port"
}

# ── Port değiştir ────────────────────────────────────────────
function Change-Port {
    Write-Header
    $current = Get-Port
    Write-Info "Mevcut port: $current"
    Write-Host ""

    $input = Read-Host "  Yeni port numarası (boş bırakırsan $DefaultPort kullanılır)"

    if ([string]::IsNullOrWhiteSpace($input)) {
        Set-Port $DefaultPort
        Write-Ok "Port $DefaultPort olarak sıfırlandı."
        Pause; return
    }

    if ($input -notmatch '^\d+$' -or [int]$input -le 0 -or [int]$input -ge 65536) {
        Write-Err "Geçersiz port numarası (1-65535 arası olmalı)."
        Pause; return
    }

    $newPort = [int]$input
    if (Test-PortInUse $newPort) {
        Write-Warn "Port $newPort şu an kullanımda."
        $free = Find-FreePort ($newPort + 1)
        Write-Info "En yakın boş port: $free"
    }

    Set-Port $newPort
    Write-Ok "Port $newPort olarak kaydedildi."
    Pause
}

# ── Tüm process ağacını öldür (PID + child'lar) ─────────────
function Kill-Tree ($rootPid) {
    # Önce child process'leri topla (recursive)
    $children = Get-CimInstance Win32_Process |
                Where-Object { $_.ParentProcessId -eq $rootPid }
    foreach ($child in $children) { Kill-Tree $child.ProcessId }
    # Sonra kendisini öldür
    $p = Get-Process -Id $rootPid -ErrorAction SilentlyContinue
    if ($p) {
        Stop-Process -Id $rootPid -Force -ErrorAction SilentlyContinue
    }
}

# ── Portu kullanan process'i bul ve öldür ───────────────────
function Kill-ByPort ($port) {
    $conns = Get-NetTCPConnection -LocalPort $port -ErrorAction SilentlyContinue
    $pids  = $conns | Select-Object -ExpandProperty OwningProcess | Sort-Object -Unique | Where-Object { $_ -gt 0 }

    $killed = 0
    foreach ($id in $pids) {
        $p = Get-Process -Id $id -ErrorAction SilentlyContinue
        if ($p) {
            Kill-Tree $id
            Write-Ok "Port $port sahibi process durduruldu (PID: $id / $($p.Name))."
            $killed++
        }
    }
    return $killed
}

# ── Sunucuyu durdur ─────────────────────────────────────────
function Stop-Dev {
    Write-Header
    $port    = Get-Port
    $stopped = 0

    # 1) PID dosyasından process ağacını öldür
    if (Test-Path $PidFile) {
        $savedPid = Get-Content $PidFile -ErrorAction SilentlyContinue
        if ($savedPid -match '^\d+$') {
            Write-Info "Process ağacı temizleniyor (PID: $savedPid)..."
            Kill-Tree ([int]$savedPid)
            Write-Ok "Process ağacı durduruldu (PID: $savedPid)."
            $stopped++
        }
        Remove-Item $PidFile -Force -ErrorAction SilentlyContinue
    } else {
        Write-Warn "PID dosyası bulunamadı (.dev.pid)."
    }

    # 2) Portu hâlâ kullanan process varsa da öldür
    if (Test-PortInUse $port) {
        Write-Warn "Port $port hâlâ kullanımda, zorunlu temizleme yapılıyor..."
        $k = Kill-ByPort $port
        if ($k -gt 0) { $stopped += $k }
        else { Write-Err "Port $port 'i kullanan process öldürülemedi (yönetici yetkisi gerekebilir)." }
    }

    # 3) Kaçan bun/node process'lerini de kontrol et
    $orphans = Get-Process -Name "bun","node","vite" -ErrorAction SilentlyContinue |
               Where-Object { $_.Path -like "*benjama*" -or $_.CommandLine -like "*benjama*" }
    foreach ($o in $orphans) {
        Stop-Process -Id $o.Id -Force -ErrorAction SilentlyContinue
        Write-Ok "Yetim process durduruldu: $($o.Name) (PID: $($o.Id))."
        $stopped++
    }

    if ($stopped -gt 0) { Write-Ok "Sunucu tamamen durduruldu." }
    else                 { Write-Warn "Zaten çalışan bir şey bulunamadı." }
    Pause
}

# ── Production build ────────────────────────────────────────
function Build-Prod {
    Write-Header
    Write-Info "Production build başlatılıyor (bun run build)..."
    Set-Location $ProjectRoot
    bun run build
    if ($LASTEXITCODE -eq 0) {
        Write-Ok "Build tamamlandı. Çıktı: dist/"
    } else {
        Write-Err "Build başarısız oldu (çıkış kodu: $LASTEXITCODE)."
    }
    Pause
}

# ── Preview (build sonrası) ─────────────────────────────────
function Start-Preview {
    Write-Header
    Write-Info "Preview sunucusu başlatılıyor (bun run preview)..."
    Set-Location $ProjectRoot
    bun run preview
}

# ── Güncelle (pull + install) ───────────────────────────────
function Update-Project {
    Write-Header
    Write-Info "Bağımlılıklar güncelleniyor..."
    Set-Location $ProjectRoot

    # Git mevcutsa pull yap
    if (Test-Path (Join-Path $ProjectRoot ".git")) {
        Write-Info "git pull çalıştırılıyor..."
        git pull
    } else {
        Write-Warn ".git dizini bulunamadı; git pull atlandı."
    }

    Write-Info "bun install çalıştırılıyor..."
    bun install
    if ($LASTEXITCODE -eq 0) {
        Write-Ok "Güncelleme tamamlandı."
    } else {
        Write-Err "bun install başarısız oldu."
    }
    Pause
}

# ── Durum göster ────────────────────────────────────────────
function Show-Status {
    Write-Header
    Write-Info "Proje Dizini : $ProjectRoot"

    # Bun
    $bunVer = bun --version 2>&1
    if ($LASTEXITCODE -eq 0) { Write-Ok "Bun          : $bunVer" }
    else                      { Write-Err "Bun          : Bulunamadı" }

    # node_modules
    if (Test-Path (Join-Path $ProjectRoot "node_modules")) { Write-Ok "node_modules : Mevcut" }
    else { Write-Warn "node_modules : Kurulu değil" }

    # Port durumu
    $port = Get-Port
    if (Test-PortInUse $port) {
        Write-Warn "Port         : $port (KULLANIMDA)"
        $free = Find-FreePort ($port + 1)
        Write-Info "Boş port     : $free"
    } else {
        Write-Ok "Port         : $port (boş)"
    }

    # Sunucu durumu
    if (Test-Path $PidFile) {
        $savedPid = Get-Content $PidFile -ErrorAction SilentlyContinue
        $proc = Get-Process -Id $savedPid -ErrorAction SilentlyContinue
        if ($proc) { Write-Ok "Dev Sunucu   : Çalışıyor (PID: $savedPid) → http://localhost:$port" }
        else        { Write-Warn "Dev Sunucu   : Kayıt var ama process yok — durumu temizle" }
    } else {
        Write-Warn "Dev Sunucu   : Durduruldu"
    }

    # Log boyutu
    if (Test-Path $LogFile) {
        $size = (Get-Item $LogFile).Length
        Write-Info "Log Boyutu   : $([math]::Round($size/1KB,1)) KB  ($LogFile)"
    }

    Write-Host ""
    Pause
}

# ── Log görüntüle ────────────────────────────────────────────
function Show-Log {
    Write-Header
    if (Test-Path $LogFile) {
        Write-Info "Son 40 satır ($LogFile):"
        Write-Host ""
        Get-Content $LogFile -Tail 40
    } else {
        Write-Warn "Log dosyası bulunamadı."
    }
    Write-Host ""
    Pause
}

# ════════════════════════════════════════════════════════════
#  ANA MENÜ
# ════════════════════════════════════════════════════════════

# stop.bat'tan doğrudan çağrıldıysa sadece durdur
if ($StopOnly) {
    Write-Header
    Stop-Dev
    exit 0
}

if (-not (Ensure-Bun)) { exit 1 }

while ($true) {
    Write-Header

    $port = Get-Port
    $portStatus = if (Test-PortInUse $port) { "(KULLANIMDA!)" } else { "(boş)" }
    $portColor  = if ($portStatus -match "KULLANIMDA") { "Yellow" } else { "DarkGray" }

    $statusLine = if (Test-Path $PidFile) {
        $p = Get-Process -Id (Get-Content $PidFile -EA SilentlyContinue) -EA SilentlyContinue
        if ($p) { "  Sunucu: ÇALIŞIYOR (PID $($p.Id)) → http://localhost:$port" } else { "  Sunucu: DURDURULDU" }
    } else { "  Sunucu: DURDURULDU" }

    Write-Host $statusLine -ForegroundColor $(if ($statusLine -match "ÇALIŞIYOR") {"Green"} else {"DarkGray"})
    Write-Host "  Port  : $port $portStatus" -ForegroundColor $portColor
    Write-Host ""
    Write-Host "  [1] Geliştirme sunucusunu başlat"  -ForegroundColor White
    Write-Host "  [2] Sunucuyu durdur"                -ForegroundColor White
    Write-Host "  [3] Bağımlılıkları kur / güncelle"  -ForegroundColor White
    Write-Host "  [4] Production build"               -ForegroundColor White
    Write-Host "  [5] Preview (build sonrası test)"   -ForegroundColor White
    Write-Host "  [6] Proje durumu"                   -ForegroundColor White
    Write-Host "  [7] Logları görüntüle"              -ForegroundColor White
    Write-Host "  [8] Port değiştir (mevcut: $port)"  -ForegroundColor White
    Write-Host "  [0] Çıkış"                          -ForegroundColor DarkGray
    Write-Host ""

    $choice = Read-Host "  Seçiminiz"

    switch ($choice) {
        "1" { Start-Dev }
        "2" { Stop-Dev }
        "3" { Install-Deps }
        "4" { Build-Prod }
        "5" { Start-Preview }
        "6" { Show-Status }
        "7" { Show-Log }
        "8" { Change-Port }
        "0" { Write-Host "  Çıkılıyor..." -ForegroundColor DarkGray; exit 0 }
        default { Write-Warn "Geçersiz seçim."; Start-Sleep 1 }
    }
}
