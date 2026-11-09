# Script de Inicialização Git e Deploy para GitHub / Cloudflare Pages
# Projeto: Acervo Digital & Memorial Histórico José Adell y Fons (1868–1927)

$ErrorActionPreference = "Stop"
Set-Location -Path $PSScriptRoot

Write-Host "=== 1. Verificando instalacao do Git ===" -ForegroundColor Cyan
if (-not (Get-Command "git" -ErrorAction SilentlyContinue)) {
    Write-Host "Git nao encontrado no PATH. Instalando Git for Windows via Winget..." -ForegroundColor Yellow
    winget install --id Git.Git -e --source winget --accept-package-agreements --accept-source-agreements
    $env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User") + ";C:\Program Files\Git\cmd"
}

Write-Host "=== 2. Inicializando repositorio Git na branch 'main' ===" -ForegroundColor Cyan
git init -b main

Write-Host "=== 3. Configurando repositorio remoto (origin) ===" -ForegroundColor Cyan
$remoteUrl = "https://github.com/alergiahormonal-star/acervo-jose-adell.git"
$existingRemote = git remote | Where-Object { $_ -eq "origin" }
if ($existingRemote) {
    git remote set-url origin $remoteUrl
} else {
    git remote add origin $remoteUrl
}

Write-Host "=== 4. Adicionando todos os arquivos (incluindo public/sitemap.xml e public/robots.txt) ===" -ForegroundColor Cyan
git add .

Write-Host "=== 5. Realizando commit inicial ===" -ForegroundColor Cyan
git commit -m "feat: arquitetura completa Acervo Digital & Memorial Jose Adell y Fons (Cloudflare Pages ready)"

Write-Host "=== 6. Enviando (push) para origin/main no GitHub ===" -ForegroundColor Cyan
git push -u origin main

Write-Host "=== Concluido com sucesso! ===" -ForegroundColor Green
