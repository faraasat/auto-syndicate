# Project Overview

**AutoSyndicate™** is an AI-powered platform transforming institutional loan markets from document-centric processes to intelligent, data-driven capital allocation and monitoring.

## 🏗️ Architecture

### Frontend (apps/web)
- **Framework**: Next.js 15 with React 19
- **Styling**: Tailwind CSS with Web3/NFT/Sci-fi theme
- **State**: Client-side state management
- **API Integration**: Fetch API to Python microservice

### Backend (apps/api)
- **Framework**: FastAPI (Python 3.12+)
- **AI/ML**: CrewAI, LangChain, GroqCloud, Gemini
- **ML Models**: scikit-learn for capital allocation
- **Agents**: Multi-agent system for loan processing

### Database (packages/database)
- **ORM**: Prisma
- **Databases**: PostgreSQL (primary), MongoDB (documents)
- **Schema**: Complete loan marketplace data model

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ (recommend 20+)
- Python 3.12+
- Yarn Berry
- Poetry (for Python dependencies)

### Quick Start

```bash
# Web Application
cd apps/web
yarn install
yarn dev

# Python API (in separate terminal)
cd apps/api
poetry install
poetry run uvicorn main:app --reload
```

Visit:
- Web App: http://localhost:3000
- API Docs: http://localhost:8000/docs

## 📋 Features Implemented

### ✅ Web Application
- Homepage with hero section and features
- Login & Signup pages
- Dashboard with portfolio overview
- Marketplace with loan listings
- Features overview page
- About page with technology details
- Pricing page with plans
- Contact page with form
- Navigation component
- Reusable UI components (Button, Input, Card)
- Web3/NFT/Sci-fi theme with animations

### ✅ Python API
- FastAPI server with CORS
- Capital allocation endpoint (`/api/allocate`)
- Document parsing endpoint (`/api/parse-document`)
- Risk assessment endpoint (`/api/risk-assessment`)
- Covenant prediction endpoint (`/api/covenant-predict`)
- ESG analysis endpoint (`/api/esg-analysis`)
- Health check endpoints
- AI agent implementations (CrewAI structure)

### ✅ Database
- Complete Prisma schema
- User authentication models
- Loan request models
- Lender profile models
- Allocation models
- Covenant monitoring models
- Secondary market models
- ESG tracking models
- Activity logging

## 🎯 AI Agents

### Parser Agent
- Extracts structured data from loan documents
- Uses Gemini 1.5 Pro for document understanding
- Supports multiple document formats

### Allocator Agent
- ML-driven capital allocation recommendations
- Matches loans with lender preferences
- Generates confidence scores and reasoning

### Monitor Agent
- Real-time covenant monitoring
- Breach prediction using time-series analysis
- Proactive alerting

### ESG Agent
- Sustainability metrics calculation
- UNEP FI alignment checking
- Carbon intensity tracking

### Explainer Agent
- Natural language explanations for AI decisions
- Tailored to different audiences
- Transparency and interpretability

## 🛠️ Technology Stack

**Frontend:**
- Next.js 15.1+
- React 19
- TypeScript 5.3+
- Tailwind CSS 4
- Framer Motion (animations)

**Backend:**
- Python 3.12+
- FastAPI 0.115+
- Pydantic 2.5+

**AI/ML:**
- GroqCloud (Llama 3.2, Mixtral 8x7B)
- Google Gemini 1.5 Pro
- CrewAI 0.80+
- AutoGen
- LangChain 0.3+
- LangGraph
- scikit-learn 1.5+

**Database:**
- PostgreSQL 16+ (Neon.tech recommended)
- Prisma ORM 5.8+
- MongoDB (optional)

**Infrastructure:**
- Yarn Berry 4.x (node-modules linker)
- Turborepo 2.x (monorepo)
- Docker (for Python API)
- Vercel (deployment)

## 📂 Project Structure

```
lma/
├── apps/
│   ├── web/              # Next.js frontend
│   │   ├── src/
│   │   │   ├── app/      # App Router pages
│   │   │   ├── components/  # Reusable components
│   │   │   └── lib/      # Utilities
│   │   └── package.json
│   └── api/              # Python FastAPI
│       ├── agents/       # AI agent implementations
│       ├── main.py       # FastAPI app
│       └── pyproject.toml
├── packages/
│   ├── database/         # Prisma schema
│   └── typescript-config/  # Shared TS config
├── docs/                 # Documentation
│   ├── technologies.md
│   └── mvp.md
├── README.md
├── QUICKSTART.md
└── package.json          # Root workspace config
```

## 🎨 Design System

### Colors
- **Neon Cyan**: Primary accent (#00F0FF)
- **Neon Purple**: Secondary accent (#A855F7)
- **Neon Pink**: Tertiary (#EC4899)
- **Neon Green**: Success/ESG (#10B981)

### Components
- Glass morphism effects
- Neon glow animations
- Cyber grid backgrounds
- Gradient text effects
- Hover transitions

## 🔐 Security

- Row-level security in PostgreSQL
- API key management via environment variables
- CORS configuration
- Input validation with Pydantic
- Type safety with TypeScript

## 📊 API Endpoints

### Health
- `GET /` - Service info
- `GET /health` - Health check

### AI Services
- `POST /api/allocate` - Capital allocation
- `POST /api/parse-document` - Document parsing
- `POST /api/risk-assessment` - Risk scoring
- `POST /api/covenant-predict` - Covenant monitoring
- `POST /api/esg-analysis` - ESG analysis

## 🚢 Deployment

### Vercel (Web App)
```bash
cd apps/web
vercel
```

### Docker (Python API)
```bash
cd apps/api
docker build -t autosyndicate-api .
docker run -p 8000:8000 autosyndicate-api
```

## 🎥 Demo Video Structure

1. **Opening** (0:00-0:30)
   - Show homepage with animations
   - Highlight Web3/NFT theme

2. **Features** (0:30-1:30)
   - Navigate through marketplace
   - Show loan listings with ESG scores
   - Demonstrate AI-powered features

3. **Dashboard** (1:30-2:30)
   - Portfolio overview
   - Real-time metrics
   - Quick actions

4. **AI Agents** (2:30-3:30)
   - Document parsing demo
   - Capital allocation engine
   - Covenant monitoring

5. **Technology** (3:30-4:00)
   - Tech stack overview
   - AI capabilities
   - Scalability

6. **Closing** (4:00-4:30)
   - Call to action
   - Contact information

## 🏆 LMA EDGE Hackathon Coverage

### ✅ Digital Loans
- Intelligent loan structuring
- AI-powered document parsing
- Structured data extraction

### ✅ Loan Documents
- Automated document generation
- Template management
- Version control

### ✅ Transparent Trading
- Secondary market platform
- Automated due diligence
- Price discovery

### ✅ Covenant Monitoring
- Real-time tracking
- Breach prediction
- Proactive alerts

### ✅ ESG Integration
- Sustainability scoring
- Carbon tracking
- Impact reporting

## 📝 Next Steps

1. **Add API Keys**: Configure AI service keys in `.env` files
2. **Setup Database**: Initialize PostgreSQL and run Prisma migrations
3. **Test Endpoints**: Use Swagger docs at http://localhost:8000/docs
4. **Customize Theme**: Adjust colors in `tailwind.config.ts`
5. **Deploy**: Push to Vercel/Railway for production

## 📄 License

Proprietary - Built for LMA EDGE Hackathon 2025

---

**Built with ❤️ using AI**
