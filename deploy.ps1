# PowerShell Deployment Script for Vibe Coding Tournament
# This script helps you deploy your project quickly

Write-Host "🏆 Vibe Coding Tournament - Deployment Helper" -ForegroundColor Cyan
Write-Host "=============================================" -ForegroundColor Cyan
Write-Host ""

# Check if we're in the right directory
if (-not (Test-Path "public\index.html")) {
    Write-Host "❌ Error: Please run this script from the vibe-competition directory" -ForegroundColor Red
    exit 1
}

Write-Host "Choose your deployment method:" -ForegroundColor Yellow
Write-Host "1. Test locally (open in browser)" -ForegroundColor White
Write-Host "2. Deploy to Netlify (requires Netlify CLI)" -ForegroundColor White
Write-Host "3. Deploy to Vercel (requires Vercel CLI)" -ForegroundColor White
Write-Host "4. Just open the public folder (for drag & drop)" -ForegroundColor White
Write-Host "5. Exit" -ForegroundColor White
Write-Host ""

$choice = Read-Host "Enter your choice (1-5)"

switch ($choice) {
    "1" {
        Write-Host "🌐 Opening in browser..." -ForegroundColor Green
        Start-Process "public\index.html"
        Write-Host "✅ Done! Check your browser." -ForegroundColor Green
    }
    "2" {
        Write-Host "🚀 Deploying to Netlify..." -ForegroundColor Green
        
        # Check if Netlify CLI is installed
        $netlifyInstalled = Get-Command netlify -ErrorAction SilentlyContinue
        
        if (-not $netlifyInstalled) {
            Write-Host "⚠️  Netlify CLI not found. Installing..." -ForegroundColor Yellow
            npm install -g netlify-cli
        }
        
        Write-Host "📦 Starting deployment..." -ForegroundColor Cyan
        netlify deploy --prod --dir=public
        
        Write-Host "✅ Deployment complete! Check the URL above." -ForegroundColor Green
    }
    "3" {
        Write-Host "🚀 Deploying to Vercel..." -ForegroundColor Green
        
        # Check if Vercel CLI is installed
        $vercelInstalled = Get-Command vercel -ErrorAction SilentlyContinue
        
        if (-not $vercelInstalled) {
            Write-Host "⚠️  Vercel CLI not found. Installing..." -ForegroundColor Yellow
            npm install -g vercel
        }
        
        Write-Host "📦 Starting deployment..." -ForegroundColor Cyan
        vercel --prod
        
        Write-Host "✅ Deployment complete! Check the URL above." -ForegroundColor Green
    }
    "4" {
        Write-Host "📁 Opening public folder..." -ForegroundColor Green
        Start-Process "public"
        Write-Host "✅ Drag the entire folder to:" -ForegroundColor Green
        Write-Host "   - Netlify Drop: https://app.netlify.com/drop" -ForegroundColor Cyan
        Write-Host "   - Or any other hosting service" -ForegroundColor Cyan
    }
    "5" {
        Write-Host "👋 Goodbye!" -ForegroundColor Cyan
        exit 0
    }
    default {
        Write-Host "❌ Invalid choice. Please run the script again." -ForegroundColor Red
        exit 1
    }
}

Write-Host ""
Write-Host "📋 Next Steps:" -ForegroundColor Yellow
Write-Host "1. Configure Firebase in src/firebase-config.js (if not done)" -ForegroundColor White
Write-Host "2. Test your registration form" -ForegroundColor White
Write-Host "3. Check the participants page" -ForegroundColor White
Write-Host "4. Verify no console errors (F12)" -ForegroundColor White
Write-Host ""
Write-Host "Good luck with the competition! 🎉" -ForegroundColor Green
