#!/bin/bash

echo "🚀 Starting AutoSyndicate™ Development Environment"
echo ""

# Colors
GREEN='\033[0;32m'
CYAN='\033[0;36m'
NC='\033[0m'

# Check if running from project root
if [ ! -f "package.json" ]; then
    echo "Error: Please run this script from the project root directory"
    exit 1
fi

echo "${CYAN}📦 Installing dependencies...${NC}"
cd apps/web && yarn install && cd ../..

echo ""
echo "${GREEN}✅ Dependencies installed${NC}"
echo ""
echo "${CYAN}🌐 Starting Next.js development server...${NC}"
echo "   Web App: http://localhost:3000"
echo ""
echo "To start the Python API separately, run:"
echo "   cd apps/api && poetry install && poetry run uvicorn main:app --reload"
echo ""

cd apps/web && yarn dev
