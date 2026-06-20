[CmdletBinding()]
param(
  [switch]$DryRun,
  [switch]$Yes,
  [switch]$Force,
  [string]$TargetRoot
)

$ErrorActionPreference = 'Stop'

$repoRoot = Split-Path -Parent $PSScriptRoot
$source = Join-Path $repoRoot '.codex\skills\prompt-architect'
if (-not (Test-Path -LiteralPath $source)) {
  throw "Prompt Architect skill source not found: $source"
}

if (-not $TargetRoot -or $TargetRoot.Trim().Length -eq 0) {
  if ($env:AGENTS_HOME) {
    $TargetRoot = $env:AGENTS_HOME
  } elseif (Test-Path -LiteralPath (Join-Path $HOME '.agents')) {
    $TargetRoot = Join-Path $HOME '.agents'
  } elseif ($env:CODEX_HOME) {
    $TargetRoot = $env:CODEX_HOME
  } else {
    $TargetRoot = Join-Path $HOME '.codex'
  }
}

$target = Join-Path $TargetRoot 'skills\prompt-architect'
$backupRoot = Join-Path $TargetRoot 'skills\.backups'

Write-Host "Source: $source"
Write-Host "Target: $target"

if ($DryRun) {
  if (Test-Path -LiteralPath $target) {
    Write-Host 'Dry run: target exists; use -Force to update after backup.'
  } else {
    Write-Host 'Dry run: target will be created.'
  }
  $fileCount = (Get-ChildItem -LiteralPath $source -File -Recurse).Count
  Write-Host "Dry run: $fileCount files would be copied."
  exit 0
}

if (-not $Yes) {
  throw 'Refusing to install without -Yes. Run with -DryRun first, then use -Yes.'
}

if ((Test-Path -LiteralPath $target) -and -not $Force) {
  throw "Target already exists: $target. Re-run with -Force to back it up and update it."
}

if (Test-Path -LiteralPath $target) {
  New-Item -ItemType Directory -Path $backupRoot -Force | Out-Null
  $stamp = Get-Date -Format 'yyyyMMdd-HHmmss'
  $backup = Join-Path $backupRoot "prompt-architect-$stamp"
  Copy-Item -LiteralPath $target -Destination $backup -Recurse
  Write-Host "Backup: $backup"
}

Get-ChildItem -LiteralPath $source -File -Recurse | ForEach-Object {
  $rel = $_.FullName.Substring($source.Length).TrimStart('\')
  $destination = Join-Path $target $rel
  $destinationDir = Split-Path -Parent $destination
  New-Item -ItemType Directory -Path $destinationDir -Force | Out-Null
  Copy-Item -LiteralPath $_.FullName -Destination $destination -Force
}

$fileCount = (Get-ChildItem -LiteralPath $source -File -Recurse).Count
Write-Host "Installed prompt-architect skill with $fileCount files."