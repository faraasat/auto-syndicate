# AutoSyndicate™ Quick Start Guide

## 🚀 Getting Started

### Option 1: Quick Start (Web App Only)

```bash
# Make the dev script executable
chmod +x dev.sh

# Run the development server
./dev.sh
```

This will:
1. Install web app dependencies
2. Start Next.js on http://localhost:3000

### Option 2: Full Stack (Web + Python API)

**Terminal 1 - Web App:**
```bash
cd apps/web
yarn install
yarn dev
```

**Terminal 2 - Python API:**
```bash
cd apps/api
poetry install
poetry run uvicorn main:app --reload
```

The Python API will be available at http://localhost:8000

## 📋 What's Included

### Web Application (`apps/web`)
- ✅ Next.js 15 with React 19
- ✅ TypeScript
- ✅ Tailwind CSS with Web3/NFT/Sci-fi theme
- ✅ Homepage with features showcase
- ✅ Login page
- ✅ Dashboard with portfolio overview
- ✅ Reusable UI components (Button, Input, Card)
- ✅ API routes for Python integration

### Python API (`apps/api`)
- ✅ FastAPI microservice
- ✅ Capital allocation engine
- ✅ Document parsing endpoint
- ✅ Risk assessment API
- ✅ Covenant monitoring
- ✅ ESG analysis
- ✅ Ready for AI integrations (GroqCloud, Gemini, CrewAI)

### Database (`packages/database`)
- ✅ Prisma schema with complete data model
- ✅ User & authentication
- ✅ Loans & documents
- ✅ Allocations
- ✅ Covenants
- ✅ Secondary market
- ✅ ESG tracking

## 🎨 Pages Available

- **/** - Homepage with hero section and features
- **/login** - Authentication page
- **/dashboard** - Portfolio dashboard
- **/features** - Features overview (to be created)
- **/marketplace** - Loan marketplace (to be created)
- **/about** - About page (to be created)
- **/pricing** - Pricing page (to be created)
- **/contact** - Contact page (to be created)

## 🔧 Environment Setup

### Web App (.env.local)
```bash
DATABASE_URL="file:../../packages/database/prisma/dev.db"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key"
PYTHON_API_URL="http://localhost:8000"
GROQ_API_KEY="your-groq-key"
GOOGLE_AI_API_KEY="your-gemini-key"
```

### Python API (.env)
```bash
GROQ_API_KEY=your_groq_api_key_here
GOOGLE_AI_API_KEY=your_google_ai_api_key_here
```

## 🎯 Next Steps

1. **Run the web app** - See the UI in action
2. **Test API endpoints** - Visit http://localhost:8000/docs
3. **Add AI API keys** - Enable AI features
4. **Setup database** - Configure SQLite
5. **Customize theme** - Adjust colors in tailwind.config.ts

## 📚 Technology Stack

- **Frontend**: Next.js 15, React 19, TypeScript, Tailwind CSS
- **Backend**: Python FastAPI, LangChain, CrewAI
- **AI**: GroqCloud (Llama 3.2), Google Gemini
- **Database**: SQLite + Prisma ORM
- **Theme**: Web3/NFT/Sci-fi inspired design

## 🎥 For Hackathon Demo

The application is ready to showcase:
- Modern, eye-catching UI with Web3 theme
- AI-powered features (ready for integration)
- Complete data model
- Working API structure
- Professional documentation

Focus areas for demo video:
1. Show the homepage with animated elements
2. Navigate through dashboard
3. Highlight AI features (allocation engine)
4. Show the modern, futuristic design
5. Explain the technology stack

---

**Built for LMA EDGE Hackathon 2025**
