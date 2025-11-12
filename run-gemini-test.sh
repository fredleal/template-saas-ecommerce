#!/bin/bash

# Script para testar Gemini CLI
cd /Users/fredleal/template-saas-ecommerce

echo "📍 Current directory: $(pwd)"
echo "📄 Briefing file: $(ls briefing-test.txt 2>&1)"
echo ""
echo "🚀 Running Gemini with --yolo mode..."
echo ""

gemini --yolo "Read the file briefing-test.txt in the current directory. It contains instructions to create a test file at src/components/atoms/Checkbox/Checkbox.test.tsx. Follow those instructions and create the test file."

echo ""
echo "✅ Gemini execution completed"
echo "📁 Checking if file was created:"
ls -lh src/components/atoms/Checkbox/Checkbox.test.tsx 2>&1
