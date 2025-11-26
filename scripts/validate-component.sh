#!/bin/bash
# Component Validation Script
# Runs all validation steps in the correct order
# Usage: ./scripts/validate-component.sh

set -e  # Exit on first error

echo ""
echo "🔍 Component Validation Pipeline"
echo "================================"
echo ""

# Step 1: Build (FIRST - detects TypeScript errors)
echo "📦 Step 1/3: Building..."
npm run build
echo "✅ Build passed"
echo ""

# Step 2: Lint (code quality)
echo "🧹 Step 2/3: Linting..."
npm run lint
echo "✅ Lint passed"
echo ""

# Step 3: Test (functionality)
echo "🧪 Step 3/3: Testing..."
npm test
echo "✅ Tests passed"
echo ""

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "✅ ALL VALIDATION PASSED!"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "Ready to commit and create PR 🚀"
echo ""
